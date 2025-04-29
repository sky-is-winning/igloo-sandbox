import BaseScene from '@scenes/base/BaseScene'

import {Button, Interactive, ShowHint, SimpleButton, LocalisedString, InputText} from '@components/components'

import IglooFactory from '@engine/world/room/IglooFactory'

import IglooMusic from './igloomusic/IglooMusic'
import IglooItem from './IglooItem'

import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'

/* START OF COMPILED CODE */

export default class IglooEdit extends BaseScene {

    constructor() {
        super("IglooEdit");

        /** @type {Phaser.GameObjects.Container} */
        this.defaultControls;
        /** @type {Phaser.GameObjects.Image} */
        this.button_box;
        /** @type {Phaser.GameObjects.Text} */
        this.music;
        /** @type {Phaser.GameObjects.Text} */
        this.hide;
        /** @type {Phaser.GameObjects.Container} */
        this.lower;
        /** @type {Phaser.GameObjects.Text} */
        this.search;
        /** @type {Phaser.GameObjects.Text} */
        this.search_input;
        /** @type {Phaser.GameObjects.Container} */
        this.searchBox;
        /** @type {Phaser.GameObjects.Container} */
        this.itemContainer;
        /** @type {NinePatchContainer} */
        this.scrollbar;
        /** @type {Phaser.GameObjects.Container} */
        this.scroller;
        /** @type {Phaser.GameObjects.Container} */
        this.scrollBarContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.upper;
        /** @type {IglooMusic} */
        this.iglooMusic;
        /** @type {Phaser.GameObjects.Container} */
        this.controls;
        /** @type {Phaser.GameObjects.Sprite} */
        this.toggler;
        /** @type {Phaser.GameObjects.Container} */
        this.chooseIgloo;
        /** @type {Phaser.GameObjects.Image[]} */
        this.categories;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.spinners;
        /** @type {Array<any>} */
        this.likesText;
        /** @type {Phaser.GameObjects.Text[]} */
        this.copyTexts;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // defaultControls
        const defaultControls = this.add.container(1426, 758);

        // button_edit
        const button_edit = this.add.image(0, 126, "iglooedit-new", "edit-btn");
        defaultControls.add(button_edit);

        // controls
        const controls = this.add.container(0, 0);
        controls.visible = false;

        // button_box
        const button_box = this.add.image(1424.9985859979595, 883.0016987305266, "iglooedit-new", "cardboardbox");
        button_box.setOrigin(0.5, 0.584);
        controls.add(button_box);

        // lower
        const lower = this.add.container(56.99858594592661, 25.001698585925624);
        controls.add(lower);

        // music_panel
        const music_panel = this.add.image(0, 0, "iglooedit-new", "music-panel");
        lower.add(music_panel);

        // big_button
        const big_button = this.add.nineslice(35, 246, "iglooedit-new", "big-button", 80, 65, 10, 10, 10, 10);
        lower.add(big_button);

        // music_icon
        const music_icon = this.add.image(34, 246, "iglooedit-new", "music-icon");
        lower.add(music_icon);

        // arrow
        const arrow = this.add.image(107, 247, "iglooedit-new", "arrow");
        lower.add(arrow);

        // small_btn
        const small_btn = this.add.nineslice(50, 328, "iglooedit-new", "small-btn", 150, 42, 10, 10, 10, 10);
        lower.add(small_btn);

        // music
        const music = this.add.text(35, 200, "", {});
        music.setOrigin(0.5, 0.5);
        music.text = "Music";
        music.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":150,"fontFamily": "cpBurbankSmall", "fontSize": "22px", "fontStyle": "bold" });
        lower.add(music);

        // hide
        const hide = this.add.text(50, 328, "", {});
        hide.setOrigin(0.5, 0.5);
        hide.text = "Hide";
        hide.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":150,"fontFamily": "cpBurbankSmall", "fontSize": "22px", "fontStyle": "bold" });
        lower.add(hide);

        // upper
        const upper = this.add.container(0, 0);
        controls.add(upper);

        // searchBox
        const searchBox = this.add.container(0, 0);
        searchBox.visible = false;
        upper.add(searchBox);

        // music_panel_1
        const music_panel_1 = this.add.image(410, -101, "iglooedit-new", "music-panel");
        searchBox.add(music_panel_1);

        // search
        const search = this.add.text(271, 205, "", {});
        search.setOrigin(0, 0.5);
        search.text = "Search:";
        search.setStyle({ "color": "#3e83c5ff", "fixedWidth":150,"fontFamily": "cpBurbankSmall", "fontSize": "22px", "fontStyle": "bold" });
        searchBox.add(search);

        // search_input
        const search_input = this.add.text(271, 241, "", {});
        search_input.setOrigin(0, 0.5);
        search_input.text = "Enter Name";
        search_input.setStyle({ "color": "#3e83c5ff", "fixedWidth":270,"fontFamily": "cpBurbankSmall", "fontSize": "22px", "fontStyle": "bold" });
        searchBox.add(search_input);

        // all
        const all = this.add.image(659.9985859459266, 215.00169858592562, "iglooedit-new", "all-selected");
        upper.add(all);

        // location
        const location = this.add.image(774.9985859459266, 216.00169858592562, "iglooedit-new", "location");
        upper.add(location);

        // igloos
        const igloos = this.add.image(889.9985859459266, 216.00169858592562, "iglooedit-new", "igloos");
        upper.add(igloos);

        // flooring
        const flooring = this.add.image(1004.9985859459266, 216.00169858592562, "iglooedit-new", "flooring");
        upper.add(flooring);

        // room
        const room = this.add.image(1119.9985859459266, 216.00169858592562, "iglooedit-new", "room");
        upper.add(room);

        // wall
        const wall = this.add.image(1234.9985859459266, 216.00169858592562, "iglooedit-new", "wall");
        upper.add(wall);

        // pets
        const pets = this.add.image(1349.9985859459266, 216.00169858592562, "iglooedit-new", "pets");
        upper.add(pets);

        // top_bar
        const top_bar = this.add.image(777.9985859459266, 72.00169858592562, "iglooedit-new", "top-bar");
        upper.add(top_bar);

        // itemContainer
        const itemContainer = this.add.container(0, 0);
        upper.add(itemContainer);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1462.0000507896766, 91.99999723094516, 115.5, 170);
        upper.add(rectangle_1);

        // close_btn
        const close_btn = this.add.image(1466.9985859459266, 48.001698585925624, "iglooedit-new", "close-btn");
        upper.add(close_btn);

        // x
        const x = this.add.image(1466.9985859459266, 47.001698585925624, "iglooedit-new", "x");
        upper.add(x);

        // scrollBarContainer
        const scrollBarContainer = this.add.container(-0.00001392595368088223, 0.0015205401127835472);
        scrollBarContainer.visible = false;
        upper.add(scrollBarContainer);

        // rounded_rect
        const rounded_rect = this.add.ninePatchContainer(722.0000122493237, 154.99848689180524, 1300, 32, "iglooedit-new", "rounded_rect");
        rounded_rect.marginLeft = 16;
        rounded_rect.marginTop = 16;
        rounded_rect.marginRight = 16;
        rounded_rect.marginBottom = 16;
        scrollBarContainer.add(rounded_rect);

        // rounded_rect_1
        const rounded_rect_1 = this.add.ninePatchContainer(722.0000122493237, 154.99848689180524, 1300, 32, "iglooedit-new", "rounded_rect");
        rounded_rect_1.alpha = 0.5;
        rounded_rect_1.marginLeft = 16;
        rounded_rect_1.marginTop = 16;
        rounded_rect_1.marginRight = 16;
        rounded_rect_1.marginBottom = 16;
        rounded_rect_1.ninePatchContainerTintFill = true;
        scrollBarContainer.add(rounded_rect_1);

        // circle
        const circle = this.add.image(87.00001224932373, 154.99848689180524, "iglooedit-new", "circle");
        scrollBarContainer.add(circle);

        // arrow_1
        const arrow_1 = this.add.image(85.00001224932373, 154.99848689180524, "iglooedit-new", "arrow");
        arrow_1.scaleX = -1;
        scrollBarContainer.add(arrow_1);

        // circle_1
        const circle_1 = this.add.image(1356.0000122493238, 154.99848689180524, "iglooedit-new", "circle");
        scrollBarContainer.add(circle_1);

        // arrow_2
        const arrow_2 = this.add.image(1358.0000122493238, 154.99848689180524, "iglooedit-new", "arrow");
        scrollBarContainer.add(arrow_2);

        // scroller
        const scroller = this.add.container(168.0000122493237, 154.99848689180524);
        scrollBarContainer.add(scroller);

        // scrollbar
        const scrollbar = this.add.ninePatchContainer(9, 0, 150, 32, "iglooedit-new", "rounded_rect");
        scrollbar.marginLeft = 16;
        scrollbar.marginTop = 16;
        scrollbar.marginRight = 16;
        scrollbar.marginBottom = 16;
        scroller.add(scrollbar);

        // rounded_rect_thin
        const rounded_rect_thin = this.add.image(0, 0, "iglooedit-new", "rounded_rect_thin");
        rounded_rect_thin.scaleY = 0.6;
        scroller.add(rounded_rect_thin);

        // rounded_rect_thin_1
        const rounded_rect_thin_1 = this.add.image(6, 0, "iglooedit-new", "rounded_rect_thin");
        rounded_rect_thin_1.scaleY = 0.6;
        scroller.add(rounded_rect_thin_1);

        // rounded_rect_thin_2
        const rounded_rect_thin_2 = this.add.image(18, 0, "iglooedit-new", "rounded_rect_thin");
        rounded_rect_thin_2.scaleY = 0.6;
        scroller.add(rounded_rect_thin_2);

        // rounded_rect_thin_3
        const rounded_rect_thin_3 = this.add.image(12, 0, "iglooedit-new", "rounded_rect_thin");
        rounded_rect_thin_3.scaleY = 0.6;
        scroller.add(rounded_rect_thin_3);

        // iglooMusic
        const iglooMusic = new IglooMusic(this, 759.9985859979596, 480.0016987305264);
        iglooMusic.visible = false;
        controls.add(iglooMusic);

        // chooseIgloo
        const chooseIgloo = this.add.container(0, 0);
        chooseIgloo.visible = false;

        // bg
        const bg = this.add.image(760, 480, "iglooedit-new", "bg");
        chooseIgloo.add(bg);

        // choose_igloo
        const choose_igloo = this.add.image(944, 302, "iglooedit-new", "choose-igloo");
        chooseIgloo.add(choose_igloo);

        // preview_pane
        const preview_pane = this.add.image(250, 744, "iglooedit-new", "preview-pane");
        chooseIgloo.add(preview_pane);

        // plus
        const plus = this.add.sprite(250, 716, "iglooedit-new", "spinner0001");
        plus.scaleX = 0.7;
        plus.scaleY = 0.7;
        chooseIgloo.add(plus);

        // preview_pane_1
        const preview_pane_1 = this.add.image(590, 744, "iglooedit-new", "preview-pane");
        chooseIgloo.add(preview_pane_1);

        // plus_1
        const plus_1 = this.add.sprite(590, 716, "iglooedit-new", "spinner0001");
        plus_1.scaleX = 0.7;
        plus_1.scaleY = 0.7;
        chooseIgloo.add(plus_1);

        // preview_pane_2
        const preview_pane_2 = this.add.image(930, 744, "iglooedit-new", "preview-pane");
        chooseIgloo.add(preview_pane_2);

        // plus_2
        const plus_2 = this.add.sprite(930, 716, "iglooedit-new", "spinner0001");
        plus_2.scaleX = 0.7;
        plus_2.scaleY = 0.7;
        chooseIgloo.add(plus_2);

        // preview_pane_3
        const preview_pane_3 = this.add.image(1269, 744, "iglooedit-new", "preview-pane");
        chooseIgloo.add(preview_pane_3);

        // plus_3
        const plus_3 = this.add.sprite(1269, 716, "iglooedit-new", "spinner0001");
        plus_3.scaleX = 0.7;
        plus_3.scaleY = 0.7;
        chooseIgloo.add(plus_3);

        // close_btn_1
        const close_btn_1 = this.add.image(1475, 45, "iglooedit-new", "close-btn");
        chooseIgloo.add(close_btn_1);

        // x_1
        const x_1 = this.add.image(1475, 44, "iglooedit-new", "x");
        chooseIgloo.add(x_1);

        // title_5
        const title_5 = this.add.text(891, 216, "", {});
        title_5.setOrigin(0, 0.5);
        title_5.text = "Your current igloo";
        title_5.setStyle({ "color": "#3e83c5ff", "fixedWidth":500,"fontFamily": "cpBurbankSmall", "fontSize": "28px", "fontStyle": "bold" });
        chooseIgloo.add(title_5);

        // title_8
        const title_8 = this.add.text(944, 382, "", {});
        title_8.setOrigin(0.5, 0.5);
        title_8.text = "Edit";
        title_8.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":100,"fontFamily": "cpBurbankSmall", "fontSize": "18px", "fontStyle": "bold" });
        chooseIgloo.add(title_8);

        // plus_4
        const plus_4 = this.add.sprite(480, 318, "iglooedit-new", "spinner0001");
        chooseIgloo.add(plus_4);

        // title_13
        const title_13 = this.add.text(250, 840, "", {});
        title_13.setOrigin(0.5, 0.5);
        title_13.text = "Copy to clipboard";
        title_13.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":250,"fontFamily": "cpBurbankSmall", "fontSize": "28px", "fontStyle": "bold" });
        chooseIgloo.add(title_13);

        // big_button_1
        const big_button_1 = this.add.sprite(1180, 292, "iglooedit-new", "big-button");
        chooseIgloo.add(big_button_1);

        // title_3
        const title_3 = this.add.text(1180, 350, "", {});
        title_3.setOrigin(0.5, 0.5);
        title_3.text = "Replace with data from clipboard";
        title_3.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":300,"fontFamily": "cpBurbankSmall", "fontSize": "18px", "fontStyle": "bold" });
        title_3.setWordWrapWidth(300);
        chooseIgloo.add(title_3);

        // title_4
        const title_4 = this.add.text(1180, 292, "", {});
        title_4.setOrigin(0.5, 0.5);
        title_4.text = "Replace";
        title_4.setStyle({ "align": "center", "color": "#eaf4feff", "fixedWidth":300,"fontFamily": "cpBurbankSmall", "fontSize": "24px", "fontStyle": "bold", "shadow.offsetX":-1,"shadow.offsetY":1,"shadow.color": "#2064a8ff", "shadow.blur":2,"shadow.fill":true});
        title_4.setWordWrapWidth(300);
        chooseIgloo.add(title_4);

        // title_6
        const title_6 = this.add.text(1269, 840, "", {});
        title_6.setOrigin(0.5, 0.5);
        title_6.text = "Copy to clipboard";
        title_6.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":250,"fontFamily": "cpBurbankSmall", "fontSize": "28px", "fontStyle": "bold" });
        chooseIgloo.add(title_6);

        // title_7
        const title_7 = this.add.text(930, 840, "", {});
        title_7.setOrigin(0.5, 0.5);
        title_7.text = "Copy to clipboard";
        title_7.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":250,"fontFamily": "cpBurbankSmall", "fontSize": "28px", "fontStyle": "bold" });
        chooseIgloo.add(title_7);

        // title_9
        const title_9 = this.add.text(590, 840, "", {});
        title_9.setOrigin(0.5, 0.5);
        title_9.text = "Copy to clipboard";
        title_9.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":250,"fontFamily": "cpBurbankSmall", "fontSize": "28px", "fontStyle": "bold" });
        chooseIgloo.add(title_9);

        // toggle_panel
        const toggle_panel = this.add.image(1189, 462, "iglooedit-new", "toggle-panel");
        chooseIgloo.add(toggle_panel);

        // toggler
        const toggler = this.add.sprite(1160, 465, "iglooedit-new", "toggler");
        chooseIgloo.add(toggler);

        // title_10
        const title_10 = this.add.text(934, 462, "", {});
        title_10.setOrigin(0.5, 0.5);
        title_10.text = "Igloo\nBoundaries";
        title_10.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":150,"fontFamily": "cpBurbankSmall", "fontSize": "26px", "fontStyle": "bold" });
        chooseIgloo.add(title_10);

        // title_11
        const title_11 = this.add.text(1068, 463, "", {});
        title_11.setOrigin(0.5, 0.5);
        title_11.text = "Enabled";
        title_11.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":150,"fontFamily": "cpBurbankSmall", "fontSize": "22px", "fontStyle": "bold" });
        chooseIgloo.add(title_11);

        // title_12
        const title_12 = this.add.text(1310, 464, "", {});
        title_12.setOrigin(0.5, 0.5);
        title_12.text = "Disabled";
        title_12.setStyle({ "align": "center", "color": "#3e83c5ff", "fixedWidth":150,"fontFamily": "cpBurbankSmall", "fontSize": "22px", "fontStyle": "bold" });
        chooseIgloo.add(title_12);

        // lists
        const categories = [all, location, igloos, flooring, room, wall, pets];
        const spinners = [plus, plus_1, plus_2, plus_3, plus_4];
        const likesText = [];
        const copyTexts = [title_13, title_9, title_7, title_6];

        // button_edit (components)
        const button_editButton = new Button(button_edit);
        button_editButton.callback = () => this.chooseIglooButton();
        const button_editShowHint = new ShowHint(button_edit);
        button_editShowHint.text = "editIgloo";

        // music_panel (components)
        new Interactive(music_panel);

        // big_button (components)
        const big_buttonButton = new Button(big_button);
        big_buttonButton.callback = () => this.showIglooMusic();

        // small_btn (components)
        const small_btnButton = new Button(small_btn);
        small_btnButton.callback = () => this.tweenControls();

        // music (components)
        const musicLocalisedString = new LocalisedString(music);
        musicLocalisedString.id = "music";

        // hide (components)
        const hideLocalisedString = new LocalisedString(hide);
        hideLocalisedString.id = "hide";

        // music_panel_1 (components)
        new Interactive(music_panel_1);

        // search (components)
        const searchLocalisedString = new LocalisedString(search);
        searchLocalisedString.id = "search";

        // search_input (components)
        const search_inputLocalisedString = new LocalisedString(search_input);
        search_inputLocalisedString.id = "entername";
        const search_inputInputText = new InputText(search_input);
        search_inputInputText.charlimit = 96;
        search_inputInputText.entercallback = () => this.searchForItems();
        search_inputInputText.extends = false;

        // all (components)
        const allSimpleButton = new SimpleButton(all);
        allSimpleButton.callback = () => this.selectCategory(0);

        // location (components)
        const locationSimpleButton = new SimpleButton(location);
        locationSimpleButton.callback = () => this.selectCategory(1);

        // igloos (components)
        const igloosSimpleButton = new SimpleButton(igloos);
        igloosSimpleButton.callback = () => this.selectCategory(2);

        // flooring (components)
        const flooringSimpleButton = new SimpleButton(flooring);
        flooringSimpleButton.callback = () => this.selectCategory(3);

        // room (components)
        const roomSimpleButton = new SimpleButton(room);
        roomSimpleButton.callback = () => this.selectCategory(4);

        // wall (components)
        const wallSimpleButton = new SimpleButton(wall);
        wallSimpleButton.callback = () => this.selectCategory(5);

        // pets (components)
        const petsSimpleButton = new SimpleButton(pets);
        petsSimpleButton.callback = () => this.selectCategory(6);

        // top_bar (components)
        new Interactive(top_bar);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.callback = () => this.onSaveClick();

        // circle (components)
        const circleSimpleButton = new SimpleButton(circle);
        circleSimpleButton.callback = () => this.goLeft();

        // circle_1 (components)
        const circle_1SimpleButton = new SimpleButton(circle_1);
        circle_1SimpleButton.callback = () => this.goRight();

        // bg (components)
        new Interactive(bg);

        // choose_igloo (components)
        const choose_iglooButton = new Button(choose_igloo);
        choose_iglooButton.callback = () => this.onEditClick();

        // preview_pane (components)
        const preview_paneSimpleButton = new SimpleButton(preview_pane);
        preview_paneSimpleButton.callback = () => this.switchIgloo(0);

        // preview_pane_1 (components)
        const preview_pane_1SimpleButton = new SimpleButton(preview_pane_1);
        preview_pane_1SimpleButton.callback = () => this.switchIgloo(1);

        // preview_pane_2 (components)
        const preview_pane_2SimpleButton = new SimpleButton(preview_pane_2);
        preview_pane_2SimpleButton.callback = () => this.switchIgloo(2);

        // preview_pane_3 (components)
        const preview_pane_3SimpleButton = new SimpleButton(preview_pane_3);
        preview_pane_3SimpleButton.callback = () => this.switchIgloo(3);

        // close_btn_1 (components)
        const close_btn_1Button = new Button(close_btn_1);
        close_btn_1Button.callback = () => this.closeChooseIgloo();

        // title_13 (components)
        const title_13SimpleButton = new SimpleButton(title_13);
        title_13SimpleButton.callback = () => this.copyToClipboard(0);
        const title_13LocalisedString = new LocalisedString(title_13);
        title_13LocalisedString.id = "copyclipboard";

        // big_button_1 (components)
        const big_button_1Button = new Button(big_button_1);
        big_button_1Button.callback = () => this.onReplaceClick();

        // title_6 (components)
        const title_6SimpleButton = new SimpleButton(title_6);
        title_6SimpleButton.callback = () => this.copyToClipboard(3);
        const title_6LocalisedString = new LocalisedString(title_6);
        title_6LocalisedString.id = "copyclipboard";

        // title_7 (components)
        const title_7SimpleButton = new SimpleButton(title_7);
        title_7SimpleButton.callback = () => this.copyToClipboard(2);
        const title_7LocalisedString = new LocalisedString(title_7);
        title_7LocalisedString.id = "copyclipboard";

        // title_9 (components)
        const title_9SimpleButton = new SimpleButton(title_9);
        title_9SimpleButton.callback = () => this.copyToClipboard(1);
        const title_9LocalisedString = new LocalisedString(title_9);
        title_9LocalisedString.id = "copyclipboard";

        // toggler (components)
        const togglerSimpleButton = new SimpleButton(toggler);
        togglerSimpleButton.callback = () => this.toggleBoundaries();

        this.defaultControls = defaultControls;
        this.button_box = button_box;
        this.music = music;
        this.hide = hide;
        this.lower = lower;
        this.search = search;
        this.search_input = search_input;
        this.searchBox = searchBox;
        this.itemContainer = itemContainer;
        this.scrollbar = scrollbar;
        this.scroller = scroller;
        this.scrollBarContainer = scrollBarContainer;
        this.upper = upper;
        this.iglooMusic = iglooMusic;
        this.controls = controls;
        this.toggler = toggler;
        this.chooseIgloo = chooseIgloo;
        this.categories = categories;
        this.spinners = spinners;
        this.likesText = likesText;
        this.copyTexts = copyTexts;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    get currentIgloo() {
        let iglooData = JSON.parse(localStorage.iglooData)
        return iglooData.currentIgloo
    }

    create() {
        this.isIglooEdit = true
        this._create()

        this.clientEmu = {
            furnitureInventory: Object.keys(this.shell.crumbs.furniture)
                .map((id) => {
                    return {id: parseInt(id), type: 'furniture', quantity: 99}
                })
                .sort((a, b) => this.crumbs.furniture[a.id].name.localeCompare(this.crumbs.furniture[b.id].name)),
            locationInventory: Object.keys(this.shell.crumbs.locations)
                .map((id) => {
                    return {id: parseInt(id), type: 'location', quantity: 1}
                })
                .sort((a, b) => this.crumbs.locations[a.id].name.localeCompare(this.crumbs.locations[b.id].name)),
            iglooInventory: Object.keys(this.shell.crumbs.igloos)
                .map((id) => {
                    return {id: parseInt(id), type: 'igloo', quantity: 1}
                })
                .sort((a, b) => this.crumbs.igloos[a.id].name.localeCompare(this.crumbs.igloos[b.id].name))
                .filter((igloo) => !this.crumbs.igloos[igloo.id].name.includes('Invisible')),
            floorInventory: Object.keys(this.shell.crumbs.flooring)
                .map((id) => {
                    return {id: parseInt(id), type: 'flooring', quantity: 1}
                })
                .sort((a, b) => this.crumbs.flooring[a.id].name.localeCompare(this.crumbs.flooring[b.id].name))
        }

        for (let s of this.spinners) {
            s.anims.play('blue-spinner')
        }

        this.items = []
        this.previews = []

        this.iglooFactory = new IglooFactory(this.shell)

        this.events.on('sleep', () => this.onSleep())
        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))
        this.input.on('pointerdown', (pointer) => this.onPointerDown(pointer))
        this.input.on('pointerup', (pointer) => this.onPointerDown(pointer))

        this.createMasks()

        this.controls.state = 'maximised'

        this.minX = 168
        this.maxX = 1257

        this.scrollbar.setInteractive()
        this.scrollbar.on('pointerdown', (pointer) => this.onScrollerDown(pointer))

        this.loadItems(0)

        this.boundaries = localStorage.getItem('iglooBoundaries')
        if (this.boundaries == null) {
            this.setBoundaries(true)
        }
    }

    setBoundaries(enabled) {
        if (enabled) {
            this.boundaries = true
            localStorage.setItem('iglooBoundaries', true)
            this.toggler.x = 1160
        } else {
            this.boundaries = false
            localStorage.setItem('iglooBoundaries', false)
            this.toggler.x = 1226
        }
    }

    toggleBoundaries() {
        if (this.boundaries) {
            this.tweens.add({
                targets: this.toggler,
                duration: 200,
                x: 1226,
                onComplete: () => this.setBoundaries(false)
            })
        } else {
            this.tweens.add({
                targets: this.toggler,
                duration: 200,
                x: 1160,
                onComplete: () => this.setBoundaries('on')
            })
        }
    }

    createMasks() {
        let previewMask0 = this.add.graphics()
        previewMask0.fillStyle(0xffffff, 0)
        previewMask0.beginPath()
        previewMask0.fillRoundedRect(181 * window.currentScale, 124 * window.currentScale, 596 * window.currentScale, 398 * window.currentScale, 22 * window.currentScale)
        this.previewMask0 = previewMask0.createGeometryMask()

        let previewMask1 = this.add.graphics()
        previewMask1.fillStyle(0xffffff, 0)
        previewMask1.beginPath()
        previewMask1.fillRoundedRect(101 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask1 = previewMask1.createGeometryMask()

        let previewMask2 = this.add.graphics()
        previewMask2.fillStyle(0xffffff, 0)
        previewMask2.beginPath()
        previewMask2.fillRoundedRect(441 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask2 = previewMask2.createGeometryMask()

        let previewMask3 = this.add.graphics()
        previewMask3.fillStyle(0xffffff, 0)
        previewMask3.beginPath()
        previewMask3.fillRoundedRect(781 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask3 = previewMask3.createGeometryMask()

        let previewMask4 = this.add.graphics()
        previewMask4.fillStyle(0xffffff, 0)
        previewMask4.beginPath()
        previewMask4.fillRoundedRect(1120 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask4 = previewMask4.createGeometryMask()

        let itemsMask = this.add.graphics()
        itemsMask.fillStyle(0xffffff, 0)
        itemsMask.beginPath()
        itemsMask.fillRect(0, 0, 1404.5 * window.currentScale, 182.5 * window.currentScale)
        this.itemsMask = itemsMask.createGeometryMask()
        this.itemContainer.setMask(this.itemsMask)
    }

    onSleep() {
        this.hideControls()
    }

    onLockClick() {
        if (this.clientEmu.iglooOpen) {
            this.clientEmu.iglooOpen = false
            this.button_lock.__ShowHint.text = 'Open Igloo'

            this.airtower.sendXt('g#cr')

            return
        }

        let text = this.crumbs.getString('igloo-open-confirm')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.clientEmu.iglooOpen = true
            this.button_lock.__ShowHint.text = 'Close Igloo'

            this.airtower.sendXt('g#or')

            this.interface.prompt.window.visible = false
        })
    }

    onLockOut() {
        if (this.clientEmu.iglooOpen) {
            this.button_lock.setFrame('button/lock-hover')
        }
    }

    chooseIglooButton() {
        this.interface.hideInterface(false)
        this.chooseIgloo.visible = true

        this.createPreviews()
    }

    async createPreviews() {
        this.previews = [];

        const iglooData = JSON.parse(localStorage.iglooData);

        if (!iglooData.igloos[iglooData.currentIgloo] || !iglooData.igloos[iglooData.currentIgloo].includes('%')) {
            iglooData.igloos[iglooData.currentIgloo] = `${1}%${[]}%${1}%${0}%${0}%${1}%${[]}`
            localStorage.setItem('iglooData', JSON.stringify(iglooData))
        }

        const mainData = iglooData.igloos[iglooData.currentIgloo].split('%');

        const mainPreview = await this.createPreviewFromJSON(mainData, 0);
        this.scalePreviewContainer(mainPreview, 0);
        this.previews.push(mainPreview);

        // Create remaining previews (positions 1–4)
        for (let i = 0; i < 4; i++) {
            if (!iglooData.igloos[i] || !iglooData.igloos[i].includes('%')) {
                iglooData.igloos[i] = `${1}%${[]}%${1}%${0}%${0}%${1}%${[]}`
                localStorage.setItem('iglooData', JSON.stringify(iglooData))
            }
            const data = iglooData.igloos[i]?.split('%');
            if (!data) continue;

            const preview = await this.createPreviewFromJSON(data, i);
            preview.inputEnabled = true;
            this.scalePreviewContainer(preview, i+1);
            this.previews.push(preview);
        }
    }

    async createPreviewFromJSON(data, position) {
        const iglooKey = this.shell.crumbs.scenes.igloos[data[0]].key;
        const jsonPath = `assets/media/igloos/buildings/previews/${iglooKey}-preview.json`;

        const previewData = await fetch(jsonPath).then(res => res.json());

        if (!this.textures.exists(previewData.assets.key)) {
            this.load.pack(previewData.assets.key, previewData.assets.pack);

            await new Promise(resolve => {
                this.load.once('complete', resolve);
                this.load.start();
            });
        }

        const container = this.add.container(0, 0);
        container.setSize(800, 600);
        container.setInteractive();

        // Add location
        const locationId = data[5];

        if (!this.textures.exists(`locations/${locationId}`)) {
            this.load.image(`locations/${locationId}`, `/assets/media/igloos/locations/sprites/${locationId}.webp`);
            await new Promise(resolve => {
                this.load.once('complete', resolve);
                this.load.start();
            });
        }

        const location = this.add.image(0, 0, `locations/${locationId}`);
        location.setOrigin(0, 0);
        container.add(location);

        for (const obj of previewData.objects) {
            let item;
            if (obj.type === 'image') {
                item = this.add.image(obj.x, obj.y, obj.key, obj.frame);
            } else if (obj.type === 'sprite') {
                item = this.add.sprite(obj.x, obj.y, obj.key, obj.frame);
            }
            item.setOrigin(obj.originX, obj.originY);
            container.add(item);
        }

        // Add furniture
        let furniture = (data[6] || '').split(',').map((f) => {
            let [id, furnitureId, x, y, frame, rotation] = f.split('|')
            return {id, furnitureId, x, y, frame, rotation}
        })

        for (let f of furniture) {
            if (this.textures.exists(`furniture/sprites/${f.furnitureId}`)) {
                this.onFurnitureLoaded(container, f, `furniture/sprites/${f.furnitureId}`)
                continue
            }

            this.shell.room.loader.loadFurniture(f.furnitureId)
            this.shell.events.once(`furnitureLoaded-${f.furnitureId}`, (key) => {
                this.onFurnitureLoaded(container, f, key)
            })
        }
        this.shell.room.loader.start()

        this.chooseIgloo.add(container);

        return container;
    }

    onFurnitureLoaded(container, f, key) {
        let furniture = new FurnitureSprite(this, f.furnitureId, f.x, f.y, key, f.rotation, f.frame)
        container.add(furniture)
    }

    scalePreviewContainer(container, position) {
        if (this.lastScale !== window.currentScale) {
            this.createMasks();
        }

        this.lastScale = window.currentScale;
        this.shell.events.on('updateScaling', () => this.scalePreviewContainer(container, position));

        let scale, x, y, mask;

        switch (position) {
            case 0:
                scale = 0.42;
                x = 160;
                y = 122;
                mask = this.previewMask0;
                break;
            case 1:
                scale = 0.21;
                x = 87;
                y = 626;
                mask = this.previewMask1;
                break;
            case 2:
                scale = 0.21;
                x = 428;
                y = 626;
                mask = this.previewMask2;
                break;
            case 3:
                scale = 0.21;
                x = 768;
                y = 626;
                mask = this.previewMask3;
                break;
            case 4:
                scale = 0.21;
                x = 1108;
                y = 626;
                mask = this.previewMask4;
                break;
        }

        container.setScale(scale * window.currentScale);
        container.x = x * window.currentScale;
        container.y = y * window.currentScale;

        container.setMask(mask);
        this.shell.children.bringToTop(container);
    }

    closeChooseIgloo() {
        this.chooseIgloo.visible = false

        this.shell.events.off('updateScaling')
    }

    onEditClick() {
        this.chooseIgloo.visible = false
        this.iglooMusic.close()
        this.shell.events.off('updateScaling')
        this.shell.room.hidePenguins()
        this.shell.room.enableFurnitureInput()
        this.showControls()
    }

    onSaveClick() {
        this.saveIgloo()
        this.shell.room.disableFurnitureInput()
        this.hideControls()
    }

    showControls() {
        this.loadItems(0)
        this.defaultControls.visible = false
        this.controls.visible = true
    }

    hideControls() {
        if (!this.controls) return
        this.defaultControls.visible = true
        this.controls.visible = false
    }

    saveIgloo() {
        if (!this.shell.room || !this.shell.room.args) return

        if (this.shell.room.selected) {
            this.shell.room.selected.drop()
        }

        let furniture = this.shell.room.furnitureSprites.map((f, i) => {
            return `${i}|${f.id}|${f.x}|${f.y}|${parseInt(f.currentFrame[1])}|${parseInt(f.currentFrame[0])}`
        })

        // this.airtower.sendXt('g#ur', furniture.join(','))
        let iglooData = JSON.parse(localStorage.iglooData)
        let currentIgloo = iglooData.currentIgloo

        let type = this.shell.room.args.igloo
        let flooring = this.shell.room.args.flooring
        let music = this.shell.room.args.music
        let location = this.shell.room.args.location
        iglooData.igloos[currentIgloo] = `${type}%[]%${type}%${flooring}%${music}%${location}%${furniture.join(',')}`

        localStorage.iglooData = JSON.stringify(iglooData)
    }

    selectCategory(id) {
        for (let c of this.categories) {
            let n = c.frame.name
            if (n.substring(n.length - 9) == '-selected') {
                c.setFrame(n.substring(0, n.length - 9))
            }
        }

        this.categories[id].setFrame(this.categories[id].frame.name + '-selected')
        this.loadItems(id)

        if (id == 6) {
            this.searchBox.visible = true
            this.search_input.__InputText.clickZone.visible = true
        } else {
            this.searchBox.visible = false
            this.search_input.__InputText.clickZone.visible = false
            this.search_input.__InputText.clearText()
        }

        if (this.controls.state == 'minimised') {
            this.tweenControls()
        }
    }

    searchForItems() {
        let search = this.search_input.textContent
        let items = []
        let exactMatch

        let searchLower = search.toLowerCase()

        for (let item of this.clientEmu.furnitureInventory) {
            let name = this.crumbs.furniture[item.id].name
            if (name.toLowerCase() == searchLower) {
                exactMatch = item
                continue
            }

            if (name.toLowerCase().includes(searchLower)) {
                items.push(item)
            }
        }

        for (let item of this.clientEmu.locationInventory) {
            let name = this.crumbs.locations[item.id].name
            if (name.toLowerCase() == searchLower) {
                exactMatch = item
                continue
            }

            if (name.toLowerCase().includes(searchLower)) {
                items.push(item)
            }
        }

        for (let item of this.clientEmu.iglooInventory) {
            let name = this.crumbs.igloos[item.id].name
            if (name.toLowerCase() == searchLower) {
                exactMatch = item
                continue
            }

            if (name.toLowerCase().includes(searchLower)) {
                items.push(item)
            }
        }

        for (let item of this.clientEmu.floorInventory) {
            let name = this.crumbs.flooring[item.id].name
            if (name.toLowerCase() == searchLower) {
                exactMatch = item
                continue
            }

            if (name.toLowerCase().includes(searchLower)) {
                items.push(item)
            }
        }

        if (exactMatch) {
            items.filter((item) => item != exactMatch)
            items.unshift(exactMatch)
        }

        this.loadItems(items)
    }

    loadItems(category) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].destroy()
        }
        this.items = []

        let xcoord = 85
        let items = []
        switch (category) {
            case 0:
                items = this.clientEmu.furnitureInventory.concat(this.clientEmu.locationInventory, this.clientEmu.iglooInventory, this.clientEmu.floorInventory)
                break
            case 1:
                items = this.clientEmu.locationInventory
                break
            case 2:
                items = this.clientEmu.iglooInventory
                break
            case 3:
                items = this.clientEmu.floorInventory
                break
            case 4:
                this.clientEmu.furnitureInventory.forEach((item) => {
                    if (this.crumbs.furniture[item.id].type == 1 || this.crumbs.furniture[item.id].type == 3) {
                        items.push(item)
                    }
                })
                break
            case 5:
                this.clientEmu.furnitureInventory.forEach((item) => {
                    if (this.crumbs.furniture[item.id].type == 2) {
                        items.push(item)
                    }
                })
                break
            case 6:
                break
            default:
                items = category
        }

        this.loadIglooItems(items, xcoord)

        this.itemContainer.x = 0
        this.scroller.x = this.minX

        if (this.items.length * 120 > this.maxX - this.minX + 100) {
            this.scrollBarContainer.visible = true
        } else {
            this.scrollBarContainer.visible = false
        }
        this.category = category
    }

    loadIglooItems(list, xcoord) {
        for (let item of list) {
            let sprite = new IglooItem(this, xcoord, 85)
            this.itemContainer.add(sprite)
            this.items.push(sprite)
            sprite.setItem(item.type, item.id, item.quantity)
            xcoord += 120
        }
    }

    updateQuantities() {
        for (let item of this.items) {
            item.updateQuantity()
        }
    }

    showMirror(id, x, y) {
        if (this.controls.state == 'minimised') return
        if (!this.mirrorItem) {
            this.mirrorItem = this.add.image(x, y, 'furniture', `@1.25x/${id}.webp`)
        } else if (this.mirrorItem.id != id) {
            this.mirrorItem.setTexture('furniture', `@1.25x/${id}.webp`)
        }
        this.mirrorItem.x = x
        this.mirrorItem.y = y
        this.mirrorItem.visible = true
        this.mirrorItem.moved = false
    }

    hideMirror() {
        if (this.mirrorItem) this.mirrorItem.visible = false
    }

    onPointerMove(pointer) {
        if (!this.mirrorItem || !this.mirrorItem.visible) return
        this.shell.room.onPointerMove(pointer)
        this.mirrorItem.moved = true
    }

    onPointerDown(pointer) {
        if (!this.mirrorItem || !this.mirrorItem.visible || !this.mirrorItem.moved) return
        this.shell.room.onPointerDown(pointer)
        this.hideMirror()
    }

    switchIgloo(id) {
        let x, y
        switch (id) {
            case 0:
                x = 101
                y = 627
                break
            case 1:
                x = 441
                y = 627
                break
            case 2:
                x = 781
                y = 627
                break
            case 3:
                x = 1121
                y = 627
                break
        }
        if (this.input.activePointer.x < x || this.input.activePointer.x > x + 297 || this.input.activePointer.y < y || this.input.activePointer.y > y + 187) return

        this.saveIgloo()
        this.loadIgloo(id)
    }

    loadIgloo(id) {
        let iglooData = JSON.parse(localStorage.iglooData)

        let data = iglooData.igloos[id].split('%')

        this.shell.joinIgloo(data)

        iglooData.currentIgloo = id
        localStorage.iglooData = JSON.stringify(iglooData)

        this.closeChooseIgloo()
    }

    tweenControls() {
        if (this.controls.state == 'minimised') {
            this.maximiseControls()
        } else if (this.controls.state == 'maximised') {
            this.minimiseControls()
        }
    }

    minimiseControls() {
        this.controls.state = 'tweening'
        this.hide.text = this.crumbs.getString('show')
        this.tweens.add({
            targets: this.upper,
            y: -187,
            duration: 500,
            ease: 'Power2',
            onComplete: () => {
                this.controls.state = 'minimised'
            }
        })
        this.tweens.add({
            targets: this.lower,
            y: -279,
            duration: 500,
            ease: 'Power2'
        })
    }

    maximiseControls() {
        this.controls.state = 'tweening'
        this.hide.text = this.crumbs.getString('hide')
        this.tweens.add({
            targets: this.upper,
            y: 0,
            duration: 500,
            ease: 'Power2',
            onComplete: () => {
                this.controls.state = 'maximised'
            }
        })
        this.tweens.add({
            targets: this.lower,
            y: 25,
            duration: 500,
            ease: 'Power2'
        })
    }

    toggleOpen() {
        if (this.clientEmu.iglooOpenState == 'open') {
            this.clientEmu.iglooOpenState = 'closed'
            this.tweens.add({
                targets: this.toggler,
                x: 1151,
                duration: 200,
                ease: 'Power2'
            })
            this.airtower.sendXt('g#cr')
            return
        }

        this.clientEmu.iglooOpenState = 'open'
        this.tweens.add({
            targets: this.toggler,
            x: 1217,
            duration: 200,
            ease: 'Power2'
        })
        this.airtower.sendXt('g#or')
    }

    onScrollerDown(pointer) {
        let x = pointer.x
        if (x < this.minX) x = this.minX
        if (x > this.maxX) x = this.maxX
        this.scroller.x = x
        this.input.on('pointermove', this.onScrollerMove, this)
        this.input.on('pointerup', this.onScrollerUp, this)
    }

    onScrollerMove(pointer) {
        let x = pointer.x
        if (x < this.minX) x = this.minX
        if (x > this.maxX) x = this.maxX
        this.scroller.x = x

        let distance = Phaser.Math.Difference(this.minX, x)
        let width = this.items.length * 120 > this.maxX - this.minX + 100 ? this.items.length * 120 - (this.maxX - this.minX + 300) : 0
        let xoffset = width / (this.maxX - this.minX)
        this.itemContainer.x = -(distance * xoffset)
    }

    onScrollerUp(pointer) {
        this.input.removeListener('pointermove', this.onScrollerMove)
        this.input.removeListener('pointerup', this.onScrollerUp)
        this.scrollerDown = false
    }

    onReplaceClick() {
        this.interface.prompt.showWindow(this.crumbs.getString('replace-igloo'), 'dual', () => {
            this.replaceIgloo()
            this.interface.prompt.window.visible = false
        })
    }

    async replaceIgloo() {
        let text = await navigator.clipboard.readText()

        let iglooData = JSON.parse(localStorage.iglooData)
        let currentIgloo = iglooData.currentIgloo
        iglooData.igloos[currentIgloo] = text
        localStorage.iglooData = JSON.stringify(iglooData)

        this.shell.joinIgloo(text.split('%'))
        this.closeChooseIgloo()
    }

    copyToClipboard(id) {
        let iglooData = JSON.parse(localStorage.iglooData)
        let data = iglooData.igloos[id]
        navigator.clipboard.writeText(data)
        this.copyTexts[id].text = this.crumbs.getString('copied')
        setTimeout(() => (this.copyTexts[id].text = this.crumbs.getString('copyclipboard')), 800)
    }

    showIglooMusic() {
        this.iglooMusic.show()
    }

    getOnePageLength() {
        const ONE_PAGE = 11
        const SCROLL_LENGTH = this.maxX - this.minX
        let length = this.items.length
        if (length > ONE_PAGE) {
            length = ONE_PAGE
        }
        let pages = Math.ceil(this.items.length / ONE_PAGE)
        let scrollLength = Math.floor(SCROLL_LENGTH / pages)
        return scrollLength
    }

    goLeft() {
        this.onScrollerMove({x: this.scroller.x - this.getOnePageLength()})
    }

    goRight() {
        this.onScrollerMove({x: this.scroller.x + this.getOnePageLength()})
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
