import BaseLoader from './BaseLoader'

import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'

export default class FurnitureLoader extends BaseLoader {
    constructor(scene) {
        super(scene)

        let suffix = '/client/media/furniture/sprites/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'furniture/sprites/'
    }

    loadFurniture(item, crate = null, x, y, rotation = 1, frame = 1, context = null) {
        if (!item) return
        let key = this.getKey(item)

        if (
            this.checkComplete('json', key, () => {
                this.onFileComplete(key, item, crate, x, y, rotation, frame, context)
            })
        ) {
            return
        }

        this.multiatlas(key, `${item}.json`)
        this.start()
    }

    onFileComplete(key, item, crate, x, y, rotation, frame, context) {
        if (!this.textureExists(key)) {
            return
        }

        if (context.isPreview) {
            let sprite = new FurnitureSprite(context, item, crate, x, y, key, rotation, frame)
            context.add.existing(sprite)
            return
        }

        let sprite = new FurnitureSprite(this.shell.room, item, crate, x, y, key, rotation, frame)
        if (context) context.setSprite(sprite)
        this.shell.room.add.existing(sprite)
    }
}
