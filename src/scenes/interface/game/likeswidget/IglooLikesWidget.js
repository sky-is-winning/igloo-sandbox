import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, LocalisedSprite, Interactive} from '@scenes/components/components'
import PlayerItem from './player/PlayerItem'

/* START OF COMPILED CODE */

export default class IglooLikesWidget extends BaseScene {
    constructor() {
        super('IglooLikesWidget')

        /** @type {Phaser.GameObjects.Image} */
        this.likeButton
        /** @type {Phaser.GameObjects.Text} */
        this.likeTxt
        /** @type {Phaser.GameObjects.Text} */
        this.likeNum
        /** @type {NinePatchContainer} */
        this.likeWindow
        /** @type {PlayerItem} */
        this.one
        /** @type {Phaser.GameObjects.Container} */
        this.two
        /** @type {PlayerItem} */
        this.two_two
        /** @type {PlayerItem} */
        this.two_one
        /** @type {Phaser.GameObjects.Container} */
        this.threeplus
        /** @type {PlayerItem} */
        this.three_three
        /** @type {PlayerItem} */
        this.three_two
        /** @type {PlayerItem} */
        this.three_one
        /** @type {Phaser.GameObjects.Rectangle} */
        this.likeBtn
        /** @type {Phaser.GameObjects.Rectangle} */
        this.windowBtn
        /** @type {Phaser.GameObjects.Container} */
        this.likeContainer
        /** @type {Phaser.GameObjects.Image} */
        this.scroll
        /** @type {Phaser.GameObjects.Image} */
        this.scroller
        /** @type {Phaser.GameObjects.Container} */
        this.closebtn
        /** @type {PlayerItem[]} */
        this.previewLikes

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // likeButton
        const likeButton = this.add.image(1406, 60, 'main', 'like-button')
        likeButton.visible = false

        // likeTxt
        const likeTxt = this.add.text(1365, 61, '', {})
        likeTxt.setOrigin(0.5, 0.5)
        likeTxt.visible = false
        likeTxt.text = 'Like'
        likeTxt.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold', 'shadow.offsetY': -1, 'shadow.color': '#0e248cff', 'shadow.blur': 2, 'shadow.fill': true})

        // likeNum
        const likeNum = this.add.text(1460, 61, '', {})
        likeNum.setOrigin(0.5, 0.5)
        likeNum.visible = false
        likeNum.text = '0'
        likeNum.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#000000ff'})

        // likeWindow
        const likeWindow = this.add.ninePatchContainer(1503, 97, 194, 60, 'main', 'like-window')
        likeWindow.visible = false
        likeWindow.marginLeft = 10
        likeWindow.marginTop = 10
        likeWindow.marginRight = 10
        likeWindow.marginBottom = 10
        likeWindow.ninePatchContainerOriginX = 1
        likeWindow.ninePatchContainerOriginY = 0

        // one
        const one = new PlayerItem(this, 1406, 127)
        this.add.existing(one)
        one.visible = false

        // two
        const two = this.add.container(1376, 127)
        two.visible = false

        // two_two
        const two_two = new PlayerItem(this, 61, 0)
        two_two.visible = true
        two.add(two_two)

        // two_one
        const two_one = new PlayerItem(this, 0, 0)
        two_one.visible = true
        two.add(two_one)

        // threeplus
        const threeplus = this.add.container(1346, 127)
        threeplus.visible = false

        // three_three
        const three_three = new PlayerItem(this, 120, 0)
        three_three.visible = true
        threeplus.add(three_three)

        // three_two
        const three_two = new PlayerItem(this, 60, 0)
        three_two.visible = true
        threeplus.add(three_two)

        // three_one
        const three_one = new PlayerItem(this, 0, 0)
        three_one.visible = true
        threeplus.add(three_one)

        // likeBtn
        const likeBtn = this.add.rectangle(1406, 60, 194, 56)
        likeBtn.visible = false

        // windowBtn
        const windowBtn = this.add.rectangle(1503, 99, 194, 56)
        windowBtn.setOrigin(1, 0)
        windowBtn.visible = false

        // likeContainer
        const likeContainer = this.add.container(1255, 101)

        // scroll
        const scroll = this.add.image(1474, 323, 'main', 'buddy/scroll')
        scroll.visible = false

        // scroller
        const scroller = this.add.image(1474, 167, 'main', 'buddy/scroller')
        scroller.visible = false

        // closebtn
        const closebtn = this.add.container(1438, 122)
        closebtn.visible = false

        // x_button
        const x_button = this.add.image(0, 1, 'main', 'blue-button')
        x_button.scaleX = 0.7
        x_button.scaleY = 0.7
        closebtn.add(x_button)

        // blue_x
        const blue_x = this.add.image(0, 0, 'main', 'blue-x')
        blue_x.scaleX = 0.7
        blue_x.scaleY = 0.7
        closebtn.add(blue_x)

        // lists
        const previewLikes = [one, two_two, two_one, three_three, three_two, three_one]

        // likeWindow (components)
        const likeWindowButton = new Button(likeWindow)

        // likeBtn (components)
        const likeBtnSimpleButton = new SimpleButton(likeBtn)
        likeBtnSimpleButton.hoverCallback = () => this.onLikeOver()
        likeBtnSimpleButton.hoverOutCallback = () => this.onLikeOut()
        likeBtnSimpleButton.callback = () => this.onLikeDown()

        // windowBtn (components)
        const windowBtnSimpleButton = new SimpleButton(windowBtn)
        windowBtnSimpleButton.hoverCallback = () => this.onWindowOver()
        windowBtnSimpleButton.hoverOutCallback = () => this.onWindowOut()
        windowBtnSimpleButton.callback = () => this.onWindowDown()

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.callback = () => this.onWindowDown()

        this.likeButton = likeButton
        this.likeTxt = likeTxt
        this.likeNum = likeNum
        this.likeWindow = likeWindow
        this.one = one
        this.two = two
        this.two_two = two_two
        this.two_one = two_one
        this.threeplus = threeplus
        this.three_three = three_three
        this.three_two = three_two
        this.three_one = three_one
        this.likeBtn = likeBtn
        this.windowBtn = windowBtn
        this.likeContainer = likeContainer
        this.scroll = scroll
        this.scroller = scroller
        this.closebtn = closebtn
        this.previewLikes = previewLikes

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.expandedLikes = []

        let mask = this.add.graphics()
        mask.fillStyle(0xffffff, 0)
        mask.fillRect(1243 * window.currentScale, 97 * window.currentScale, 260 * window.currentScale, 452 * window.currentScale)
        this.mask = mask.createGeometryMask()

        this.likeContainer.setMask(this.mask)

        this.scroller.setInteractive()
        this.scroller.on('pointerdown', (pointer) => this.onScrollerDown(pointer))
        this.scroller.on('pointerup', (pointer) => this.onScrollerUp(pointer))

        this.minY = 167
        this.maxY = 479

        this.airtower.sendXt('g#il', this.shell.room.id)
    }

    reset() {
        this.likeButton.visible = false
        this.likeTxt.visible = false
        this.likeNum.visible = false
        this.likeWindow.visible = false
        this.one.visible = false
        this.two.visible = false
        this.threeplus.visible = false
        this.likeBtn.visible = false
        this.windowBtn.visible = false
        this.scroll.visible = false
        this.scroller.visible = false
        this.closebtn.visible = false

        for (let i in this.expandedLikes) {
            this.expandedLikes[i].destroy()
        }
        this.expandedLikes = []
    }

    show(likes) {
        this.reset()

        this.likeButton.visible = true
        this.likeTxt.visible = true
        this.likeNum.visible = true
        this.likeWindow.visible = true
        this.likeBtn.visible = true
        this.windowBtn.visible = true

        likes = likes ? likes.split(',') : []

        for (let i = 0; i < likes.length; i++) {
            if (!likes[i].includes('|')) {
                delete likes[i]
                return (this.likeWindow.visible = false)
            }
            likes[i] = this.arrayToObject(likes[i].split('|'))
            if (likes[i].id == this.shell.client.id) {
                this.likeBtn.visible = false
                this.likeTxt.setColor('#4f99deff')
            }
        }

        this.likeNum.text = likes.length

        if (likes.length == 0) {
            this.likeWindow.visible = false
        } else if (likes.length == 1) {
            this.one.visible = true

            this.one.setItem(likes[0])
        } else if (likes.length == 2) {
            this.two.visible = true

            this.two_one.setItem(likes[0])
            this.two_two.setItem(likes[1])
        } else {
            this.threeplus.visible = true

            this.three_one.setItem(likes[0])
            this.three_two.setItem(likes[1])
            this.three_three.setItem(likes[2])
        }

        this.likes = likes
        this.events.emit('create')
    }

    onLikeOver() {
        this.likeButton.setFrame('like-button-hover')
    }

    onLikeOut() {
        this.likeButton.setFrame('like-button')
    }

    onLikeDown() {
        this.airtower.sendXt('g#li', this.shell.room.id)
        this.likeBtn.visible = false
        this.likeTxt.setColor('#4f99deff')
    }

    onWindowOver() {
        this.likeWindow.setTexture('main', 'like-window-hover')
    }

    onWindowOut() {
        this.likeWindow.setTexture('main', 'like-window')
    }

    onWindowDown() {
        if (!this.likeWindow.isExpanded) {
            let h = this.likes.length * 56 + 4
            this.likeWindow.resize(260, h > 452 ? 452 : h)
            this.showExpandedLikes()
            this.previewLikes.forEach((item) => {
                item.visible = false
            })
            if (this.likes.length > 8) {
                this.scroller.visible = true
                this.scroll.visible = true
            }
            this.closebtn.visible = true
            this.windowBtn.visible = false
        } else {
            this.likeWindow.resize(194, 60)
            this.hideExpandedLikes()
            if (this.likes.length > 1) {
                this.previewLikes.forEach((item) => {
                    item.visible = true
                })
            } else if (this.likes.length == 1) {
                this.one.visible = true
            }
            this.scroller.visible = false
            this.scroll.visible = false
            this.closebtn.visible = false
            this.windowBtn.visible = true
        }
        this.likeWindow.isExpanded = !this.likeWindow.isExpanded
        this.windowBtn.width = this.likeWindow.width
        this.windowBtn.height = this.likeWindow.height
    }

    showExpandedLikes() {
        if (this.expandedLikes.length > 0) {
            this.expandedLikes.forEach((item) => {
                item.visible = true
            })
            return
        }
        this.likes.forEach((like, i) => {
            let item = new PlayerItem(this, 25, i * 56 + 25)
            item.setItem(like)
            item.username.visible = true
            this.likeContainer.add(item)
            this.expandedLikes.push(item)
        })
    }

    hideExpandedLikes() {
        this.expandedLikes.forEach((item) => {
            item.visible = false
        })
    }

    onScrollerDown(pointer) {
        let y = pointer.y
        if (y < this.minY) y = this.minY
        if (y > this.maxY) y = this.maxY
        this.scroller.y = y
        this.input.on('pointermove', this.onScrollerMove, this)
        this.input.on('pointerup', this.onScrollerUp, this)
    }

    onScrollerMove(pointer) {
        let y = pointer.y
        if (y < this.minY) y = this.minY
        if (y > this.maxY) y = this.maxY
        this.scroller.y = y

        let distance = Phaser.Math.Difference(this.minY, y)
        let height = Math.ceil(this.likes.length) > 8 ? Math.ceil(this.likes.length) * 56 - 447 : 0
        let yoffset = height / (this.maxY - this.minY)
        this.likeContainer.y = -(distance * yoffset) + 103
    }

    onScrollerUp(pointer) {
        this.input.removeListener('pointermove', this.onScrollerMove)
        this.input.removeListener('pointerup', this.onScrollerUp)
        this.scrollerDown = false
    }

    arrayToObject(array) {
        return {
            id: array[0],
            username: array[1],
            head: array[2],
            face: array[3],
            neck: array[4],
            body: array[5],
            hand: array[6],
            feet: array[7],
            color: array[8]
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
