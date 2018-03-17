$(function () {

    //// DATA

    var mainImg = "http://jbum.com/pixmagic/rainbowspiral.jpg";

    var imgsActions1 = [
        { name: "walk", es: "caminar", url: "http://www.picgifs.com/graphics/w/walking/graphics-walking-365538.gif" },
        { name: "run", es: "correr", url: "http://stream1.gifsoup.com/view1/2006857/run-animation-o.gif" },
        { name: "jump", es: "saltar", url: "http://www.rock.k12.nc.us/cms/lib6/NC01000985/Centricity/Domain/938/jump%20rope%20team.gif" },
        { name: "dance", es: "vailar", url: "http://www.animationplayhouse.com/dancing_giraffees.gif" },
        { name: "rest", es: "descansar", url: "http://itoon.co/600/royalty-free-cartoon-of-a-grinning-bee-mascot-cartoon-character-resting-his-face-on-his-hand-by-toons4biz-5724.jpg" },
        { name: "sleep", es: "dormir", url: "http://worldofteacherfortin.perso.sfr.fr/quiz%20pr%C3%A9t%C3%A9rit/images/sleeping-girl-animated.gif" },
        { name: "clean", es: "limpiar", url: "http://www.picgifs.com/clip-art/activities/cleaning/clip-art-cleaning-121482.jpg" },
        { name: "spin", es: "voltear", url: "http://www.chrismeyer3d.com/images/characters/boy/boy_color_spin.gif" },
        { name: "lick", es: "lamer", url: "http://i.imgur.com/dybq3Uc.gif" },
        { name: "falling", es: "caer", url: "http://www.stykz.net/blogimages/Falling.gif" },
        { name: "stomp", es: "pisar", url: "http://www.futuremusic.com/news/images/msp-stomp-action.gif" },
        { name: "like", es: "gustar", url: "http://stream1.gifsoup.com/view3/4543898/spongebob-licking-the-patty-poster-o.gif" }
    ];

    var imgsActions2 = [
        { name: "hug", es: "abrazar", url: "http://www.animationplayhouse.com/cows-hug.gif" },
        { name: "walk", es: "caminar", url: "http://lh5.ggpht.com/_gXLJq-z63k8/TQ5g650naHI/AAAAAAAACrM/_qXyDKZ6KDU/s800/Haters-Gonna-Hate-Gif-7.gif" },
        { name: "sing", es: "cantar", url: "http://mp3gstore.com/sitebuildercontent/sitebuilderpictures/CAPCITY/singers.gif" },
        { name: "dance", es: "vailar", url: "http://media.giphy.com/media/E5pcLyXRM5fIA/giphy.gif" },
        { name: "argue", es: "discutir", url: "http://www.picgifs.com/graphics/b/best-friend/graphics-best-friend-198591.gif" },
        { name: "swim", es: "nadar", url: "http://harrydarlingtonqegs.files.wordpress.com/2011/10/swimming-man.gif" },
        { name: "share", es: "prestar", url: "http://i906.photobucket.com/albums/ac263/nols_photos/puppy-giving-gift.gif" },
        { name: "give", es: "dar", url: "http://www.toonuppresentations.com/thumb-prehistoric_art_flowers_anim.gif.350.c.gif" },
        { name: "keep", es: "tomar", url: "http://img.weburbanist.com/pics/wp-content/uploads/2010/09/Selfish.jpg" },
        { name: "clap", es: "aplaudir", url: "http://stream1.gifsoup.com/view7/2702975/snow-white-clapping-o.gif" },
        { name: "nod head", es: "asentar de cabeza", url: "http://rs291.pbsrc.com/albums/ll284/marikriscruz/gif/1-nod.gif~c200" },
        { name: "shake head", es: "negar de cabeza", url: "http://www.christianity-and-the-confusion.com/boss_head_nodding_no_sm_nwm.gif" },
        { name: "bite", es: "morder", url: "http://media0.giphy.com/media/gXFpraXeKyHDi/giphy.gif" }
    ];

    var imgsActions3 = [
        { name: "read", es: "leer", url: "http://bestanimations.com/Books/guy-man-reading-book-animation-7.gif" },
        { name: "push", es: "empujar", url: "https://media.tenor.co/images/c6656643f794a640ef16a78ed303b4fb/raw" },
        { name: "pull", es: "jalar", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/5/550245-tn_people-193.gif" },
        { name: "eat", es: "comer", url: "http://www.clipartlord.com/wp-content/uploads/2013/08/boy-eating-fried-chicken.gif" },
        { name: "drink", es: "beber", url: "http://i18.photobucket.com/albums/b110/SweetHoneyBee64/drinking-water.gif" },
        { name: "drawing", es: "dibujar", url: "http://media.giphy.com/media/hCQTd0xRTdetq/giphy.gif" },
        { name: "coloring", es: "colorear", url: "http://wedesign.saschina.wikispaces.net/file/view/animated-drawing.gif/451704914/180x180/animated-drawing.gif" },
        { name: "drive", es: "manejar", url: "http://4.bp.blogspot.com/-yazsMmZJJZg/Ut0Lb2KnX_I/AAAAAAAABGo/lK5w_SATslQ/s1600/francis_driving_car.gif" },
        { name: "touch", es: "tocar", url: "http://media.giphy.com/media/ptnWal3n4VPdS/giphy.gif" },
        { name: "sit", es: "sentar", url: "http://i1160.photobucket.com/albums/q492/Alcotrash_79/sitdown.gif" },
        { name: "potty", es: "cagar", url: "http://memeguy.com/photos/images/when-i-sit-down-for-the-after-school-dump-10983.gif" },
        { name: "lay", es: "echar", url: "https://media4.giphy.com/media/rNXxBS4TsXlni/200_s.gif" }
    ];

    var imgsActions4 = [
        { name: "pick up", es: "recojer", url: "https://buddyanimation.files.wordpress.com/2014/03/pick-up1.gif" },
        { name: "throw", es: "tirar", url: "http://3.bp.blogspot.com/-xjetycqwrB8/Um1-CkOr-CI/AAAAAAAAAQQ/P6zYIfIxEGY/s1600/Sandeepan_Ball+throw1.gif" },
        { name: "throw trash", es: "bota la basura", url: "http://www.presentermedia.com/files/animsp/00011000/11853/waste_paper_shot_miss_sm_wm.gif" },
        { name: "chase", es: "perseguir", url: "http://media.giphy.com/media/Fb4OOxPYfO4fK/giphy.gif" },
        { name: "hide", es: "ocultar", url: "http://media1.giphy.com/media/vFuQaUkLvdcFW/giphy.gif" },
        { name: "hide", es: "ocultar", url: "http://stream1.gifsoup.com/view6/2022544/hide-and-seek-o.gif" },
        { name: "ride bicycle", es: "manejar bicicleta", url: "http://classroomclipart.com/images/gallery/Animations/Children/cycle.gif" },
        { name: "follow", es: "seguir", url: "http://stream1.gifsoup.com/view3/2087765/following-the-leader-o.gif" }
    ];

    var imgsAnimals1 = [
        { name: "dog", es: "perro", url: "http://a-z-animals.com/media/animals/images/470x370/dog5.jpg" },
        { name: "cat", es: "gato", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ3WbN4lqD1BAWIQbGyctZKDe7kny7m-bLTNymmYochy-sdHOZjSA" },
        { name: "pig", es: "cerdo", url: "http://www.theglobeandmail.com/migration_catalog/Books/article4027503.ece/BINARY/w620/pig-08" },
        { name: "horse", es: "caballo", url: "http://upload.wikimedia.org/wikipedia/commons/9/9a/Avenger_-_Westphalian_horse.jpg" },
        { name: "cow", es: "vaca", url: "http://greece.greekreporter.com/files/cow.jpg" },
        { name: "rabbit", es: "conejo", url: "http://4.bp.blogspot.com/-1solYA4mVAU/UeYWSGGCmqI/AAAAAAAAAKQ/2gm8h0BJmCY/s1600/Rabbit+Farming+in+Kenya.JPG" },
        { name: "lamb", es: "oveja", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcTfgTn-aMzEgzCLoakeKZBwL6dQlvxae-EtgnQi3M-6zjklw8zdWA" },
        { name: "chicken", es: "gallina", url: "http://wallpapers-junction.com/Animals/Images/Hen-Wallpaper.jpg" },
        { name: "duck", es: "pato", url: "http://www.timeshighereducation.co.uk/Pictures/web/u/m/n/duck_0_450.jpg" },
        { name: "turkey", es: "pavo", url: "http://cdn.warcraftpets.com/images/pets/big/turkey.v7384.jpg" }
    ];

    var imgsAnimals2 = [
        { name: "lion", es: "leon", url: "http://i.telegraph.co.uk/multimedia/archive/01808/li_1808134c.jpg" },
        { name: "tiger", es: "tigre", url: "http://www.21stcenturytiger.org/wp-content/blogs.dir/2/files/home-page/hl_eye-of-the-tiger-com_sumatrantiger_wilhelmazoo.jpg" },
        { name: "monkey", es: "mono", url: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/5/31/1306846833333/vervet-monkey-007.jpg" },
        { name: "zebra", es: "zebra", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRvNo7pL39mqHHgYhoHEthITy5LWmrXv1iTC92UKrsQXHzut0ch" },
        { name: "bear", es: "oso", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQpugBnfXIG2sVStrLfUzUnp3-9PR_B-HW9LuJaAjGhy1NT3L8G" },
        { name: "rhino", es: "rinoceronte", url: "http://upload.wikimedia.org/wikipedia/commons/3/38/Rhinoc%C3%A9ros_blanc_JHE.jpg" },
        { name: "giraffe", es: "jirafa", url: "http://www.skullsunlimited.com/userfiles/image/giraffe.jpg" },
        { name: "turtle", es: "tortuga", url: "http://images.wisegeek.com/turtle.jpg" },
        { name: "crocodile", es: "cocrodilo", url: "http://www.abc.net.au/reslib/201007/r600136_3900983.jpg" },
        { name: "frog", es: "rana", url: "http://s.hswstatic.com/gif/frog-1.jpg" },
        { name: "mouse", es: "raton", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcT2RZFeZKyhorMxLCoDgPRapy_d8btsEKERuaLWGvH8fG3iFBOW" },
        { name: "fish", es: "pez", url: "http://pngimg.com/upload/fish_PNG1150.png" }
    ];

    var imgsAnimals3 = [
        { name: "squirrel", es: "ardilla", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRvI5Azpwx3k0c0YWtOc0V9rcR28ONc70NyEltl12a8WmXT_N_f" },
        { name: "lizard", es: "lagartija", url: "http://cliparts.co/cliparts/ATb/j88/ATbj889Ac.jpg" },
        { name: "bird", es: "pajaro", url: "http://upload.wikimedia.org/wikipedia/commons/f/f8/Geopelia_zebra_-KL_Bird_Park-6a.jpg" },
        { name: "bird", es: "pajaro", url: "http://i.telegraph.co.uk/multimedia/archive/02059/bird-1-snow-buntin_2059659i.jpg" },
        { name: "crow", es: "cuervo", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcQUmsqMh6eS0ZxSPfd3Q31cWQvpoAizD2GZELOq6X9mTWlLNhpU3A" },
        { name: "worm", es: "gusano", url: "http://www.bbc.co.uk/staticarchive/15b4ce654fc1cc2a80e3cf849fb655a0ed9560bd.jpg" },
        { name: "ant", es: "hormiga", url: "http://www.sbs.utexas.edu/fireant/Images/Solenopsis_invicta1.JPG" },
        { name: "spider", es: "aran~a", url: "http://upload.wikimedia.org/wikipedia/commons/2/25/Hogna_lenta_18.jpg" },
        { name: "bee", es: "abeja", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcRvMkBoaD1KkCirLU7xaZC_FdBRtipWN0JKYQHreg1JNPzYnk6Kwg" },
        { name: "deer", es: "venado", url: "http://www.nhptv.org/natureworks/graphics/whitetaileddeer1sm.jpg" },
        { name: "fox", es: "zorro", url: "http://www.lhnet.org/assets/Carnivores/Red-fox/Red-fox-Vulpes-vulpes3.jpg" },
        { name: "beaver", es: "castor", url: "http://cottagelife.com/files/2013/02/Beaver_istockphoto_thinkstock-e1361292176199.jpg" },
        { name: "lighting bug", es: "luciernaga", url: "https://c1.staticflickr.com/5/4048/4707355367_7192739675_z.jpg" }
    ];

    var imgsTransport = [
        { name: "car", es: "carro", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2DbjD11bU1OGM2gaeBo9jn0IZ7eYq5J8Dwk1tAq9mZhFpzERqQ" },
        { name: "bicycle", es: "bicicleta", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcS-BZ-TsOcmGnr2ky_E57stwWQyAwzqcADOFSknmHTkbq8LYHPNhA" },
        { name: "train", es: "tren", url: "http://2.bp.blogspot.com/-p_eU3fIWMqE/TbhVdygw38I/AAAAAAAAAgQ/JxtBBGTEmEE/s1600/train%2Bfor%2Bblog.jpeg" },
        { name: "truck", es: "camion", url: "http://www.just4wheels.com/images/classes/atruck24.jpg" },
        { name: "firetruck", es: "camion de bombero", url: "http://www.wtae.com/image/view/-/11260314/highRes/2/-/maxh/480/maxw/640/-/xp0cm7/-/Firetruck-generic.jpg" },
        { name: "ambulance", es: "ambulancia", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcROl62N7EAjon2-bRrHOgxmr3njncVavHMWYWjoGswlq_7maOU8Aw" },
        { name: "bus", es: "bus", url: "http://carpundit.typepad.com/photos/uncategorized/school_bus.jpg" },
        { name: "helicopter", es: "helicoptero", url: "http://www.rotaryaction.com/images/copter1.gif" },
        { name: "airplane", es: "avion", url: "http://content.presentermedia.com/files/animsp/00007000/7149/airplane_flying_the_skies_md_wm.gif" },
        { name: "rocket", es: "cohete", url: "https://m1.behance.net/rendition/modules/46830769/disp/77ac7183144e02493f19662af098ac55.gif" },
        { name: "boat", es: "bote", url: "http://media.giphy.com/media/wauKdo2ZvRSNy/giphy.gif" }
    ];

    var imgsOutside1 = [
        { name: "rainbow", es: "arco iris", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcTYz4Yh7rSj8ECm_ct5qSloP14Q3u6xUx4k1yorZYI5BhkPch8h" },
        { name: "day", es: "dia", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQLCDeDrLxtVa4tIKFd8BZRMu0Smr8A02WFF6Uyzv9FFssF9XTerg" },
        { name: "night", es: "noche", url: "http://fc01.deviantart.net/fs70/i/2012/178/e/3/a_dark_starry_night_wallpaper_by_s3vendays-d151qon.jpg" },
        { name: "leaf", es: "hoja", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRYennzt1KUlkTGWpQGjFGhyoPL4pxwvxsyKFEVGf_dVJJdRhXV" },
        { name: "mulch", es: "mantillo", url: "http://www.steverazzconstruction.com/Portals/141191/images/cedar%20mulch.jpg" },
        { name: "grass", es: "cesped", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcSA9up3gUpOmPQRTC27TRnCADliwauD4DG_iJ2zbOV9eWFTCbh-EA" },
        { name: "cloud", es: "nube", url: "http://stream1.gifsoup.com/view/168615/flying-in-clouds-o.gif" },
        { name: "cloud", es: "nube", url: "http://th09.deviantart.net/fs29/PRE/f/2008/168/f/7/Monsoon_Clouds_by_ash2000.jpg" },
        { name: "beach", es: "playa", url: "http://img2.10bestmedia.com/Images/Photos/96123/captiva-beach-captiva_54_990x660_201404211817.jpg" },
        { name: "ocean", es: "oceano", url: "http://media.giphy.com/media/5ERaOy5fQEIAU/giphy.gif" }
    ];

    var imgsOutside2 = [
        { name: "road", es: "pista", url: "http://66.39.75.177/wp-content/uploads/2011/10/pleasant-hill-rd-stefernie-flickr-500x328.jpg" },
        { name: "sidewalk", es: "camino", url: "http://s1.hubimg.com/u/609138_f520.jpg" },
        { name: "day night", es: "dia noche", url: "http://www.pixelpixie.net/images/centralpark2.gif" },
        { name: "seasons", es: "estaciones", url: "http://fc08.deviantart.net/fs70/f/2012/229/8/8/tree_seasons___animated_gif_by_lilipilyspirit_by_lilipilyspirit-d5bezda.gif" },
        { name: "seasons", es: "estaciones", url: "http://frankmcmahon.com/bfrmanm.gif" },
        { name: "wind", es: "viento", url: "http://media0.giphy.com/media/xc3sjbJrb0FGw/giphy.gif" },
        { name: "rain", es: "lluvia", url: "http://2.bp.blogspot.com/-esmn9bw2atY/U69LL3HY_pI/AAAAAAAABOo/BexkiMtJYIk/s1600/Rain_Animated.gif" },
        { name: "snow", es: "nieve", url: "http://image.blingee.com/images17/content/output/000/000/000/60f/518825130_988743.gif" },
        { name: "bench", es: "banco", url: "http://www.queensbotanical.org/media/image/bench4.jpg" },
        { name: "bridge", es: "puente", url: "http://www.publicdomainpictures.net/pictures/30000/nahled/small-bridge.jpg" },
        { name: "beach", es: "playa", url: "http://media.giphy.com/media/rXy3zZGg9sIzC/giphy.gif" }
    ];

    var imgsHouse1 = [
        { name: "floor", es: "suelo", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcSJYWtKpB0K91gxPsEWsrjmYqTKjK1WxDm-MOCg-qbuRXA6--yU" },
        { name: "carpet", es: "alfombra", url: "http://www.townofjacksonwi.org/wp-content/uploads/2013/02/What-to-Consider-before-Buying-Carpet.jpg" },
        { name: "ceiling", es: "techo", url: "http://www.calfinder.com/assets/images/library/ceiling-link.jpg" },
        { name: "sofa", es: "sofa", url: "http://www.furniturerow.com/images/prodImages/SM-CEALVQP_LRG_00.JPG" },
        { name: "trampoline", es: "trampolin", url: "http://images.amazon.com/images/G/01/toys/detail-page/c26-B007CA1L54-1-l.jpg" },
        { name: "table", es: "mesa", url: "http://www.woodgears.ca/table/plans/main.png" },
        { name: "chair", es: "silla", url: "http://housetohome.media.ipcdigital.co.uk/96/00000d365/16b1_orh550w550/Goliath-kitchen-chair.jpg" },
        { name: "pool", es: "piscina", url: "http://houstoncoolpools.com/wp-content/uploads/2014/12/spa.jpg" },
        { name: "grill", es: "parrilla", url: "http://www.grill-repair.com/images/grill/kenmore3.jpg" },
        { name: "floatie", es: "flotador", url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdg67RnAq5ye0Qvcf1Lfd7iJ0uLgWmehmjGBbPAbyu2Zpln59cDQ" },
        { name: "window", es: "ventana", url: "http://glassrepairorlando.com/wp-content/uploads/2013/06/window.jpg" }
    ];

    var imgsHouse2 = [
        { name: "gate", es: "puerta", url: "http://www.babysafehomes.com/wp-content/uploads/2013/09/SS30_Angle_SanDiego.jpg" },
        { name: "door", es: "puerta", url: "http://www.busybeaver.com/images/subdepartments/550x550/6-Panel-Door-w_jam.jpg" },
        { name: "door knob", es: "manija", url: "http://0.tqn.com/w/experts/Locksmithing-3110/2008/10/door-knob.jpg" },
        { name: "key", es: "llave", url: "http://cdn.shopify.com/s/files/1/0177/9886/products/arrow-ar1-bump-key-1_1024x1024.jpg?v=1346093238" },
        { name: "pack n play", es: "tipo de cuna", url: "http://i.walmartimages.com/i/p/00/04/74/06/12/0004740612229_500X500.jpg" },
        { name: "bed", es: "cama", url: "http://www.ikea.com/PIAimages/0447181_PE597128_S3.JPG" },
        { name: "lamp", es: "lampara", url: "http://pearlsofpromiseministries.com/wp-content/uploads/2012/10/Lamp-3.jpg" },
        { name: "switch", es: "interruptor", url: "http://media.tumblr.com/tumblr_m1r51piwyV1r5lyu3.jpg" }
    ];

    var imgsKitchen = [
        { name: "sink", es: "lavador", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcSPk7U-b2-plTAkQj2WZblMtl8Dg1dGoiNitEdohl-fOEv1URB9" },
        { name: "oven", es: "horno", url: "https://homeappliances.files.wordpress.com/2010/09/steam-oven.jpg" },
        { name: "stove", es: "estufa", url: "http://i00.i.aliimg.com/photo/v1/536319676/Table_top_gas_stove_4_RT502.jpg" },
        { name: "microwave", es: "microonda", url: "http://www.photo-dictionary.com/photofiles/list/1700/6159microwave_oven.jpg" },
        { name: "plate", es: "plato", url: "http://thumbs.dreamstime.com/z/empty-plate-6005076.jpg" },
        { name: "pan", es: "sarten", url: "http://images.wisegeek.com/teflon-pan.jpg" },
        { name: "cup", es: "taza", url: "http://ecx.images-amazon.com/images/I/51ZTcWXhbkL._SL1500_.jpg" },
        { name: "spatula", es: "espatula", url: "https://billlabrie.files.wordpress.com/2014/07/wpid-spatulas-edit.jpg" },
        { name: "blender", es: "licuadora", url: "http://www.waringpro.com/product-images/main-image/preview/wpb05.jpg" },
        { name: "toaster", es: "tostadora", url: "http://kitchen-electronics.weebly.com/uploads/2/7/1/1/27118291/6608936_orig.jpg" },
        { name: "bowl", es: "tazon", url: "http://media2.hickorees.com/image/BauerPotteryCerealBowlBlue_L1.jpg" },
        { name: "refrigerator", es: "refrigerador", url: "http://cdn.diply.com/img/3dea964a-ff0c-4c9c-987f-f3b18d9cbe6c.jpg" }
    ];

    var imgsBathroom = [
        { name: "bath", es: "baño", url: "http://classroomclipart.com/images/gallery/Animations/Children/girl_in_bathtub_animation_2B.gif" },
        { name: "bathtube", es: "bañera", url: "http://www.cngreengoods.com/Images/bathtub.jpg" },
        { name: "toilet", es: "inodoro", url: "http://www.americanstandard-us.com/assets/images/productImages/amstd/standard/5654.prd.s.020.png" },
        { name: "toothbrush", es: "cepillo", url: "http://www.colgateprofessional.com/Professional/v1/en/us/locale-assets/img/thumbnails/Product-Detail-Toothbrush-ColgateWaveGumComfort-Thumb.png" },
        { name: "toothpaste", es: "pasta dental", url: "http://www.sott.net/image/s4/99499/full/fluoride_toothpaste.jpg" },
        { name: "sink", es: "lavador", url: "https://www.plumbingsupply.com/images/barclay-sink-round.jpg" },
        { name: "towel", es: "toalla", url: "http://noodleandboo.com/images/products/detail/bath_towel_detail.jpg" },
        { name: "comb", es: "peine", url: "http://manlycurls.com/blog_new/wp-content/uploads/2011/07/wide-tooth-comb.jpg" },
        { name: "toilet paper", es: "papel higienico", url: "http://classroomclipart.com/images/gallery/Things/TN_toilet_paper.jpg" }
    ];

    var imgsRoles = [
        { name: "policeman", es: "policia", url: "http://jokes4all.net/policeman,baton.gif" },
        { name: "astronaut", es: "astronauta", url: "http://media.npr.org/assets/img/2013/10/30/hadfield_an-astronaut-s-guide-to-life-on-earth-4--d982fdb6dc3a68a4c8c3c198f5e731f124a14343.jpg" },
        { name: "mailman", es: "cartero", url: "http://holidayinsights.com/moreholidays/February/mailman.jpg" },
        { name: "soldier", es: "soldado", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQrYXT2AT0gxrz45N1cpcwKUiI58CUa9wSbkE2eNuZhLTsc-Nmb" },
        { name: "doctor", es: "doctor", url: "http://i.istockimg.com/file_thumbview_approve/24066790/2/stock-illustration-24066790-female-doctor.jpg" },
        { name: "fireman", es: "bombero", url: "http://www.cliparthut.com/clip-arts/130/firemen-clip-art-130886.png" }
    ];

    var imgsPeople = [
        { name: "obama", es: "", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcTrAeSkHQX19P5z4UeInuLaTl6hZg1J67iGZDqsHckIj-5auy-CpQ" },
        { name: "bush", es: "", url: "http://i.telegraph.co.uk/multimedia/archive/01011/george-bush-460_1011810c.jpg" },
        { name: "reagan", es: "", url: "http://www.classbrain.com/artbiographies/uploads/ronald-reagan.jpg" },
        { name: "pitt", es: "", url: "http://thefoodeablog.com/wp-content/assets/2007/09/brad_pitt.jpg" },
        { name: "hillary", es: "", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqg3L-Q0Zz5mTALOxxmswMcqCFd2sAZkAIgcyEolrxMy4xMo1" },
        { name: "mom", es: "mama", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/7/547787-tn_mother_and_baby_hugging0001aa.gif" },
        { name: "dad", es: "papa", url: "http://www.graphicsfactory.com/clip-art/image_files/tn_image/1/1306841-tn_New-Parents002.jpg" }
    ];

    var imgsCartoons1 = [
        { name: "goofy", es: "", url: "http://img3.wikia.nocookie.net/__cb20120113162156/p__/protagonist/images/a/a5/Goofy_02.gif" },
        { name: "mickey", es: "", url: "http://img3.wikia.nocookie.net/__cb20121011213635/disney/images/d/d6/Mickey_Mouse_Clubhouse_-_Mickey_-_Playhouse_Disney_Canada.png" },
        { name: "minnie", es: "", url: "https://s-media-cache-ak0.pinimg.com/236x/77/52/f5/7752f59d6892ab81b24fb3c85d0355b1.jpg" },
        { name: "pluto", es: "", url: "http://img1.wikia.nocookie.net/__cb20130128231305/disney/images/4/42/Pluto_KH.png" },
        { name: "donald", es: "", url: "http://www.great-kidsbedrooms.co.uk/media/wysiwyg/donald.gif" },
        { name: "daisy", es: "", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQEI8Zj9dp21wIKf3PdK5nEaE-T8P2Ca0vuB2s_4bIl6UQK89uF" },
        { name: "pete", es: "pedro", url: "http://img1.wikia.nocookie.net/__cb20110322175344/disney/es/images/9/9f/Pete_Clubhouse.png" },
        { name: "toodles", es: "", url: "http://img1.wikia.nocookie.net/__cb20120924161727/disney/images/2/2c/Toodles.jpg" },
        { name: "elmo", es: "", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRHwbCF3aEHSyytmG7IlLqWDubqbyz9tfT2_v4ZEZ8UjZXgsXXe" },
        { name: "big bird", es: "", url: "http://www.themillions.com/wp-content/uploads/2012/10/570_big-bird-wins.jpg" }
    ];

    var imgsCartoons2 = [
        { name: "george", es: "", url: "http://www.gallaudet.edu/images/Clerc/20100611-0004w.jpg" },
        { name: "manny", es: "", url: "http://img3.wikia.nocookie.net/__cb20111218194739/h__/handymanny/images/5/5b/Handy_manny.jpg" },
        { name: "mater", es: "", url: "http://upload.wikimedia.org/wikipedia/en/2/21/MaterCars.jpg" },
        { name: "buzzbee", es: "", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcSYP2TsB2mIQZw1kGzDYFzVDfJvvDtnAeWgee9m1pV91t4_bvMgXw" },
        { name: "huckle", es: "", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcT1G86Z9kvPlSMJ292H5MgifNc1gTonFjt9WlhqD_-y9IiYJ2Sv" },
        { name: "lowly", es: "", url: "http://loudcrow.com/wp-content/uploads/LowlyWorm-269x300.png" },
        { name: "clifford", es: "", url: "http://www.hollywoodreporter.com/sites/default/files/imagecache/thumbnail_570x321/2012/05/clifford_happy_a_l.jpg" },
        { name: "oso", es: "", url: "http://i475.photobucket.com/albums/rr115/mynannysgirl/Special%20Agent%20OSO/special-agent-oso.jpg" },
        { name: "dora", es: "", url: "http://allthingsd.com/files/2013/04/dora1.png" }
    ];

    var imgsShapes = [
        { name: "circle", es: "circulo", url: "http://www.eonhq.com/m/geometry/images/2d-circle.gif" },
        { name: "oval", es: "ovalo", url: "http://www.eonhq.com/m/geometry/images/2d-ellipse.gif" },
        { name: "triangle", es: "triangulo", url: "http://www.eonhq.com/m/geometry/images/2d-triangle.gif" },
        { name: "square", es: "cuadrado", url: "http://www.eonhq.com/m/geometry/images/2d-square.gif" },
        { name: "rectangle", es: "rectangulo", url: "http://www.eonhq.com/m/geometry/images/2d-rectangle.gif" },
        { name: "star", es: "estrella", url: "http://www.clker.com/cliparts/E/N/5/r/b/5/star-shape-hi.png" },
        { name: "crescent", es: "cresciente", url: "http://www.clipartbest.com/cliparts/9cp/eag/9cpeagaRi.svg" },
        { name: "pentagon", es: "pentagono", url: "http://www.eonhq.com/m/geometry/images/2d-pentagon.gif" },
        { name: "hexagon", es: "hexagono", url: "http://www.eonhq.com/m/geometry/images/2d-hexagon.gif" },
        { name: "cross", es: "cruz", url: "http://2.bp.blogspot.com/-q4_gPvBtB6I/T4rodb61eQI/AAAAAAAAAlQ/tqOLGzggAto/s1600/-Golden-Cross.jpg" },
        { name: "shapes", es: "figuras", url: "http://4.bp.blogspot.com/-Sh_E69QcAxY/Um-2BwVztJI/AAAAAAAAIik/kQ0ebue72zU/s1600/Slide35.JPG" }
    ];

    var imgsFeelings = [
        { name: "happy", es: "feliz", url: "http://img1.wikia.nocookie.net/__cb20130905081021/glee/images/4/40/Happy-jump-happy-animation-animated-smiley-emoticon-000360-large.gif" },
        { name: "sad", es: "trizte", url: "http://www.clipartbest.com/cliparts/niX/nG4/niXnG4X5T.gif" },
        { name: "angry", es: "molesto", url: "http://www.sherv.net/cm/emo/angry/fist-shake.gif" },
        { name: "laugh", es: "reir", url: "http://i484.photobucket.com/albums/rr207/kalir13/laughing_smiley.gif" },
        { name: "tired", es: "cansado", url: "http://gifsec.com/wp-content/uploads/GIF/2014/03/Very-Tired-GIF.gif?gs=a" },
        { name: "play", es: "jugar", url: "http://www.sherv.net/cm/emoticons/basketball/bouncing-a-basketball-smiley-emoticon.gif" },
        { name: "play", es: "jugar", url: "http://www.urbana.k12.oh.us/uhs/animations2/people_a_c/children/boy_playing_with_cars_mw.gif" },
        { name: "nice", es: "bueno", url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx6tSFVLCf0BY15LEujFmh5CQq3HddhaC4qYsU_u37WjQhb0gG" },
        { name: "mean", es: "malo", url: "http://cdn.graphicsfactory.com/clip-art/image_files/image/8/709218-MERCURIAL.gif" },
        { name: "scared", es: "con miedo", url: "http://i717.photobucket.com/albums/ww173/prestonjjrtr/Smileys/AfraidScared01.gif" },
        { name: "cry", es: "llorar", url: "http://classroomclipart.com/images/gallery/Animations/Children/crying_girl_cc.gif" },
        { name: "crazy", es: "loco", url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyyJJRLRDeVi10m-KNUvdPZN6XK-qMZcmqx_UxSXEK57rmpJ2rtw" },
        { name: "worried", es: "preocupado", url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8bLqUGEiuBuFYjcXsEStA2yzzl16tYVBmAv0Vxu0rdYGCaPW9" },
        { name: "wink", es: "guin~ar", url: "https://s-media-cache-ak0.pinimg.com/originals/dc/c7/a6/dcc7a61fb4f9d712bf8fec30e8b15cd7.jpg" },
        { name: "friends", es: "amigos", url: "https://s-media-cache-ak0.pinimg.com/236x/74/fa/59/74fa593f0def8eea8fd36e896996de97.jpg" }
    ];

    var imgsFood1 = [
        { name: "carrot", es: "zanahoria", url: "http://www.justdosomething.org.uk/media/1521/carrot.jpg" },
        { name: "rice", es: "arroz", url: "http://www.timeslive.co.za/incoming/2012/03/18/white-rice/ALTERNATES/crop_630x400/White+rice" },
        { name: "lettuce", es: "lechuga", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcROnZfIfQ6g7JjD5WBtYy9It-TNTRLBdQ7af2ccEfAAOF00xg_qnQ" },
        { name: "apple", es: "manzana", url: "http://www.personal.psu.edu/afr3/blogs/siowfa13/1369381208_89403.jpg" },
        { name: "orange", es: "naranja", url: "http://pngimg.com/upload/orange_PNG806.png" },
        { name: "watermelon", es: "sandia", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcQowgHdgygUtji4bNDZx12WxMNyuXHKRHWWunJkSGOXyIVXh7Iu7g" },
        { name: "broccoli", es: "brocoli", url: "http://www.slate.com/content/dam/slate/articles/health_and_science/new_scientist/2012/03/120302_SCIENTIST_broccoli.jpg.CROP.rectangle3-large.jpg" },
        { name: "blue berry", es: "berry azul", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcR5KouOKzVKymTHwbVNsdyyjMU7qFhJSqKsKAH06jKBFU_O0gVb" },
        { name: "grapes", es: "uvas", url: "http://images.wisegeek.com/bundle-of-green-grapes.jpg" },
        { name: "grapes", es: "uvas", url: "http://www.detoxdrinks.info/images/grapes_detox_drinks.jpg" }
    ];

    var imgsFood2 = [
        { name: "raisins", es: "pasas", url: "http://cravingideas.blogs.com/photos/uncategorized/flameraisins.jpg" },
        { name: "hot dog", es: "hot dog", url: "http://www.grillingcompanion.com/wp-content/uploads/2009/03/hotdog4web.jpg" },
        { name: "ice cream", es: "helado", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcTk3acVCAwgOHb4ZYb5J_F-wSqKMD3rxASmeSBpXHV6l6YYaoUuKA" },
        { name: "strawberry", es: "fresa", url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYsQUk_eVJisnc_H1LdshV4i5bWHJ_38KNu_p43QWnEi1C89MxiA" },
        { name: "bread", es: "pan", url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9IxiCe2aY12ruHct-Y0VqhVMrRRDMXtZbs2ymfFcFSccPfIMY" },
        { name: "waffle", es: "", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoH6LQ9NPkE3zJ4Z1pB6UTRpsFaZ7r4tNQvAAYKcf5hDzQZM_KA" },
        { name: "sausage", es: "salchicha", url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPNL2OfPppF1JZyw-O8SaXSs-ypfQ9w6Z_seQ-KM_u8yuD88aVDQ" },
        { name: "cake", es: "torta", url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtA6Ukm0gr1EDBFUNldJcJ0uUaBR05Nwrsuy_ji-mu-52Q8rAKUQ" },
        { name: "bacon", es: "tocino", url: "http://digitaldeconstruction.com/wp-content/uploads/2012/06/bacon.jpgNEW.jpg" }
    ];

    var imgsBody = [
        { name: "hands", es: "manos", url: "http://us.cdn2.123rf.com/168nwm/ruslan/ruslan0808/ruslan080800073/3408232-child-hands-isolated-on-white.jpg" },
        { name: "eyes", es: "ojos", url: "http://us.cdn2.123rf.com/168nwm/teddy2007b/teddy2007b1012/teddy2007b101200001/8369404-female-look.jpg" },
        { name: "ear", es: "orejas", url: "http://us.cdn1.123rf.com/168nwm/krisdog/krisdog0705/krisdog070500013/937239-body-parts-ear-an-illustration-of-a-human-ear-no-meshes-used.jpg" },
        { name: "nose", es: "nariz", url: "http://us.cdn3.123rf.com/168nwm/krisdog/krisdog0705/krisdog070500029/937249-body-parts-nose-an-illustration-of-a-human-nose-no-meshes-used.jpg" },
        { name: "mouth", es: "boca", url: "http://us.cdn2.123rf.com/168nwm/krisdog/krisdog0705/krisdog070500028/937248-body-parts-mouth-an-illustration-of-a-human-mouth-no-meshes-used.jpg" },
        { name: "feet", es: "pies", url: "http://us.cdn2.123rf.com/168nwm/lelik759/lelik7591103/lelik759110300163/9079804-vector-illustration-of-a-foot-of-feet-on-a-white-background.jpg" }
    ];

    var imgsClothes = [
        { name: "shoes", es: "zapatos", url: "http://image.dhgate.com/albu_269291503_00-1.0x0/blue-tall-chuck-canvas-shoes-sneaker-men.jpg" },
        { name: "umbrella", es: "paraguas", url: "http://www.freevectors.net/files/large/ColorfulVectorUmbrella.jpg" },
        { name: "hat", es: "sombrero", url: "http://www.burnhamhats.co.uk/v/vspfiles/assets/images/panama%20hats%20category%20header.jpg" },
        { name: "gloves", es: "guantes", url: "http://images.hayneedle.com/mgen/master:SMX011.jpg" },
        { name: "pants", es: "pantalones", url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkyOFF8XHikbuAT1UoPZ2mrYfgUfN1JodPnnmLAervJ2pFIs4D" },
        { name: "shorts", es: "pantalones cortos", url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSj_YhljavKD4iKTMFn1sCUdY_-BritiY2mnttPw1z4QEpjxyNN" },
        { name: "shirt", es: "camiseta", url: "http://3.bp.blogspot.com/_-05CbS9fCMY/TJwNUY7tcJI/AAAAAAAAADY/Dxy5mrFhoP8/s1600/spongebob-squarepants-face-t-shirt-610-p.jpg" }
    ];

    var imgsTools = [
        { name: "hammer", es: "martillo", url: "http://classroomclipart.com/images/gallery/Clipart/Tools/hammer_0104.jpg" },
        { name: "nails", es: "clavo", url: "http://image.shutterstock.com/display_pic_with_logo/515608/515608,1290580422,1/stock-photo-hammer-a-nail-several-iron-one-gold-65795020.jpg" },
        { name: "screwdriver", es: "destornillador", url: "http://www.clker.com/cliparts/8/2/2/6/11971154711712468971BigRedSmile_A_screwdriver_1.svg.hi.png" },
        { name: "mallet", es: "mazo", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcSnpVNpKI3OVkBZnUkic2ZiTPzZpWm4oOV_rahlnroLDhN549KszA" },
        { name: "saw", es: "serrucho", url: "http://www.clker.com/cliparts/f/2/9/e/11949850521159759855utensile_sega_architetto_01.svg.med.png" },
        { name: "pliers", es: "alicates", url: "http://www.stitchdiva.com/media/Tutorials/Wire/NeedleNosePliers.jpg" },
        { name: "scissors", es: "tijeras", url: "http://thumbs.dreamstime.com/x/scissors-open-8199471.jpg" },
        { name: "wrench", es: "llave inglesa", url: "http://s.hswstatic.com/gif/wrench-1.jpg" },
        { name: "nail clippers", es: "corta un~as", url: "http://40.media.tumblr.com/f8c303c34968a75d4df0989b756afc39/tumblr_inline_nognaqlZzN1qcmayu_400.jpg" }
    ];

    var imgsToys = [
        { name: "robot", es: "", url: "http://img1.wikia.nocookie.net/__cb20111227042926/dundef/images/0/01/Laser_Robot.png" },
        { name: "tablet", es: "", url: "http://www.androidcentral.com/sites/androidcentral.com/files/articleimage/9274/2010/12/Android_tablet.jpg" },
        { name: "swing", es: "columpio", url: "http://classroomclipart.com/images/gallery/Animations/boy_swinging_animation_2_15A.gif" },
        { name: "ball", es: "pelota", url: "http://www.qualitylogoproducts.com/stress-balls/beach-ball-stress-toy-superextralarge-175340.jpg" },
        { name: "soccer ball", es: "pelota de futbol", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcSZF_kT03eLD86toLY5Se2mw72AWT6OiuvYxWfLgTPBqIPab54gFA" },
        { name: "basketball", es: "pelota de basket", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQtyDsy7iGu6kuac0prM8KLpfNgXaDXnNm8aFTjqazJE2wqdcN2Tg" },
        { name: "tennis ball", es: "pelota de tennis", url: "http://i.dailymail.co.uk/i/pix/2012/07/02/article-2167894-04F7D9440000044D-333_468x320.jpg" },
        { name: "football", es: "", url: "http://files.leagueathletics.com/Images/Club/10794/football.gif" },
        { name: "golf ball", es: "", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQ_qBhlCOfnmx_sJHiHFjym4POhIxoLlyVJeVzQy2cLT_Y5NU93" },
        { name: "guitar", es: "guitarra", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcTa14PLSvd061jPie4iDaTNLz6uGjcAywtIX1weQmwz7XWEIjCc" },
        { name: "piano", es: "piano", url: "http://i1068.photobucket.com/albums/u458/leelocal6/piano.jpg" },
        { name: "slide", es: "deslizador", url: "http://img2.wfrcdn.com/lf/79/hash/636/8401863/1/UPlay%2BToday%2BFreestanding%2BSlide.jpg" },
        { name: "see saw", es: "", url: "http://classroomclipart.com/images/gallery/Animations/Children/updwn.gif" },
        { name: "balloon", es: "globo", url: "http://www.webweaver.nu/clipart/img/entertainment/party/3-balloons.png" },
        { name: "kite", es: "cometa", url: "http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-kite-5.gif" }
    ];

    var imgsAslAnimals = [
        { name: "dog", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/dogbanimation.gif" },
        { name: "cat", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/catanimation.gif" },
        { name: "elephant", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/elephant.gif" },
        { name: "bear", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/bear.gif" }
    ];

    var imgsAslFood = [
        { name: "water", es: "", url: "http://stream1.gifsoup.com/view5/20140513/5036479/water-asl-o.gif" },
        { name: "banana", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/banana.gif" },
        { name: "apple", es: "", url: "http://media-cache-ec0.pinimg.com/236x/6e/1d/fe/6e1dfecf7bbd530bcf4ed099a2d1863f.jpg" },
        { name: "ice cream", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/icecream.gif" },
        { name: "bread", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/breadsideview.gif" }
    ];

    var imgsAslThings = [
        { name: "book", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/bookanimation.gif" },
        { name: "chair", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/chair.gif" },
        { name: "table", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/tableanimation.gif" },
        { name: "door", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/dooranimation.gif" },
        { name: "phone", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/phone.gif" },
        { name: "tree", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/tree.gif" },
        { name: "ball", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/ball.gif" }
    ];

    var imgsAslActions = [
        { name: "read", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/readanimation.gif" },
        { name: "play", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/play.gif" },
        { name: "walk", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/walk.gif" },
        { name: "run", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/run.gif" },
        { name: "yes", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/yesanimation.gif" },
        { name: "no", es: "", url: "http://www.lifeprint.com/asl101/gifs-animated/noanimation.gif" }
    ];

    var imgsMisc = [
        { name: "fire", es: "fuego", url: "http://media0.giphy.com/media/lAoDtIcj2DflC/giphy.gif" },
        { name: "on and off", es: "prender apagar", url: "http://davepear.com/blog/wp-content/uploads/2009/09/lightbulb.gif" },
        { name: "on", es: "prendido", url: "http://metrouk2.files.wordpress.com/2010/11/article-1290073129742-06d5003c000005dc-371581_304x219.jpg" },
        { name: "off", es: "apagado", url: "http://www.clker.com/cliparts/5/Y/g/U/j/H/light-bulb-off-hi.png" },
        { name: "first", es: "primero", url: "http://www.jandsmministries.com/images/message/running.gif" },
        { name: "last", es: "ultimo", url: "http://i.imgur.com/ViZ6NXW.gif" },
        { name: "slow", es: "despacio", url: "http://upload.wikimedia.org/wikipedia/commons/9/99/Horse_gif_slow.gif" },
        { name: "fast", es: "rapido", url: "http://static.wixstatic.com/media/f9795d_a4fdbcfc1301def85d06cf6c86934aaa.gif" }
    ];

    var imgsPositioning = [
        { name: "over", es: "encima", url: "http://upload.wikimedia.org/wikipedia/commons/9/93/Explain_on_under_between_by_in_over_thrue_21.svg" },
        { name: "under", es: "debajo", url: "http://leechbabe.files.wordpress.com/2008/06/under1.jpg" },
        { name: "on", es: "en", url: "http://leechbabe.files.wordpress.com/2008/06/on1.jpg?w=144" },
        { name: "in", es: "dentro", url: "http://leechbabe.files.wordpress.com/2008/06/in1.jpg?w=144" },
        { name: "behind", es: "atras", url: "http://upload.wikimedia.org/wikipedia/commons/5/58/Explain_on_under_between_by_in_over_thrue_19.svg" },
        { name: "in front", es: "adelante", url: "http://files.differencebetween.com/wp-content/uploads/2014/11/Prepositions_Difference-Between-Adverbs-and-Prepositions.png" }
    ];
    
    var imgsLetters1 = [
        { name: "A", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-A-Single_1.jpg" },
        { name: "B", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-B-Single_1.jpg" },
        { name: "C", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-C-Single_1.jpg" },
        { name: "D", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-D-Single_1.jpg" },
        { name: "E", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-E-Single_1.jpg" },
        { name: "F", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-F-Single_1.jpg" },
        { name: "G", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-G-Single_1.jpg" },
        { name: "H", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-H-Single_1.jpg" },
        { name: "I", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-I-Single_1.jpg" },
        { name: "J", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-J-Single_1.jpg" },
        { name: "K", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-K-Single_1.jpg" },
        { name: "L", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-L-Single_1.jpg" }
    ];
    
    var imgsLetters2 = [
        { name: "M", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-M-Single_1.jpg" },
        { name: "N", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-N-Single_1.jpg" },
        { name: "O", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-O-Single_1.jpg" },
        { name: "P", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-P-Single_1.jpg" },
        { name: "Q", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-Q-Single_1.jpg" },
        { name: "R", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-R-Single_1.jpg" },
        { name: "S", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-S-Single_1.jpg" },
        { name: "T", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-T-Single_1.jpg" },
        { name: "U", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-u-Single_1.jpg" },
        { name: "V", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-V-Single_1.jpg" },
        { name: "W", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-W-Single_1.jpg" },
        { name: "X", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-X-Single_1.jpg" },
        { name: "Y", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-Y-Single_1.jpg" },
        { name: "Z", es: "", url: "https://www.designsbyjuju.com/media/catalog/product/cache/1/small_image/275x/9df78eab33525d08d6e5fb8d27136e95/D/B/DBJJ557-BOY-Z-Single_1.jpg" }
    ];
    
    var imgsLetters3 = [
        { name: "A", es: "", url: "http://4.bp.blogspot.com/-YUBGSzkfLgg/Ts-jeIfglXI/AAAAAAAACrw/QsSoh0bMaIs/s200/CAPITAL-LETTER-A.png" },
        { name: "B", es: "", url: "http://3.bp.blogspot.com/-V5wQXjP9Q18/Ts-jgfCjV6I/AAAAAAAACr4/QtGeTJh6wnQ/s200/CAPITAL-LETTER-B.png" },
        { name: "C", es: "", url: "http://4.bp.blogspot.com/-mx6mrLBU3eI/Ts-jivn5IRI/AAAAAAAACsA/OpEgw27WBvU/s200/CAPITAL-LETTER-C.png" },
        { name: "D", es: "", url: "http://2.bp.blogspot.com/-T2nA9U2aAuQ/Ts-jkonh4QI/AAAAAAAACsI/6vTU7bsTMBQ/s200/CAPITAL-LETTER-D.png" },
        { name: "E", es: "", url: "http://1.bp.blogspot.com/-Kf83hrbueFc/Ts-jm8xzkhI/AAAAAAAACsQ/q8Y0uvyfskE/s200/CAPITAL-LETTER-E.png" },
        { name: "F", es: "", url: "http://2.bp.blogspot.com/-iajjWxelFr8/Ts-jorpYpgI/AAAAAAAACsY/dr8KUqthDz0/s200/CAPITAL-LETTER-F.png" },
        { name: "G", es: "", url: "http://3.bp.blogspot.com/-EMsnTli8TxY/Ts-jq8mdKuI/AAAAAAAACsg/svrOTTLqtEM/s200/CAPITAL-LETTER-G.png" },
        { name: "H", es: "", url: "http://2.bp.blogspot.com/-LyRS5_13nAY/Ts-js9aFRHI/AAAAAAAACso/9aOS_5XYF5w/s200/CAPITAL-LETTER-H.png" },
        { name: "I", es: "", url: "http://4.bp.blogspot.com/-vLqbO-AnXtg/Ts-juEYhDGI/AAAAAAAACsw/GBNsKIWWqew/s200/CAPITAL-LETTER-I.png" },
        { name: "J", es: "", url: "http://3.bp.blogspot.com/-TD0jf8PGB0o/Ts-jvqk5xpI/AAAAAAAACs4/RBxyzmVaeME/s200/CAPITAL-LETTER-J.png" },
        { name: "K", es: "", url: "http://4.bp.blogspot.com/-u_NGDOPOSAY/Ts-jxjsZwEI/AAAAAAAACtA/8gowOp4OrZg/s200/CAPITAL-LETTER-K.png" },
        { name: "L", es: "", url: "http://3.bp.blogspot.com/-a16xceFIR50/Ts-jzp_MCOI/AAAAAAAACtI/bfb0W3UndhM/s200/CAPITAL-LETTER-L.png" }
    ];
    
    var imgsLetters4 = [
        { name: "M", es: "", url: "http://3.bp.blogspot.com/-zMBJBQ72pFg/Ts-j13b0c6I/AAAAAAAACtQ/ZddMUCWwfKs/s200/CAPITAL-LETTER-M.png" },
        { name: "N", es: "", url: "http://2.bp.blogspot.com/-ZuiPdHIYS5c/Ts-j4SH2FyI/AAAAAAAACtY/N7nvU39x20Q/s200/CAPITAL-LETTER-N.png" },
        { name: "O", es: "", url: "http://3.bp.blogspot.com/-tt55hOCQs0s/Ts-j68O9DFI/AAAAAAAACtg/o2fpQXLGjk4/s200/CAPITAL-LETTER-O.png" },
        { name: "P", es: "", url: "http://1.bp.blogspot.com/-GLssEutQ2kI/Ts-j9KkUWGI/AAAAAAAACto/XbACES0y71Y/s200/CAPITAL-LETTER-P.png" },
        { name: "Q", es: "", url: "http://1.bp.blogspot.com/-eKDrWjJyCms/Ts-j_5sl6oI/AAAAAAAACtw/DXPj5Gk0k28/s200/CAPITAL-LETTER-Q.png" },
        { name: "R", es: "", url: "http://3.bp.blogspot.com/-rC8MoVztxPU/Ts-kChhh0wI/AAAAAAAACt4/eZYThztTD78/s200/CAPITAL-LETTER-R.png" },
        { name: "S", es: "", url: "http://3.bp.blogspot.com/-6YXHwTZ77Y0/Ts-kFbw7czI/AAAAAAAACuA/x-66EKHueqE/s200/CAPITAL-LETTER-S.png" },
        { name: "T", es: "", url: "http://4.bp.blogspot.com/-xoQhDVlnApk/Ts-kHT_7XNI/AAAAAAAACuI/3re46XFkyu0/s200/CAPITAL-LETTER-T.png" },
        { name: "U", es: "", url: "http://4.bp.blogspot.com/-igFYkPzjU8A/Ts-kJixCuzI/AAAAAAAACuQ/sfH8zQby1Pw/s200/CAPITAL-LETTER-U.png" },
        { name: "V", es: "", url: "http://3.bp.blogspot.com/-dOTChMRmISU/Ts-kL2fAJII/AAAAAAAACuY/C6W1GmnAN7g/s200/CAPITAL-LETTER-V.png" },
        { name: "W", es: "", url: "http://3.bp.blogspot.com/-RgY3666MhJY/Ts-kO-DxTwI/AAAAAAAACug/lINNWAmVB8w/s200/CAPITAL-LETTER-W.png" },
        { name: "X", es: "", url: "http://4.bp.blogspot.com/-YWFqxqSVjYk/Ts-kRTiaBVI/AAAAAAAACuo/BlLX6YwxnA0/s200/CAPITAL-LETTER-X.png" },
        { name: "Y", es: "", url: "http://2.bp.blogspot.com/-2nAaH5Cqg54/Ts-kTfenIiI/AAAAAAAACuw/nrC1U2vBcGc/s200/CAPITAL-LETTER-Y.png" },
        { name: "Z", es: "", url: "http://4.bp.blogspot.com/-f7_Ap5g3PJg/Ts-kV28ivUI/AAAAAAAACu4/kX4Guj3o0fM/s200/CAPITAL-LETTER-Z.png" }
    ];

    var imgsLetters5 = [
        { name: "a", es: "", url: "http://alphabetletters.org/letters/letter-a/lowercase-alphabet-letter-a.jpg" },
        { name: "b", es: "", url: "http://alphabetletters.org/letters/letter-b/lowercase-alphabet-letter-b.jpg" },
        { name: "c", es: "", url: "http://alphabetletters.org/letters/letter-c/lowercase-alphabet-letter-c.jpg" },
        { name: "d", es: "", url: "http://alphabetletters.org/letters/letter-d/lowercase-alphabet-letter-d.jpg" },
        { name: "e", es: "", url: "http://alphabetletters.org/letters/letter-e/lowercase-alphabet-letter-e.jpg" },
        { name: "f", es: "", url: "http://alphabetletters.org/letters/letter-f/lowercase-alphabet-letter-f.jpg" },
        { name: "g", es: "", url: "http://alphabetletters.org/letters/letter-g/lowercase-alphabet-letter-g.jpg" },
        { name: "h", es: "", url: "http://alphabetletters.org/letters/letter-h/lowercase-alphabet-letter-h.jpg" },
        { name: "i", es: "", url: "http://alphabetletters.org/letters/letter-i/lowercase-alphabet-letter-i.jpg" },
        { name: "j", es: "", url: "http://alphabetletters.org/letters/letter-j/lowercase-alphabet-letter-j.jpg" },
        { name: "k", es: "", url: "http://alphabetletters.org/letters/letter-k/lowercase-alphabet-letter-k.jpg" },
        { name: "l", es: "", url: "http://alphabetletters.org/letters/letter-l/lowercase-alphabet-letter-l.jpg" }
    ];

    var imgsLetters6 = [
        { name: "m", es: "", url: "http://alphabetletters.org/letters/letter-m/lowercase-alphabet-letter-m.jpg" },
        { name: "n", es: "", url: "http://alphabetletters.org/letters/letter-n/lowercase-alphabet-letter-n.jpg" },
        { name: "o", es: "", url: "http://alphabetletters.org/letters/letter-o/lowercase-alphabet-letter-o.jpg" },
        { name: "p", es: "", url: "http://alphabetletters.org/letters/letter-p/lowercase-alphabet-letter-p.jpg" },
        { name: "q", es: "", url: "http://alphabetletters.org/letters/letter-q/lowercase-alphabet-letter-q.jpg" },
        { name: "r", es: "", url: "http://alphabetletters.org/letters/letter-r/lowercase-alphabet-letter-r.jpg" },
        { name: "s", es: "", url: "http://alphabetletters.org/letters/letter-s/lowercase-alphabet-letter-s.jpg" },
        { name: "t", es: "", url: "http://alphabetletters.org/letters/letter-t/lowercase-alphabet-letter-t.jpg" },
        { name: "u", es: "", url: "http://alphabetletters.org/letters/letter-u/lowercase-alphabet-letter-u.jpg" },
        { name: "v", es: "", url: "http://alphabetletters.org/letters/letter-v/lowercase-alphabet-letter-v.jpg" },
        { name: "w", es: "", url: "http://alphabetletters.org/letters/letter-w/lowercase-alphabet-letter-w.jpg" },
        { name: "x", es: "", url: "http://alphabetletters.org/letters/letter-x/lowercase-alphabet-letter-x.jpg" },
        { name: "y", es: "", url: "http://alphabetletters.org/letters/letter-y/lowercase-alphabet-letter-y.jpg" },
        { name: "z", es: "", url: "http://alphabetletters.org/letters/letter-z/lowercase-alphabet-letter-z.jpg" }
    ];

    var favorites = [
        { name: "swirl", es: "remolino", url: "http://jbum.com/pixmagic/rainbowspiral.jpg" },
        { name: "hi", es: "hola", url: "http://classroomclipart.com/images/gallery/Animations/People/HI.gif" },
        { name: "good bye", es: "adios", url: "http://quotesblog.net/wp-content/uploads/2015/03/farewell-gif.gif" }
    ];

    var imgsExtra = [
        { name: "", es: "", url: "" },
        { name: "", es: "", url: "" },
        { name: "", es: "", url: "" }
    ];

    var groupImages = [
        imgsActions1,
        imgsActions2,
        imgsActions3,
        imgsActions4,
        imgsAnimals1,
        imgsAnimals2,
        imgsAnimals3,
        imgsFood1,
        imgsFood2,
        imgsTransport,
        imgsOutside1,
        imgsOutside2,
        imgsHouse1,
        imgsHouse2,
        imgsKitchen,
        imgsBathroom,
        imgsRoles,
        imgsPeople,
        imgsCartoons1,
        imgsCartoons2,
        imgsShapes,
        imgsFeelings,
        imgsBody,
        imgsClothes,
        imgsTools,
        imgsToys,
        imgsPositioning,
        imgsAslAnimals,
        imgsAslFood,
        imgsAslThings,
        imgsAslActions,
        imgsMisc,
        imgsLetters1,
        imgsLetters2,
        imgsLetters3,
        imgsLetters4,
        imgsLetters5,
        imgsLetters6,
        favorites
    ];

    var groupNames = [
        "Actions 1",
        "Actions 2",
        "Actions 3",
        "Actions 4",
        "Animals 1",
        "Animals 2",
        "Animals 3",
        "Food 1",
        "Food 2",
        "Transport",
        "Outside 1",
        "Outside 2",
        "House 1",
        "House 2",
        "Kitchen",
        "Bathroom",
        "Roles",
        "People",
        "Cartoons 1",
        "Cartoons 2",
        "Shapes",
        "Feelings",
        "Body",
        "Clothes",
        "Tools",
        "Toys",
        "Positioning",
        "ASL animals",
        "ASL food",
        "ASL things",
        "ASL actions",
        "Miscellaneous",
        "Letters 1",
        "Letters 2",
        "Letters 3",
        "Letters 4",
        "Letters 5",
        "Letters 6",
        "favorites"
    ];

    //// Starting Widget

    console.log("starting images");

    var mode = location.search.split('mode=')[1];
    if (typeof(mode) == "undefined") {
        mode = "normal";
    }
    console.log(mode);

    if (mode == "normal") {

      $("#edushow").showimgs({
          name: "show1",
          debug: false,
          mainImg: mainImg,
          groupImages: groupImages,
          groupNames: groupNames
      });

    } else if (mode == "all") {

      $("#edushow").allimgs({
        name: "all1",
        debug: true,
        mainImg: mainImg,
        groupImages: groupImages,
        groupNames: groupNames
      });
    }

});
