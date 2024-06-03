import BaseScene from '@scenes/base/BaseScene'

export default class RoomScene extends BaseScene {
    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null

        // Block collision body
        this.block = null
        // Trigger collision bodies
        this.triggers = null

        // If room is fully loaded
        this.isReady = false
        // Array of users to be added once ready
    }

    get client() {
        return this.shell.client
    }

    init(data) {
        this.id = data.id
    }

    create() {
        super.create()
        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()

        if (this.isPreview) return

        this.sound.pauseOnBlur = false
        if (!this.music) this.music = 0
        this.addMusic()

        window.updateScaling()
        this.interface.hideLoading()
    }

    preload() {
        this.load.on('filecomplete', (key, type, data) => {
            this.shell.itemsLoaded.push({id: key, type: type})
        })

        if (this.loadSfx) {
            this.loadSfx.forEach((sfx) => {
                this.load.audio(`sfx/${sfx}`, `/client/media/sounds/${sfx}.mp3`)
            })
        }

        if (this._preload) this._preload()
    }

    sortChildren() {
        if (!this.sort) return

        for (let child of this.sort) {
            child.depth = child.y
        }
    }

    addMusic() {
        if (!this.shell.muteMusic) {
            this.shell.musicController.addMusic(this.music)
        }
    }

    stop() {
        //this.sound.stopAll()
        this.scene.stop()
    }

    /*======= Physics =======*/

    get roomPhysics() {
        let key = this.isPreview ? this.key.toLowerCase().split('-').slice(0, -2).join('-') : this.key.toLowerCase()
        if (this.cache.json.get(`${key}-physics`)) {
            return this.cache.json.get(`${key}-physics`)
        } else {
            let splitter
            for (let i = 1; i < this.key.length; i++) {
                if (this.key[i] == this.key[i].toUpperCase()) {
                    splitter = this.key[i]
                    break
                }
            }
            let split = this.key.split(splitter)
            return this.cache.json.get(`${split[0].toLowerCase()}-physics`)
        }
    }

    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)
        this.block = this.addBody('block', 0x111111)
        this.triggers = this.addTriggers()
    }

    addBody(key, color = null) {
        if (!this.roomPhysics[key]) return null

        let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) // Centers body in room

        // Debug color
        color = color ? color : body.render.fillColor

        body.render.lineColor = color
        body.render.fillColor = color
        body.render.fillOpacity = 0.5

        return body
    }

    addTriggers() {
        if (!this.roomTriggers) return null

        let triggers = []

        for (let t in this.roomTriggers) {
            let trigger = this.addBody(t, 0x00ff00)
            if (!trigger) {
                console.error(`[RoomScene] Trigger ${t} not found in physics`)
                continue
            }

            if (!this.roomTriggers[t]) {
                triggers.push(trigger)
                continue
            }

            if (!this.roomTriggers[t].callback) {
                trigger.callback = this.roomTriggers[t]
                triggers.push(trigger)
                continue
            }

            trigger.callback = this.roomTriggers[t].callback
            trigger.offCallback = this.roomTriggers[t].offCallback

            triggers.push(trigger)
        }
        return triggers
    }
    addZones() {
        if (!this.roomZones) return null

        for (let t in this.roomZones) {
            let trigger = this.matter.add.gameObject(this.roomZones[t].key).setStatic(true)

            trigger.callback = this.roomZones[t].callback
            this.triggers.push(trigger)
        }
    }

    /*===== Prompts ======*/

    unimplementedPrompt() {
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError(this.crumbs.getError('54'))
    }
}
