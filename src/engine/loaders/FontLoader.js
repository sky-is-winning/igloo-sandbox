export default class FontLoader {
    constructor(crumbs) {
        this.crumbs = crumbs
        this.events = new Phaser.Events.EventEmitter()
        this.fontsLoaded = 0
        this.abandonFontsTimeout = setTimeout(() => {
            console.warn(`Abandoning font loading after 10 seconds. Loaded ${this.fontsLoaded} fonts.`)
            this.events.emit('fontsLoaded')
        }, 10000)
        for (let font of this.crumbs.fonts) {
            this.loadFont(font.name, font.url, font.style ? font.style : 'normal', font.weight ? font.weight : 'normal')
        }
    }

    async loadFont(name, url, style = 'normal', weight = 'normal') {
        var newFont = new FontFace(name, `url('${url}')`, {
            style: style,
            weight: weight
        })
        await newFont.load()
        document.fonts.add(newFont)
        this.fontsLoaded++
        if (this.fontsLoaded == this.crumbs.fonts.length) {
            clearTimeout(this.abandonFontsTimeout)
            this.events.emit('fontsLoaded')
        }
    }
}
