export default class BaseLoader extends Phaser.Loader.LoaderPlugin {
    constructor(scene) {
        super(scene)

        this.scene = scene

        // Shell sometimes doesn't send update events. Not sure why. This is a workaround.
        setInterval(() => {
            this.update()
        }, 1000 / 20)
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

    textureExists(key) {
        return this.scene.textures.exists(key)
    }

    audioExists(key) {
        return this.scene.cache.audio.exists(key)
    }

    binaryExists(key) {
        return this.scene.cache.binary.exists(key)
    }

    bitmapFontExists(key) {
        return this.scene.cache.bitmapFont.exists(key)
    }

    htmlExists(key) {
        return this.scene.cache.html.exists(key)
    }

    jsonExists(key) {
        return this.scene.cache.json.exists(key)
    }

    objExists(key) {
        return this.scene.cache.obj.exists(key)
    }

    physicsExists(key) {
        return this.scene.cache.physics.exists(key)
    }

    shaderExists(key) {
        return this.scene.cache.shader.exists(key)
    }

    textExists(key) {
        return this.scene.cache.text.exists(key)
    }

    tilemapExists(key) {
        return this.scene.cache.tilemap.exists(key)
    }

    videoExists(key) {
        return this.scene.cache.video.exists(key)
    }

    xmlExists(key) {
        return this.scene.cache.xml.exists(key)
    }
}
