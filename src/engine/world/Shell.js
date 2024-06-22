import BaseScene from '@scenes/base/BaseScene'

import RoomFactory from './room/RoomFactory'
import IglooFactory from './room/IglooFactory'

export default class Shell extends BaseScene {
    constructor(key) {
        super(key)

        this.client
        this.room

        this.secretFramesCache = {}

        this.itemsLoaded = []

        this.puffleCache = {}

        if (window.location.hostname == 'localhost') window.shell = this
    }

    get language() {
        for (let lang of ['en', 'es', 'pt']) {
            if (window.location.pathname.includes(lang)) {
                return lang
            }
        }
        return 'en'
    }

    get settings() {
        if (!localStorage.settings) {
            localStorage.settings = JSON.stringify({
                vq: 3,
                cf: 2,
                hi: false,
                hn: false,
                ho: false,
                mv: 0.7,
                sv: 0.7
            })
        }

        const updateSettings = (settings, property, value) => {
            const updatedSettings = {...settings, [property]: value}
            localStorage.settings = JSON.stringify(updatedSettings)
        }

        const settingsProxy = new Proxy(JSON.parse(localStorage.settings), {
            set: function (target, property, value) {
                updateSettings(target, property, value)
                return true
            }
        })

        return settingsProxy
    }

    set settings(settings) {
        localStorage.settings = JSON.stringify(settings)
    }

    get baseURL() {
        switch (window.location.hostname) {
            default:
                return `${window.location.origin}`
        }
    }

    create() {
        super.create()

        this.musicController = this.scene.get('MusicController')
        this.roomFactory = new RoomFactory(this)
        this.iglooFactory = new IglooFactory(this)
        this.soundStudioLoader = new Phaser.Loader.LoaderPlugin(this)

        const emit = this.events.emit.bind(this.events)
        this.events.emit = (event, ...args) => {
            emit(event, ...args)
            if (document.location.hostname == 'localhost') {
                if (['preupdate', 'update', 'postupdate', 'prerender', 'render'].includes(event)) return
                console.info(`[Shell] ${event}`, args)
            }
        }

        const defaultIgloo = `${1}%${[]}%${1}%${0}%${0}%${1}%${[]}`
        if (!localStorage.iglooData)
            localStorage.iglooData = JSON.stringify({
                currentIgloo: 0,
                igloos: [defaultIgloo, defaultIgloo, defaultIgloo, defaultIgloo]
            })

        let iglooData = JSON.parse(localStorage.iglooData)

        this.joinIgloo(iglooData.igloos[iglooData.currentIgloo].split('%'))
    }

    rejoinCurrentIgloo(){
        let iglooData = JSON.parse(localStorage.iglooData)
        this.joinIgloo(iglooData.igloos[iglooData.currentIgloo].split('%'))
    }

    setClient(args) {}

    joinRoom(id, users = null) {
        this.lastRoom = this.room ? this.room.id : 100
        if (!this.crumbs.scenes.rooms[id]) return this.airtower.sendXt('j#jr', 100) // Default to town if room will crash
        this.interface.showLoading()

        if (!this.room) {
            return this.createRoom(id, users)
        }

        this.room.events.once('shutdown', () => this.createRoom(id, users))
        this.room.stop()
    }

    createRoom(id, users) {
        this.room = this.roomFactory.createRoom(id)
    }

    joinIgloo(args) {
        this.interface.showLoading(this.getString('loading', 'igloo'))

        if (!this.room) {
            return this.createIgloo(args)
        }

        this.room.events.once('shutdown', () => this.createIgloo(args))
        this.room.stop()
    }

    createIgloo(args) {
        this.room = this.iglooFactory.createIgloo(args)
    }

    addPenguin(userInfo) {}

    removePenguin(id) {
        // If no room, try again in 0.1 seconds
        if (!this.room.removeWaiting)
            setTimeout(() => {
                this.removePenguin(id)
            }, 100)

        if (!this.room.isReady) {
            return this.room.removeWaiting(id)
        }

        this.room.removePenguin(id)
    }

    getRelationship(id) {
        if (id == this.client.id) return 'player'

        for (var x in this.mascots) {
            if (this.mascots[x].id == id) return 'mascot'
        }

        if (this.isFriend(id)) {
            return this.isOnline(id) ? 'online' : 'offline'
        }

        if (this.isIgnore(id)) return 'ignore'

        return 'none'
    }

    isFriend(id) {
        let friendsFlat = this.client.friends.map((friend) => parseInt(friend.id))
        return friendsFlat.includes(parseInt(id))
    }

    isIgnore(id) {
        let ignoresFlat = this.client.ignores.map((ignore) => parseInt(ignore.id))
        return ignoresFlat.includes(parseInt(id))
    }

    isOnline(id) {
        let friend = this.client.friends.find((obj) => parseInt(obj.id) == parseInt(id))
        return friend.online
    }

    getColor(id) {
        return this.crumbs.colors[id] || this.crumbs.colors[1]
    }

    arrayToObject(player, isClient = false) {
        let stringArray = player.split('|')

        stringArray = stringArray.map((arg) => {
            switch (arg) {
                case 'true':
                    return true
                case 'false':
                    return false
                case 'undefined':
                    return undefined
                case 'null':
                    return null
                case 'NaN':
                    return NaN
                default:
                    if (!isNaN(arg)) {
                        return parseInt(arg)
                    }
                    return arg
            }
        })

        let id = stringArray[0]
        let ua = stringArray.length >= 16 ? stringArray[17] : 1

        isClient = true

        let username, realUsername
        if (ua != 1) {
            username = 'P' + id
            realUsername = isClient || this.client.rank > 2 ? `${stringArray[1]}` : 'Unknown'
        } else {
            username = stringArray[1]
            realUsername = stringArray[1]
        }

        return {
            id: id,
            username: username,
            realUsername: realUsername,
            color: stringArray[2],
            head: stringArray[3],
            face: stringArray[4],
            neck: stringArray[5],
            body: stringArray[6],
            hand: stringArray[7],
            feet: stringArray[8],
            flag: stringArray[9],
            photo: stringArray[10],
            coins: stringArray[11],
            x: stringArray[12],
            y: stringArray[13],
            frame: stringArray[14],
            rank: stringArray[15],
            stealthMode: stringArray[16],
            username_approved: ua,
            username_rejected: stringArray[18],
            walking: stringArray[19],
            epfStatus: stringArray[20],
            joinTime: stringArray[21],
            medals: stringArray[22]
        }
    }

    get PST() {
        // PST = UTC - 8 hours
        return new Date(Date.now() - 1000 * 60 * 60 * 8)
    }

    getPSTDay() {
        return this.PST.getUTCDay()
    }

    getPSTHours() {
        return this.PST.getUTCHours()
    }

    getPSTMinutes() {
        return this.PST.getUTCMinutes()
    }

    getPSTSeconds() {
        return this.PST.getUTCSeconds()
    }

    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000)

        if (seconds < 5) {
            return 'Just now'
        } else if (seconds < 60) {
            return `${seconds} seconds ago`
        }

        const minutes = Math.floor(seconds / 60)

        if (minutes === 1) {
            return '1 minute ago'
        } else if (minutes < 60) {
            return `${minutes} minutes ago`
        }

        const hours = Math.floor(minutes / 60)

        if (hours === 1) {
            return '1 hour ago'
        } else if (hours < 24) {
            return `${hours} hours ago`
        }

        const days = Math.floor(hours / 24)

        if (days === 1) {
            return 'yesterday'
        } else if (days < 7) {
            return `${days} days ago`
        }

        const weeks = Math.floor(days / 7)

        if (weeks === 1) {
            return '1 week ago'
        } else if (weeks < 4) {
            return `${weeks} weeks ago`
        }

        const months = Math.floor(days / 30.44)

        if (months === 1) {
            return '1 month ago'
        } else if (months < 12) {
            return `${months} months ago`
        }

        const years = Math.floor(days / 365)

        if (years === 1) {
            return '1 year ago'
        }

        return `${years} years ago`
    }

    isNearPos(x, y) {
        if (this.client.penguin.x > x + 5) {
            return false
        }

        if (this.client.penguin.x < x - 5) {
            return false
        }

        if (this.client.penguin.y > y + 5) {
            return false
        }

        if (this.client.penguin.y < y - 5) {
            return false
        }

        return true
    }

    get rockhopper_visit() {
        return new Date('2050-01-01T00:00:00.000Z')
    }

    get rockhopper_leave() {
        return new Date('2000-01-01T00:00:00.000Z')
    }

    // SoundStudio Tracks

    addSSTrack(track) {
        if (shell.cache.json.entries.keys().includes(`soundstudio-${track.mode}-pack`)) return this.playbackSSTrack(track)

        this.soundStudioLoader.pack(`soundstudio-${track.mode}-pack`, `client/media/games/soundstudio/audio/soundstudio-${track.mode}-pack.json`)

        this.soundStudioLoader.on('complete', () => {
            this.playbackSSTrack(track)
        })

        this.soundStudioLoader.start()
    }

    playbackSSTrack(track) {
        if (this.soundStudioSounds) {
            for (let i = 0; i < 25; i++) {
                this.soundStudioSounds[i].stop()
            }
        }
        this.soundStudioSounds = {}
        this.soundStudioMode = track.mode
        for (let i = 0; i < 25; i++) {
            this.soundStudioSounds[i] = this.sound.add(`${track.mode}_${i + 1}`, {loop: true, mute: true})
            this.soundStudioSounds[i].setVolume(this.shell.settings.mv)
            this.soundStudioSounds[i].play()
        }
        setTimeout(() => {
            this.events.emit('soundstudio-song-finished')
        }, track.lengthInMs)
        this.playbackFromCSList(track.sounds)
    }

    playbackFromCSList(list) {
        this.playbackFromList(list.split(','))
    }

    playbackFromList(list) {
        this.playbackTimeouts = []
        for (let sound of list) {
            let split = sound.split(':')
            switch (split[0]) {
                case 'l':
                    this.playRecordedLoop(parseInt(split[1]), parseInt(split[2]) * 10)
                    break
                case 'f':
                    this.stopRecordedLoop(parseInt(split[1]), parseInt(split[2]) * 10)
                    break
                case 's':
                    this.playRecordedSfx(parseInt(split[1]), parseInt(split[2]) * 10)
                    break
            }
        }
    }

    playRecordedLoop(index, delay) {
        this.playbackTimeouts.push(
            setTimeout(() => {
                this.soundStudioSounds[index].setMute(false)
            }, delay)
        )
    }

    stopRecordedLoop(index, delay) {
        this.playbackTimeouts.push(
            setTimeout(() => {
                this.soundStudioSounds[index].setMute(true)
            }, delay)
        )
    }

    playRecordedSfx(index, delay) {
        this.playbackTimeouts.push(
            setTimeout(() => {
                this.sound.add(`${this.soundStudioMode}_sfx_${index}`).play()
            }, delay)
        )
    }

    isClientUsername(username) {
        return this.client.username == username
    }
}
