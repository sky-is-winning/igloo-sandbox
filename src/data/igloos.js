const igloos = {
    0: {
        key: 'Empty',
        scene: require('@igloos/empty/Empty').default,
        preview: require('@igloos/empty/Empty-preview').default,
        x: 760,
        y: 640
    },
    1: {
        key: 'Basic',
        scene: require('@igloos/basic/Basic').default,
        preview: require('@igloos/basic/Basic-preview').default,
        x: 760,
        y: 660
    },
    2: {
        key: 'Candy',
        scene: require('@igloos/candy/Candy').default,
        preview: require('@igloos/candy/Candy-preview').default,
        x: 760,
        y: 660
    },
    3: {
        key: 'DeluxeBlue',
        scene: require('@igloos/deluxeblue/DeluxeBlue').default,
        preview: require('@igloos/deluxeblue/DeluxeBlue-preview').default,
        x: 720,
        y: 600
    },
    4: {
        key: 'BigCandy',
        scene: require('@igloos/bigcandy/BigCandy').default,
        preview: require('@igloos/bigcandy/BigCandy-preview').default,
        x: 720,
        y: 600
    },
    5: {
        key: 'Stone',
        scene: require('@igloos/stone/Stone').default,
        preview: require('@igloos/stone/Stone-preview').default,
        x: 760,
        y: 660
    },
    6: {
        key: 'Snow',
        scene: require('@igloos/snow/Snow').default,
        preview: require('@igloos/snow/Snow-preview').default,
        x: 760,
        y: 660
    },
    8: {
        key: 'DeluxeStone',
        scene: require('@igloos/deluxestone/DeluxeStone').default,
        preview: require('@igloos/deluxestone/DeluxeStone-preview').default,
        x: 720,
        y: 600
    },
    9: {
        key: 'DeluxeSnow',
        scene: require('@igloos/deluxesnow/DeluxeSnow').default,
        preview: require('@igloos/deluxesnow/DeluxeSnow-preview').default,
        x: 720,
        y: 600
    },
    10: {
        key: 'BambooHut',
        scene: require('@igloos/bamboohut/BambooHut').default,
        preview: require('@igloos/bamboohut/BambooHut-preview').default,
        x: 770,
        y: 770
    },
    11: {
        key: 'LogCabin',
        scene: require('@igloos/logcabin/LogCabin').default,
        preview: require('@igloos/logcabin/LogCabin-preview').default,
        x: 760,
        y: 720
    },
    12: {
        key: 'Gym',
        scene: require('@igloos/gym/Gym').default,
        preview: require('@igloos/gym/Gym-preview').default,
        x: 760,
        y: 720
    },
    13: {
        key: 'SplitLevel',
        scene: require('@igloos/splitlevel/SplitLevel').default,
        preview: require('@igloos/splitlevel/SplitLevel-preview').default,
        x: 310,
        y: 700
    },
    14: {
        key: 'CandySplitLevel',
        scene: require('@igloos/candysplitlevel/CandySplitLevel').default,
        preview: require('@igloos/candysplitlevel/CandySplitLevel-preview').default,
        x: 310,
        y: 700
    },
    15: {
        key: 'Snowglobe',
        scene: require('@igloos/snowglobe/Snowglobe').default,
        preview: require('@igloos/snowglobe/Snowglobe-preview').default,
        x: 760,
        y: 600
    },
    16: {
        key: 'IceCastle',
        scene: require('@igloos/icecastle/IceCastle').default,
        preview: require('@igloos/icecastle/IceCastle-preview').default,
        x: 760,
        y: 700
    },
    17: {
        key: 'SplitLevelSnow',
        scene: require('@igloos/splitlevelsnow/SplitLevelSnow').default,
        preview: require('@igloos/splitlevelsnow/SplitLevelSnow-preview').default,
        x: 310,
        y: 700
    },
    18: {
        key: 'FishBowl',
        scene: require('@igloos/fishbowl/FishBowl').default,
        preview: require('@igloos/fishbowl/FishBowl-preview').default,
        x: 760,
        y: 640
    },
    19: {
        key: 'Tent',
        scene: require('@igloos/tent/Tent').default,
        preview: require('@igloos/tent/Tent-preview').default,
        x: 760,
        y: 710
    },
    20: {
        key: 'JackOLantern',
        scene: require('@igloos/jackolantern/JackOLantern').default,
        preview: require('@igloos/jackolantern/JackOLantern-preview').default,
        x: 760,
        y: 560
    },
    21: {
        key: 'Backyard',
        scene: require('@igloos/backyard/Backyard').default,
        preview: require('@igloos/backyard/Backyard-preview').default,
        x: 310,
        y: 700
    },
    22: {
        key: 'PinkIcePalace',
        scene: require('@igloos/pinkicepalace/PinkIcePalace').default,
        preview: require('@igloos/pinkicepalace/PinkIcePalace-preview').default,
        x: 760,
        y: 700
    },
    23: {
        key: 'Ship',
        scene: require('@igloos/ship/Ship').default,
        preview: require('@igloos/ship/Ship-preview').default,
        x: 760,
        y: 620
    },
    24: {
        key: 'Dojo',
        scene: require('@igloos/dojo/Dojo').default,
        preview: require('@igloos/dojo/Dojo-preview').default,
        x: 760,
        y: 650
    },
    25: {
        key: 'GingerbreadHouse',
        scene: require('@igloos/gingerbreadhouse/GingerbreadHouse').default,
        preview: require('@igloos/gingerbreadhouse/GingerbreadHouse-preview').default,
        x: 760,
        y: 720
    },
    26: {
        key: 'Restaurant',
        scene: require('@igloos/restaurant/Restaurant').default,
        preview: require('@igloos/restaurant/Restaurant-preview').default,
        x: 760,
        y: 720
    },
    27: {
        key: 'TreeHouse',
        scene: require('@igloos/treehouse/TreeHouse').default,
        preview: require('@igloos/treehouse/TreeHouse-preview').default,
        x: 1260,
        y: 570
    },
    28: {
        key: 'Theatre',
        scene: require('@igloos/theatre/Theatre').default,
        preview: require('@igloos/theatre/Theatre-preview').default,
        x: 760,
        y: 720
    },
    29: {
        key: 'Circus',
        scene: require('@igloos/circus/Circus').default,
        preview: require('@igloos/circus/Circus-preview').default,
        x: 760,
        y: 710
    },
    30: {
        key: 'SnowyBackyard',
        scene: require('@igloos/snowybackyard/SnowyBackyard').default,
        preview: require('@igloos/snowybackyard/SnowyBackyard-preview').default,
        x: 310,
        y: 700
    },
    31: {
        key: 'Cave',
        scene: require('@igloos/cave/Cave').default,
        preview: require('@igloos/cave/Cave-preview').default,
        x: 760,
        y: 600
    },
    32: {
        key: 'GreenClover',
        scene: require('@igloos/greenclover/GreenClover').default,
        preview: require('@igloos/greenclover/GreenClover-preview').default,
        x: 310,
        y: 700
    },
    33: {
        key: 'GreyIceCastle',
        scene: require('@igloos/greyicecastle/GreyIceCastle').default,
        preview: require('@igloos/greyicecastle/GreyIceCastle-preview').default,
        x: 760,
        y: 700
    },
    35: {
        key: 'CozyCottage',
        scene: require('@igloos/cozycottage/CozyCottage').default,
        preview: require('@igloos/cozycottage/CozyCottage-preview').default,
        x: 326,
        y: 428
    },
    36: {
        key: 'Estate',
        scene: require('@igloos/estate/Estate').default,
        preview: require('@igloos/estate/Estate-preview').default,
        x: 760,
        y: 700
    },
    37: {
        key: 'InHalf',
        scene: require('@igloos/inhalf/InHalf').default,
        preview: require('@igloos/inhalf/InHalf-preview').default,
        x: 640,
        y: 620
    },
    38: {
        key: 'ShadowyKeep',
        scene: require('@igloos/shadowykeep/ShadowyKeep').default,
        preview: require('@igloos/shadowykeep/ShadowyKeep-preview').default,
        x: 760,
        y: 700
    },
    39: {
        key: 'DragonsLair',
        scene: require('@igloos/dragonslair/DragonsLair').default,
        preview: require('@igloos/dragonslair/DragonsLair-preview').default,
        x: 760,
        y: 700
    },
    40: {
        key: 'MermaidCove',
        scene: require('@igloos/mermaidcove/MermaidCove').default,
        preview: require('@igloos/mermaidcove/MermaidCove-preview').default,
        x: 772,
        y: 528
    },
    41: {
        key: 'WhalesMouth',
        scene: require('@igloos/whalesmouth/WhalesMouth').default,
        preview: require('@igloos/whalesmouth/WhalesMouth-preview').default,
        x: 760,
        y: 580
    },
    42: {
        key: 'TrickOrTreat',
        scene: require('@igloos/trickortreat/TrickOrTreat').default,
        preview: require('@igloos/trickortreat/TrickOrTreat-preview').default,
        x: 740,
        y: 626
    },
    43: {
        key: 'DeluxeGingerbreadHouse',
        scene: require('@igloos/deluxegingerbreadhouse/DeluxeGingerbreadHouse').default,
        preview: require('@igloos/deluxegingerbreadhouse/DeluxeGingerbreadHouse-preview').default,
        x: 554,
        y: 710
    },
    49: {
        key: 'Shipwreck',
        scene: require('@igloos/shipwreck/Shipwreck').default,
        preview: require('@igloos/shipwreck/Shipwreck-preview').default,
        x: 640,
        y: 620
    },
    50: {
        key: 'WildlifeDen',
        scene: require('@igloos/wildlifeden/WildlifeDen').default,
        preview: require('@igloos/wildlifeden/WildlifeDen-preview').default,
        x: 760,
        y: 680
    },
    51: {
        key: 'MedievalManor',
        scene: require('@igloos/medievalmanor/MedievalManor').default,
        preview: require('@igloos/medievalmanor/MedievalManor-preview').default,
        x: 502,
        y: 600
    },
    52: {
        key: 'Warehouse',
        scene: require('@igloos/warehouse/Warehouse').default,
        preview: require('@igloos/warehouse/Warehouse-preview').default,
        x: 760,
        y: 720
    },
    53: {
        key: 'Pineapple',
        scene: require('@igloos/pineapple/Pineapple').default,
        preview: require('@igloos/pineapple/Pineapple-preview').default,
        x: 506,
        y: 690
    },
    54: {
        key: 'CreepyCavern',
        scene: require('@igloos/creepycavern/CreepyCavern').default,
        preview: require('@igloos/creepycavern/CreepyCavern-preview').default,
        x: 720,
        y: 480
    },
    55: {
        key: 'FrostBitePalace',
        scene: require('@igloos/frostbitepalace/FrostBitePalace').default,
        preview: require('@igloos/frostbitepalace/FrostBitePalace-preview').default,
        x: 720,
        y: 480
    },
    56: {
        key: 'FreshBakedGingerbreadHouse',
        scene: require('@igloos/freshbakedgingerbreadhouse/FreshBakedGingerbreadHouse').default,
        preview: require('@igloos/freshbakedgingerbreadhouse/FreshBakedGingerbreadHouse-preview').default,
        x: 554,
        y: 710
    },
    57: {
        key: 'Penthouse',
        scene: require('@igloos/penthouse/Penthouse').default,
        preview: require('@igloos/penthouse/Penthouse-preview').default,
        x: 380,
        y: 580
    },
    58: {
        key: 'VIPPenthouse',
        scene: require('@igloos/vippenthouse/VIPPenthouse').default,
        preview: require('@igloos/vippenthouse/VIPPenthouse-preview').default,
        x: 380,
        y: 580
    },
    60: {
        key: 'PuffleTreeFort',
        scene: require('@igloos/puffletreefort/PuffleTreeFort').default,
        preview: require('@igloos/puffletreefort/PuffleTreeFort-preview').default,
        x: 710,
        y: 650
    },
    61: {
        key: 'SecretBase',
        scene: require('@igloos/secretbase/SecretBase').default,
        preview: require('@igloos/secretbase/SecretBase-preview').default,
        x: 300,
        y: 700
    },
    62: {
        key: 'ImperialBase',
        scene: require('@igloos/imperialbase/ImperialBase').default,
        preview: require('@igloos/imperialbase/ImperialBase-preview').default,
        x: 770,
        y: 650
    },
    63: {
        key: 'BeachParty',
        scene: require('@igloos/beachparty/BeachParty').default,
        preview: require('@igloos/beachparty/BeachParty-preview').default,
        x: 480,
        y: 460
    },
    64: {
        key: 'Gymnasium',
        scene: require('@igloos/gymnasium/Gymnasium').default,
        preview: require('@igloos/gymnasium/Gymnasium-preview').default,
        x: 760,
        y: 700
    },
    65: {
        key: 'MagicalHideout',
        scene: require('@igloos/magicalhideout/MagicalHideout').default,
        preview: require('@igloos/magicalhideout/MagicalHideout-preview').default,
        x: 760,
        y: 760
    },
    66: {
        key: 'EerieCastle',
        scene: require('@igloos/eeriecastle/EerieCastle').default,
        preview: require('@igloos/eeriecastle/EerieCastle-preview').default,
        x: 760,
        y: 460
    },
    67: {
        key: 'SweetSwirl',
        scene: require('@igloos/sweetswirl/SweetSwirl').default,
        preview: require('@igloos/sweetswirl/SweetSwirl-preview').default,
        x: 720,
        y: 480
    },
    68: {
        key: 'TrainStation',
        scene: require('@igloos/trainstation/TrainStation').default,
        preview: require('@igloos/trainstation/TrainStation-preview').default,
        x: 430,
        y: 560
    },
    69: {
        key: 'MainEvent',
        scene: require('@igloos/mainevent/MainEvent').default,
        preview: require('@igloos/mainevent/MainEvent-preview').default,
        x: 720,
        y: 480
    },
    70: {
        key: 'CPAirliner',
        scene: require('@igloos/cpairliner/CPAirliner').default,
        preview: require('@igloos/cpairliner/CPAirliner-preview').default,
        x: 320,
        y: 570
    },
    71: {
        key: 'PuffleTreeHouse',
        scene: require('@igloos/puffletreehouse/PuffleTreeHouse').default,
        preview: require('@igloos/puffletreehouse/PuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    73: {
        key: 'SpaceDome',
        scene: require('@igloos/spacedome/SpaceDome').default,
        preview: require('@igloos/spacedome/SpaceDome-preview').default,
        x: 540,
        y: 560
    },
    75: {
        key: 'TourBus',
        scene: require('@igloos/tourbus/TourBus').default,
        preview: require('@igloos/tourbus/TourBus-preview').default,
        x: 720,
        y: 480
    },
    76: {
        key: 'IcePalace',
        scene: require('@igloos/icepalace/IcePalace').default,
        preview: require('@igloos/icepalace/IcePalace-preview').default,
        x: 240,
        y: 794
    },
    77: {
        key: 'SharksGym',
        scene: require('@igloos/sharksgym/SharksGym').default,
        preview: require('@igloos/sharksgym/SharksGym-preview').default,
        x: 760,
        y: 700
    },
    78: {
        key: 'Schoolhouse',
        scene: require('@igloos/schoolhouse/Schoolhouse').default,
        preview: require('@igloos/schoolhouse/Schoolhouse-preview').default,
        x: 240,
        y: 794
    },
    79: {
        key: 'GhostlyCavern',
        scene: require('@igloos/ghostlycavern/GhostlyCavern').default,
        preview: require('@igloos/ghostlycavern/GhostlyCavern-preview').default,
        x: 720,
        y: 480
    },
    82: {
        key: 'EzrasHideout',
        scene: require('@igloos/ezrashideout/EzrasHideout').default,
        preview: require('@igloos/ezrashideout/EzrasHideout-preview').default,
        x: 240,
        y: 794
    },
    83: {
        key: 'Starship',
        scene: require('@igloos/starship/Starship').default,
        preview: require('@igloos/starship/Starship-preview').default,
        x: 240,
        y: 794
    },
    84: {
        key: 'TalentShowStage',
        scene: require('@igloos/talentshowstage/TalentShowStage').default,
        preview: require('@igloos/talentshowstage/TalentShowStage-preview').default,
        x: 240,
        y: 794
    },
    85: {
        key: 'RedPuffleTreeHouse',
        scene: require('@igloos/redpuffletreehouse/RedPuffleTreeHouse').default,
        preview: require('@igloos/redpuffletreehouse/RedPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    86: {
        key: 'OrangePuffleTreeHouse',
        scene: require('@igloos/orangepuffletreehouse/OrangePuffleTreeHouse').default,
        preview: require('@igloos/orangepuffletreehouse/OrangePuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    87: {
        key: 'YellowPuffleTreeHouse',
        scene: require('@igloos/yellowpuffletreehouse/YellowPuffleTreeHouse').default,
        preview: require('@igloos/yellowpuffletreehouse/YellowPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    88: {
        key: 'GreenPuffleTreeHouse',
        scene: require('@igloos/greenpuffletreehouse/GreenPuffleTreeHouse').default,
        preview: require('@igloos/greenpuffletreehouse/GreenPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    89: {
        key: 'BluePuffleTreeHouse',
        scene: require('@igloos/bluepuffletreehouse/BluePuffleTreeHouse').default,
        preview: require('@igloos/bluepuffletreehouse/BluePuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    90: {
        key: 'PurplePuffleTreeHouse',
        scene: require('@igloos/purplepuffletreehouse/PurplePuffleTreeHouse').default,
        preview: require('@igloos/purplepuffletreehouse/PurplePuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    91: {
        key: 'BlackPuffleTreeHouse',
        scene: require('@igloos/blackpuffletreehouse/BlackPuffleTreeHouse').default,
        preview: require('@igloos/blackpuffletreehouse/BlackPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    92: {
        key: 'WhitePuffleTreeHouse',
        scene: require('@igloos/whitepuffletreehouse/WhitePuffleTreeHouse').default,
        preview: require('@igloos/whitepuffletreehouse/WhitePuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    93: {
        key: 'BrownPuffleTreeHouse',
        scene: require('@igloos/brownpuffletreehouse/BrownPuffleTreeHouse').default,
        preview: require('@igloos/brownpuffletreehouse/BrownPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    94: {
        key: 'PinkPuffleTreeHouse',
        scene: require('@igloos/pinkpuffletreehouse/PinkPuffleTreeHouse').default,
        preview: require('@igloos/pinkpuffletreehouse/PinkPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    95: {
        key: 'GoldPuffleTreeHouse',
        scene: require('@igloos/goldpuffletreehouse/GoldPuffleTreeHouse').default,
        preview: require('@igloos/goldpuffletreehouse/GoldPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    96: {
        key: 'RainbowPuffleTreeHouse',
        scene: require('@igloos/rainbowpuffletreehouse/RainbowPuffleTreeHouse').default,
        preview: require('@igloos/rainbowpuffletreehouse/RainbowPuffleTreeHouse-preview').default,
        x: 710,
        y: 650
    },
    97: {
        key: 'SpringPalace',
        scene: require('@igloos/springpalace/SpringPalace').default,
        preview: require('@igloos/springpalace/SpringPalace-preview').default,
        x: 520,
        y: 390
    },
    98: {
        key: 'Stage',
        scene: require('@igloos/stage/Stage').default,
        preview: require('@igloos/stage/Stage-preview').default,
        x: 520,
        y: 680
    }
}

export default igloos
