export default class Airtower {
    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs
    }

    sendXt(data) {
        console.log('sendXt', data)
    }

    get interface() {
        let inf = this.game.scene.getScene('InterfaceController')
        inf.bringToTop()
        return inf
    }

    get language() {
        for (let lang of ['en', 'es', 'pt']) {
            if (window.location.pathname.includes(lang)) {
                return lang
            }
        }
        return 'en'
    }
}
