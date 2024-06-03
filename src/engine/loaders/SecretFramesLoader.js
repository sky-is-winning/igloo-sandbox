import BaseLoader from './BaseLoader'

export default class SecretFramesLoader extends BaseLoader {
    constructor(scene) {
        super(scene)

        let suffix = '/client/media/penguin/actions/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'secret_frames/'
    }

    loadFrame(frame) {
        let key = this.getKey(frame)

        if (
            this.checkComplete('multiatlas', key, () => {
                this.onFileComplete(key)
            })
        ) {
            return
        }

        this.multiatlas(key, `${frame}.json`)
        this.start()
    }

    onFileComplete(key) {
        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
