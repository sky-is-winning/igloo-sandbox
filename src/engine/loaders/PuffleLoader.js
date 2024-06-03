import BaseLoader from './BaseLoader'

export default class PuffleLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/puffles/'
        this.hostname = this.shell.baseURL
        this.baseURL = `${this.hostname}${suffix}`
        this.keyPrefix = 'puffles/'
    }

    loadAudio(animation, puffle, audioFiles) {
        for (let audioFile of audioFiles) {
            let key = `sfx/${audioFile}`
            let url = `${this.hostname}/client/media/sounds/${audioFile}.mp3`
            this.audio(key, url)
        }

        switch (animation) {
            case 'tricks/nuzzle':
                this.audio(`sfx/puffle-${puffle}-nuzzle-moan`, `${this.hostname}/client/media/sounds/puffle-${puffle}-nuzzle-moan.mp3`)
                break
            case 'tricks/speak':
                this.audio(`sfx/puffle-${puffle}-speak`, `${this.hostname}/client/media/sounds/puffle-${puffle}-speak.mp3`)
                break
        }
    }

    loadPuffle(animation, puffle) {
        let key = this.getKey(`${animation}/${puffle}`)

        setTimeout(() => {
            if (this.textureExists(key)) {
                this.onFileComplete(key, animation, puffle, 0)
            }
        }, 100)

        switch (animation) {
            case 'tricks/standonhead':
                this.loadAudio(animation, puffle, ['puffle-all-headstand-up', 'puffle-all-headstand-down'])
                break
            case 'tricks/jumpforward':
                this.loadAudio(animation, puffle, ['puffle-all-jumpforward'])
                break
            case 'tricks/jumpspin':
                this.loadAudio(animation, puffle, ['puffle-all-jumpspin'])
                break
            case 'tricks/nuzzle':
                this.loadAudio(animation, puffle, ['puffle-all-nuzzle-come', 'puffle-all-nuzzle-go'])
                break
            case 'tricks/roll':
                this.loadAudio(animation, puffle, ['puffle-all-roll-away', 'puffle-all-roll-return'])
                break
            case 'tricks/speak':
                this.loadAudio(animation, puffle, [])
                break
        }

        this.multiatlas(key, `${animation}/${puffle}.json`, animation)
        this.start()
    }

    onFileComplete(key, animation, puffle, tries) {
        if (tries > 100) {
            return
        }
        tries++
        if (!this.textureExists(key)) {
            return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
        }

        const audioExists = (key) => this.scene.cache.audio.exists(key)

        switch (animation) {
            case 'tricks/standonhead':
                if (!audioExists('sfx/puffle-all-headstand-up')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                if (!audioExists('sfx/puffle-all-headstand-down')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                break
            case 'tricks/jumpforward':
                if (!audioExists('sfx/puffle-all-jumpforward')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                break
            case 'tricks/jumpspin':
                if (!audioExists('sfx/puffle-all-jumpspin')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                break
            case 'tricks/nuzzle':
                if (!audioExists('sfx/puffle-all-nuzzle-come')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                if (!audioExists('sfx/puffle-all-nuzzle-go')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                if (!audioExists(`sfx/puffle-${puffle}-nuzzle-moan`)) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                break
            case 'tricks/roll':
                if (!audioExists('sfx/puffle-all-roll-away')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                if (!audioExists('sfx/puffle-all-roll-return')) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                break
            case 'tricks/speak':
                if (!audioExists(`sfx/puffle-${puffle}-speak`)) {
                    return setTimeout(() => this.onFileComplete(key, animation, puffle, tries), 100)
                }
                break
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
