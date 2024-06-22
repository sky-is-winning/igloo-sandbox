import GameScene from '@scenes/games/GameScene'

import {Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class ThinIce extends GameScene {
    constructor() {
        super('ThinIce')

        /* START-USER-CTR-CODE */
        this.music = 'Thin_Ice_Theme'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('thinice-pack', 'client/media/games/thinice/thinice-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(760, 480, 'thinice', 'bg')

        // down_arrow
        const down_arrow = this.add.image(743, 939, 'thinice', 'down-arrow')

        // right_arrow
        const right_arrow = this.add.image(940, 914, 'thinice', 'right-arrow')

        // left_arrow
        const left_arrow = this.add.image(545, 914, 'thinice', 'left-arrow')

        // up_arrow
        const up_arrow = this.add.image(742, 892, 'thinice', 'up-arrow')

        // tiles
        const tiles = this.add.container(0, 0)

        // tile_1
        const tile_1 = this.add.sprite(312, 120, 'thinice', 'tile_1')
        tiles.add(tile_1)

        // tile
        const tile = this.add.sprite(360, 120, 'thinice', 'tile_1')
        tiles.add(tile)

        // tile_2
        const tile_2 = this.add.sprite(456, 120, 'thinice', 'tile_1')
        tiles.add(tile_2)

        // tile_3
        const tile_3 = this.add.sprite(408, 120, 'thinice', 'tile_1')
        tiles.add(tile_3)

        // tile_4
        const tile_4 = this.add.sprite(648, 120, 'thinice', 'tile_1')
        tiles.add(tile_4)

        // tile_5
        const tile_5 = this.add.sprite(600, 120, 'thinice', 'tile_1')
        tiles.add(tile_5)

        // tile_6
        const tile_6 = this.add.sprite(504, 120, 'thinice', 'tile_1')
        tiles.add(tile_6)

        // tile_7
        const tile_7 = this.add.sprite(552, 120, 'thinice', 'tile_1')
        tiles.add(tile_7)

        // tile_8
        const tile_8 = this.add.sprite(696, 120, 'thinice', 'tile_1')
        tiles.add(tile_8)

        // tile_9
        const tile_9 = this.add.sprite(744, 120, 'thinice', 'tile_1')
        tiles.add(tile_9)

        // tile_10
        const tile_10 = this.add.sprite(792, 120, 'thinice', 'tile_1')
        tiles.add(tile_10)

        // tile_11
        const tile_11 = this.add.sprite(840, 120, 'thinice', 'tile_1')
        tiles.add(tile_11)

        // tile_12
        const tile_12 = this.add.sprite(888, 120, 'thinice', 'tile_1')
        tiles.add(tile_12)

        // tile_13
        const tile_13 = this.add.sprite(936, 120, 'thinice', 'tile_1')
        tiles.add(tile_13)

        // tile_14
        const tile_14 = this.add.sprite(984, 120, 'thinice', 'tile_1')
        tiles.add(tile_14)

        // tile_15
        const tile_15 = this.add.sprite(1032, 120, 'thinice', 'tile_1')
        tiles.add(tile_15)

        // tile_16
        const tile_16 = this.add.sprite(1176, 120, 'thinice', 'tile_1')
        tiles.add(tile_16)

        // tile_17
        const tile_17 = this.add.sprite(1128, 120, 'thinice', 'tile_1')
        tiles.add(tile_17)

        // tile_18
        const tile_18 = this.add.sprite(1080, 120, 'thinice', 'tile_1')
        tiles.add(tile_18)

        // tile_19
        const tile_19 = this.add.sprite(1080, 168, 'thinice', 'tile_1')
        tiles.add(tile_19)

        // tile_20
        const tile_20 = this.add.sprite(1128, 168, 'thinice', 'tile_1')
        tiles.add(tile_20)

        // tile_21
        const tile_21 = this.add.sprite(1176, 168, 'thinice', 'tile_1')
        tiles.add(tile_21)

        // tile_22
        const tile_22 = this.add.sprite(1032, 168, 'thinice', 'tile_1')
        tiles.add(tile_22)

        // tile_23
        const tile_23 = this.add.sprite(984, 168, 'thinice', 'tile_1')
        tiles.add(tile_23)

        // tile_24
        const tile_24 = this.add.sprite(936, 168, 'thinice', 'tile_1')
        tiles.add(tile_24)

        // tile_25
        const tile_25 = this.add.sprite(888, 168, 'thinice', 'tile_1')
        tiles.add(tile_25)

        // tile_26
        const tile_26 = this.add.sprite(840, 168, 'thinice', 'tile_1')
        tiles.add(tile_26)

        // tile_27
        const tile_27 = this.add.sprite(792, 168, 'thinice', 'tile_1')
        tiles.add(tile_27)

        // tile_28
        const tile_28 = this.add.sprite(744, 168, 'thinice', 'tile_1')
        tiles.add(tile_28)

        // tile_29
        const tile_29 = this.add.sprite(696, 168, 'thinice', 'tile_1')
        tiles.add(tile_29)

        // tile_30
        const tile_30 = this.add.sprite(552, 168, 'thinice', 'tile_1')
        tiles.add(tile_30)

        // tile_31
        const tile_31 = this.add.sprite(504, 168, 'thinice', 'tile_1')
        tiles.add(tile_31)

        // tile_32
        const tile_32 = this.add.sprite(600, 168, 'thinice', 'tile_1')
        tiles.add(tile_32)

        // tile_33
        const tile_33 = this.add.sprite(648, 168, 'thinice', 'tile_1')
        tiles.add(tile_33)

        // tile_34
        const tile_34 = this.add.sprite(408, 168, 'thinice', 'tile_1')
        tiles.add(tile_34)

        // tile_35
        const tile_35 = this.add.sprite(456, 168, 'thinice', 'tile_1')
        tiles.add(tile_35)

        // tile_36
        const tile_36 = this.add.sprite(360, 168, 'thinice', 'tile_1')
        tiles.add(tile_36)

        // tile_37
        const tile_37 = this.add.sprite(312, 168, 'thinice', 'tile_1')
        tiles.add(tile_37)

        // tile_38
        const tile_38 = this.add.sprite(312, 264, 'thinice', 'tile_1')
        tiles.add(tile_38)

        // tile_39
        const tile_39 = this.add.sprite(360, 264, 'thinice', 'tile_1')
        tiles.add(tile_39)

        // tile_40
        const tile_40 = this.add.sprite(456, 264, 'thinice', 'tile_1')
        tiles.add(tile_40)

        // tile_41
        const tile_41 = this.add.sprite(408, 264, 'thinice', 'tile_1')
        tiles.add(tile_41)

        // tile_42
        const tile_42 = this.add.sprite(648, 264, 'thinice', 'tile_1')
        tiles.add(tile_42)

        // tile_43
        const tile_43 = this.add.sprite(600, 264, 'thinice', 'tile_1')
        tiles.add(tile_43)

        // tile_44
        const tile_44 = this.add.sprite(504, 264, 'thinice', 'tile_1')
        tiles.add(tile_44)

        // tile_45
        const tile_45 = this.add.sprite(552, 264, 'thinice', 'tile_1')
        tiles.add(tile_45)

        // tile_46
        const tile_46 = this.add.sprite(696, 264, 'thinice', 'tile_1')
        tiles.add(tile_46)

        // tile_47
        const tile_47 = this.add.sprite(744, 264, 'thinice', 'tile_1')
        tiles.add(tile_47)

        // tile_48
        const tile_48 = this.add.sprite(792, 264, 'thinice', 'tile_1')
        tiles.add(tile_48)

        // tile_49
        const tile_49 = this.add.sprite(840, 264, 'thinice', 'tile_1')
        tiles.add(tile_49)

        // tile_50
        const tile_50 = this.add.sprite(888, 264, 'thinice', 'tile_1')
        tiles.add(tile_50)

        // tile_51
        const tile_51 = this.add.sprite(936, 264, 'thinice', 'tile_1')
        tiles.add(tile_51)

        // tile_52
        const tile_52 = this.add.sprite(984, 264, 'thinice', 'tile_1')
        tiles.add(tile_52)

        // tile_53
        const tile_53 = this.add.sprite(1032, 264, 'thinice', 'tile_1')
        tiles.add(tile_53)

        // tile_54
        const tile_54 = this.add.sprite(1176, 264, 'thinice', 'tile_1')
        tiles.add(tile_54)

        // tile_55
        const tile_55 = this.add.sprite(1128, 264, 'thinice', 'tile_1')
        tiles.add(tile_55)

        // tile_56
        const tile_56 = this.add.sprite(1080, 264, 'thinice', 'tile_1')
        tiles.add(tile_56)

        // tile_57
        const tile_57 = this.add.sprite(1080, 216, 'thinice', 'tile_1')
        tiles.add(tile_57)

        // tile_58
        const tile_58 = this.add.sprite(1128, 216, 'thinice', 'tile_1')
        tiles.add(tile_58)

        // tile_59
        const tile_59 = this.add.sprite(1176, 216, 'thinice', 'tile_1')
        tiles.add(tile_59)

        // tile_60
        const tile_60 = this.add.sprite(1032, 216, 'thinice', 'tile_1')
        tiles.add(tile_60)

        // tile_61
        const tile_61 = this.add.sprite(984, 216, 'thinice', 'tile_1')
        tiles.add(tile_61)

        // tile_62
        const tile_62 = this.add.sprite(936, 216, 'thinice', 'tile_1')
        tiles.add(tile_62)

        // tile_63
        const tile_63 = this.add.sprite(888, 216, 'thinice', 'tile_1')
        tiles.add(tile_63)

        // tile_64
        const tile_64 = this.add.sprite(840, 216, 'thinice', 'tile_1')
        tiles.add(tile_64)

        // tile_65
        const tile_65 = this.add.sprite(792, 216, 'thinice', 'tile_1')
        tiles.add(tile_65)

        // tile_66
        const tile_66 = this.add.sprite(744, 216, 'thinice', 'tile_1')
        tiles.add(tile_66)

        // tile_67
        const tile_67 = this.add.sprite(696, 216, 'thinice', 'tile_1')
        tiles.add(tile_67)

        // tile_68
        const tile_68 = this.add.sprite(552, 216, 'thinice', 'tile_1')
        tiles.add(tile_68)

        // tile_69
        const tile_69 = this.add.sprite(504, 216, 'thinice', 'tile_1')
        tiles.add(tile_69)

        // tile_70
        const tile_70 = this.add.sprite(600, 216, 'thinice', 'tile_1')
        tiles.add(tile_70)

        // tile_71
        const tile_71 = this.add.sprite(648, 216, 'thinice', 'tile_1')
        tiles.add(tile_71)

        // tile_72
        const tile_72 = this.add.sprite(408, 216, 'thinice', 'tile_1')
        tiles.add(tile_72)

        // tile_73
        const tile_73 = this.add.sprite(456, 216, 'thinice', 'tile_1')
        tiles.add(tile_73)

        // tile_74
        const tile_74 = this.add.sprite(360, 216, 'thinice', 'tile_1')
        tiles.add(tile_74)

        // tile_75
        const tile_75 = this.add.sprite(312, 216, 'thinice', 'tile_1')
        tiles.add(tile_75)

        // tile_76
        const tile_76 = this.add.sprite(312, 360, 'thinice', 'tile_1')
        tiles.add(tile_76)

        // tile_77
        const tile_77 = this.add.sprite(360, 360, 'thinice', 'tile_1')
        tiles.add(tile_77)

        // tile_78
        const tile_78 = this.add.sprite(456, 360, 'thinice', 'tile_1')
        tiles.add(tile_78)

        // tile_79
        const tile_79 = this.add.sprite(408, 360, 'thinice', 'tile_1')
        tiles.add(tile_79)

        // tile_80
        const tile_80 = this.add.sprite(648, 360, 'thinice', 'tile_1')
        tiles.add(tile_80)

        // tile_81
        const tile_81 = this.add.sprite(600, 360, 'thinice', 'tile_1')
        tiles.add(tile_81)

        // tile_82
        const tile_82 = this.add.sprite(504, 360, 'thinice', 'tile_1')
        tiles.add(tile_82)

        // tile_83
        const tile_83 = this.add.sprite(552, 360, 'thinice', 'tile_1')
        tiles.add(tile_83)

        // tile_84
        const tile_84 = this.add.sprite(696, 360, 'thinice', 'tile_1')
        tiles.add(tile_84)

        // tile_85
        const tile_85 = this.add.sprite(744, 360, 'thinice', 'tile_1')
        tiles.add(tile_85)

        // tile_86
        const tile_86 = this.add.sprite(792, 360, 'thinice', 'tile_1')
        tiles.add(tile_86)

        // tile_87
        const tile_87 = this.add.sprite(840, 360, 'thinice', 'tile_1')
        tiles.add(tile_87)

        // tile_88
        const tile_88 = this.add.sprite(888, 360, 'thinice', 'tile_1')
        tiles.add(tile_88)

        // tile_89
        const tile_89 = this.add.sprite(936, 360, 'thinice', 'tile_1')
        tiles.add(tile_89)

        // tile_90
        const tile_90 = this.add.sprite(984, 360, 'thinice', 'tile_1')
        tiles.add(tile_90)

        // tile_91
        const tile_91 = this.add.sprite(1032, 360, 'thinice', 'tile_1')
        tiles.add(tile_91)

        // tile_92
        const tile_92 = this.add.sprite(1176, 360, 'thinice', 'tile_1')
        tiles.add(tile_92)

        // tile_93
        const tile_93 = this.add.sprite(1128, 360, 'thinice', 'tile_1')
        tiles.add(tile_93)

        // tile_94
        const tile_94 = this.add.sprite(1080, 360, 'thinice', 'tile_1')
        tiles.add(tile_94)

        // tile_95
        const tile_95 = this.add.sprite(1080, 312, 'thinice', 'tile_1')
        tiles.add(tile_95)

        // tile_96
        const tile_96 = this.add.sprite(1128, 312, 'thinice', 'tile_1')
        tiles.add(tile_96)

        // tile_97
        const tile_97 = this.add.sprite(1176, 312, 'thinice', 'tile_1')
        tiles.add(tile_97)

        // tile_98
        const tile_98 = this.add.sprite(1032, 312, 'thinice', 'tile_1')
        tiles.add(tile_98)

        // tile_99
        const tile_99 = this.add.sprite(984, 312, 'thinice', 'tile_1')
        tiles.add(tile_99)

        // tile_100
        const tile_100 = this.add.sprite(936, 312, 'thinice', 'tile_1')
        tiles.add(tile_100)

        // tile_101
        const tile_101 = this.add.sprite(888, 312, 'thinice', 'tile_1')
        tiles.add(tile_101)

        // tile_102
        const tile_102 = this.add.sprite(840, 312, 'thinice', 'tile_1')
        tiles.add(tile_102)

        // tile_103
        const tile_103 = this.add.sprite(792, 312, 'thinice', 'tile_1')
        tiles.add(tile_103)

        // tile_104
        const tile_104 = this.add.sprite(744, 312, 'thinice', 'tile_1')
        tiles.add(tile_104)

        // tile_105
        const tile_105 = this.add.sprite(696, 312, 'thinice', 'tile_1')
        tiles.add(tile_105)

        // tile_106
        const tile_106 = this.add.sprite(552, 312, 'thinice', 'tile_1')
        tiles.add(tile_106)

        // tile_107
        const tile_107 = this.add.sprite(504, 312, 'thinice', 'tile_1')
        tiles.add(tile_107)

        // tile_108
        const tile_108 = this.add.sprite(600, 312, 'thinice', 'tile_1')
        tiles.add(tile_108)

        // tile_109
        const tile_109 = this.add.sprite(648, 312, 'thinice', 'tile_1')
        tiles.add(tile_109)

        // tile_110
        const tile_110 = this.add.sprite(408, 312, 'thinice', 'tile_1')
        tiles.add(tile_110)

        // tile_111
        const tile_111 = this.add.sprite(456, 312, 'thinice', 'tile_1')
        tiles.add(tile_111)

        // tile_112
        const tile_112 = this.add.sprite(360, 312, 'thinice', 'tile_1')
        tiles.add(tile_112)

        // tile_113
        const tile_113 = this.add.sprite(312, 312, 'thinice', 'tile_1')
        tiles.add(tile_113)

        // tile_114
        const tile_114 = this.add.sprite(312, 456, 'thinice', 'tile_1')
        tiles.add(tile_114)

        // tile_115
        const tile_115 = this.add.sprite(360, 456, 'thinice', 'tile_1')
        tiles.add(tile_115)

        // tile_116
        const tile_116 = this.add.sprite(456, 456, 'thinice', 'tile_1')
        tiles.add(tile_116)

        // tile_117
        const tile_117 = this.add.sprite(408, 456, 'thinice', 'tile_1')
        tiles.add(tile_117)

        // tile_118
        const tile_118 = this.add.sprite(648, 456, 'thinice', 'tile_1')
        tiles.add(tile_118)

        // tile_119
        const tile_119 = this.add.sprite(600, 456, 'thinice', 'tile_1')
        tiles.add(tile_119)

        // tile_120
        const tile_120 = this.add.sprite(504, 456, 'thinice', 'tile_1')
        tiles.add(tile_120)

        // tile_121
        const tile_121 = this.add.sprite(552, 456, 'thinice', 'tile_1')
        tiles.add(tile_121)

        // tile_122
        const tile_122 = this.add.sprite(696, 456, 'thinice', 'tile_1')
        tiles.add(tile_122)

        // tile_123
        const tile_123 = this.add.sprite(744, 456, 'thinice', 'tile_1')
        tiles.add(tile_123)

        // tile_124
        const tile_124 = this.add.sprite(792, 456, 'thinice', 'tile_1')
        tiles.add(tile_124)

        // tile_125
        const tile_125 = this.add.sprite(840, 456, 'thinice', 'tile_1')
        tiles.add(tile_125)

        // tile_126
        const tile_126 = this.add.sprite(888, 456, 'thinice', 'tile_1')
        tiles.add(tile_126)

        // tile_127
        const tile_127 = this.add.sprite(936, 456, 'thinice', 'tile_1')
        tiles.add(tile_127)

        // tile_128
        const tile_128 = this.add.sprite(984, 456, 'thinice', 'tile_1')
        tiles.add(tile_128)

        // tile_129
        const tile_129 = this.add.sprite(1032, 456, 'thinice', 'tile_1')
        tiles.add(tile_129)

        // tile_130
        const tile_130 = this.add.sprite(1176, 456, 'thinice', 'tile_1')
        tiles.add(tile_130)

        // tile_131
        const tile_131 = this.add.sprite(1128, 456, 'thinice', 'tile_1')
        tiles.add(tile_131)

        // tile_132
        const tile_132 = this.add.sprite(1080, 456, 'thinice', 'tile_1')
        tiles.add(tile_132)

        // tile_133
        const tile_133 = this.add.sprite(1080, 408, 'thinice', 'tile_1')
        tiles.add(tile_133)

        // tile_134
        const tile_134 = this.add.sprite(1128, 408, 'thinice', 'tile_1')
        tiles.add(tile_134)

        // tile_135
        const tile_135 = this.add.sprite(1176, 408, 'thinice', 'tile_1')
        tiles.add(tile_135)

        // tile_136
        const tile_136 = this.add.sprite(1032, 408, 'thinice', 'tile_1')
        tiles.add(tile_136)

        // tile_137
        const tile_137 = this.add.sprite(984, 408, 'thinice', 'tile_1')
        tiles.add(tile_137)

        // tile_138
        const tile_138 = this.add.sprite(936, 408, 'thinice', 'tile_1')
        tiles.add(tile_138)

        // tile_139
        const tile_139 = this.add.sprite(888, 408, 'thinice', 'tile_1')
        tiles.add(tile_139)

        // tile_140
        const tile_140 = this.add.sprite(840, 408, 'thinice', 'tile_1')
        tiles.add(tile_140)

        // tile_141
        const tile_141 = this.add.sprite(792, 408, 'thinice', 'tile_1')
        tiles.add(tile_141)

        // tile_142
        const tile_142 = this.add.sprite(744, 408, 'thinice', 'tile_1')
        tiles.add(tile_142)

        // tile_143
        const tile_143 = this.add.sprite(696, 408, 'thinice', 'tile_1')
        tiles.add(tile_143)

        // tile_144
        const tile_144 = this.add.sprite(552, 408, 'thinice', 'tile_1')
        tiles.add(tile_144)

        // tile_145
        const tile_145 = this.add.sprite(504, 408, 'thinice', 'tile_1')
        tiles.add(tile_145)

        // tile_146
        const tile_146 = this.add.sprite(600, 408, 'thinice', 'tile_1')
        tiles.add(tile_146)

        // tile_147
        const tile_147 = this.add.sprite(648, 408, 'thinice', 'tile_1')
        tiles.add(tile_147)

        // tile_148
        const tile_148 = this.add.sprite(408, 408, 'thinice', 'tile_1')
        tiles.add(tile_148)

        // tile_149
        const tile_149 = this.add.sprite(456, 408, 'thinice', 'tile_1')
        tiles.add(tile_149)

        // tile_150
        const tile_150 = this.add.sprite(360, 408, 'thinice', 'tile_1')
        tiles.add(tile_150)

        // tile_151
        const tile_151 = this.add.sprite(312, 408, 'thinice', 'tile_1')
        tiles.add(tile_151)

        // tile_152
        const tile_152 = this.add.sprite(312, 792, 'thinice', 'tile_1')
        tiles.add(tile_152)

        // tile_153
        const tile_153 = this.add.sprite(360, 792, 'thinice', 'tile_1')
        tiles.add(tile_153)

        // tile_154
        const tile_154 = this.add.sprite(456, 792, 'thinice', 'tile_1')
        tiles.add(tile_154)

        // tile_155
        const tile_155 = this.add.sprite(408, 792, 'thinice', 'tile_1')
        tiles.add(tile_155)

        // tile_156
        const tile_156 = this.add.sprite(648, 792, 'thinice', 'tile_1')
        tiles.add(tile_156)

        // tile_157
        const tile_157 = this.add.sprite(600, 792, 'thinice', 'tile_1')
        tiles.add(tile_157)

        // tile_158
        const tile_158 = this.add.sprite(504, 792, 'thinice', 'tile_1')
        tiles.add(tile_158)

        // tile_159
        const tile_159 = this.add.sprite(552, 792, 'thinice', 'tile_1')
        tiles.add(tile_159)

        // tile_160
        const tile_160 = this.add.sprite(696, 792, 'thinice', 'tile_1')
        tiles.add(tile_160)

        // tile_161
        const tile_161 = this.add.sprite(744, 792, 'thinice', 'tile_1')
        tiles.add(tile_161)

        // tile_162
        const tile_162 = this.add.sprite(792, 792, 'thinice', 'tile_1')
        tiles.add(tile_162)

        // tile_163
        const tile_163 = this.add.sprite(840, 792, 'thinice', 'tile_1')
        tiles.add(tile_163)

        // tile_164
        const tile_164 = this.add.sprite(888, 792, 'thinice', 'tile_1')
        tiles.add(tile_164)

        // tile_165
        const tile_165 = this.add.sprite(936, 792, 'thinice', 'tile_1')
        tiles.add(tile_165)

        // tile_166
        const tile_166 = this.add.sprite(984, 792, 'thinice', 'tile_1')
        tiles.add(tile_166)

        // tile_167
        const tile_167 = this.add.sprite(1032, 792, 'thinice', 'tile_1')
        tiles.add(tile_167)

        // tile_168
        const tile_168 = this.add.sprite(1176, 792, 'thinice', 'tile_1')
        tiles.add(tile_168)

        // tile_169
        const tile_169 = this.add.sprite(1128, 792, 'thinice', 'tile_1')
        tiles.add(tile_169)

        // tile_170
        const tile_170 = this.add.sprite(1080, 792, 'thinice', 'tile_1')
        tiles.add(tile_170)

        // tile_190
        const tile_190 = this.add.sprite(312, 696, 'thinice', 'tile_1')
        tiles.add(tile_190)

        // tile_191
        const tile_191 = this.add.sprite(360, 696, 'thinice', 'tile_1')
        tiles.add(tile_191)

        // tile_192
        const tile_192 = this.add.sprite(456, 696, 'thinice', 'tile_1')
        tiles.add(tile_192)

        // tile_193
        const tile_193 = this.add.sprite(408, 696, 'thinice', 'tile_1')
        tiles.add(tile_193)

        // tile_194
        const tile_194 = this.add.sprite(648, 696, 'thinice', 'tile_1')
        tiles.add(tile_194)

        // tile_195
        const tile_195 = this.add.sprite(600, 696, 'thinice', 'tile_1')
        tiles.add(tile_195)

        // tile_196
        const tile_196 = this.add.sprite(504, 696, 'thinice', 'tile_1')
        tiles.add(tile_196)

        // tile_197
        const tile_197 = this.add.sprite(552, 696, 'thinice', 'tile_1')
        tiles.add(tile_197)

        // tile_198
        const tile_198 = this.add.sprite(696, 696, 'thinice', 'tile_1')
        tiles.add(tile_198)

        // tile_199
        const tile_199 = this.add.sprite(744, 696, 'thinice', 'tile_1')
        tiles.add(tile_199)

        // tile_200
        const tile_200 = this.add.sprite(792, 696, 'thinice', 'tile_1')
        tiles.add(tile_200)

        // tile_201
        const tile_201 = this.add.sprite(840, 696, 'thinice', 'tile_1')
        tiles.add(tile_201)

        // tile_202
        const tile_202 = this.add.sprite(888, 696, 'thinice', 'tile_1')
        tiles.add(tile_202)

        // tile_203
        const tile_203 = this.add.sprite(936, 696, 'thinice', 'tile_1')
        tiles.add(tile_203)

        // tile_204
        const tile_204 = this.add.sprite(984, 696, 'thinice', 'tile_1')
        tiles.add(tile_204)

        // tile_205
        const tile_205 = this.add.sprite(1032, 696, 'thinice', 'tile_1')
        tiles.add(tile_205)

        // tile_206
        const tile_206 = this.add.sprite(1176, 696, 'thinice', 'tile_1')
        tiles.add(tile_206)

        // tile_207
        const tile_207 = this.add.sprite(1128, 696, 'thinice', 'tile_1')
        tiles.add(tile_207)

        // tile_208
        const tile_208 = this.add.sprite(1080, 696, 'thinice', 'tile_1')
        tiles.add(tile_208)

        // tile_209
        const tile_209 = this.add.sprite(1080, 744, 'thinice', 'tile_1')
        tiles.add(tile_209)

        // tile_210
        const tile_210 = this.add.sprite(1128, 744, 'thinice', 'tile_1')
        tiles.add(tile_210)

        // tile_211
        const tile_211 = this.add.sprite(1176, 744, 'thinice', 'tile_1')
        tiles.add(tile_211)

        // tile_212
        const tile_212 = this.add.sprite(1032, 744, 'thinice', 'tile_1')
        tiles.add(tile_212)

        // tile_213
        const tile_213 = this.add.sprite(984, 744, 'thinice', 'tile_1')
        tiles.add(tile_213)

        // tile_214
        const tile_214 = this.add.sprite(936, 744, 'thinice', 'tile_1')
        tiles.add(tile_214)

        // tile_215
        const tile_215 = this.add.sprite(888, 744, 'thinice', 'tile_1')
        tiles.add(tile_215)

        // tile_216
        const tile_216 = this.add.sprite(840, 744, 'thinice', 'tile_1')
        tiles.add(tile_216)

        // tile_217
        const tile_217 = this.add.sprite(792, 744, 'thinice', 'tile_1')
        tiles.add(tile_217)

        // tile_218
        const tile_218 = this.add.sprite(744, 744, 'thinice', 'tile_1')
        tiles.add(tile_218)

        // tile_219
        const tile_219 = this.add.sprite(696, 744, 'thinice', 'tile_1')
        tiles.add(tile_219)

        // tile_220
        const tile_220 = this.add.sprite(552, 744, 'thinice', 'tile_1')
        tiles.add(tile_220)

        // tile_221
        const tile_221 = this.add.sprite(504, 744, 'thinice', 'tile_1')
        tiles.add(tile_221)

        // tile_222
        const tile_222 = this.add.sprite(600, 744, 'thinice', 'tile_1')
        tiles.add(tile_222)

        // tile_223
        const tile_223 = this.add.sprite(648, 744, 'thinice', 'tile_1')
        tiles.add(tile_223)

        // tile_224
        const tile_224 = this.add.sprite(408, 744, 'thinice', 'tile_1')
        tiles.add(tile_224)

        // tile_225
        const tile_225 = this.add.sprite(456, 744, 'thinice', 'tile_1')
        tiles.add(tile_225)

        // tile_226
        const tile_226 = this.add.sprite(360, 744, 'thinice', 'tile_1')
        tiles.add(tile_226)

        // tile_227
        const tile_227 = this.add.sprite(312, 744, 'thinice', 'tile_1')
        tiles.add(tile_227)

        // tile_228
        const tile_228 = this.add.sprite(312, 600, 'thinice', 'tile_1')
        tiles.add(tile_228)

        // tile_229
        const tile_229 = this.add.sprite(360, 600, 'thinice', 'tile_1')
        tiles.add(tile_229)

        // tile_230
        const tile_230 = this.add.sprite(456, 600, 'thinice', 'tile_1')
        tiles.add(tile_230)

        // tile_231
        const tile_231 = this.add.sprite(408, 600, 'thinice', 'tile_1')
        tiles.add(tile_231)

        // tile_232
        const tile_232 = this.add.sprite(648, 600, 'thinice', 'tile_1')
        tiles.add(tile_232)

        // tile_233
        const tile_233 = this.add.sprite(600, 600, 'thinice', 'tile_1')
        tiles.add(tile_233)

        // tile_234
        const tile_234 = this.add.sprite(504, 600, 'thinice', 'tile_1')
        tiles.add(tile_234)

        // tile_235
        const tile_235 = this.add.sprite(552, 600, 'thinice', 'tile_1')
        tiles.add(tile_235)

        // tile_236
        const tile_236 = this.add.sprite(696, 600, 'thinice', 'tile_1')
        tiles.add(tile_236)

        // tile_237
        const tile_237 = this.add.sprite(744, 600, 'thinice', 'tile_1')
        tiles.add(tile_237)

        // tile_238
        const tile_238 = this.add.sprite(792, 600, 'thinice', 'tile_1')
        tiles.add(tile_238)

        // tile_239
        const tile_239 = this.add.sprite(840, 600, 'thinice', 'tile_1')
        tiles.add(tile_239)

        // tile_240
        const tile_240 = this.add.sprite(888, 600, 'thinice', 'tile_1')
        tiles.add(tile_240)

        // tile_241
        const tile_241 = this.add.sprite(936, 600, 'thinice', 'tile_1')
        tiles.add(tile_241)

        // tile_242
        const tile_242 = this.add.sprite(984, 600, 'thinice', 'tile_1')
        tiles.add(tile_242)

        // tile_243
        const tile_243 = this.add.sprite(1032, 600, 'thinice', 'tile_1')
        tiles.add(tile_243)

        // tile_244
        const tile_244 = this.add.sprite(1176, 600, 'thinice', 'tile_1')
        tiles.add(tile_244)

        // tile_245
        const tile_245 = this.add.sprite(1128, 600, 'thinice', 'tile_1')
        tiles.add(tile_245)

        // tile_246
        const tile_246 = this.add.sprite(1080, 600, 'thinice', 'tile_1')
        tiles.add(tile_246)

        // tile_247
        const tile_247 = this.add.sprite(1080, 648, 'thinice', 'tile_1')
        tiles.add(tile_247)

        // tile_248
        const tile_248 = this.add.sprite(1128, 648, 'thinice', 'tile_1')
        tiles.add(tile_248)

        // tile_249
        const tile_249 = this.add.sprite(1176, 648, 'thinice', 'tile_1')
        tiles.add(tile_249)

        // tile_250
        const tile_250 = this.add.sprite(1032, 648, 'thinice', 'tile_1')
        tiles.add(tile_250)

        // tile_251
        const tile_251 = this.add.sprite(984, 648, 'thinice', 'tile_1')
        tiles.add(tile_251)

        // tile_252
        const tile_252 = this.add.sprite(936, 648, 'thinice', 'tile_1')
        tiles.add(tile_252)

        // tile_253
        const tile_253 = this.add.sprite(888, 648, 'thinice', 'tile_1')
        tiles.add(tile_253)

        // tile_254
        const tile_254 = this.add.sprite(840, 648, 'thinice', 'tile_1')
        tiles.add(tile_254)

        // tile_255
        const tile_255 = this.add.sprite(792, 648, 'thinice', 'tile_1')
        tiles.add(tile_255)

        // tile_256
        const tile_256 = this.add.sprite(744, 648, 'thinice', 'tile_1')
        tiles.add(tile_256)

        // tile_257
        const tile_257 = this.add.sprite(696, 648, 'thinice', 'tile_1')
        tiles.add(tile_257)

        // tile_258
        const tile_258 = this.add.sprite(552, 648, 'thinice', 'tile_1')
        tiles.add(tile_258)

        // tile_259
        const tile_259 = this.add.sprite(504, 648, 'thinice', 'tile_1')
        tiles.add(tile_259)

        // tile_260
        const tile_260 = this.add.sprite(600, 648, 'thinice', 'tile_1')
        tiles.add(tile_260)

        // tile_261
        const tile_261 = this.add.sprite(648, 648, 'thinice', 'tile_1')
        tiles.add(tile_261)

        // tile_262
        const tile_262 = this.add.sprite(408, 648, 'thinice', 'tile_1')
        tiles.add(tile_262)

        // tile_263
        const tile_263 = this.add.sprite(456, 648, 'thinice', 'tile_1')
        tiles.add(tile_263)

        // tile_264
        const tile_264 = this.add.sprite(360, 648, 'thinice', 'tile_1')
        tiles.add(tile_264)

        // tile_265
        const tile_265 = this.add.sprite(312, 648, 'thinice', 'tile_1')
        tiles.add(tile_265)

        // tile_266
        const tile_266 = this.add.sprite(312, 552, 'thinice', 'tile_1')
        tiles.add(tile_266)

        // tile_267
        const tile_267 = this.add.sprite(360, 552, 'thinice', 'tile_1')
        tiles.add(tile_267)

        // tile_268
        const tile_268 = this.add.sprite(456, 552, 'thinice', 'tile_1')
        tiles.add(tile_268)

        // tile_269
        const tile_269 = this.add.sprite(408, 552, 'thinice', 'tile_1')
        tiles.add(tile_269)

        // tile_270
        const tile_270 = this.add.sprite(648, 552, 'thinice', 'tile_1')
        tiles.add(tile_270)

        // tile_271
        const tile_271 = this.add.sprite(600, 552, 'thinice', 'tile_1')
        tiles.add(tile_271)

        // tile_272
        const tile_272 = this.add.sprite(504, 552, 'thinice', 'tile_1')
        tiles.add(tile_272)

        // tile_273
        const tile_273 = this.add.sprite(552, 552, 'thinice', 'tile_1')
        tiles.add(tile_273)

        // tile_274
        const tile_274 = this.add.sprite(696, 552, 'thinice', 'tile_1')
        tiles.add(tile_274)

        // tile_275
        const tile_275 = this.add.sprite(744, 552, 'thinice', 'tile_1')
        tiles.add(tile_275)

        // tile_276
        const tile_276 = this.add.sprite(792, 552, 'thinice', 'tile_1')
        tiles.add(tile_276)

        // tile_277
        const tile_277 = this.add.sprite(840, 552, 'thinice', 'tile_1')
        tiles.add(tile_277)

        // tile_278
        const tile_278 = this.add.sprite(888, 552, 'thinice', 'tile_1')
        tiles.add(tile_278)

        // tile_279
        const tile_279 = this.add.sprite(936, 552, 'thinice', 'tile_1')
        tiles.add(tile_279)

        // tile_280
        const tile_280 = this.add.sprite(984, 552, 'thinice', 'tile_1')
        tiles.add(tile_280)

        // tile_281
        const tile_281 = this.add.sprite(1032, 552, 'thinice', 'tile_1')
        tiles.add(tile_281)

        // tile_282
        const tile_282 = this.add.sprite(1176, 552, 'thinice', 'tile_1')
        tiles.add(tile_282)

        // tile_283
        const tile_283 = this.add.sprite(1128, 552, 'thinice', 'tile_1')
        tiles.add(tile_283)

        // tile_284
        const tile_284 = this.add.sprite(1080, 552, 'thinice', 'tile_1')
        tiles.add(tile_284)

        // tile_285
        const tile_285 = this.add.sprite(1080, 504, 'thinice', 'tile_1')
        tiles.add(tile_285)

        // tile_286
        const tile_286 = this.add.sprite(1128, 504, 'thinice', 'tile_1')
        tiles.add(tile_286)

        // tile_287
        const tile_287 = this.add.sprite(1176, 504, 'thinice', 'tile_1')
        tiles.add(tile_287)

        // tile_288
        const tile_288 = this.add.sprite(1032, 504, 'thinice', 'tile_1')
        tiles.add(tile_288)

        // tile_289
        const tile_289 = this.add.sprite(984, 504, 'thinice', 'tile_1')
        tiles.add(tile_289)

        // tile_290
        const tile_290 = this.add.sprite(936, 504, 'thinice', 'tile_1')
        tiles.add(tile_290)

        // tile_291
        const tile_291 = this.add.sprite(888, 504, 'thinice', 'tile_1')
        tiles.add(tile_291)

        // tile_292
        const tile_292 = this.add.sprite(840, 504, 'thinice', 'tile_1')
        tiles.add(tile_292)

        // tile_293
        const tile_293 = this.add.sprite(792, 504, 'thinice', 'tile_1')
        tiles.add(tile_293)

        // tile_294
        const tile_294 = this.add.sprite(744, 504, 'thinice', 'tile_1')
        tiles.add(tile_294)

        // tile_295
        const tile_295 = this.add.sprite(696, 504, 'thinice', 'tile_1')
        tiles.add(tile_295)

        // tile_296
        const tile_296 = this.add.sprite(552, 504, 'thinice', 'tile_1')
        tiles.add(tile_296)

        // tile_297
        const tile_297 = this.add.sprite(504, 504, 'thinice', 'tile_1')
        tiles.add(tile_297)

        // tile_298
        const tile_298 = this.add.sprite(600, 504, 'thinice', 'tile_1')
        tiles.add(tile_298)

        // tile_299
        const tile_299 = this.add.sprite(648, 504, 'thinice', 'tile_1')
        tiles.add(tile_299)

        // tile_300
        const tile_300 = this.add.sprite(408, 504, 'thinice', 'tile_1')
        tiles.add(tile_300)

        // tile_301
        const tile_301 = this.add.sprite(456, 504, 'thinice', 'tile_1')
        tiles.add(tile_301)

        // tile_302
        const tile_302 = this.add.sprite(360, 504, 'thinice', 'tile_1')
        tiles.add(tile_302)

        // tile_303
        const tile_303 = this.add.sprite(312, 504, 'thinice', 'tile_1')
        tiles.add(tile_303)

        // player
        const player = this.add.sprite(312, 120, 'thinice', 'player_ignite0001')

        // playerSink
        const playerSink = this.add.sprite(312, 120, 'thinice', 'player_sink0001')
        playerSink.setOrigin(0.5, 0.7335)
        playerSink.visible = false

        // levelTxt
        const levelTxt = this.add.text(335, 71, '', {})
        levelTxt.setOrigin(0, 0.5)
        levelTxt.visible = false
        levelTxt.text = 'LEVEL 00'
        levelTxt.setStyle({color: '#004f9dff', fontFamily: 'cpBurbankBgWd', fontSize: '24px', fontStyle: 'bold'})

        // solvedTxt
        const solvedTxt = this.add.text(1153, 71, '', {})
        solvedTxt.setOrigin(1, 0.5)
        solvedTxt.visible = false
        solvedTxt.text = 'SOLVED 00'
        solvedTxt.setStyle({align: 'right', color: '#004f9dff', fontFamily: 'cpBurbankBgWd', fontSize: '24px', fontStyle: 'bold'})

        // completionTxt
        const completionTxt = this.add.text(742, 71, '', {})
        completionTxt.setOrigin(0.5, 0.5)
        completionTxt.visible = false
        completionTxt.text = '00/00'
        completionTxt.setStyle({align: 'center', color: '#004f9dff', fontFamily: 'cpBurbankBgWd', fontSize: '24px', fontStyle: 'bold'})

        // lists
        const sort = []
        const tileList = [tile_1, tile, tile_3, tile_2, tile_6, tile_7, tile_5, tile_4, tile_8, tile_9, tile_10, tile_11, tile_12, tile_13, tile_14, tile_15, tile_18, tile_17, tile_16, tile_37, tile_36, tile_34, tile_35, tile_31, tile_30, tile_32, tile_33, tile_29, tile_28, tile_27, tile_26, tile_25, tile_24, tile_23, tile_22, tile_19, tile_20, tile_21, tile_75, tile_74, tile_72, tile_73, tile_69, tile_68, tile_70, tile_71, tile_67, tile_66, tile_65, tile_64, tile_63, tile_62, tile_61, tile_60, tile_57, tile_58, tile_59, tile_38, tile_39, tile_41, tile_40, tile_44, tile_45, tile_43, tile_42, tile_46, tile_47, tile_48, tile_49, tile_50, tile_51, tile_52, tile_53, tile_56, tile_55, tile_54, tile_113, tile_112, tile_110, tile_111, tile_107, tile_106, tile_108, tile_109, tile_105, tile_104, tile_103, tile_102, tile_101, tile_100, tile_99, tile_98, tile_95, tile_96, tile_97, tile_76, tile_77, tile_79, tile_78, tile_82, tile_83, tile_81, tile_80, tile_84, tile_85, tile_86, tile_87, tile_88, tile_89, tile_90, tile_91, tile_94, tile_93, tile_92, tile_151, tile_150, tile_148, tile_149, tile_145, tile_144, tile_146, tile_147, tile_143, tile_142, tile_141, tile_140, tile_139, tile_138, tile_137, tile_136, tile_133, tile_134, tile_135, tile_114, tile_115, tile_117, tile_116, tile_120, tile_121, tile_119, tile_118, tile_122, tile_123, tile_124, tile_125, tile_126, tile_127, tile_128, tile_129, tile_132, tile_131, tile_130, tile_303, tile_302, tile_300, tile_301, tile_297, tile_296, tile_298, tile_299, tile_295, tile_294, tile_293, tile_292, tile_291, tile_290, tile_289, tile_288, tile_285, tile_286, tile_287, tile_266, tile_267, tile_269, tile_268, tile_272, tile_273, tile_271, tile_270, tile_274, tile_275, tile_276, tile_277, tile_278, tile_279, tile_280, tile_281, tile_284, tile_283, tile_282, tile_228, tile_229, tile_231, tile_230, tile_234, tile_235, tile_233, tile_232, tile_236, tile_237, tile_238, tile_239, tile_240, tile_241, tile_242, tile_243, tile_246, tile_245, tile_244, tile_265, tile_264, tile_262, tile_263, tile_259, tile_258, tile_260, tile_261, tile_257, tile_256, tile_255, tile_254, tile_253, tile_252, tile_251, tile_250, tile_247, tile_248, tile_249, tile_190, tile_191, tile_193, tile_192, tile_196, tile_197, tile_195, tile_194, tile_198, tile_199, tile_200, tile_201, tile_202, tile_203, tile_204, tile_205, tile_208, tile_207, tile_206, tile_227, tile_226, tile_224, tile_225, tile_221, tile_220, tile_222, tile_223, tile_219, tile_218, tile_217, tile_216, tile_215, tile_214, tile_213, tile_212, tile_209, tile_210, tile_211, tile_152, tile_153, tile_155, tile_154, tile_158, tile_159, tile_157, tile_156, tile_160, tile_161, tile_162, tile_163, tile_164, tile_165, tile_166, tile_167, tile_170, tile_169, tile_168]

        // bg (components)
        new Interactive(bg)

        this.down_arrow = down_arrow
        this.right_arrow = right_arrow
        this.left_arrow = left_arrow
        this.up_arrow = up_arrow
        this.tiles = tiles
        this.player = player
        this.playerSink = playerSink
        this.levelTxt = levelTxt
        this.solvedTxt = solvedTxt
        this.completionTxt = completionTxt
        this.sort = sort
        this.tileList = tileList

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image} */
    down_arrow
    /** @type {Phaser.GameObjects.Image} */
    right_arrow
    /** @type {Phaser.GameObjects.Image} */
    left_arrow
    /** @type {Phaser.GameObjects.Image} */
    up_arrow
    /** @type {Phaser.GameObjects.Container} */
    tiles
    /** @type {Phaser.GameObjects.Sprite} */
    player
    /** @type {Phaser.GameObjects.Sprite} */
    playerSink
    /** @type {Phaser.GameObjects.Text} */
    levelTxt
    /** @type {Phaser.GameObjects.Text} */
    solvedTxt
    /** @type {Phaser.GameObjects.Text} */
    completionTxt
    /** @type {Array<any>} */
    sort
    /** @type {Phaser.GameObjects.Sprite[]} */
    tileList

    /* START-USER-CODE */

    get level1() {
        let level = {}
        level.map = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1],
            [1, 20, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1, 1],
            [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
        level.startX = 14
        level.startY = 10
        level.endX = 2
        level.endY = 10
        return level
    }

    get level2() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 5, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 2, 20, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 20, 20, 1, 20, 20, 20, 20, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 20, 1, 20, 2, 2, 2, 2, 2, 20, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 2, 20, 20, 20, 2, 20, 20, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 20, 2, 2, 2, 2, 2, 20, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 1, 20, 5, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 20, 2, 2, 2, 2, 2, 20, 1, 20, 2, 20, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 2, 20, 20, 20, 2, 20, 20, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 20, 1, 20, 2, 2, 2, 2, 2, 20, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 20, 20, 1, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        level.startX = 2
        level.startY = 10
        level.endX = 14
        level.endY = 7
        return level
    }

    get level3() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 20, 5, 20, 1, 1, 1, 1, 1, 1, 1, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 20, 20, 20, 20, 1, 1, 1, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 20, 2, 2, 20, 20, 20, 20, 20, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 2, 20, 20, 20, 20, 2, 2, 20, 20, 2, 2, 20, 1, 1, 1],
                [1, 1, 20, 20, 20, 20, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 20, 5, 20, 1, 1, 1, 1, 1, 1, 1, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 1, 1, 1, 1, 20, 20, 20, 20, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 20, 20, 20, 20, 20, 2, 2, 20, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 2, 20, 20, 2, 2, 20, 20, 20, 20, 2, 2, 20, 1, 1, 1],
                [1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 20, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        level.startX = 14
        level.startY = 7
        level.endX = 3
        level.endY = 7
        return level
    }

    get level4() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1],
                [1, 20, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 20, 1, 1],
                [1, 20, 2, 20, 2, 20, 20, 2, 2, 2, 2, 20, 20, 2, 20, 2, 20, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1],
                [1, 20, 20, 2, 20, 20, 20, 20, 2, 2, 20, 20, 20, 20, 2, 20, 20, 1, 1],
                [1, 1, 20, 2, 20, 1, 20, 2, 2, 2, 2, 20, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 1, 20, 2, 2, 2, 2, 20, 1, 20, 5, 20, 1, 1, 1],
                [1, 1, 20, 20, 20, 1, 20, 20, 20, 20, 20, 20, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1],
                [1, 20, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 20, 1, 1],
                [1, 20, 2, 2, 2, 20, 20, 2, 2, 2, 2, 20, 20, 2, 2, 2, 20, 1, 1],
                [1, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 1, 1],
                [1, 1, 20, 2, 20, 20, 20, 20, 2, 2, 20, 20, 20, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 1, 20, 2, 2, 2, 2, 20, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 1, 20, 2, 2, 2, 2, 20, 1, 20, 5, 20, 1, 1, 1],
                [1, 1, 20, 20, 20, 1, 20, 20, 20, 20, 20, 20, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[7][7] = 7
        }
        level.startX = 3
        level.startY = 7
        level.endX = 14
        level.endY = 7
        return level
    }

    get level5() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 1],
                [1, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 20, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 2, 20, 1, 1, 1],
                [1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 1],
                [1, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 20, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[10][9] = 7
        }
        level.startX = 14
        level.startY = 7
        level.endX = 2
        level.endY = 10
        return level
    }

    get level6() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 5, 20, 1, 1, 1],
                [1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 1],
                [1, 20, 20, 20, 20, 2, 2, 2, 20, 2, 2, 2, 2, 20, 2, 2, 2, 20, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 20, 1],
                [1, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 1, 1, 20, 20, 20, 20, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1, 20, 5, 20, 1, 1, 1],
                [1, 1, 1, 20, 20, 20, 20, 2, 2, 2, 20, 20, 20, 20, 2, 20, 20, 20, 1],
                [1, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 20, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 20, 1],
                [1, 20, 20, 20, 20, 2, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[11][10] = 7
        }
        level.startX = 2
        level.startY = 10
        level.endX = 14
        level.endY = 7
        return level
    }

    get level7() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1, 1],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20],
                [1, 20, 2, 20, 20, 20, 5, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20],
                [1, 20, 2, 20, 20, 2, 2, 2, 2, 20, 20, 2, 2, 20, 20, 20, 20, 2, 20],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [1, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20],
                [1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1, 1],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20],
                [1, 20, 2, 20, 20, 20, 5, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20],
                [1, 20, 2, 20, 20, 20, 20, 2, 2, 20, 20, 2, 2, 2, 2, 20, 20, 2, 20],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [1, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20],
                [1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[9][11] = 7
        }
        level.startX = 14
        level.startY = 7
        level.endX = 6
        level.endY = 5
        return level
    }

    get level8() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [20, 20, 20, 20, 20, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 2, 2, 20, 20, 20, 20, 20, 2, 2, 2, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 20, 2, 20, 20, 2, 20, 20, 2, 20, 2, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 20, 20, 20, 20, 1, 1, 1],
                [20, 20, 20, 2, 20, 20, 2, 20, 20, 2, 20, 20, 20, 20, 5, 20, 1, 1, 1],
                [1, 20, 20, 2, 20, 20, 2, 20, 20, 2, 20, 20, 20, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 20, 2, 2, 20, 20, 1, 1],
                [1, 20, 2, 2, 2, 20, 2, 20, 20, 2, 20, 2, 20, 2, 2, 2, 20, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 20, 20, 2, 2, 2, 20, 20, 2, 2, 20, 1, 1],
                [1, 20, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 20, 1, 1],
                [1, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1],
                [1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [20, 20, 20, 20, 20, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 2, 2, 20, 20, 20, 20, 20, 2, 2, 2, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 20, 2, 20, 20, 2, 20, 20, 2, 20, 2, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 20, 20, 20, 20, 1, 1, 1],
                [20, 20, 20, 2, 20, 20, 2, 20, 20, 2, 20, 20, 20, 20, 5, 20, 1, 1, 1],
                [1, 20, 20, 2, 20, 20, 2, 20, 20, 2, 20, 20, 20, 20, 2, 20, 20, 1, 1],
                [1, 20, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 20, 20, 2, 2, 20, 1, 1],
                [1, 20, 2, 2, 2, 20, 2, 20, 20, 2, 20, 2, 20, 2, 2, 2, 20, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 20, 20, 2, 2, 2, 20, 2, 20, 20, 20, 1, 1],
                [1, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 20, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 1],
                [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[10][2] = 7
        }
        level.startX = 6
        level.startY = 5
        level.endX = 14
        level.endY = 7
        return level
    }

    get level9() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [1, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 20, 2, 2, 20, 20, 20, 20, 4, 4, 2, 2, 2, 2, 4, 2, 2, 20, 1],
                [1, 20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 20, 1],
                [1, 20, 20, 20, 2, 4, 20, 20, 20, 2, 20, 20, 20, 20, 2, 20, 20, 20, 1],
                [1, 1, 1, 20, 2, 4, 20, 20, 20, 5, 20, 2, 2, 20, 2, 20, 1, 1, 1],
                [1, 20, 20, 20, 2, 4, 20, 20, 20, 20, 20, 2, 2, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 20, 20, 20, 20, 2, 2, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 1, 1, 1],
                [1, 20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 20, 2, 20, 1, 1, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 20, 1, 1, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 20, 20, 1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1],
                [1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 1],
                [1, 20, 2, 20, 20, 20, 20, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 20, 1],
                [1, 20, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1],
                [1, 20, 2, 4, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 2, 20, 20, 20, 1],
                [1, 20, 2, 4, 20, 20, 20, 20, 20, 5, 20, 2, 2, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 4, 20, 20, 20, 20, 20, 20, 20, 2, 2, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 2, 20, 20, 20, 20, 2, 2, 2, 2, 2, 20, 2, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 4, 4, 2, 2, 20, 20, 20, 2, 20, 20, 20, 1, 1, 1],
                [1, 20, 2, 20, 2, 2, 2, 2, 2, 20, 20, 20, 2, 20, 1, 1, 1, 1, 1],
                [1, 20, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 2, 20, 1, 1, 1, 1, 1],
                [1, 20, 20, 20, 20, 20, 1, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[3][6] = 7
        }
        level.startX = 14
        level.startY = 7
        level.endX = 9
        level.endY = 5
        return level
    }

    get level10() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 2, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 2, 20, 20, 4, 4, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 2, 20, 20, 4, 4, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 20, 20, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 21, 2, 20, 2, 20],
                [20, 2, 20, 20, 20, 2, 2, 20, 20, 20, 2, 2, 2, 2, 20, 5, 20, 2, 20],
                [20, 2, 20, 20, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 2, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 2, 20, 20, 4, 4, 2, 2, 4, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 2, 20, 20, 4, 4, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 20, 20, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 21, 2, 20, 2, 20],
                [20, 2, 2, 20, 20, 2, 2, 20, 20, 20, 2, 2, 2, 2, 20, 5, 20, 2, 20],
                [20, 2, 2, 20, 20, 4, 4, 2, 2, 20, 2, 2, 2, 2, 20, 20, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        if (this.lastStageSolved) {
            level.map[5][14] = 7
        }
        level.startX = 9
        level.startY = 5
        level.endX = 15
        level.endY = 11
        return level
    }

    get level11() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 5, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 2, 20, 20, 20],
                [1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 4, 2, 4, 2, 4, 20],
                [1, 1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 4, 20, 2, 20, 4, 20],
                [1, 1, 20, 2, 2, 2, 20, 20, 20, 20, 2, 2, 20, 2, 2, 4, 2, 2, 20],
                [1, 1, 20, 2, 2, 2, 2, 4, 2, 20, 2, 2, 20, 20, 20, 2, 20, 20, 20],
                [1, 20, 20, 20, 4, 2, 20, 2, 2, 20, 2, 2, 4, 2, 20, 2, 20, 20, 20],
                [1, 20, 2, 2, 4, 20, 20, 20, 2, 20, 20, 20, 2, 20, 20, 21, 20, 20, 20],
                [1, 20, 2, 20, 2, 2, 6, 20, 4, 2, 2, 2, 2, 20, 2, 4, 4, 4, 20],
                [1, 20, 2, 20, 2, 20, 2, 20, 4, 20, 2, 2, 2, 20, 2, 20, 20, 4, 20],
                [1, 20, 2, 2, 4, 20, 2, 20, 2, 20, 2, 2, 2, 20, 2, 2, 20, 4, 20],
                [1, 20, 20, 20, 2, 2, 4, 4, 2, 20, 2, 2, 2, 20, 20, 20, 20, 4, 20],
                [1, 1, 1, 20, 2, 2, 20, 2, 2, 20, 2, 2, 4, 4, 4, 4, 4, 4, 20],
                [1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 5, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 2, 20, 20, 20],
                [1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 4, 2, 2, 20],
                [1, 1, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 4, 20, 2, 20, 4, 20],
                [1, 1, 20, 2, 2, 2, 20, 20, 20, 20, 2, 2, 20, 4, 2, 4, 2, 4, 20],
                [1, 1, 20, 2, 2, 2, 2, 4, 2, 20, 2, 2, 20, 20, 20, 2, 20, 20, 20],
                [1, 20, 20, 20, 4, 2, 20, 2, 2, 20, 2, 2, 4, 2, 20, 2, 20, 20, 20],
                [1, 20, 2, 2, 4, 20, 20, 20, 2, 20, 20, 20, 2, 20, 20, 21, 20, 20, 20],
                [1, 20, 2, 20, 2, 2, 6, 20, 4, 2, 2, 2, 2, 20, 2, 4, 4, 4, 20],
                [1, 20, 2, 20, 2, 20, 2, 20, 4, 20, 2, 2, 2, 20, 2, 20, 20, 4, 20],
                [1, 20, 2, 2, 4, 20, 2, 20, 2, 20, 2, 2, 2, 20, 2, 2, 20, 4, 20],
                [1, 20, 20, 20, 2, 2, 4, 4, 2, 20, 2, 2, 2, 20, 20, 20, 20, 4, 20],
                [1, 1, 1, 20, 2, 2, 20, 2, 2, 20, 2, 2, 4, 4, 4, 4, 4, 4, 20],
                [1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        if (this.lastStageSolved) {
            level.map[13][8] = 7
        }
        level.startX = 15
        level.startY = 11
        level.endX = 15
        level.endY = 1
        return level
    }

    get level12() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 1, 20, 20, 20, 20, 20, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 20, 2, 2, 20, 20, 20, 2, 2, 20, 2, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 20, 2, 4, 2, 2, 2, 4, 2, 20, 2, 20, 1, 1],
                [1, 1, 1, 1, 1, 20, 20, 20, 2, 20, 20, 20, 2, 20, 20, 2, 20, 20, 1],
                [20, 20, 20, 20, 20, 20, 2, 2, 4, 20, 20, 20, 2, 2, 2, 4, 2, 20, 1],
                [20, 2, 2, 20, 20, 20, 2, 20, 2, 20, 2, 20, 2, 20, 20, 2, 20, 20, 1],
                [20, 2, 4, 2, 2, 2, 4, 2, 4, 2, 4, 20, 4, 2, 2, 4, 20, 1, 1],
                [20, 2, 4, 2, 2, 2, 2, 20, 2, 20, 2, 20, 2, 20, 20, 2, 20, 1, 1],
                [20, 2, 4, 4, 20, 4, 4, 2, 4, 2, 4, 2, 4, 2, 20, 2, 20, 20, 20],
                [20, 2, 4, 4, 20, 2, 2, 20, 2, 20, 2, 20, 2, 20, 20, 2, 2, 2, 20],
                [20, 2, 4, 4, 20, 20, 2, 2, 4, 2, 4, 2, 4, 2, 20, 20, 20, 21, 20],
                [20, 2, 4, 4, 20, 20, 2, 2, 20, 20, 2, 20, 2, 2, 20, 5, 2, 2, 20],
                [20, 2, 4, 4, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 6, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 1, 20, 20, 20, 20, 20, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 20, 2, 2, 20, 20, 20, 2, 2, 20, 2, 20, 1, 1],
                [1, 1, 1, 1, 1, 1, 20, 2, 4, 2, 2, 2, 4, 2, 20, 2, 20, 1, 1],
                [1, 1, 1, 1, 1, 20, 20, 20, 2, 20, 20, 20, 2, 20, 20, 2, 20, 1, 1],
                [20, 20, 20, 20, 20, 20, 2, 2, 4, 20, 20, 20, 2, 2, 2, 4, 20, 1, 1],
                [20, 2, 2, 20, 20, 20, 2, 20, 2, 20, 2, 20, 2, 20, 20, 2, 20, 20, 1],
                [20, 2, 4, 2, 2, 2, 4, 2, 4, 2, 4, 20, 4, 2, 2, 4, 2, 20, 1],
                [20, 2, 4, 2, 2, 2, 2, 20, 2, 20, 2, 20, 2, 20, 20, 2, 20, 20, 1],
                [20, 2, 4, 4, 20, 4, 4, 2, 4, 2, 4, 2, 4, 2, 20, 2, 20, 20, 20],
                [20, 2, 4, 4, 20, 2, 2, 20, 2, 20, 2, 20, 2, 20, 20, 2, 2, 2, 20],
                [20, 2, 4, 4, 20, 20, 2, 2, 4, 2, 4, 2, 4, 2, 20, 20, 20, 21, 20],
                [20, 2, 4, 4, 20, 20, 2, 2, 20, 20, 2, 20, 2, 2, 20, 5, 2, 2, 20],
                [20, 2, 4, 4, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 6, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[7][10] = 7
        }
        level.startX = 15
        level.startY = 1
        level.endX = 10
        level.endY = 11
        return level
    }

    get level13() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 1, 20, 20, 20, 1, 1, 1, 1],
                [1, 1, 20, 20, 20, 20, 20, 20, 2, 2, 20, 20, 20, 2, 20, 1, 1, 1, 1],
                [1, 1, 20, 2, 2, 20, 2, 2, 2, 4, 2, 2, 4, 4, 20, 1, 1, 1, 1],
                [1, 1, 20, 2, 2, 2, 2, 2, 2, 2, 20, 20, 2, 2, 20, 1, 1, 1, 1],
                [1, 1, 20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 20, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 3, 20, 20, 20, 20, 20, 4, 4, 4, 2, 20, 1, 1, 1],
                [1, 1, 20, 4, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 20, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 2, 20, 20, 2, 2, 2, 4, 4, 4, 20, 1, 1, 1, 1],
                [20, 20, 20, 2, 20, 2, 20, 2, 2, 2, 2, 2, 2, 4, 20, 1, 1, 1, 1],
                [20, 6, 20, 2, 20, 2, 20, 2, 2, 2, 2, 4, 4, 4, 20, 1, 1, 1, 1],
                [20, 4, 20, 2, 20, 2, 20, 20, 20, 20, 20, 4, 2, 20, 20, 20, 20, 20, 1],
                [20, 4, 20, 2, 4, 2, 20, 5, 2, 21, 2, 4, 20, 20, 2, 2, 2, 20, 1],
                [20, 4, 20, 20, 4, 20, 20, 20, 20, 20, 20, 2, 2, 2, 4, 2, 2, 20, 1],
                [20, 4, 4, 4, 4, 20, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [1, 1, 1, 1, 1, 1, 1, 20, 20, 20, 20, 1, 20, 20, 20, 1, 1, 1, 1],
                [1, 1, 20, 20, 20, 20, 20, 20, 2, 2, 20, 20, 20, 2, 20, 1, 1, 1, 1],
                [1, 1, 20, 2, 2, 20, 2, 2, 2, 4, 2, 2, 4, 4, 20, 1, 1, 1, 1],
                [1, 1, 20, 2, 2, 2, 2, 2, 2, 2, 20, 20, 2, 2, 20, 1, 1, 1, 1],
                [1, 20, 20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 20, 20, 1, 1, 1],
                [1, 20, 2, 4, 20, 3, 20, 20, 20, 20, 20, 4, 4, 4, 2, 20, 1, 1, 1],
                [1, 20, 20, 2, 20, 2, 2, 2, 2, 2, 2, 4, 2, 2, 20, 20, 1, 1, 1],
                [1, 1, 20, 2, 20, 2, 20, 20, 2, 2, 2, 4, 4, 4, 20, 1, 1, 1, 1],
                [20, 20, 20, 2, 20, 2, 20, 2, 2, 2, 2, 2, 2, 4, 20, 1, 1, 1, 1],
                [20, 6, 20, 2, 20, 2, 20, 2, 2, 2, 2, 4, 4, 4, 20, 1, 1, 1, 1],
                [20, 4, 20, 2, 20, 2, 20, 20, 20, 20, 20, 4, 2, 20, 20, 20, 20, 20, 1],
                [20, 4, 20, 2, 4, 2, 20, 5, 2, 21, 2, 4, 20, 20, 2, 2, 2, 20, 1],
                [20, 4, 20, 20, 4, 20, 20, 20, 20, 20, 20, 2, 2, 2, 4, 2, 2, 20, 1],
                [20, 4, 4, 4, 4, 20, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 1],
                [20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[7][9] = 7
        }
        level.startX = 15
        level.startY = 11
        level.endX = 10
        level.endY = 11
        return level
    }

    get level14() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 1, 1, 1, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 2, 2, 2, 20, 1, 1, 1, 20, 2, 2, 20, 20, 20, 1, 1, 1, 1],
                [20, 2, 2, 2, 2, 20, 20, 20, 1, 20, 2, 2, 2, 2, 20, 1, 1, 1, 1],
                [20, 20, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 20, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 4, 2, 2, 20, 2, 2, 2, 4, 2, 20, 20, 1, 1],
                [1, 20, 2, 20, 20, 2, 2, 20, 2, 20, 20, 2, 2, 2, 4, 2, 20, 1, 1],
                [20, 20, 2, 2, 20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 20, 20, 20, 1],
                [20, 2, 2, 2, 20, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 6, 20, 1],
                [20, 2, 2, 2, 20, 2, 20, 4, 20, 20, 20, 2, 20, 2, 2, 2, 2, 20, 1],
                [20, 2, 2, 20, 20, 2, 2, 4, 2, 2, 20, 4, 2, 2, 2, 20, 20, 20, 1],
                [20, 20, 2, 20, 20, 20, 20, 20, 20, 2, 20, 2, 2, 2, 4, 2, 20, 1, 1],
                [1, 20, 2, 20, 20, 20, 20, 2, 2, 2, 20, 2, 2, 4, 2, 20, 20, 1, 1],
                [1, 20, 2, 21, 2, 5, 20, 2, 2, 2, 20, 2, 2, 2, 20, 20, 1, 1, 1],
                [1, 20, 3, 20, 20, 20, 20, 2, 2, 2, 20, 20, 2, 2, 20, 1, 1, 1, 1],
                [1, 20, 20, 20, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 1, 1, 1, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1],
                [20, 2, 2, 2, 2, 20, 1, 1, 1, 20, 2, 2, 20, 20, 20, 1, 1, 1, 1],
                [20, 2, 2, 2, 2, 20, 20, 20, 1, 20, 2, 2, 2, 2, 20, 1, 1, 1, 1],
                [20, 20, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 20, 20, 1, 1, 1],
                [1, 20, 2, 2, 2, 2, 4, 2, 2, 20, 2, 2, 2, 4, 2, 20, 20, 1, 1],
                [20, 20, 2, 20, 20, 2, 2, 20, 2, 20, 20, 2, 2, 2, 4, 2, 20, 1, 1],
                [20, 2, 2, 20, 20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 20, 20, 20, 1],
                [20, 2, 2, 2, 20, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 6, 20, 1],
                [20, 2, 2, 2, 20, 2, 20, 4, 20, 20, 20, 2, 20, 2, 2, 2, 2, 20, 1],
                [20, 20, 2, 2, 20, 2, 2, 4, 2, 2, 20, 4, 2, 2, 2, 20, 20, 20, 1],
                [20, 20, 2, 20, 20, 20, 20, 20, 20, 2, 20, 2, 2, 2, 4, 2, 20, 1, 1],
                [1, 20, 2, 20, 20, 20, 20, 2, 2, 2, 20, 2, 2, 4, 2, 20, 20, 1, 1],
                [1, 20, 2, 21, 2, 5, 20, 2, 2, 2, 20, 2, 2, 2, 20, 20, 1, 1, 1],
                [1, 20, 3, 20, 20, 20, 20, 2, 2, 2, 20, 20, 2, 2, 20, 1, 1, 1, 1],
                [1, 20, 20, 20, 1, 1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1]
            ]
        }
        if (this.lastStageSolved) {
            level.map[3][6] = 7
        }
        level.startX = 7
        level.startY = 11
        level.endX = 5
        level.endY = 12
        return level
    }

    get level15() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 4, 4, 20, 4, 4, 2, 2, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 20, 2, 2, 20],
                [20, 2, 2, 2, 20, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 20, 21, 20, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 20, 2, 5, 20],
                [20, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 20],
                [20, 8, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20],
                [20, 2, 20, 2, 20, 2, 20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 4, 4, 20, 4, 4, 2, 2, 2, 20],
                [20, 2, 20, 20, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 20, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 20, 21, 20, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 20, 2, 5, 20],
                [20, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 20],
                [20, 8, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20],
                [20, 2, 20, 2, 20, 2, 20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        if (this.lastStageSolved) {
            level.map[5][9] = 7
        }
        level.startX = 5
        level.startY = 12
        level.endX = 17
        level.endY = 4
        return level
    }

    get level16() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 4, 2, 2, 2, 20, 20, 2, 2, 2, 2, 20, 2, 2, 2, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 20],
                [20, 2, 2, 2, 20, 20, 2, 2, 2, 2, 20, 20, 20, 2, 2, 20, 20, 20, 20],
                [20, 20, 20, 2, 20, 20, 20, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 2, 20],
                [20, 20, 2, 2, 20, 20, 20, 2, 20, 2, 20, 20, 2, 2, 2, 2, 2, 20, 20],
                [20, 20, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 20, 20],
                [20, 20, 20, 2, 2, 2, 20, 2, 20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 20, 2, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 2, 20, 2, 2, 2, 2, 4, 20],
                [20, 2, 2, 2, 20, 2, 2, 4, 2, 4, 2, 2, 20, 21, 20, 5, 20, 4, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 2, 4, 20, 20, 20, 4, 20],
                [20, 2, 2, 20, 2, 2, 2, 2, 20, 3, 20, 2, 2, 4, 4, 4, 4, 9, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 4, 2, 2, 2, 20, 20, 2, 2, 2, 2, 20, 2, 2, 2, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 20],
                [20, 2, 2, 2, 20, 20, 2, 2, 2, 2, 20, 20, 20, 2, 2, 20, 20, 20, 20],
                [20, 20, 20, 2, 20, 20, 20, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 2, 20],
                [20, 20, 2, 2, 20, 20, 20, 2, 20, 2, 20, 20, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 2, 2, 2, 20, 2, 20, 2, 20, 2, 2, 2, 2, 2, 2, 20, 20],
                [20, 20, 20, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 20, 20],
                [20, 2, 2, 2, 2, 2, 20, 2, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 2, 20, 2, 2, 2, 2, 4, 20],
                [20, 2, 2, 2, 20, 2, 2, 4, 2, 4, 2, 2, 20, 21, 20, 5, 20, 4, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 2, 4, 20, 20, 20, 4, 20],
                [20, 2, 2, 20, 2, 2, 2, 2, 20, 3, 20, 2, 2, 4, 4, 4, 4, 9, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        if (this.lastStageSolved) {
            level.map[9][5] = 7
        }
        level.startX = 17
        level.startY = 4
        level.endX = 15
        level.endY = 11
        return level
    }

    get level17() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 20, 20, 3, 20, 2, 2, 2, 20, 6, 20, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 20, 2, 2, 2, 2, 20, 2, 20, 4, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 20, 2, 2, 20, 20, 20, 4, 2, 2, 2, 20, 2, 20],
                [20, 2, 20, 20, 20, 2, 20, 2, 2, 20, 2, 4, 2, 20, 2, 2, 20, 2, 20],
                [20, 2, 20, 5, 20, 2, 20, 2, 2, 20, 20, 2, 4, 2, 4, 2, 20, 2, 20],
                [20, 4, 2, 2, 2, 2, 20, 2, 2, 20, 2, 4, 2, 2, 2, 20, 20, 2, 20],
                [20, 21, 20, 20, 20, 20, 20, 2, 2, 20, 20, 2, 4, 2, 20, 20, 2, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 20, 2, 2, 4, 20, 20, 2, 4, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 20, 20, 2, 2, 2, 20],
                [20, 2, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20],
                [20, 2, 11, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 20, 20, 3, 20, 2, 2, 2, 20, 6, 20, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 20, 2, 2, 2, 2, 20, 2, 20, 4, 2, 2, 2, 20],
                [20, 2, 2, 2, 2, 2, 20, 2, 2, 20, 20, 20, 4, 2, 2, 2, 20, 2, 20],
                [20, 2, 20, 20, 20, 2, 20, 2, 2, 20, 2, 4, 2, 20, 2, 2, 20, 2, 20],
                [20, 2, 20, 5, 20, 2, 20, 2, 2, 20, 20, 2, 4, 2, 4, 2, 20, 2, 20],
                [20, 4, 2, 2, 2, 2, 20, 2, 2, 20, 2, 4, 2, 2, 2, 20, 20, 2, 20],
                [20, 21, 20, 20, 20, 20, 20, 2, 2, 20, 20, 2, 4, 2, 20, 20, 2, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 20, 2, 2, 4, 20, 20, 2, 4, 2, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 20, 2, 2, 2, 20, 20, 2, 2, 2, 20],
                [20, 2, 20, 20, 20, 20, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20],
                [20, 2, 11, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 2, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        if (this.lastStageSolved) {
            level.map[5][7] = 7
        }
        level.startX = 15
        level.startY = 11
        level.endX = 3
        level.endY = 5
        level.warp1X = 10
        level.warp1Y = 13
        level.warp2X = 2
        level.warp2Y = 11
        return level
    }

    get level18() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 20],
                [20, 20, 20, 20, 20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 2, 20, 11, 4, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 20, 20, 2, 2, 2, 20, 2, 4, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 5, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 21, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 20, 20, 20, 20, 4, 4, 2, 2, 2, 20, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 20, 20, 4, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 20, 20, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 2, 2, 2, 4, 2, 20, 20, 2, 2, 20, 20, 2, 2, 20, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 20],
                [20, 20, 20, 20, 20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 2, 20, 11, 4, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 20, 20, 2, 2, 2, 20, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 20],
                [20, 20, 20, 5, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 2, 20],
                [20, 20, 20, 20, 20, 21, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 4, 4, 2, 2, 2, 20, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 2, 2, 2, 4, 2, 2, 2, 2, 2, 20, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 20, 20, 4, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20],
                [20, 2, 20, 20, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 2, 20],
                [20, 2, 2, 2, 4, 2, 20, 20, 2, 2, 20, 20, 2, 2, 20, 2, 2, 2, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        if (this.lastStageSolved) {
            level.map[1][17] = 7
        }
        level.startX = 3
        level.startY = 5
        level.endX = 3
        level.endY = 7
        return level
    }

    get level19() {
        let level = {}
        if (Phaser.Math.Between(0, 1) == 0) {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 5, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 13, 13, 13, 13, 20, 20],
                [20, 20, 20, 20, 2, 2, 20, 3, 20, 2, 2, 2, 2, 20, 20, 20, 13, 13, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 13, 13, 13, 20, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 13, 20, 20, 20, 20],
                [20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 13, 20, 20, 13, 20],
                [20, 21, 20, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 20, 13, 13, 13, 13, 20],
                [20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 4, 2, 2, 20, 13, 20, 20, 13, 20],
                [20, 2, 20, 4, 4, 2, 2, 2, 2, 20, 2, 20, 2, 20, 20, 13, 13, 13, 20],
                [20, 4, 2, 4, 2, 20, 2, 2, 2, 20, 2, 2, 2, 20, 20, 20, 13, 20, 20],
                [20, 2, 20, 2, 20, 20, 2, 11, 2, 20, 2, 2, 2, 2, 20, 20, 13, 13, 20],
                [20, 2, 2, 4, 2, 20, 2, 2, 2, 20, 2, 2, 2, 4, 4, 6, 20, 13, 20],
                [20, 2, 2, 2, 2, 20, 20, 20, 20, 20, 2, 2, 20, 20, 20, 20, 20, 14, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        } else {
            level.map = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 5, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20],
                [20, 2, 2, 2, 2, 2, 20, 20, 20, 2, 2, 2, 2, 13, 13, 13, 13, 20, 20],
                [20, 20, 20, 20, 2, 2, 20, 3, 20, 2, 2, 2, 2, 20, 20, 20, 13, 13, 20],
                [20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 13, 13, 13, 20, 20],
                [20, 2, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 13, 20, 20, 20, 20],
                [20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 2, 20, 13, 20, 20, 13, 20],
                [20, 21, 20, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 20, 13, 13, 13, 13, 20],
                [20, 2, 20, 20, 20, 2, 2, 2, 2, 2, 4, 2, 2, 20, 13, 20, 20, 13, 20],
                [20, 2, 20, 2, 4, 2, 2, 2, 2, 20, 2, 20, 2, 20, 20, 13, 13, 13, 20],
                [20, 4, 2, 4, 4, 20, 2, 2, 2, 20, 2, 2, 2, 20, 20, 20, 13, 20, 20],
                [20, 2, 20, 2, 20, 20, 2, 11, 2, 20, 2, 2, 2, 2, 20, 20, 13, 13, 20],
                [20, 2, 2, 4, 2, 20, 2, 2, 2, 20, 2, 2, 2, 4, 4, 6, 20, 13, 20],
                [20, 2, 2, 2, 2, 20, 20, 20, 20, 20, 2, 2, 20, 20, 20, 20, 20, 14, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            ]
        }
        level.startX = 3
        level.startY = 7
        level.endX = 1
        level.endY = 1
        level.warp1X = 10
        level.warp1Y = 7
        level.warp2X = 7
        level.warp2Y = 11
        return level
    }

    create() {
        super.create()

        this.coinBagsCollected = 0

        // this.startGame()
    }

    startGame() {
        this.currentLevel = 1
        this.isPlayerSpawned = false
        this.interface.input.keyboard.on('keydown', (event) => {
            switch (event.code) {
                case 'KeyA':
                case 'ArrowLeft':
                    if (!this.oldLeft) {
                        this.moveLeft()
                        this.priorityDirection = 'left'
                        this.oldLeft = true
                    }
                    break
                case 'KeyD':
                case 'ArrowRight':
                    if (!this.oldRight) {
                        this.moveRight()
                        this.priorityDirection = 'right'
                        this.oldRight = true
                    }
                    break
                case 'KeyW':
                case 'ArrowUp':
                    if (!this.oldUp) {
                        this.moveUp()
                        this.priorityDirection = 'up'
                        this.oldUp = true
                    }
                    break
                case 'KeyS':
                case 'ArrowDown':
                    if (!this.oldDown) {
                        this.moveDown()
                        this.priorityDirection = 'down'
                        this.oldDown = true
                    }
                    break
                case 'KeyR':
                    this.restartLevel()
                    break
            }
        })

        this.interface.input.keyboard.on('keyup', (event) => {
            switch (event.code) {
                case 'KeyA':
                case 'ArrowLeft':
                    this.oldLeft = false
                    break
                case 'KeyD':
                case 'ArrowRight':
                    this.oldRight = false
                    break
                case 'KeyW':
                case 'ArrowUp':
                    this.oldUp = false
                    break
                case 'KeyS':
                case 'ArrowDown':
                    this.oldDown = false
                    break
            }
        })

        this.arrowLeft = this.input.keyboard.addKey(37)
        this.arrowRight = this.input.keyboard.addKey(39)
        this.arrowUp = this.input.keyboard.addKey(38)
        this.arrowDown = this.input.keyboard.addKey(40)

        this.wKey = this.input.keyboard.addKey(87)
        this.aKey = this.input.keyboard.addKey(65)
        this.sKey = this.input.keyboard.addKey(83)
        this.dKey = this.input.keyboard.addKey(68)

        this.physicalDownArrow = false
        this.physicalUpArrow = false
        this.physicalLeftArrow = false
        this.physicalRightArrow = false

        this.down_arrow.setInteractive()
        this.down_arrow.on('pointerdown', () => {
            this.moveDown()
            this.physicalDownArrow = true
        })
        this.down_arrow.on('pointerup', () => {
            this.physicalDownArrow = false
        })

        this.up_arrow.setInteractive()
        this.up_arrow.on('pointerdown', () => {
            this.moveUp()
            this.physicalUpArrow = true
        })
        this.up_arrow.on('pointerup', () => {
            this.physicalUpArrow = false
        })

        this.left_arrow.setInteractive()
        this.left_arrow.on('pointerdown', () => {
            this.moveLeft()
            this.physicalLeftArrow = true
        })
        this.left_arrow.on('pointerup', () => {
            this.physicalLeftArrow = false
        })

        this.right_arrow.setInteractive()
        this.right_arrow.on('pointerdown', () => {
            this.moveRight()
            this.physicalRightArrow = true
        })
        this.right_arrow.on('pointerup', () => {
            this.physicalRightArrow = false
        })

        this.solvedLevels = 0
        this.solvedTxt.visible = true
        this.solvedTxt.setText(`SOLVED ${this.solvedLevels}`)
        this.levelTxt.visible = true
        this.completionTxt.visible = true
        this.createLevel()

        this.events.on('shutdown', () => {
            this.interface.input.keyboard.off('keydown', undefined, this)
            this.interface.input.keyboard.off('keyup', undefined, this)
        })
    }

    createLevel() {
        this.hasKey = false
        for (let tile of this.tileList) {
            if (tile.overlay) {
                tile.overlay.destroy()
                tile.overlay = null
            }
            tile.anims.stop()
            tile.setFrame('tile_1')
        }
        let level = this[`level${this.currentLevel}`]
        if (!level) {
            return this.endGame()
        }
        this.currentMap = level.map
        let i = 0
        let tilesTotal = 0
        for (let row of level.map) {
            for (let tile of row) {
                this.setTile(this.tileList[i], tile)
                switch (tile) {
                    case 2:
                    case 7:
                    case 6:
                    case 21:
                        tilesTotal++
                        break
                    case 4:
                        tilesTotal += 2
                        break
                }
                i++
            }
        }
        this.tilesTotal = tilesTotal
        this.tilesMelted = 0
        this.completionTxt.setText(`0/${this.tilesTotal}`)
        this.levelTxt.setText(`LEVEL ${this.currentLevel}`)
        this.currentPlayerX = level.startX
        this.currentPlayerY = level.startY
        Object.assign(this.player, this.getTilePos(level.startX, level.startY))
        if (!this.isPlayerSpawned) {
            this.isPlayerSpawned = true
            this.player.play('thinice-player_ignite')
            this.player.on('animationcomplete', () => {
                this.player.play('thinice-player_default')
            })
        }

        // Prevents keys getting stuck
        this.physicalDownArrow = false
        this.physicalUpArrow = false
        this.physicalLeftArrow = false
        this.physicalRightArrow = false
    }

    endGame() {}

    setTile(tile, id) {
        switch (id) {
            case 6:
            case 8:
            case 9:
            case 12:
                tile.setFrame(`tile_${id}_0001`)
                tile.play(`thinice-tile_${id}`)
                break
            case 22:
                tile.setFrame('tile_22_float0001')
                tile.play('thinice-tile_22_float')
                tile.overlay = this.add.sprite(tile.x, tile.y, 'thinice', 'tile_22_0001')
                tiles.add(tile.overlay)
                break
            default:
                tile.setFrame(`tile_${id}`)
        }
    }

    getTilePos(x, y) {
        let tileX = 48 * x + 312
        let tileY = 48 * y + 120
        return {x: tileX, y: tileY}
    }

    getTileAtPos(x, y) {
        let index = y * 19 + x
        return this.tileList[index]
    }

    moveDown() {
        if (this.player.isTweening) return
        clearTimeout(this.DATimeout)
        this.down_arrow.setFrame('down-arrow-active')
        this.DATimeout = setTimeout(() => {
            this.down_arrow.setFrame('down-arrow')
        }, 250)
        this.moveTo(this.currentPlayerX, this.currentPlayerY + 1)
    }

    moveLeft() {
        if (this.player.isTweening) return
        clearTimeout(this.LATimeout)
        this.left_arrow.setFrame('left-arrow-active')
        this.LATimeout = setTimeout(() => {
            this.left_arrow.setFrame('left-arrow')
        }, 200)
        this.moveTo(this.currentPlayerX - 1, this.currentPlayerY)
    }

    moveRight() {
        if (this.player.isTweening) return
        clearTimeout(this.RATimeout)
        this.right_arrow.setFrame('right-arrow-active')
        this.RATimeout = setTimeout(() => {
            this.right_arrow.setFrame('right-arrow')
        }, 200)
        this.moveTo(this.currentPlayerX + 1, this.currentPlayerY)
    }

    moveUp() {
        if (this.player.isTweening) return
        clearTimeout(this.UATimeout)
        this.up_arrow.setFrame('up-arrow-active')
        this.UATimeout = setTimeout(() => {
            this.up_arrow.setFrame('up-arrow')
        }, 200)
        this.moveTo(this.currentPlayerX, this.currentPlayerY - 1)
    }

    moveTo(x, y) {
        if (this.player.isTweening) return

        const curL = this.currentLevel
        const curY = this.currentPlayerY
        const curX = this.currentPlayerX
        let tileType = this.currentMap[curY][curX]
        let tileSprite = this.getTileAtPos(curX, curY)
        let pos = this.getTilePos(x, y)
        let newTileType = this.currentMap[y][x]
        let newTileSprite = this.getTileAtPos(x, y)

        this.afterMove1 = () => {}
        this.afterMove2 = () => {}

        switch (newTileType) {
            case 20:
            case 22:
                return
            case 7:
                this.afterMove1 = () => {
                    this.coinBagsCollected++
                    this.currentMap[y][x] = 2
                    newTileSprite.setFrame('tile_2')
                }
                break
            case 6:
                this.afterMove1 = () => {
                    this.hasKey = true
                    this.currentMap[y][x] = 2
                    newTileSprite.anims.stop()
                    newTileSprite.setFrame('tile_2')
                }
                break
            case 8:
                this.afterMove1 = () => {
                    this.hasKey = true
                    this.currentMap[y][x] = 4
                    newTileSprite.anims.stop()
                    newTileSprite.setFrame('tile_4')
                }
                break
            case 9:
                this.afterMove1 = () => {
                    this.hasKey = true
                    this.currentMap[y][x] = 3
                    newTileSprite.anims.stop()
                    newTileSprite.setFrame('tile_3')
                }
                break
            case 21:
                if (!this.hasKey) return
                this.afterMove1 = () => {
                    this.currentMap[y][x] = 2
                    newTileSprite.setFrame('tile_2')
                }
                break
            case 5:
                this.afterMove1 = () => {
                    if (this.tilesMelted == this.tilesTotal) {
                        this.solvedLevels++
                        this.solvedTxt.setText(`SOLVED ${this.solvedLevels}`)
                        this.lastStageSolved = true
                    } else {
                        this.lastStageSolved = false
                    }

                    this.currentLevel++
                    this.createLevel()
                }
                break
        }

        this.player.isTweening = true

        switch (tileType) {
            case 2:
                this.tilesMelted++
                this.afterMove2 = () => {
                    this.currentMap[curY][curX] = 22
                    tileSprite.setFrame('tile_22_float0001')
                    tileSprite.play('thinice-tile_22_float')
                    tileSprite.overlay = this.add.sprite(tileSprite.x, tileSprite.y, 'thinice', 'tile_22_0001')
                    this.tiles.add(tileSprite.overlay)
                    tileSprite.overlay.play('thinice-tile_22')
                    tileSprite.overlay.on('animationcomplete', () => {
                        tileSprite.overlay.destroy()
                        tileSprite.overlay = null
                    })
                    this.completionTxt.setText(`${this.tilesMelted}/${this.tilesTotal}`)
                }
                break
            case 4:
                this.tilesMelted++
                this.afterMove2 = () => {
                    this.currentMap[curY][curX] = 2
                    tileSprite.setFrame('tile_2')
                    this.completionTxt.setText(`${this.tilesMelted}/${this.tilesTotal}`)
                }
                break
        }

        this.tweens.add({
            targets: this.player,
            x: pos.x,
            y: pos.y,
            duration: 125,
            onComplete: () => {
                if (this.currentLevel == curL) {
                    this.currentPlayerX = x
                    this.currentPlayerY = y
                    this.checkIfPlayerCanMove()
                }
                setTimeout(() => {
                    this.player.isTweening = false
                    let directions = {
                        left: this.arrowLeft.isDown || this.aKey.isDown || this.physicalLeftArrow,
                        right: this.arrowRight.isDown || this.dKey.isDown || this.physicalRightArrow,
                        up: this.arrowUp.isDown || this.wKey.isDown || this.physicalUpArrow,
                        down: this.arrowDown.isDown || this.sKey.isDown || this.physicalDownArrow
                    }
                    if (directions[this.priorityDirection]) this[`move${this.priorityDirection[0].toUpperCase() + this.priorityDirection.substring(1)}`]()
                    else if (directions.left) this.moveLeft()
                    else if (directions.right) this.moveRight()
                    else if (directions.up) this.moveUp()
                    else if (directions.down) this.moveDown()
                }, 25)
            }
        })
        this.afterMove1()
        if (this.currentLevel == curL) this.afterMove2()
    }

    checkIfPlayerCanMove() {
        function checks() {
            if (this.currentPlayerY > 0) {
                let tile = this.currentMap[this.currentPlayerY - 1][this.currentPlayerX]
                if (![20, 22].includes(tile)) return true
            }
            if (this.currentPlayerY < 14) {
                let tile = this.currentMap[this.currentPlayerY + 1][this.currentPlayerX]
                if (![20, 22].includes(tile)) return true
            }
            if (this.currentPlayerX > 0) {
                let tile = this.currentMap[this.currentPlayerY][this.currentPlayerX - 1]
                if (![20, 22].includes(tile)) return true
            }
            if (this.currentPlayerX < 18) {
                let tile = this.currentMap[this.currentPlayerY][this.currentPlayerX + 1]
                if (![20, 22].includes(tile)) return true
            }
            return false
        }
        let canMove = checks.call(this)
        if (!canMove) {
            this.playerSink.x = this.player.x
            this.playerSink.y = this.player.y
            this.playerSink.play('thinice-player_sink')
            this.playerSink.on('animationcomplete', () => {
                this.restartLevel()
            })
        }
    }

    restartLevel() {
        this.isPlayerSpawned = false
        this.createLevel()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
