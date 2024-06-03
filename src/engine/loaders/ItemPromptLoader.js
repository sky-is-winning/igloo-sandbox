import BaseLoader from './BaseLoader'

export default class ItemPromptLoader extends BaseLoader {
    constructor(scene, prompt) {
        super(scene)

        this.prompt = prompt
    }

    get baseURL() {
        let suffix
        switch (this.prompt.type) {
            case 'clothing':
                suffix = '/client/media/clothing/icon/large/'
                break
            case 'furniture':
                suffix = '/client/media/furniture/icon/@5x/'
                break
            case 'igloo':
                suffix = '/client/media/igloos/buildings/icon/'
                break
            case 'location':
                suffix = '/client/media/igloos/locations/icon/'
                break
            case 'flooring':
                suffix = '/client/media/igloos/flooring/catalogicon/'
                break
            default:
                suffix = '/client/media/clothing/icon/large/'
        }
        return this.shell.baseURL + suffix
    }

    get keyPrefix() {
        switch (this.prompt.type) {
            case 'clothing':
                return '/clothing/icon/large/'
            case 'furniture':
                return '/furniture/icon/@5x/'
            case 'igloo':
                return '/igloos/buildings/icon/'
            case 'location':
                return '/igloos/locations/icon/'
            case 'flooring':
                return '/igloos/flooring/icon/'
            default:
                return '/clothing/icon/large/'
        }
    }

    get scale() {
        switch (this.prompt.type) {
            case 'clothing':
                return 0.75
            case 'furniture':
                return 0.65
            default:
                return 1
        }
    }

    loadIcon(item) {
        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        let key = this.getKey(item)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.image(key, `${item}.webp`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.prompt.visible || !this.textureExists(key) || item != this.prompt.item) {
            return
        }

        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        let icon = this.scene.add.image(0, -182, key)
        icon.scale = this.scale

        this.prompt.add(icon)
        this.prompt.icon = icon
    }
}
