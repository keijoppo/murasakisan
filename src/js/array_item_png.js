
let _array_base = [
    //1-16
    "item_kanban4.png",
    "mr_astar.png",
    "item_dice.png",
    "item_hat_helmet.png",
    "icon_clock.png",
    "item_crown.png",
    "item_ribbon2.png",
    "icon_clock.png",
    "item_hat_knit.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //17-32
    "item_musicbox.png",
    "item_hat_mugiwara.png",
    "ms_ether.png",
    "icon_clock.png",
    "icon_clock.png",
    "item_fortune_statue.png",
    "asnya.png",
    "icon_clock.png",
    "icon_clock.png",
    "item_flowerpot.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //33-48
    "item_pad_on.png",
    "icon_clock.png",
    "item_hat_mortarboard",
    "dr_bitco.png",
    "icon_clock.png",
    "item_violin.png",
    "icon_clock.png",
    "switch.png",
    "icon_clock.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "icon_clock.png",
    //49-64
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
]

let _array_sp = [
    //193, heart
    "tiny_heart.png",
    //194, Ohana Piggy Bank
    "item_bank.png",
    //195, Kusa Pouch
    "item_kusa_pouch.png",
    //196, Cat Mail
    "mail.png",
    //197, Nui
    "item_nui.png",
    //198
    "---",
    //199
    "---",
    //200
    "---",
    //201
    "icon_clock.png",
    //202
    "icon_clock.png",
    //203
    "icon_clock.png",
    //204
    "icon_clock.png",
    //205
    "icon_clock.png",
    //206
    "icon_clock.png",
    //207
    "icon_clock.png",
    //208
    "icon_clock.png",
    //209
    "icon_clock.png",
    //210
    "icon_clock.png",
    //211
    "icon_clock.png",
    //212
    "icon_clock.png",
]

let array_item_png = ["dummy"]; //dummy, 0
array_item_png = array_item_png.concat(_array_base);    //common, 1-64
array_item_png = array_item_png.concat(_array_base);    //uncommon, 65-128
array_item_png = array_item_png.concat(_array_base);    //rare, 129-192
array_item_png = array_item_png.concat(_array_sp);      //special, 193-

/*
let array_item_png = [
    //0
    "dummy",
    //1-16
    "item_kanban4.png",
    "mr_astar.png",
    "item_dice.png",
    "item_hat_helmet.png",
    "icon_clock.png",
    "item_crown.png",
    "item_ribbon2.png",
    "icon_clock.png",
    "item_hat_knit.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //17-32
    "item_musicbox.png",
    "item_hat_mugiwara.png",
    "ms_ether.png",
    "icon_clock.png",
    "icon_clock.png",
    "item_fortune_statue.png",
    "asnya.png",
    "icon_clock.png",
    "icon_clock.png",
    "item_flowerpot.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //33-48
    "item_pad_on.png",
    "icon_clock.png",
    "item_hat_mortarboard",
    "dr_bitco.png",
    "icon_clock.png",
    "item_violin.png",
    "icon_clock.png",
    "switch.png",
    "icon_clock.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "icon_clock.png",
    //49-64
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //65-128, uncommon
    //65-80
    "item_kanban4.png",
    "mr_astar.png",
    "item_dice.png",
    "item_hat_helmet.png",
    "icon_clock.png",
    "item_crown.png",
    "item_ribbon2.png",
    "icon_clock.png",
    "item_hat_knit.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //81-96
    "item_musicbox.png",
    "item_hat_mugiwara.png",
    "ms_ether.png",
    "icon_clock.png",
    "icon_clock.png",
    "item_fortune_statue.png",
    "asnya.png",
    "icon_clock.png",
    "icon_clock.png",
    "item_flowerpot.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //97-112
    "item_pad_on.png",
    "icon_clock.png",
    "item_hat_mortarboard",
    "dr_bitco.png",
    "icon_clock.png",
    "item_violin.png",
    "icon_clock.png",
    "switch.png",
    "icon_clock.png",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "icon_clock.png",
    //113-128
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //129-192, rare
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    "---",
    //193, heart
    "tiny_heart.png",
    //194, Ohana Piggy Bank
    "item_bank.png",
    //195, Kusa Pouch
    "item_kusa_pouch.png",
    //196, Cat Mail
    "mail.png",
    //197, Nui
    "item_nui.png"
]
*/