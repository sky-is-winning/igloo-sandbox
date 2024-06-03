const io = require('socket.io-client')
const AES = require('crypto-js/aes')
const enc = require('crypto-js/enc-utf8')

const loginHost = 'https://login.cpplus.pw'
// const loginHost = "http://localhost:6111"
const loginServer = '/socket/'
const gameHost = 'https://blizzard.cpplus.pw'
// const gameHost = "http://localhost:6112"
const gameServer = '/socket/'

const passwords = 'password'
const users = []
for (let i = 1; i <= 290; i++) {
    users.push(`TestP${i}`)
}

let i = 0
let interval = setInterval(() => {
    createUserInstance(users[i], passwords)
    i++
    if (i >= users.length) clearInterval(interval)
}, 1000)

function createUserInstance(username, password) {
    let encryptionKeys = {}
    let loginKey = ''
    encryptionKeys['Login'] = {
        client: generatePrimaryClientKey(),
        server: generatePrimaryServerKey()
    }
    let socket = io.connect(loginHost, {path: `${loginServer}`, transports: ['websocket']})
    socket.once('connect', () => {
        //console.log(`Connected to ${loginServer}`)
        sendXml(socket, encryptionKeys, `<msg t='sys'><body action='verChk' r='0'><ver v='0.1.7-beta' /></body></msg>`)
        sendXml(socket, encryptionKeys, `<msg t='sys'><body action='login' r='0'><login z='w1'><nick><!${username}></nick><pword><!${password}></pword><saveToken><!false></saveToken></login></body></msg>`)
    })
    socket.on('message', (data) => {
        let message = AES.decrypt(data, encryptionKeys['Login'].server).toString(enc)
        let messageParts = message.split('%')
        if (messageParts[2] == 'l' && messageParts[3] == 't') {
            loginKey = messageParts[6]
        }
    })
    socket.on('disconnect', () => {
        //console.log(`Disconnected from ${loginServer}`)
        if (loginKey != '') {
            encryptionKeys['Game'] = {
                client: generatePrimaryClientKey(),
                server: generatePrimaryServerKey()
            }
            socket = io.connect(gameHost, {path: `${gameServer}`, transports: ['websocket']})
            socket.once('connect', () => {
                sendXt(socket, encryptionKeys, 'auth#g', [username, loginKey])
            })
            socket.on('message', (data) => {
                let message = AES.decrypt(data, encryptionKeys['Game'].server).toString(enc)
                //console.log(message)
                let messageParts = message.split('%')
                if (messageParts[2] == 'ga') {
                    encryptionKeys['Game'] = {
                        server: messageParts[3],
                        client: messageParts[4]
                    }
                    sendXt(socket, encryptionKeys, 'l#lp')
                } else if (messageParts[2] == 'lp') {
                    sendXt(socket, encryptionKeys, 'j#js')
                } else if (messageParts[2] == 'jr') {
                    console.log(`Joined room ${messageParts[3]}`)
                    let acceptableRooms = ['100', '300', '801', '802']
                    if (!acceptableRooms.includes(messageParts[3])) {
                        let randomRoom = acceptableRooms[Math.floor(Math.random() * acceptableRooms.length)]
                        sendXt(socket, encryptionKeys, 'j#jr', randomRoom)
                    } else {
                        sendXt(socket, encryptionKeys, 'u#sf', `true%26`)
                    }
                }
            })
            socket.on('disconnect', () => {
                //console.log(`Disconnected from ${gameServer}`)
            })
            socket.on('error', (error) => {
                console.error(error)
            })
            socket.on('connect_error', (error) => {
                console.error(error)
            })
        } else {
            console.log('Login failed')
        }
    })
    socket.on('error', (error) => {
        console.error(error)
    })
    socket.on('connect_error', (error) => {
        console.error(error)
    })
}

function sendXml(socket, encryptionKeys, xml) {
    let payload = AES.encrypt(xml, encryptionKeys['Login'].client).toString()
    socket.emit('message', payload)
}

function sendXt(socket, encryptionKeys, action, args = '') {
    if (typeof args == 'object') args = args.join('%')
    let payload = AES.encrypt(`%xt%s%${action}%${args}%`, encryptionKeys['Game'].client).toString()
    socket.emit('message', payload)
}

function generatePrimaryServerKey() {
    const key = generatePrimaryKey(3) + generatePrimaryKey(7) + '9yXruyv2L7PQzmAWHYQmcmNS'
    return key
}

function generatePrimaryClientKey() {
    const key = generatePrimaryKey(5) + generatePrimaryKey(11) + 'KSd7zZ9bCKgxBvPcPJXUBgHV'
    return key
}

function generatePrimaryKey(caeserOffset) {
    const now = new Date()

    const hours = now.getUTCHours()
    const date = now.getUTCDate()
    const day = now.getUTCDay()

    const keyNum = hours * date * day
    const keyHex = keyNum.toString(16)

    const key = caesarCipherEncryptHex(keyHex, caeserOffset)

    return key
}

function caesarCipherEncryptHex(text, key) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        let char = text[i]
        if (char.match(/[0-9a-f]/i)) {
            let code = parseInt(char, 16)
            code = (code + key) % 16
            char = code.toString(16)
        }
        result += char
    }
    return result
}
