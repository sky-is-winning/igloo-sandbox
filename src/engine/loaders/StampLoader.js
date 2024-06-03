import BaseLoader from './BaseLoader'

export default class StampLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/interface/game/stampbook/stamps/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'stamps/'
    }

    loadStamp(stamp) {
        let key = this.getKey(stamp)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, stamp)
            })
        ) {
            return
        }

        this.image(key, `${stamp}.webp`)
        this.start()
    }

    onFileComplete(key, stamp) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:stamps/${stamp}`)
    }
}
