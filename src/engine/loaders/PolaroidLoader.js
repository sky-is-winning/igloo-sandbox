import BaseLoader from './BaseLoader'

export default class StampLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/interface/game/stampbook/polaroids/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'polaroid/'
    }

    loadPolaroid(polaroid) {
        let key = this.getKey(polaroid)

        if (
            this.checkComplete('multiatlas', key, () => {
                this.onFileComplete(key, polaroid)
            })
        ) {
            return
        }

        this.multiatlas(key, `${polaroid}.json`)
        this.start()
    }

    onFileComplete(key, stamp) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:polaroid/${stamp}`)
    }
}
