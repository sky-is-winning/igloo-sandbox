import Boot from '@engine/boot/Boot'
import Airtower from '@engine/airtower/Airtower'
import registerNinePatchContainerFactory from '@engine/utils/ninepatch/registerNinePatchContainerFactory'
import Phaser from 'phaser'
import CacheBustedLoader from '@engine/utils/cachebuster/phaser-cachebuster.min.js'
import game from './data/game'

export default class Game extends Phaser.Game {
    constructor(config) {
        super(config)

        this.crumbs = config.crumbs
        this.airtower = new Airtower(this)

        document.onkeydown = (event) => {
            if (this.airtower.interface.isInputActive) {
                event.preventDefault()
                this.airtower.interface.input.keyboard.emit('keydown', event)
            }
        }

        document.onkeyup = (event) => {
            if (this.airtower.interface.isInputActive) {
                event.preventDefault()
                this.airtower.interface.input.keyboard.emit('keyup', event)
            }
        }

        registerNinePatchContainerFactory()

        this.scene.add('Boot', Boot, true)
    }
}

window.onload = () => {
    new Game(game)
}
