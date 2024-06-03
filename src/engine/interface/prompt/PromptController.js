import ErrorPrompt from './ErrorPrompt'
import LoadingPrompt from '@scenes/interface/prompts/LoadingPrompt'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'

export default class PromptController {
    constructor(_interface) {
        this.interface = _interface

        this.error = new ErrorPrompt(_interface, 760, 480)
        this.loading = new LoadingPrompt(_interface, 760, 480)
        this.window = new WindowPrompt(_interface, 760, 480)

        _interface.add.existing(this.error)
        _interface.add.existing(this.loading)
        _interface.add.existing(this.window)
    }

    hideAllForIP() {
        this.setCursor()

        for (let i of ['error', 'loading', 'window']) {
            this[i].visible = false
        }

        this.interface.bringToTop(this.item)
    }

    showError(
        text,
        buttonText = this.interface.crumbs.getString('okay'),
        callback = () => {
            this.error.visible = false
            this.error.disconnectOverwrite = false
        },
        disconnectOverwrite = false
    ) {
        this.error.disconnectOverwrite = disconnectOverwrite ? true : false
        this.error.show(text, buttonText, callback)
        this.setCursor()

        for (let i of ['item', 'loading', 'window']) {
            this[i].visible = false
        }

        this.interface.bringToTop(this.error)
    }

    showItem(item, isMedals) {
        for (let i of ['error', 'loading', 'window']) {
            this[i].visible = false
        }

        this.item.showItem(item, isMedals)
        this.setCursor()

        this.interface.bringToTop(this.item)
    }

    showFurniture(item) {
        this.item.showFurniture(item)
        this.hideAllForIP()
    }

    showIgloo(item) {
        this.item.showIgloo(item)
        this.hideAllForIP()
    }

    showFlooring(item) {
        this.item.showFlooring(item)
        this.hideAllForIP()
    }

    showLocation(item) {
        this.item.showLocation(item)
        this.hideAllForIP()
    }

    showLoading(scene, progress = 0) {
        this.loading.show(scene, progress)
        this.setCursor()

        for (let i of ['error', 'window']) {
            this[i].visible = false
        }

        this.interface.bringToTop(this.loading)
    }

    showWindow(text, buttonLayout = 'single', callback = () => {}, noCallback = () => (this.window.visible = false)) {
        this.window.show(text, buttonLayout, callback, noCallback)
        this.setCursor()

        for (let i of ['error', 'loading']) {
            this[i].visible = false
        }

        this.interface.bringToTop(this.window)
    }

    showCoins(game, coins) {
        this.coins.show(game, coins)
        this.setCursor()

        for (let i of ['error', 'loading', 'window']) {
            this[i].visible = false
        }

        this.interface.bringToTop(this.coins)
    }

    showWarn(type, reason) {
        switch (type) {
            case 'ban':
                this.warn.showBan(reason)
                break
            case 'warn':
                this.warn.showWarn('c')
                break
            case 'kick':
                this.warn.showWarn('k')
                break
        }

        this.setCursor()

        for (let i of ['error', 'loading', 'window']) {
            this[i].visible = false
        }

        this.interface.bringToTop(this.warn)
    }

    showStamp(stamp) {
        this.stamp.stampEarnedBody.text = this.interface.crumbs.stamps[stamp].name
        if (this.interface.crumbs.stamps[stamp].groupid == 7) {
            this.stamp.stampEarnedImage.setFrame(`stamps/activities000${this.interface.crumbs.stamps[stamp].difficulty.toString()}`)
        } else {
            this.stamp.stampEarnedImage.setFrame(`stamps/events000${this.interface.crumbs.stamps[stamp].difficulty.toString()}`)
        }
        this.stamp.stampTween()
        this.setCursor()
        this.interface.bringToTop(this.stamp)
    }

    hideAll() {
        for (let i of ['error', 'loading', 'window']) {
            this[i].visible = false
        }
    }

    setCursor() {
        this.interface.input.setDefaultCursor('default')
    }
}
