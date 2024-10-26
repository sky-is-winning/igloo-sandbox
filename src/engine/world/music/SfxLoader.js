export default class SfxLoader extends Phaser.Loader.LoaderPlugin {
    constructor(MusicController) {
        super(MusicController)

        this.musicController = MusicController

        const suffix = '/assets/media/sounds/'

        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'sfx/'

        this.loading = []
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

    loadFile(track, fileExtension = 'mp3', loop) {
        let key = this.getKey(track)

        let trackInfo = {key: key, url: `${track}.${fileExtension}`}

        for (let i = 0; i < this.loading.length; i++) {
            let loading = this.loading[i]
            if (loading.key == key) return
        }

        this.loading.push(trackInfo)

        this.once(`filecomplete-audio-${key}`, () => this.onFileComplete(key, loop))

        this.startLoading()
    }

    async startLoading() {
        if (this.musicLoading) return
        this.musicLoading = true
        for (let trackInfo of this.loading) {
            let key = trackInfo.key
            let url = trackInfo.url

            this.audio(key, url)
        }
        this.start()
        this.musicLoading = false

        if (this.struggleTimeout) clearTimeout(this.struggleTimeout)
        this.struggleTimeout = setTimeout(() => {
            if (this.loading.length > 0) {
                this.struggling()
            }
        }, 300)
    }

    struggling() {
        let tempLoader = new Phaser.Loader.LoaderPlugin(this.musicController)
        tempLoader.baseURL = this.baseURL
        tempLoader.keyPrefix = this.keyPrefix

        for (let trackInfo of this.loading) {
            let key = trackInfo.key
            let url = trackInfo.url

            tempLoader.audio(key, url)
            tempLoader.once(`filecomplete-audio-${key}`, () => this.onFileComplete(key))
        }

        tempLoader.start()
    }
    onFileComplete(key, loop) {
        if (!this.musicController.cache.audio.exists(key)) {
            return
        }

        this.musicController.shell.itemsLoaded.push({id: key, type: 'audio'})

        for (var i = 0; i < this.loading.length; i++) {
            if (this.loading[i].key == key) {
                this.loading.splice(i, 1)
                break
            }
        }

        this.musicController.playSfx(key, loop)
    }
}
