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
        if (!args || args.length < 6) {
            console.error('Invalid arguments for igloo creation.')
            args = ['1', '', '1', '0', '0', '1', '']
        }
        let config = this.igloos[args[2]]
        let trueKey = `${config.key}-igloo`

        if (trueKey in this.scene.manager.keys) {
            this.scene.start(trueKey, {args: args})

            return this.scene.get(trueKey)
        } else {
            return this.scene.add(config.key, config.scene, true, {args: args})
        }
    }
}
