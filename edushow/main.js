$(function () {

    //// DATA

    var mainImg = "http://2.bp.blogspot.com/-Q3Z9ja2jzb8/TxrCQPPL5CI/AAAAAAAAB8E/g3UrQZj7SYo/s400/Show_TV_logosu.png";

    var imgsAnimals1 = [
        { name: "dog", url: "http://www.petparadisetx.com/dog3.jpeg" },
        { name: "cat", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ3WbN4lqD1BAWIQbGyctZKDe7kny7m-bLTNymmYochy-sdHOZjSA" },
        { name: "pig", url: "http://www.theglobeandmail.com/migration_catalog/Books/article4027503.ece/BINARY/w620/pig-08" },
        { name: "horse", url: "http://upload.wikimedia.org/wikipedia/commons/9/9a/Avenger_-_Westphalian_horse.jpg" },
        { name: "cow", url: "http://greece.greekreporter.com/files/cow.jpg" },
        { name: "rabbit", url: "http://4.bp.blogspot.com/-1solYA4mVAU/UeYWSGGCmqI/AAAAAAAAAKQ/2gm8h0BJmCY/s1600/Rabbit+Farming+in+Kenya.JPG" },
        { name: "lamb", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcTfgTn-aMzEgzCLoakeKZBwL6dQlvxae-EtgnQi3M-6zjklw8zdWA" },
        { name: "chicken", url: "http://wallpapers-junction.com/Animals/Images/Hen-Wallpaper.jpg" },
        { name: "duck", url: "http://www.timeshighereducation.co.uk/Pictures/web/u/m/n/duck_0_450.jpg" },
        { name: "turkey", url: "http://www.sootoday.com/userfiles/images/Animals/turkey.jpg" }
    ];

    var imgsAnimals2 = [
        { name: "lion", url: "http://cdn.theanimals.pics/pictures/imagesci.com/img/2013/01/lion-wallpaper-11060-hd-wallpapers.jpg" },
        { name: "monkey", url: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/5/31/1306846833333/vervet-monkey-007.jpg" },
        { name: "zebra", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRvNo7pL39mqHHgYhoHEthITy5LWmrXv1iTC92UKrsQXHzut0ch" },
        { name: "bear", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQpugBnfXIG2sVStrLfUzUnp3-9PR_B-HW9LuJaAjGhy1NT3L8G" },
        { name: "rhino", url: "http://upload.wikimedia.org/wikipedia/commons/3/38/Rhinoc%C3%A9ros_blanc_JHE.jpg" },
        { name: "giraffe", url: "http://www.skullsunlimited.com/userfiles/image/giraffe.jpg" },
        { name: "turtle", url: "http://images.wisegeek.com/turtle.jpg" },
        { name: "crocodile", url: "http://www.abc.net.au/reslib/201007/r600136_3900983.jpg" },
        { name: "frog", url: "http://s.hswstatic.com/gif/frog-1.jpg" },
        { name: "mouse", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcT2RZFeZKyhorMxLCoDgPRapy_d8btsEKERuaLWGvH8fG3iFBOW" }
    ];

    var imgsAnimals3 = [
        { name: "squirrel", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRvI5Azpwx3k0c0YWtOc0V9rcR28ONc70NyEltl12a8WmXT_N_f" },
        { name: "bird", url: "http://upload.wikimedia.org/wikipedia/commons/f/f8/Geopelia_zebra_-KL_Bird_Park-6a.jpg" },
        { name: "bird", url: "http://i.telegraph.co.uk/multimedia/archive/02059/bird-1-snow-buntin_2059659i.jpg" },
        { name: "crow", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcQUmsqMh6eS0ZxSPfd3Q31cWQvpoAizD2GZELOq6X9mTWlLNhpU3A" },
        { name: "worm", url: "http://images.businessweek.com/ss/10/10/1014_cyber_attacks/image/04_worm_104455132.jpg" },
        { name: "ant", url: "http://www.sbs.utexas.edu/fireant/Images/Solenopsis_invicta1.JPG" },
        { name: "spider", url: "http://upload.wikimedia.org/wikipedia/commons/2/25/Hogna_lenta_18.jpg" },
        { name: "bee", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcRvMkBoaD1KkCirLU7xaZC_FdBRtipWN0JKYQHreg1JNPzYnk6Kwg" },
        { name: "deer", url: "http://www.nhptv.org/natureworks/graphics/whitetaileddeer1sm.jpg" },
        { name: "fox", url: "http://www.lhnet.org/assets/Carnivores/Red-fox/Red-fox-Vulpes-vulpes3.jpg" },
        { name: "fish", url: "http://pngimg.com/upload/fish_PNG1150.png" },
        { name: "beaver", url: "http://cottagelife.com/files/2013/02/Beaver_istockphoto_thinkstock-e1361292176199.jpg" },
        { name: "lighting bug", url: "https://c1.staticflickr.com/5/4048/4707355367_7192739675_z.jpg" }
    ];

    var imgsKitchen = [
        { name: "sink", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcSPk7U-b2-plTAkQj2WZblMtl8Dg1dGoiNitEdohl-fOEv1URB9" },
        { name: "oven", url: "http://grillingwithrich.com/wp-content/uploads/2012/07/Oven.bmp" },
        { name: "stove", url: "http://appliancerepairinlakesideca.com/images/ge_30_gas_stove_2.JPG" },
        { name: "microwave", url: "http://www.photo-dictionary.com/photofiles/list/1700/6159microwave_oven.jpg" },
        { name: "plate", url: "http://thumbs.dreamstime.com/z/empty-plate-6005076.jpg" },
        { name: "pan", url: "http://images.wisegeek.com/teflon-pan.jpg" },
        { name: "cup", url: "http://ecx.images-amazon.com/images/I/51ZTcWXhbkL._SL1500_.jpg" },
        { name: "spatula", url: "https://billlabrie.files.wordpress.com/2014/07/wpid-spatulas-edit.jpg" }
    ];

    var imgsTransport = [
        { name: "car", url: "http://www.picturesnew.com/media/images/car-car_car.jpg" },
        { name: "bicycle", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcS-BZ-TsOcmGnr2ky_E57stwWQyAwzqcADOFSknmHTkbq8LYHPNhA" },
        { name: "train", url: "http://2.bp.blogspot.com/-p_eU3fIWMqE/TbhVdygw38I/AAAAAAAAAgQ/JxtBBGTEmEE/s1600/train%2Bfor%2Bblog.jpeg" },
        { name: "truck", url: "http://www.just4wheels.com/images/classes/atruck24.jpg" },
        { name: "firetruck", url: "http://www.wtae.com/image/view/-/11260314/highRes/2/-/maxh/480/maxw/640/-/xp0cm7/-/Firetruck-generic.jpg" },
        { name: "ambulance", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcROl62N7EAjon2-bRrHOgxmr3njncVavHMWYWjoGswlq_7maOU8Aw" },
        { name: "bus", url: "http://carpundit.typepad.com/photos/uncategorized/school_bus.jpg" },
        { name: "helicopter", url: "http://www.rotaryaction.com/images/copter1.gif" },
        { name: "airplane", url: "http://content.presentermedia.com/files/animsp/00007000/7149/airplane_flying_the_skies_md_wm.gif" },
        { name: "rocket", url: "http://www.dpaclaims.co.uk/blog/wp-content/uploads/rocket.jpg" },
        { name: "boat", url: "http://media.giphy.com/media/wauKdo2ZvRSNy/giphy.gif" }
    ];

    var imgsOutside1 = [
        { name: "rainbow", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcTYz4Yh7rSj8ECm_ct5qSloP14Q3u6xUx4k1yorZYI5BhkPch8h" },
        { name: "day", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQLCDeDrLxtVa4tIKFd8BZRMu0Smr8A02WFF6Uyzv9FFssF9XTerg" },
        { name: "night", url: "http://fc01.deviantart.net/fs70/i/2012/178/e/3/a_dark_starry_night_wallpaper_by_s3vendays-d151qon.jpg" },
        { name: "leaf", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRYennzt1KUlkTGWpQGjFGhyoPL4pxwvxsyKFEVGf_dVJJdRhXV" },
        { name: "mulch", url: "http://www.steverazzconstruction.com/Portals/141191/images/cedar%20mulch.jpg" },
        { name: "grass", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcSA9up3gUpOmPQRTC27TRnCADliwauD4DG_iJ2zbOV9eWFTCbh-EA" },
        { name: "cloud", url: "http://stream1.gifsoup.com/view/168615/flying-in-clouds-o.gif" },
        { name: "cloud", url: "http://th09.deviantart.net/fs29/PRE/f/2008/168/f/7/Monsoon_Clouds_by_ash2000.jpg" },
        { name: "beach", url: "http://melliedee.com/wp-content/uploads/2013/09/Beach-Animated.gif" },
        { name: "beach", url: "http://media.giphy.com/media/rXy3zZGg9sIzC/giphy.gif" },
        { name: "ocean", url: "http://media.giphy.com/media/5ERaOy5fQEIAU/giphy.gif" }

    ];

    var imgsOutside2 = [
        { name: "road", url: "http://66.39.75.177/wp-content/uploads/2011/10/pleasant-hill-rd-stefernie-flickr-500x328.jpg" },
        { name: "sidewalk", url: "http://s1.hubimg.com/u/609138_f520.jpg" },
        { name: "day night", url: "http://www.pixelpixie.net/images/centralpark2.gif" },
        { name: "seasons", url: "http://fc08.deviantart.net/fs70/f/2012/229/8/8/tree_seasons___animated_gif_by_lilipilyspirit_by_lilipilyspirit-d5bezda.gif" },
        { name: "seasons", url: "http://frankmcmahon.com/bfrmanm.gif" },
        { name: "wind", url: "http://media0.giphy.com/media/xc3sjbJrb0FGw/giphy.gif" },
        { name: "rain", url: "http://2.bp.blogspot.com/-esmn9bw2atY/U69LL3HY_pI/AAAAAAAABOo/BexkiMtJYIk/s1600/Rain_Animated.gif" },
        { name: "snow", url: "http://image.blingee.com/images17/content/output/000/000/000/60f/518825130_988743.gif" },
        { name: "slide", url: "http://img2.wfrcdn.com/lf/79/hash/636/8401863/1/UPlay%2BToday%2BFreestanding%2BSlide.jpg" },
        { name: "bench", url: "http://ltrf.org/wp-content/uploads/2014/01/garden_bench.jpg" }
    ];

    var imgsHouse1 = [
        { name: "floor", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcSJYWtKpB0K91gxPsEWsrjmYqTKjK1WxDm-MOCg-qbuRXA6--yU" },
        { name: "carpet", url: "http://www.townofjacksonwi.org/wp-content/uploads/2013/02/What-to-Consider-before-Buying-Carpet.jpg" },
        { name: "ceiling", url: "http://www.calfinder.com/assets/images/library/ceiling-link.jpg" },
        { name: "sofa", url: "http://www.furniturerow.com/images/prodImages/SM-CEALVQP_LRG_00.JPG" },
        { name: "trampoline", url: "http://st.houzz.com/simgs/11b1021c024d92fb_4-5612/modern-baby-toys.jpg" },
        { name: "table", url: "http://www.woodgears.ca/table/plans/main.png" },
        { name: "chair", url: "http://housetohome.media.ipcdigital.co.uk/96/00000d365/16b1_orh550w550/Goliath-kitchen-chair.jpg" },
        { name: "key", url: "http://cdn.shopify.com/s/files/1/0177/9886/products/arrow-ar1-bump-key-1_1024x1024.jpg?v=1346093238" },
        { name: "window", url: "http://glassrepairorlando.com/wp-content/uploads/2013/06/window.jpg" }
    ];

    var imgsHouse2 = [
        { name: "gate", url: "http://www.babysafehomes.com/wp-content/uploads/2013/09/SS30_Angle_SanDiego.jpg" },
        { name: "door", url: "http://www.busybeaver.com/images/subdepartments/550x550/6-Panel-Door-w_jam.jpg" },
        { name: "door knob", url: "http://0.tqn.com/w/experts/Locksmithing-3110/2008/10/door-knob.jpg" },
        { name: "pack n play", url: "http://i.walmartimages.com/i/p/00/04/74/06/12/0004740612229_500X500.jpg" },
        { name: "bed", url: "http://jacobandlevis.com/CMS/uploads/Stafford_Queen_Bed.jpg" },
        { name: "lamp", url: "http://pearlsofpromiseministries.com/wp-content/uploads/2012/10/Lamp-3.jpg" },
        { name: "switch", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRogmwxWHLqMrYfnpEV9HyZxpz9NYNMrASDUekiRV9JL-pGcXcFBg" }
    ];

    var imgsPeople = [
        { name: "obama", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcTrAeSkHQX19P5z4UeInuLaTl6hZg1J67iGZDqsHckIj-5auy-CpQ" },
        { name: "shannon", url: "http://shannonsnannycare.com/generator/assets/zoo.jpg" },
        { name: "mom", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/7/547787-tn_mother_and_baby_hugging0001aa.gif" },
        { name: "dad", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/1/1306841-tn_New-Parents002.jpg" }
    ];

    var imgsCartoons1 = [
        { name: "goofy", url: "http://img3.wikia.nocookie.net/__cb20120113162156/p__/protagonist/images/a/a5/Goofy_02.gif" },
        { name: "mickey", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQCii56reUYPikc4G3TkhZkNpq05NV__FUfd5NJqgtoj-3pe49Cig" },
        { name: "minnie", url: "http://upload.wikimedia.org/wikipedia/en/6/67/Minnie_Mouse.png" },
        { name: "pluto", url: "http://img1.wikia.nocookie.net/__cb20130128231305/disney/images/4/42/Pluto_KH.png" },
        { name: "donald", url: "http://www.great-kidsbedrooms.co.uk/media/wysiwyg/donald.gif" },
        { name: "daisy", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQEI8Zj9dp21wIKf3PdK5nEaE-T8P2Ca0vuB2s_4bIl6UQK89uF" },
        { name: "pete", url: "http://img1.wikia.nocookie.net/__cb20110322175344/disney/es/images/9/9f/Pete_Clubhouse.png" },
        { name: "toodles", url: "http://img1.wikia.nocookie.net/__cb20120924161727/disney/images/2/2c/Toodles.jpg" },
        { name: "elmo", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRHwbCF3aEHSyytmG7IlLqWDubqbyz9tfT2_v4ZEZ8UjZXgsXXe" },
        { name: "big bird", url: "http://www.themillions.com/wp-content/uploads/2012/10/570_big-bird-wins.jpg" }
    ];

    var imgsCartoons2 = [
        { name: "george", url: "http://www.ethos3.com/wp-content/uploads/2012/01/Curious-George.jpg" },
        { name: "manny", url: "http://img4.wikia.nocookie.net/__cb20130410134530/h__/handymanny/images/e/e1/Manny_Earth_Day02.png" },
        { name: "mater", url: "http://upload.wikimedia.org/wikipedia/en/2/21/MaterCars.jpg" },
        { name: "buzzbee", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcSYP2TsB2mIQZw1kGzDYFzVDfJvvDtnAeWgee9m1pV91t4_bvMgXw" },
        { name: "huckle", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcT1G86Z9kvPlSMJ292H5MgifNc1gTonFjt9WlhqD_-y9IiYJ2Sv" },
        { name: "lowly", url: "http://loudcrow.com/wp-content/uploads/LowlyWorm-269x300.png" },
        { name: "clifford", url: "http://www.hollywoodreporter.com/sites/default/files/imagecache/thumbnail_570x321/2012/05/clifford_happy_a_l.jpg" },
        { name: "dora", url: "http://allthingsd.com/files/2013/04/dora1.png" }
    ];

    var imgsShapes = [
        { name: "circle", url: "http://www.eonhq.com/m/geometry/images/2d-circle.gif" },
        { name: "oval", url: "http://www.eonhq.com/m/geometry/images/2d-ellipse.gif" },
        { name: "triangle", url: "http://www.eonhq.com/m/geometry/images/2d-triangle.gif" },
        { name: "square", url: "http://www.eonhq.com/m/geometry/images/2d-square.gif" },
        { name: "rectangle", url: "http://www.eonhq.com/m/geometry/images/2d-rectangle.gif" },
        { name: "star", url: "http://www.clker.com/cliparts/E/N/5/r/b/5/star-shape-hi.png" },
        { name: "crescent", url: "http://www.clipartbest.com/cliparts/9cp/eag/9cpeagaRi.svg" },
        { name: "pentagon", url: "http://www.eonhq.com/m/geometry/images/2d-pentagon.gif" },
        { name: "hexagon", url: "http://www.eonhq.com/m/geometry/images/2d-hexagon.gif" },
        { name: "cross", url: "http://2.bp.blogspot.com/-q4_gPvBtB6I/T4rodb61eQI/AAAAAAAAAlQ/tqOLGzggAto/s1600/-Golden-Cross.jpg" },
        { name: "shapes", url: "http://4.bp.blogspot.com/-Sh_E69QcAxY/Um-2BwVztJI/AAAAAAAAIik/kQ0ebue72zU/s1600/Slide35.JPG" }
    ];

    var imgsActions1 = [
        { name: "walk", url: "http://www.picgifs.com/graphics/w/walking/graphics-walking-365538.gif" },
        { name: "walk", url: "http://lh5.ggpht.com/_gXLJq-z63k8/TQ5g650naHI/AAAAAAAACrM/_qXyDKZ6KDU/s800/Haters-Gonna-Hate-Gif-7.gif" },
        { name: "run", url: "http://stream1.gifsoup.com/view1/2006857/run-animation-o.gif" },
        { name: "jump", url: "http://www.rock.k12.nc.us/cms/lib6/NC01000985/Centricity/Domain/938/jump%20rope%20team.gif" },
        { name: "rest", url: "http://itoon.co/600/royalty-free-cartoon-of-a-grinning-bee-mascot-cartoon-character-resting-his-face-on-his-hand-by-toons4biz-5724.jpg" },
        { name: "sleep", url: "http://i379.photobucket.com/albums/oo231/Rishro/dog_animated.gif" },
        { name: "sleep", url: "http://www.picturesanimations.com/s/sleep/163tweetyslaapt.gif" },
        { name: "sleep", url: "http://worldofteacherfortin.perso.sfr.fr/quiz%20pr%C3%A9t%C3%A9rit/images/sleeping-girl-animated.gif" },
        { name: "clean", url: "http://www.picgifs.com/clip-art/activities/cleaning/clip-art-cleaning-121482.jpg" },
        { name: "spin", url: "http://www.chrismeyer3d.com/images/characters/boy/boy_color_spin.gif" },
        { name: "lick", url: "http://i.imgur.com/dybq3Uc.gif" },
        { name: "falling", url: "http://www.stykz.net/blogimages/Falling.gif" },
        { name: "follow", url: "http://stream1.gifsoup.com/view3/2087765/following-the-leader-o.gif" },
        { name: "follow", url: "http://1.bp.blogspot.com/-3eQBpYf_vgo/ToYXhmxf5NI/AAAAAAAABlA/stBDM01TIU4/s1600/Animated-Jesus.gif" },
        { name: "like", url: "http://stream1.gifsoup.com/view3/4543898/spongebob-licking-the-patty-poster-o.gif" }
    ];

    var imgsActions2 = [
        { name: "hug", url: "http://www.animationplayhouse.com/cows-hug.gif" },
        { name: "sing", url: "https://www.beach.k12.nd.us/jtescher/files/2013/02/singermic.gif" },
        { name: "dance", url: "http://lh4.ggpht.com/_m0YtPN5vgmI/TN4E8Ry0BnI/AAAAAAAAVLY/meyWTLAQ3F4/s800/dancing%20bear.gif" },
        { name: "dance", url: "http://www.animationplayhouse.com/dancing_giraffees.gif" },
        { name: "argue", url: "http://www.picgifs.com/graphics/b/best-friend/graphics-best-friend-198591.gif" },
        { name: "swim", url: "http://harrydarlingtonqegs.files.wordpress.com/2011/10/swimming-man.gif" },
        { name: "give", url: "http://i906.photobucket.com/albums/ac263/nols_photos/puppy-giving-gift.gif" },
        { name: "give", url: "http://www.toonuppresentations.com/thumb-prehistoric_art_flowers_anim.gif.350.c.gif" },
        { name: "keep", url: "http://img.weburbanist.com/pics/wp-content/uploads/2010/09/Selfish.jpg" },
        { name: "throw", url: "http://3.bp.blogspot.com/-xjetycqwrB8/Um1-CkOr-CI/AAAAAAAAAQQ/P6zYIfIxEGY/s1600/Sandeepan_Ball+throw1.gif" },
        { name: "clap", url: "http://schoolofdisney.com/Tinkerbell/images/animated_clapping_hands.gif" },
        { name: "knod head", url: "https://img.4plebs.org/boards/s4s/image/1409/14/1409140350334.gif" },
        { name: "shake head", url: "http://www.christianity-and-the-confusion.com/boss_head_nodding_no_sm_nwm.gif" },
        { name: "bite", url: "http://media0.giphy.com/media/gXFpraXeKyHDi/giphy.gif" },
        { name: "stomp", url: "http://www.futuremusic.com/news/images/msp-stomp-action.gif" },
        { name: "pick up", url: "https://buddyanimation.files.wordpress.com/2014/03/pick-up1.gif" },
        { name: "throw trash", url: "http://www.presentermedia.com/files/animsp/00011000/11853/waste_paper_shot_miss_sm_wm.gif" }
    ];

    var imgsActions3 = [
        { name: "push", url: "https://gcps.desire2learn.com/d2l/lor/viewer/viewFile.d2lfile/15524/6499/stick_figure_push_crate_md_wm.gif" },
        { name: "pull", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/5/550245-tn_people-193.gif" },
        { name: "eat", url: "http://www.clipartlord.com/wp-content/uploads/2013/08/boy-eating-fried-chicken.gif" },
        { name: "drink", url: "http://i18.photobucket.com/albums/b110/SweetHoneyBee64/drinking-water.gif" },
        { name: "drawing", url: "http://media.giphy.com/media/hCQTd0xRTdetq/giphy.gif" },
        { name: "coloring", url: "http://wedesign.saschina.wikispaces.net/file/view/animated-drawing.gif/451704914/180x180/animated-drawing.gif" },
        { name: "drive", url: "http://4.bp.blogspot.com/-yazsMmZJJZg/Ut0Lb2KnX_I/AAAAAAAABGo/lK5w_SATslQ/s1600/francis_driving_car.gif" },
        { name: "touch", url: "http://media.giphy.com/media/ptnWal3n4VPdS/giphy.gif" },
        { name: "sit", url: "http://i1160.photobucket.com/albums/q492/Alcotrash_79/sitdown.gif" },
        { name: "sit", url: "http://memeguy.com/photos/images/when-i-sit-down-for-the-after-school-dump-10983.gif" },
        { name: "lay", url: "http://www.clipartillustration.com/wp-content/uploads/symbiostock_rf_content/62948-orange-man-lying-down.jpg" },
        { name: "chase", url: "http://media.giphy.com/media/Fb4OOxPYfO4fK/giphy.gif" },
        { name: "hide", url: "http://media1.giphy.com/media/vFuQaUkLvdcFW/giphy.gif" },
        { name: "hide", url: "http://stream1.gifsoup.com/view6/2022544/hide-and-seek-o.gif" }
    ];

    var imgsFeelings = [
        { name: "happy", url: "http://img1.wikia.nocookie.net/__cb20130905081021/glee/images/4/40/Happy-jump-happy-animation-animated-smiley-emoticon-000360-large.gif" },
        { name: "sad", url: "http://www.clipartbest.com/cliparts/niX/nG4/niXnG4X5T.gif" },
        { name: "angry", url: "http://www.sherv.net/cm/emo/angry/fist-shake.gif" },
        { name: "laugh", url: "http://i484.photobucket.com/albums/rr207/kalir13/laughing_smiley.gif" },
        { name: "tired", url: "http://4.bp.blogspot.com/-hSHZXxjtNUg/Uqb6LYckF4I/AAAAAAAAB0w/NE8i2Mpx0MQ/s1600/original+(1).gif" },
        { name: "play", url: "http://www.sherv.net/cm/emoticons/basketball/bouncing-a-basketball-smiley-emoticon.gif" },
        { name: "play", url: "http://www.urbana.k12.oh.us/uhs/animations2/people_a_c/children/boy_playing_with_cars_mw.gif" },
        { name: "nice", url: "http://www.urlbaron.com/ubcards/images/p6384.gif" },
        { name: "mean", url: "http://cdn.graphicsfactory.com/clip-art/image_files/image/8/709218-MERCURIAL.gif" },
        { name: "scared", url: "http://i717.photobucket.com/albums/ww173/prestonjjrtr/Smileys/AfraidScared01.gif" },
        { name: "friends", url: "http://julzz.wikispaces.com/file/view/Animated_singing_in_the_rain_friends.gif/30660519/Animated_singing_in_the_rain_friends.gif" }
    ];

    var imgsFood1 = [
        { name: "carrot", url: "http://www.justdosomething.org.uk/media/1521/carrot.jpg" },
        { name: "rice", url: "http://www.timeslive.co.za/incoming/2012/03/18/white-rice/ALTERNATES/crop_630x400/White+rice" },
        { name: "lettuce", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcROnZfIfQ6g7JjD5WBtYy9It-TNTRLBdQ7af2ccEfAAOF00xg_qnQ" },
        { name: "apple", url: "http://www.personal.psu.edu/afr3/blogs/siowfa13/1369381208_89403.jpg" },
        { name: "orange", url: "http://gofor2and5.com.au/portals/0/Images/Fruit/2and5_orange_420.jpg" },
        { name: "watermelon", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcQowgHdgygUtji4bNDZx12WxMNyuXHKRHWWunJkSGOXyIVXh7Iu7g" },
        { name: "broccoli", url: "http://www.slate.com/content/dam/slate/articles/health_and_science/new_scientist/2012/03/120302_SCIENTIST_broccoli.jpg.CROP.rectangle3-large.jpg" },
        { name: "blue berry", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcR5KouOKzVKymTHwbVNsdyyjMU7qFhJSqKsKAH06jKBFU_O0gVb" },
        { name: "grapes", url: "http://images.wisegeek.com/bundle-of-green-grapes.jpg" },
        { name: "grapes", url: "http://www.detoxdrinks.info/images/grapes_detox_drinks.jpg" }
    ];

    var imgsFood2 = [
        { name: "hot dog", url: "http://www.grillingcompanion.com/wp-content/uploads/2009/03/hotdog4web.jpg" },
        { name: "ice cream", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcTk3acVCAwgOHb4ZYb5J_F-wSqKMD3rxASmeSBpXHV6l6YYaoUuKA" },
        { name: "bacon", url: "http://digitaldeconstruction.com/wp-content/uploads/2012/06/bacon.jpgNEW.jpg" }
    ];

    var imgsClothes = [
        { name: "shoes", url: "http://image.dhgate.com/albu_269291503_00-1.0x0/blue-tall-chuck-canvas-shoes-sneaker-men.jpg" },
        { name: "umbrella", url: "http://www.iianm.org/Principal/SiteAssets/Pages/AgencyCoverage/agency-umbrella/blue-umbrella-graphic.jpg" },
        { name: "hat", url: "http://www.burnhamhats.co.uk/v/vspfiles/assets/images/panama%20hats%20category%20header.jpg" },
        { name: "gloves", url: "http://images.hayneedle.com/mgen/master:SMX011.jpg" },
        { name: "shirt", url: "http://3.bp.blogspot.com/_-05CbS9fCMY/TJwNUY7tcJI/AAAAAAAAADY/Dxy5mrFhoP8/s1600/spongebob-squarepants-face-t-shirt-610-p.jpg" }
    ];

    var imgsRoles = [
        { name: "policeman", url: "http://jokes4all.net/policeman,baton.gif" },
        { name: "astronaut", url: "http://media.npr.org/assets/img/2013/10/30/hadfield_an-astronaut-s-guide-to-life-on-earth-4--d982fdb6dc3a68a4c8c3c198f5e731f124a14343.jpg" },
        { name: "mailman", url: "http://muyargentino.com/wp-content/uploads/2012/10/Francis-Mailman.jpg" },
        { name: "soldier", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQrYXT2AT0gxrz45N1cpcwKUiI58CUa9wSbkE2eNuZhLTsc-Nmb" }
    ];

    var imgsMisc = [
        { name: "fire", url: "http://media0.giphy.com/media/lAoDtIcj2DflC/giphy.gif" },
        { name: "over under", url: "http://4.bp.blogspot.com/-z0UGGlMzqiA/UmgDivMFTGI/AAAAAAAAIgc/70PsUm_VGFE/s320/ZZ2.jpg" },
        { name: "on off", url: "http://davepear.com/blog/wp-content/uploads/2009/09/lightbulb.gif" },
        { name: "on", url: "http://www.clker.com/cliparts/a/c/7/3/11954453872135666604liftarn_Light_bulb.svg.hi.png" },
        { name: "off", url: "http://www.clker.com/cliparts/5/Y/g/U/j/H/light-bulb-off-hi.png" },
        { name: "first", url: "http://www.jandsmministries.com/images/message/running.gif" },
        { name: "first", url: "http://www.netanimations.net/Moving-animated-picture-off-to-the-races.gif" }
    ];

    var imgsToys = [
        { name: "robot", url: "http://img1.wikia.nocookie.net/__cb20111227042926/dundef/images/0/01/Laser_Robot.png" },
        { name: "tablet", url: "http://www.androidcentral.com/sites/androidcentral.com/files/articleimage/9274/2010/12/Android_tablet.jpg" },
        { name: "swing", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/3/547803-tn_mother_and_daughter_swings0001aa.gif" },
        { name: "ball", url: "http://www.qualitylogoproducts.com/stress-balls/beach-ball-stress-toy-superextralarge-175340.jpg" },
        { name: "ball", url: "http://www.sz-wholesaler.com/userimg/1144/1163sw1/pvc-toy-ball-575.jpg" },
        { name: "soccer ball", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcSZF_kT03eLD86toLY5Se2mw72AWT6OiuvYxWfLgTPBqIPab54gFA" },
        { name: "basketball", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQtyDsy7iGu6kuac0prM8KLpfNgXaDXnNm8aFTjqazJE2wqdcN2Tg" },
        { name: "tennis ball", url: "http://i.dailymail.co.uk/i/pix/2012/07/02/article-2167894-04F7D9440000044D-333_468x320.jpg" },
        { name: "football", url: "http://files.leagueathletics.com/Images/Club/10794/football.gif" },
        { name: "golf ball", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQ_qBhlCOfnmx_sJHiHFjym4POhIxoLlyVJeVzQy2cLT_Y5NU93" },
        { name: "guitar", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcTa14PLSvd061jPie4iDaTNLz6uGjcAywtIX1weQmwz7XWEIjCc" },
        { name: "piano", url: "http://i1068.photobucket.com/albums/u458/leelocal6/piano.jpg" }
    ];

    var imgsBody = [
    ];

    var favorites = [
        { name: "favorites", url: "http://us.123rf.com/450wm/iqoncept/iqoncept1304/iqoncept130400126/19214234-the-word-favorite-in-a-blue-thumb-s-up-symbol-to-represent-liking-a-comment-photo-or-product-on-a-so.jpg" },
        { name: "mickey", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQCii56reUYPikc4G3TkhZkNpq05NV__FUfd5NJqgtoj-3pe49Cig" },
        { name: "elmo", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRHwbCF3aEHSyytmG7IlLqWDubqbyz9tfT2_v4ZEZ8UjZXgsXXe" }
    ];

    var imgsExtra = [
        { name: "", url: "" },
        { name: "", url: "" },
        { name: "", url: "" }
    ];

    var groupImages = [
        imgsAnimals1,
        imgsAnimals2,
        imgsAnimals3,
        imgsKitchen,
        imgsFood1,
        imgsFood2,
        imgsTransport,
        imgsOutside1,
        imgsOutside2,
        imgsHouse1,
        imgsHouse2,
        imgsPeople,
        imgsCartoons1,
        imgsCartoons2,
        imgsShapes,
        imgsActions1,
        imgsActions2,
        imgsActions3,
        imgsFeelings,
        imgsClothes,
        imgsRoles,
        imgsMisc,
        imgsToys,
        favorites
    ];

    var groupNames = [
        "Animals 1",
        "Animals 2",
        "Animals 3",
        "Kitchen",
        "Food 1",
        "Food 2",
        "Transport",
        "Outside 1",
        "Outside 2",
        "House 1",
        "House 2",
        "People",
        "Cartoons 1",
        "Cartoons 2",
        "Shapes",
        "Actions 1",
        "Actions 2",
        "Actions 3",
        "Feelings",
        "Clothes",
        "Roles",
        "Misc",
        "Toys",
        "favorites"
    ];

    //// Starting Widget

    console.log("starting images");

    $("#edushow").showimgs({
        name: "show1",
        debug: false,
        mainImg: mainImg,
        groupImages: groupImages,
        groupNames: groupNames
    });
	
});
