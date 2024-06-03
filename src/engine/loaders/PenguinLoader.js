import PenguinSpriteFactory from '@engine/loaders/PenguinSpriteFactory'

export default class PenguinLoader {
    constructor(shell) {
        this.shell = shell

        this.clientNameStyle = {
            fontFamily: 'cpBurbankSmall',
            fontSize: 24,
            color: '#ffffff',
            stroke: '#3a3a3aff',
            strokeThickness: 8,
            align: 'center',
            fixedWidth: 250
        }

        this.nameStyle = {
            fontFamily: 'cpBurbankSmall',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: 250
        }
    }

    loadPenguin(penguin) {
        this.addPenguin(penguin)
        this.addShadow(penguin)
        this.addInput(penguin)

        penguin.playFrame(penguin.frame)
    }

    addPenguin(penguin) {
    }

    addShadow(penguin) {
        if (penguin.room.isEmu) return
        let shadow = penguin.room.add.image(0, 0, 'penguin_base', 'shadow')

        penguin.addAt(shadow, 0)
    }

    addRing(penguin) {
        if (penguin.room.isEmu) return
        let ring = penguin.room.add.image(0, 0, 'penguin_base', 'ring')

        penguin.addAt(ring, 0)
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40
        let nameTag = penguin.room.add.container(x, y)
        let first = penguin.room.add.text(0, 0, penguin.username, this.shell.client.id == penguin.id ? this.clientNameStyle : this.nameStyle)
        first.setOrigin(0.5)
        nameTag.add(first)
        if (penguin.username != penguin.realUsername && (this.shell.client.id == penguin.id || this.shell.client.rank >= 3)) {
            let second = penguin.room.add.text(0, 30, `(${penguin.realUsername})`, this.nameStyle)
            second.setOrigin(0.5)
            nameTag.add(second)
        }

        nameTag.depth = penguin.depth + 2000 // Keep nametag above everything else
        return nameTag
    }

    addInput(penguin) {
        let hitArea = new Phaser.Geom.Ellipse(0, -20, 70, 90)

        penguin.setInteractive({
            cursor: 'pointer',
            hitArea: hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains
        })

        penguin.on('pointerup', () => this.onPenguinClick(penguin.id))
    }

    onPenguinClick(id) {
        this.shell.interface.showCard(id)
    }
}
