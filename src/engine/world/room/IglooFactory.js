export default class IglooFactory {
    constructor(shell) {
        this.shell = shell
        window.if = this
    }

    get scene() {
        return this.shell.scene
    }

    get igloos() {
        return this.shell.crumbs.scenes.igloos
    }

    createIgloo(args) {
        let config = this.igloos[args[2]]
        let trueKey = `${config.key}-igloo`

        if (trueKey in this.scene.manager.keys) {
            console.log(args)
            this.scene.start(trueKey, {args: args})

            return this.scene.get(trueKey)
        } else {
            return this.scene.add(config.key, config.scene, true, {args: args})
        }
    }
}
