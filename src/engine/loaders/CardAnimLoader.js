import BaseLoader from './BaseLoader'

export default class CardAnimLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/games/card/battles/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'battles/'
    }

    loadAnimation(card) {
        let key = this.getKey(card)

        let jsonComplete = false
        let multiatlasComplete = false

        if (
            this.checkComplete('json', key, () => {
                jsonComplete = true
                if (multiatlasComplete) {
                    this.onFileComplete(key, card)
                }
            })
        ) {
            return
        }

        if (
            this.checkComplete('multiatlas', key, () => {
                multiatlasComplete = true
                if (jsonComplete) {
                    this.onFileComplete(key, card)
                }
            })
        ) {
            return
        }

        this.json(`${key}_data`, `${card}.data`)
        this.multiatlas(key, `${card}.json`)
        this.start()
    }

    onFileComplete(key, card) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:battles/${card}`)
    }
}
