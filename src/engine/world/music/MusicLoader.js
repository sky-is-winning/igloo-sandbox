export default class MusicLoader extends Phaser.Loader.LoaderPlugin {
    constructor(MusicController) {
        super(MusicController)

        this.musicController = MusicController

        const suffix = '/assets/media/music/'

        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'music/'
    }

    get crumbs() {
        return this.scene.crumbs
    }

    get airtower() {
        return this.scene.airtower
    }

    get interface() {
        return this.scene.interface
    }

    get shell() {
        return this.scene.shell
    }

    getKey(...args) {
        let key = args.join('')
        let prefix = this.keyPrefix || ''

        return `${prefix}${key}`
    }

    getKeyId(key) {
        let split = key.split('/')
        let last = split[split.length - 1]

        return parseInt(last)
    }

    checkComplete(type, key, callback) {
        if (this.textureExists(key)) {
            callback()
            return true
        }

        this.once(`filecomplete-${type}-${key}`, callback)
    }

    loadFile(track, fileExtension = 'mp3') {
        let key = this.getKey(track)

        let interval = setInterval(() => {
            if (this.musicController.cache.audio.exists(key)) {
                this.onFileComplete(key)
                clearInterval(interval)
            }
        }, 100)

        this.audio(key, `${track}.${fileExtension}`)
        this.start()
    }

    onFileComplete(key) {
        if (!this.musicController.cache.audio.exists(key)) {
            return
        }

        this.musicController.play(key)
    }
}
