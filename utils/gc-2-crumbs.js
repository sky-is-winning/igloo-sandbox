// Converts AS3 'game config' JSONs to the format used in CP+

const fs = require('fs')
const path = require('path')
const langs = ['en', 'pt', 'es']

const configs = ['cards.json', 'furniture_items.json', 'igloo_floors.json', 'igloo_locations.json', 'igloo_music_tracks.json', 'igloos.json', 'jokes.json', 'mascot_messages.json', 'mascots.json', 'paper_items.json', 'polaroids.json', 'postcards.json', 'puffle_items.json', 'puffles_v2.json', 'safe_chat_messages.json', 'stamps.json', 'tour_guide_messages.json']

for (let lang of langs) {
    let input = path.resolve(__dirname, `../assets/media/game_configs/${lang}/web_service/game_configs/`)
    let output = path.resolve(__dirname, `../assets/media/crumbs/${lang}`)

    for (let file of fs.readdirSync(input)) {
        if (!configs.includes(file)) continue
        let crumb = processConfig(file, input)
        fs.writeFileSync(`${output}/${getNewFileName(file)}`, JSON.stringify(crumb, null, 4))
    }
}

function getNewFileName(file) {
    switch (file) {
        case 'paper_items.json':
            return 'items.json'
        case 'furniture_items.json':
            return 'furniture.json'
        case 'igloo_floors.json':
            return 'flooring.json'
        case 'igloo_locations.json':
            return 'locations.json'
        case 'igloo_music_tracks.json':
            return 'igloo_music.json'
        case 'puffles_v2.json':
            return 'puffles.json'
        case 'safe_chat_messages.json':
            return 'safe_messages.json'
        case 'tour_guide_messages.json':
            return 'tour_messages.json'
        default:
            return file
    }
}

function processConfig(file, input) {
    var fileData = fs.readFileSync(`${input}/${file}`, 'utf8')
    fileData = JSON.parse(fileData)

    let crumb
    let crumbFormat = getCrumbFormat(file)

    if (file == 'stamps.json') {
        crumb = {}
        for (let i in fileData) {
            for (let j of fileData[i].stamps) {
                crumb[j.stamp_id] = {
                    name: j.name,
                    groupid: fileData[i].group_id,
                    difficulty: j.rank,
                    description: j.description
                }
            }
        }
    } else if (crumbFormat == 'array') {
        crumb = []
        for (let item of fileData) {
            crumb.push(getCrumb(file, item))
        }
    } else {
        crumb = {}
        for (let i in fileData) {
            let item = fileData[i]
            crumb[getIdentifier(file, item) || i] = getCrumb(file, item)
        }
    }

    return crumb
}

function getCrumbFormat(file) {
    switch (file) {
        case 'safe_chat_messages.json':
        case 'jokes.json':
            return 'array'
        default:
            return 'object'
    }
}

function getIdentifier(file, item) {
    switch (file) {
        case 'paper_items.json':
            return item.paper_item_id
        case 'cards.json':
            return item.card_id
        case 'furniture_items.json':
            return item.furniture_item_id
        case 'igloo_floors.json':
            return item.igloo_floor_id
        case 'igloo_locations.json':
            return item.igloo_location_id
        case 'igloo_music_tracks.json':
            return ''
        case 'igloos.json':
            return item.igloo_id
        case 'mascot_messages.json':
            return item.mascotName
        case 'mascots.json':
        case 'polaroids.json':
            return item.name
        case 'postcards.json':
        case 'tour_guide_messages.json':
            return null
        case 'puffle_items.json':
            return item.puffle_item_id
        case 'puffles_v2.json':
            return item.puffle_id
        default:
            return item.id
    }
}

function getCrumb(file, item) {
    switch (file) {
        case 'paper_items.json':
            return {
                name: item.label,
                type: parseInt(item.type),
                cost: parseInt(item.cost)
            }
        case 'cards.json':
            return {
                name: item.name,
                color: item.color,
                value: parseInt(item.value),
                description: item.description,
                powerId: parseInt(item.power_id),
                element: item.element
            }
        case 'furniture_items.json':
            return {
                name: item.label,
                type: parseInt(item.type),
                sort: parseInt(item.sort),
                cost: parseInt(item.cost),
                max: parseInt(item.max_quantity)
            }
        case 'igloo_floors.json':
            return {
                name: item.label,
                cost: parseInt(item.cost)
            }
        case 'igloo_locations.json':
            return {
                name: item.name,
                cost: parseInt(item.cost)
            }
        case 'igloo_music_tracks.json':
            return {}
        case 'igloos.json':
            return {
                name: item.name,
                cost: parseInt(item.cost)
            }
        case 'jokes.json':
            return {
                joke: item.split('|')[0],
                punchline: item.split('|')[1]
            }
        case 'mascot_messages.json':
            var categories = {}
            for (let category of item.mascotScript) {
                categories[category.category] = category.script
            }
            return categories
        case 'mascots.json':
            return {
                gift: parseInt(item.gift_id),
                ids: item.ids
            }
        case 'polaroids.json':
            let polaroids = []
            item.polaroids.forEach((polaroid) => {
                polaroids.push({
                    id: parseInt(polaroid.polaroid_id),
                    stamps: parseInt(polaroid.stamp_count)
                })
            })
            return polaroids
        case 'postcards.json':
            postcards = {}
            for (let p in item) {
                if (p == 'order_position') continue
                postcards[p] = item[p].subject
            }
            return postcards
        case 'puffle_items.json':
            return {
                name: item.label,
                asset: item.asset,
                cost: parseInt(item.cost),
                quantity: parseInt(item.quantity),
                parent: parseInt(item.root_item_id),
                consumption: item.consumption,
                type: item.type,
                purchase: item.only_purchase,
                effect: item.effect,
                reaction: item.reaction
            }
        case 'puffles_v2.json':
            return {
                parent: item.parent_puffle_id,
                name: item.description,
                color: item.color
            }
        case 'safe_chat_messages.json':
            return convertSafeChat(item)
        case 'tour_guide_messages.json':
            return item.split('|')
    }
}

function convertSafeChat(item) {
    if (!item) return undefined
    if (!item.menu) {
        return {
            id: item.id,
            name: item.message
        }
    }
    var menu = []
    item.menu.forEach((m) => {
        menu.push(convertSafeChat(m))
    })
    return {
        id: item.id,
        name: item.message,
        menu: menu
    }
}
