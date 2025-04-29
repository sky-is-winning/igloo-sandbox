export default class IglooFactory {
    constructor(shell) {
        this.shell = shell
    }

    get scene() {
        return this.shell.scene
    }

    get igloos() {
        return this.shell.crumbs.scenes.igloos
    }

    createIgloo(args) {
        let config = this.igloos[args[2]]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, {args: args})

            return this.scene.get(config.key)
        } else {
            return this.scene.add(config.key, config.scene, true, {args: args})
        }
    }
}
