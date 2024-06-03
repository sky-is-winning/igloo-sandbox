import BaseLoader from './BaseLoader'

export default class PinLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/clothing/icon/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'clothing/icon/'
    }

    loadPin(pin, details) {
        let key = this.getKey(pin)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, pin, details)
            })
        ) {
            return
        }

        this.image(key, `${pin}.webp`)
        this.start()
    }

    onFileComplete(key, pin, details) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:clothing/icon/${pin}`, details)
    }
}
