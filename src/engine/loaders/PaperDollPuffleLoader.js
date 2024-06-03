import BaseLoader from './BaseLoader'

export default class PaperDollPuffleLoader extends BaseLoader {
    constructor(scene, paperDoll) {
        super(scene)

        this.paperDoll = paperDoll

        this.scale = 1

        let suffix = '/client/media/puffles/paper/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'puffles/paper/'
    }

    loadPuffle(puffle) {
        let key = this.getKey(puffle)

        let interval = setInterval(() => {
            if (this.textureExists(key)) {
                this.onFileComplete(key)
                clearInterval(interval)
            }
        }, 100)

        this.image(key, `${puffle}.webp`)
        this.start()
    }

    onFileComplete(key) {
        if (!this.paperDoll.visible || !this.textureExists(key)) {
            return
        }

        if (this.paperDoll.puffle) {
            this.paperDoll.puffle.destroy()
        }

        this.paperDoll.puffle = this.addPaper(key, 1000)
    }

    addPaper(key, depth, scale = this.scale) {
        let puffle = this.scene.add.image(-50, -27, key)

        puffle.scale = scale
        puffle.depth = depth

        if (this.paperDoll.fadeIn) {
            this.fadeIn(puffle)
        }

        this.paperDoll.add(puffle)

        if (this.paperDoll.isInputEnabled) {
            this.addInput(puffle)
        }

        this.paperDoll.sort('depth')

        return puffle
    }

    fadeIn(puffle) {
        puffle.alpha = 0

        this.scene.tweens.add({
            targets: puffle,
            alpha: {from: 0, to: 1},
            duration: 200
        })
    }

    addInput(puffle) {
        puffle.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true
        })

        puffle.on('pointerdown', () => this.onPuffleClick())
    }

    onPuffleClick() {
        this.airtower.sendXt('p#pw', '0')
    }
}
