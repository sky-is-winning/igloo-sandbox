import RoomScene from '@scenes/igloos/RoomScene'

export default class GameScene extends RoomScene {
    constructor(key) {
        super(key)

        this.key = key
        this.isGame = true
    }

    get client() {
        return this.shell.client
    }

    getColor(color) {
        return this.shell.getColor(color)
    }

    init(data) {
        this.id = data.id
    }

    create() {
        window.updateScaling()
        this._create()

        this.sound.pauseOnBlur = false
        if (!this.music) this.music = 0
        this.addMusic()

        this.interface.hideLoading()
        this.shell.room = this
        this.interface.hideInterface()
    }

    addPenguins() {
        // Empty method to prevent penguins spawning
    }

    addPenguin() {
        // Empty method to prevent penguins spawning
    }
}
