import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InputText extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject
        /** @type {boolean} */
        this.multiline = 0
        /** @type {boolean} */
        this.ispassword = false
        /** @type {number} */
        this.charlimit = 0
        /** @type {regex} */
        this.inputfilter
        /** @type {any} */
        this.entercallback = () => {}
        /** @type {any} */
        this.userdefinedonclickfunction = () => {}
        /** @type {boolean} */
        this.extends = true

        this.gameObject = gameObject
        gameObject['__InputText'] = this

        /* START-USER-CTR-CODE */
        this.gameObject.textContent = ''
        this.input = this.gameObject.scene.interface.input

        if (!this.gameObject.scene.__InputTextList) {
            this.gameObject.scene.__InputTextList = []
        }
        this.gameObject.scene.__InputTextList.push(this)
        /* END-USER-CTR-CODE */
    }

    /** @returns {InputText} */
    static getComponent(gameObject) {
        return gameObject['__InputText']
    }

    /* START-USER-CODE */

    get isChanged() {
        return this.gameObject.text != this.defaultText
    }

    start() {
        this.defaultText = this.gameObject.text
        this.gameObject.textContent = this.gameObject.text
        this.lineWidth = this.gameObject.style.fixedWidth

        this.clickZone = this.gameObject.scene.add.rectangle(this.gameObject.x, this.gameObject.y, this.lineWidth, this.gameObject.height, 0x00ff00, localStorage.debugMode == 'true' ? 0.5 : 0)
        this.clickZone.setOrigin(this.gameObject.originX, this.gameObject.originY)

        // Set not clickable if invisible
        let visible = this.gameObject.visible
        let curObject = this.gameObject
        let insideCustomContainer = false
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer
            visible = visible && curObject.visible
            if (curObject.isCustomContainer) {
                insideCustomContainer = true
            }
        }

        this.clickZone.visible = visible

        this.clickZone.setInteractive({
            cursor: 'text',
            pixelPerfect: false
        })
        this.clickZone.on('pointerup', (pointer) => this.onUp(pointer))
        this.clickZone.on('pointerover', () => this.onOver())
        this.clickZone.on('pointerout', () => this.onOut())
        this.input.keyboard.on('keydown', (event) => this.onKeyDown(event))

        this.indicator = this.gameObject.scene.add.rectangle(this.gameObject.x, this.gameObject.y, 1, this.getCharHeight('I'), `0x${this.gameObject.style.color == '#fff' ? 'ffffff' : this.gameObject.style.color.substring(1, 7)}`, 1)
        this.indicator.setOrigin(this.gameObject.originX, this.gameObject.originY)
        this.indicator.visible = false
        if (this.gameObject.scene.inputTextContainer && !insideCustomContainer) {
            this.gameObject.scene.inputTextContainer.add(this.indicator)
            this.gameObject.scene.inputTextContainer.add(this.clickZone)
        } else if (this.gameObject.parentContainer) {
            this.gameObject.parentContainer.add(this.indicator)
            this.gameObject.parentContainer.add(this.clickZone)
        } else {
            this.gameObject.scene.add.existing(this.indicator)
            this.gameObject.scene.add.existing(this.clickZone)
        }

        this.x = this.gameObject.x

        this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight)
        this.wrapText()
        this.createMask()
    }

    get trueX() {
        let x = this.gameObject.x - this.lineWidth * this.gameObject.originX
        let curObject = this.gameObject
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer
            x += curObject.x
        }
        return x
    }

    get trueY() {
        let y = this.gameObject.y - this.gameObject.height * this.gameObject.originY
        let curObject = this.gameObject
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer
            y += curObject.y
        }
        return y
    }

    createMask() {
        this.mask = this.gameObject.scene.add.graphics()
        this.mask.fillStyle(0xffffff, 0)
        this.mask.beginPath()
        this.maskRect = this.mask.fillRect(this.trueX, this.trueY, this.lineWidth, this.gameObject.height)
        this.mask = this.mask.createGeometryMask()
        this.gameObject.setMask(this.mask)

        this.firstTrueX = this.trueX
        this.firstTrueY = this.trueY

        this.update = this.updateRect
    }

    updateRect() {
        if (this.gameObject.visible && (this.trueX - this.firstTrueX != this.maskRect.x || this.trueY - this.firstTrueY != this.maskRect.y)) {
            this.maskRect.x = this.trueX - this.firstTrueX
            this.maskRect.y = this.trueY - this.firstTrueY
        }
    }

    setDefaultText(text) {
        this.defaultText = text
        this.gameObject.text = text
        this.gameObject.textContent = text

        this.userClicked = false

        this.wrapText()
    }

    onUp(pointer) {
        // If there are multiple input fields, these listeners would be removed straight away by the other one, so we add them with a 0.1 second delay
        setTimeout(() => {
            if ((pointer && pointer.button != 0) || this.isSelected) {
                return
            }

            this.userdefinedonclickfunction()

            if (!this.userClicked) {
                this.userClicked = true
                this.gameObject.text = ''
                this.gameObject.textContent = ''
                this.indicator.x = this.gameObject.x
            }

            let offset = 0
            let curObject = this.gameObject
            while (curObject.parentContainer) {
                curObject = curObject.parentContainer
                offset += curObject.x
            }
            let x = pointer ? pointer.x : 1520 - offset

            let charPoint = 0
            let charWidth = 0
            let prevWidth = 0
            let text = this.gameObject.text
            if (this.gameObject.style.fixedWidth != 0) {
                prevWidth = this.gameObject.style.fixedWidth
                this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight)
            }
            while (charPoint <= text.length && charWidth < x) {
                this.gameObject.text = text.substring(0, charPoint)
                charWidth = this.gameObject.width
                charPoint++
            }

            this.beforeCursor = text.substring(0, charPoint - 1)
            this.afterCursor = text.substring(charPoint - 1, text.length)
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent

            if (this.gameObject.style.align == 'right') {
                this.indicator.x = this.gameObject.x - charWidth
                this.indicator.y = this.getLinePos(this.beforeCursor)
            } else if (this.gameObject.style.align == 'center') {
                this.indicator.x = this.gameObject.x + charWidth / 2
                this.indicator.y = this.getLinePos(this.beforeCursor)
            } else {
                this.indicator.x = this.gameObject.x + charWidth
                this.indicator.y = this.getLinePos(this.beforeCursor)
            }

            this.input.once('pointerup', this.onClick, this, pointer)
            this.isSelected = true
            this.gameObject.scene.interface.isInputActive = true
            this.flashIndicator()

            document.getElementById('dummyForMobileKeyboard').focus()
        }, 100)
    }

    onClick(pointer) {
        if (!this.isOver) {
            this.isSelected = false
            this.gameObject.scene.interface.isInputActive = false
            this.indicator.visible = false
        } else {
            if (this.gameObject.scene == undefined) return

            this.userdefinedonclickfunction()
            this.input.once('pointerup', this.onClick, this, pointer)

            let offset = 0
            let curObject = this.gameObject
            while (curObject.parentContainer) {
                curObject = curObject.parentContainer
                offset += curObject.x
            }
            let x = pointer ? pointer.x : 1520 - offset

            let charPoint = 0
            let charWidth = 0
            let prevWidth = 0
            let text = this.gameObject.textContent
            if (this.gameObject.style.fixedWidth != 0) {
                prevWidth = this.gameObject.style.fixedWidth
                this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight)
            }
            while (charPoint <= text.length && charWidth < x) {
                this.gameObject.textContent = text.substring(0, charPoint)
                charWidth = this.gameObject.width
                charPoint++
            }

            this.beforeCursor = text.substring(0, charPoint - 1)
            this.afterCursor = text.substring(charPoint - 1, text.length)
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent

            if (this.gameObject.style.align == 'right') {
                this.indicator.x = this.gameObject.x - charWidth
                this.indicator.y = this.getLinePos(this.beforeCursor)
            } else if (this.gameObject.style.align == 'center') {
                this.indicator.x = this.gameObject.x + charWidth / 2
                this.indicator.y = this.getLinePos(this.beforeCursor)
            } else {
                this.indicator.x = this.gameObject.x + charWidth
                this.indicator.y = this.getLinePos(this.beforeCursor)
            }

            this.gameObject.setFixedSize(prevWidth, this.gameObject.style.fixedHeight)

            document.getElementById('dummyForMobileKeyboard').focus()
        }
    }

    getCharWidth(char) {
        if (this.ispassword) char = char.replace(/./g, '*')

        let prevWidth = this.gameObject.style.fixedWidth
        let prevText = this.gameObject.text
        this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight)
        let arr = char.split('\n')
        this.gameObject.text = arr[arr.length - 1]
        let width = this.gameObject.width
        this.gameObject.text = prevText
        this.gameObject.setFixedSize(prevWidth, this.gameObject.style.fixedHeight)
        return width
    }

    getCharHeight(char) {
        if (this.ispassword) char = char.replace(/./g, '*')

        let prevHeight = this.gameObject.style.fixedHeight
        let prevText = this.gameObject.text
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, 0)
        this.gameObject.text = char
        let height = this.gameObject.height
        this.gameObject.text = prevText
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, prevHeight)
        return height
    }

    getLinePos(char) {
        if (this.ispassword) char = char.replace(/./g, '*')

        let prevHeight = this.gameObject.style.fixedHeight
        let prevText = this.gameObject.text
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, 0)
        let arr = char.split('\n')
        this.gameObject.text = arr.pop()
        let height = this.gameObject.height * this.gameObject.originY
        for (let i = 0; i < arr.length; i++) {
            this.gameObject.text = arr[i]
            height -= this.gameObject.height * this.gameObject.originY
        }
        this.gameObject.text = prevText
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, prevHeight)

        var offset = this.gameObject.y + this.gameObject.height * this.gameObject.originY
        return offset - height
    }

    onOver() {
        this.isOver = true
    }

    onOut() {
        this.isOver = false
    }

    async onKeyDown(event) {
        if (!this.isSelected) return
        if (event.key == 'Backspace') {
            if (event.ctrlKey) {
                let lastSpace = this.beforeCursor.lastIndexOf(' ')
                if (lastSpace == -1) {
                    this.beforeCursor = ''
                } else {
                    this.beforeCursor = this.beforeCursor.substring(0, lastSpace)
                }
            } else {
                this.beforeCursor = this.beforeCursor.slice(0, -1)
            }
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
            if (this.gameObject.width > this.lineWidth && !this.multiline && this.extends) {
                this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth)
            } else {
                this.gameObject.x = this.x
            }
        } else if (event.key == 'Delete') {
            if (event.ctrlKey) {
                let firstSpace = this.afterCursor.indexOf(' ')
                if (firstSpace == -1) {
                    this.afterCursor = ''
                } else {
                    this.afterCursor = this.afterCursor.substring(firstSpace + 1, this.afterCursor.length)
                }
            } else {
                this.afterCursor = this.afterCursor.slice(1)
            }
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
            if (this.gameObject.width > this.lineWidth && !this.multiline && this.extends) {
                this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth)
            } else {
                this.gameObject.x = this.x
            }
        } else if (event.key == 'Enter') {
            if (event.shiftKey && this.multiline) {
                this.text += '\n'
                return
            }
            if (this.entercallback) {
                this.entercallback()
                this.isSelected = false
                this.gameObject.scene.interface.isInputActive = false
                this.indicator.visible = false
                this.input.removeListener('pointerup', this.onClick, this)
                return
            }
        } else if (event.key == 'ArrowLeft') {
            if (this.beforeCursor.length > 0) {
                if (event.ctrlKey) {
                    let lastSpace = this.beforeCursor.substring(0, this.beforeCursor.length - 1).lastIndexOf(' ')
                    if (lastSpace == -1) {
                        this.afterCursor = this.beforeCursor + this.afterCursor
                        this.beforeCursor = ''
                    } else {
                        this.afterCursor = this.beforeCursor.substring(lastSpace + 1, this.beforeCursor.length) + this.afterCursor
                        this.beforeCursor = this.beforeCursor.substring(0, lastSpace + 1)
                    }
                } else {
                    this.afterCursor = this.beforeCursor.slice(-1) + this.afterCursor
                    this.beforeCursor = this.beforeCursor.slice(0, -1)
                }
            }
        } else if (event.key == 'ArrowRight') {
            if (this.afterCursor.length > 0) {
                if (event.ctrlKey) {
                    let firstSpace = this.afterCursor.substring(0, this.afterCursor.length).indexOf(' ') + 1
                    if (firstSpace == 0) {
                        this.beforeCursor += this.afterCursor
                        this.afterCursor = ''
                    } else {
                        this.beforeCursor += this.afterCursor.substring(0, firstSpace)
                        this.afterCursor = this.afterCursor.substring(firstSpace, this.afterCursor.length)
                    }
                } else {
                    this.beforeCursor += this.afterCursor.slice(0, 1)
                    this.afterCursor = this.afterCursor.slice(1)
                }
            }
        } else if (event.ctrlKey) {
            if (event.key == 'v') {
                let text = await navigator.clipboard.readText()
                if (text) {
                    if (this.inputfilter && !this.inputfilter.test(text)) {
                        let textArray = []
                        for (let i = 0; i < text.length; i++) {
                            if (this.inputfilter.test(text[i])) {
                                textArray.push(text[i])
                            }
                        }
                        text = textArray.join('')
                    }
                    if (text.length > this.maxlength) text = text.substring(0, this.maxlength)
                    this.beforeCursor = text
                    this.afterCursor = ''
                    this.gameObject.textContent = this.beforeCursor + this.afterCursor
                    this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
                    this.wrapText()
                }
            } else if (event.key == 'c') {
                navigator.clipboard.writeText(this.gameObject.textContent)
            }
        } else if (event.key == 'Tab') {
            this.isSelected = false
            this.gameObject.scene.interface.isInputActive = false
            this.indicator.visible = false

            let inputTexts = this.gameObject.scene.__InputTextList.filter((inputText) => inputText.clickZone.visible).sort((a, b) => a.trueY - b.trueY)
            let index = inputTexts.indexOf(this)
            if (index == inputTexts.length - 1) {
                inputTexts[0].onUp()
            } else {
                inputTexts[index + 1].onUp()
            }
            return
        } else if (event.key.length != 1) {
            return
        } else if (this.charlimit > 0 && (this.gameObject.text + event.key).length > this.charlimit) {
            return
        } else {
            let key = event.key
            if (event.shiftKey || event.getModifierState('CapsLock')) {
                key = key.toUpperCase()
            }
            if (this.inputfilter && !this.inputfilter.test(key)) {
                return
            }
            this.beforeCursor += key
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            if (this.ispassword) {
                this.gameObject.text += '*'
            } else {
                this.gameObject.text = this.beforeCursor + this.afterCursor
            }

            if (this.gameObject.width > this.lineWidth) {
                if (!this.multiline) {
                    if (!this.extends) {
                        this.beforeCursor = this.beforeCursor.slice(0, -1)
                        this.gameObject.textContent = this.beforeCursor + this.afterCursor
                        this.gameObject.text = this.gameObject.textContent
                    } else {
                        this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth)
                    }
                } else {
                    const last30Chars = this.beforeCursor.slice(-30)
                    const spaceIndex = last30Chars.lastIndexOf(' ')
                    const newLineIndex = spaceIndex === -1 ? this.beforeCursor.length - 1 : this.beforeCursor.length - 30 + spaceIndex
                    const beforeNewline = this.beforeCursor.slice(0, newLineIndex)
                    const afterNewline = this.beforeCursor.slice(newLineIndex + 1)
                    this.beforeCursor = beforeNewline + '\n' + afterNewline
                    this.gameObject.textContent = this.beforeCursor + this.afterCursor
                    this.gameObject.text = this.gameObject.textContent
                }
            } else if (this.extends) {
                this.gameObject.x = this.x
            }
        }

        if (this.gameObject.style.align == 'right') {
            this.indicator.x = this.gameObject.x - this.getCharWidth(this.beforeCursor)
            this.indicator.y = this.getLinePos(this.beforeCursor)
        } else if (this.gameObject.style.align == 'center') {
            this.indicator.x = this.gameObject.x + this.getCharWidth(this.beforeCursor) / 2 - this.getCharWidth(this.afterCursor) / 2
            this.indicator.y = this.getLinePos(this.beforeCursor)
        } else {
            this.indicator.x = this.gameObject.x + this.getCharWidth(this.beforeCursor)
            this.indicator.y = this.getLinePos(this.beforeCursor)
        }
    }

    flashIndicator() {
        if (this.isSelected) {
            this.indicator.visible = true
            setTimeout(() => {
                this.indicator.visible = false
                setTimeout(() => this.flashIndicator(), 500)
            }, 500)
        }
    }

    clearText() {
        this.userClicked = false
        this.gameObject.text = this.defaultText
        this.gameObject.textContent = this.defaultText
        this.gameObject.x = this.x
        this.indicator.x = this.gameObject.x
    }

    wrapText() {
        if (this.gameObject.width > this.lineWidth) {
            if (!this.multiline) {
                if (!this.extends) {
                    while (this.gameObject.width > this.lineWidth) {
                        this.gameObject.text = this.gameObject.text.slice(0, -1)
                        this.gameObject.textContent = this.gameObject.textContent.slice(0, -1)
                    }
                } else {
                    this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth)
                }
            } else {
                let textArray = this.gameObject.textContent.split(' ')
                let text = ''
                let line = ''
                for (let i = 0; i < textArray.length; i++) {
                    if (this.getCharWidth(line + textArray[i]) < this.lineWidth) {
                        line += textArray[i] + ' '
                    } else {
                        text += line + '\n'
                        line = textArray[i] + ' '
                    }
                }
                text += line
                this.beforeCursor = text
                this.afterCursor = ''
                this.gameObject.textContent = this.beforeCursor + this.afterCursor
                this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
