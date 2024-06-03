import MusicLoader from './MusicLoader'
import SfxLoader from './SfxLoader'

export default class MusicController extends Phaser.Scene {
    create() {
        this.musicLoader = new MusicLoader(this)
        this.sfxLoader = new SfxLoader(this)
        this.lastPlayed = {}
        this.sfxLooping = []
    }

    get shell() {
        return this.scene.get('Shell')
    }

    get musicMuted() {
        return this.shell.settings.mv == 0
    }

    get sfxMuted() {
        return this.shell.settings.sv == 0
    }

    addMusic(track, fileExtension = 'mp3') {
        if (track == 0) {
            this.sound.stopAll()
            this.music = null
            this.musicPlaying = null
            this.mtrack = null
            return
        }

        if (track == this.music || `music/${track}` == this.musicPlaying) {
            return
        }

        this.sound.stopAll()
        this.mtrack = null

        if (this.musicMuted) return

        let audio = 0
        // for (let item of Object.keys(this.shell.cache.audio.entries.entries)) {
        //     if (item != `music/${track}`) {
        //         this.shell.room.cache.audio.remove(item)
        //         audio++
        //     }
        // }
        if (audio > 0) console.info(`[MemoryManager] Unloaded ${audio} audio file${audio > 1 ? 's' : ''}`)

        this.music = track

        if (!this.cache.audio.exists(`music/${track}`)) {
            this.musicLoader.loadFile(track, fileExtension)
        } else {
            this.play(`music/${track}`)
        }
    }

    addSfx(track, loop, fileExtension = 'mp3', volume = 1) {
        if (this.sfxMuted) return
        if (!this.cache.audio.exists(`sfx/${track}`)) {
            this.sfxLoader.loadFile(track, fileExtension, loop, volume)
        } else {
            this.playSfx(`sfx/${track}`, loop, volume)
        }
    }

    play(key) {
        if (key !== `music/${this.music}` || key == this.musicPlaying) {
            return
        }

        this.mtrack = this.sound.add(key, {loop: true, volume: this.shell.settings.mv})
        this.mtrack.play()
        this.musicPlaying = key
    }

    playSfx(key, loop = false, volume = 1) {
        // Rate limit to 20 sounds per second
        if (this.lastPlayed[key] && Date.now() - this.lastPlayed[key] < 50) return
        this.lastPlayed[key] = Date.now()
        this.sound.add(key, {loop: loop, volume: this.shell.settings.sv * volume}).play()
        if (loop) {
            this.sfxLooping.push(key)
        }
    }

    stopSfx(track) {
        this.sound.stopByKey(`sfx/${track}`)
        this.sfxLooping.filter((key) => key !== `sfx/${track}`)
    }

    stopLoopingSfx() {
        this.sfxLooping.forEach((key) => {
            this.sfxLooping.splice(this.sfxLooping.indexOf(key), 1)
            this.sound.stopByKey(key)
        })
    }

    shufflePlaylist(playlist) {
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let shuffled = []
        while (list.length) {
            let i = Math.floor(Math.random() * list.length)
            shuffled.push(`radio/${playlist}/${playlist}${list[i]}`)
            list.splice(i, 1)
        }
        this.playPlaylist(shuffled)
    }

    playPlaylist(playlist) {
        this.playlist = playlist
        this.playlistIndex = 0
        this.playNext()
    }

    playNext() {
        if (this.playlistIndex >= this.playlist.length) {
            this.playlistIndex = 0
        }
        this.addMusic(this.playlist[this.playlistIndex])
        this.playlistIndex++
        setTimeout(() => {
            this.mtrack.onStop(this.playNext, this)
        }, 20000)
    }

    setMusicVolume(volume) {
        this.shell.settings.mv = volume
        if (this.mtrack) {
            this.mtrack.setVolume(volume)
        } else if (this.shell.room.music) {
            this.addMusic(this.shell.room.music)
        }
    }

    setSfxVolume(volume) {
        this.shell.settings.sv = volume
        if (this.sfxLooping) {
            this.sfxLooping.forEach((key) => {
                this.sound.setVolume(volume, key)
            })
        }
    }
}
