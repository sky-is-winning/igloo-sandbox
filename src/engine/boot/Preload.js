import BaseScene from '@scenes/base/BaseScene'

import Main from '@scenes/interface/game/main/Main'
import IglooEdit from '@scenes/interface/game/iglooedit/IglooEdit'
import FontLoader from '@engine/loaders/FontLoader'

export default class Preload extends BaseScene {
    preload() {
        this.load.cacheBuster = VERSION

        this.load.on('progress', this.onProgress, this)

        this.load.pack('preload', 'client/media/preload/preload-pack.json')
        this.scene.add('Main', Main)
        this.scene.add('IglooEdit', IglooEdit)

        window.lowerQuality = this.lowerQuality.bind(this)
        window.raiseQuality = this.raiseQuality.bind(this)

        window.updateScaling = this.updateScaling.bind(this)
        // By default Phaser doesn't update the zoom on window resize. This checks every second, and also will be called on room loads, and window resize.
        window.updateScaling()
        window.addEventListener('resize', () => window.updateScaling())
    }

    updateScaling() {
        this.scale.setGameSize(1520 * window.currentScale, 960 * window.currentScale)
        let heightMultiplier = document.getElementById('game').clientHeight / (window.currentScale * 960)
        let widthMultiplier = document.getElementById('game').clientWidth / (window.currentScale * 1520)

        if (heightMultiplier < widthMultiplier) {
            this.scale.setZoom(heightMultiplier)
        } else {
            this.scale.setZoom(widthMultiplier)
        }

        // Control game quality
        for (let scene of this.game.scene.scenes) {
            if (!scene.cameras.main) continue
            scene.cameras.main.setZoom(scene.cameras.trueScale ? window.currentScale * scene.cameras.trueScale : window.currentScale)
            scene.cameras.main.setOrigin(0, 0)
        }

        if (this.shell) this.shell.events.emit('updateScaling')
    }

    lowerQuality() {
        if (this.shell.settings.vq >= 3) {
            this.shell.settings.vq = 2
            window.currentScale = 0.7
        } else if (this.shell.settings.vq == 2) {
            this.shell.settings.vq = 1
            window.currentScale = 0.4
        }
        window.updateScaling()
    }

    raiseQuality() {
        if (this.shell.settings.vq <= 1) {
            this.shell.settings.vq = 2
            window.currentScale = 0.7
        } else if (this.shell.settings.vq == 2) {
            this.shell.settings.vq = 3
            window.currentScale = 1
        }
        window.updateScaling()
    }

    async create() {
        let fontLoader = new FontLoader(this.crumbs)
        fontLoader.events.once('fontsLoaded', () => {
            this._create()
        })
    }

    _create() {
        let parent = this.game.config.parent

        document.querySelector(`#${parent} canvas`).onclick = () => {
            // Removes input focus from active element
            document.activeElement.blur()
        }

        let lang = window.location.pathname.split('/')[1]

        // Set crumbs
        let crumbs = this.cache.json.get(`crumbs-en`)

        for (let c in crumbs) {
            this.crumbs[c] = crumbs[c]
        }

        this.crumbs.getString = (key) => {
            if (!key) return
            let result = this.crumbs.strings[key.split(',')[0].toLowerCase()]

            if (!result) {
                console.warn(`Missing localised string: ${key}`)
                return key
            }

            if (!key.includes(',')) {
                return result
            }

            let args = key.split(',').slice(1)

            for (let i = 0; i < args.length; i++) {
                result = result.replace(`{args[${i}]}`, args[i])
            }

            return result
        }

        this.crumbs.getError = (key) => {
            key = key.toString()
            let result = this.crumbs.strings.errors[key]

            if (!key.includes(',')) {
                return result
            }

            result = this.crumbs.strings.errors[key.split(',')[0]]
            let args = key.split(',').slice(1)

            for (let i = 0; i < args.length; i++) {
                result = result.replace(`{args[${i}]}`, args[i])
            }

            return result
        }

        // Start
        this.interface.hideLoading()
        this.scene.start('InterfaceController')
        // let queryString = window.location.href.substring(window.location.href.indexOf('?') + 1, window.location.href.length)
        this.scene.start('Shell')    
}

    send2FA(id, code) {
        this.airtower.connectLogin(false, false, () => {
            this.airtower.sendXml(`<msg t='sys'><body action='2fa' r='0'><id>${id}</id><code>${code}</code></body></msg>`)
        })
    }

    onProgress(progress) {
        let frame = Math.round(progress * 58) + 1
        let prog = frame.toString().length == 1 ? `0${frame}` : frame
        this.interface.loading.bar.anims.stop()
        this.interface.loading.bar.setFrame(`beam_00${prog}`)
    }
}
