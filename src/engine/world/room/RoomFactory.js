export default class RoomFactory {
    constructor(shell) {
        this.shell = shell

        this.scene = shell.scene
        this.rooms = shell.crumbs.scenes.rooms
    }

    createRoom(id) {
        this.unloadPrevious()
        let config = this.rooms[id]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key)

            return this.scene.get(config.key)
        } else {
            return this.scene.add(config.key, config.scene, true, {id: id})
        }
    }

    // This unloads previous room assets
    unloadPrevious() {
        if (!this.shell.room) return
        let textures = 0
        let json = 0
        let audio = 0
        let video = 0
        let anims = 0

        for (let item of this.shell.itemsLoaded) {
            if (Object.keys(this.shell.room.textures.list).includes(item.id)) {
                textures++
                this.shell.room.textures.remove(item.id)
            }

            if (Object.keys(this.shell.cache.json.entries.entries).includes(item.id)) {
                this.shell.room.cache.json.remove(item.id)
                json++
            }

            if (Object.keys(this.shell.cache.audio.entries.entries).includes(item.id)) {
                this.shell.room.cache.audio.remove(item.id)
                audio++
            }

            if (Object.keys(this.shell.cache.video.entries.entries).includes(item.id)) {
                this.shell.room.cache.video.remove(item.id)
            }

            for (let anim in this.shell.room.anims.anims.entries) {
                if (this.shell.room.anims.anims.entries[anim].key.split('-')[0] == item.id.split('-')[0]) {
                    anims++
                    delete this.shell.room.anims.anims.entries[anim]
                }
            }
        }

        for (let item of Object.keys(this.shell.room.textures.list)) {
            if (['clothing', 'head', 'face', 'neck', 'body', 'hand', 'feet', 'puffles', 'paper', 'secret_frames'].includes(item.split('/')[0])) {
                this.shell.room.textures.remove(item)
                textures++
            }
        }

        for (let item of Object.keys(this.shell.cache.audio.entries.entries)) {
            if (['sfx'].includes(item.split('/')[0])) {
                this.shell.room.cache.audio.remove(item)
                audio++
            }
        }

        for (let item in this.shell.room.anims.anims.entries) {
            if (['head', 'face', 'neck', 'body', 'hand', 'feet', 'puffles'].includes(item.split('/')[0])) {
                delete this.shell.room.anims.anims.entries[item]
                anims++
            }

            // Remove secret frame animations
            if (['penguin'].includes(item.split('_')[0])) {
                if (item.split('/')[0].split('_')[1] == 'body' && parseInt(item.split('/')[0].split('_')[2]) > 26) {
                    delete this.shell.room.anims.anims.entries[item]
                    anims++
                } else if (parseInt(item.split('/')[0].split('_')[1]) > 26) {
                    delete this.shell.room.anims.anims.entries[item]
                    anims++
                }
            }
        }

        let stringArray = []
        if (textures > 0) stringArray.push(`${textures} texture${textures > 1 ? 's' : ''}`)
        if (json > 0) stringArray.push(`${json} json file${json > 1 ? 's' : ''}`)
        if (audio > 0) stringArray.push(`${audio} audio file${audio > 1 ? 's' : ''}`)
        if (video > 0) stringArray.push(`${video} video file${video > 1 ? 's' : ''}`)
        if (anims > 0) stringArray.push(`${anims} animation${anims > 1 ? 's' : ''}`)
        if (stringArray.length > 0) console.info(`[MemoryManager] Unloaded ${stringArray.join(', ')}`.replace(/,(?=[^,]+$)/, ', and'))

        this.shell.itemsLoaded = []
    }
}
