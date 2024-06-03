import BaseScene from '@scenes/base/BaseScene'

import InterfaceController from '@engine/interface/InterfaceController'
import Shell from '@engine/world/Shell'
import MusicController from '@engine/world/music/MusicController'

import Load from '@scenes/interface/menus/load/Load'
import Preload from '@engine/boot/Preload'

export default class Boot extends BaseScene {
    create() {
        this.scene.add('InterfaceController', InterfaceController)
        this.scene.add('Shell', Shell)
        let m = this.scene.add('MusicController', MusicController)
        m.create()

        this.scene.add('Load', Load)

        this.interface.showLoading('Loading Content', true)
        this.interface.loading.events.once('create', this.onLoadCreate, this)
    }

    onLoadCreate() {
        this.scene.add('Preload', Preload, true)
    }
}
