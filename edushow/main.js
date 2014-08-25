$(function () {

    //// DATA

    var mainImg = "http://2.bp.blogspot.com/-Q3Z9ja2jzb8/TxrCQPPL5CI/AAAAAAAAB8E/g3UrQZj7SYo/s400/Show_TV_logosu.png";

    var imgsAnimals = [
        { name: "dog", url: "http://www.petparadisetx.com/dog3.jpeg" },
        { name: "cat", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ3WbN4lqD1BAWIQbGyctZKDe7kny7m-bLTNymmYochy-sdHOZjSA" },
        { name: "pig", url: "http://www.theglobeandmail.com/migration_catalog/Books/article4027503.ece/BINARY/w620/pig-08" },
        { name: "squirrel", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRvI5Azpwx3k0c0YWtOc0V9rcR28ONc70NyEltl12a8WmXT_N_f" },
        { name: "horse", url: "http://upload.wikimedia.org/wikipedia/commons/9/9a/Avenger_-_Westphalian_horse.jpg" },
        { name: "cow", url: "http://greece.greekreporter.com/files/cow.jpg" },
        { name: "lion", url: "http://cdn.theanimals.pics/pictures/imagesci.com/img/2013/01/lion-wallpaper-11060-hd-wallpapers.jpg" },
        { name: "monkey", url: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/5/31/1306846833333/vervet-monkey-007.jpg" },
        { name: "zebra", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRvNo7pL39mqHHgYhoHEthITy5LWmrXv1iTC92UKrsQXHzut0ch" },
        { name: "rhino", url: "http://upload.wikimedia.org/wikipedia/commons/3/38/Rhinoc%C3%A9ros_blanc_JHE.jpg" },
        { name: "giraffe", url: "http://www.skullsunlimited.com/userfiles/image/giraffe.jpg" },
        { name: "bird", url: "http://khongthe.com/wallpapers/animals/a-small-gray-bird-250273.jpg" }
    ];

    var imgsKitchen = [
        { name: "sink", url: "http://www.mbabayarea.com/wp-content/uploads/2014/06/amazing-double-basins-Kitchen-Sink.jpg" },
        { name: "oven", url: "http://grillingwithrich.com/wp-content/uploads/2012/07/Oven.bmp" },
        { name: "microwave", url: "http://www.photo-dictionary.com/photofiles/list/1700/6159microwave_oven.jpg" }
    ];

    var imgsTransport = [
        { name: "car", url: "http://www.picturesnew.com/media/images/car-car_car.jpg" },
        { name: "robot", url: "http://img1.wikia.nocookie.net/__cb20111227042926/dundef/images/0/01/Laser_Robot.png" },
        { name: "driving", url: "http://4.bp.blogspot.com/-yazsMmZJJZg/Ut0Lb2KnX_I/AAAAAAAABGo/lK5w_SATslQ/s1600/francis_driving_car.gif" }
    ];

    var imgsOutside = [
        { name: "rainbow", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcTYz4Yh7rSj8ECm_ct5qSloP14Q3u6xUx4k1yorZYI5BhkPch8h" },
        { name: "day", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQLCDeDrLxtVa4tIKFd8BZRMu0Smr8A02WFF6Uyzv9FFssF9XTerg" },
        { name: "night", url: "http://fc01.deviantart.net/fs70/i/2012/178/e/3/a_dark_starry_night_wallpaper_by_s3vendays-d151qon.jpg" },
        { name: "rain", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcR8AKboFZ_HE6R71crNbZ3nyDueHenhXt6swHgGZRIDiqRZS-rS" },
        { name: "beach", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcQe1Ei49znBYoH5ZeEkeuPyHs-ErUH_su34DkSz_rW6C4GyoghX" },
        { name: "leaf", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRYennzt1KUlkTGWpQGjFGhyoPL4pxwvxsyKFEVGf_dVJJdRhXV" },
        { name: "mulch", url: "http://www.steverazzconstruction.com/Portals/141191/images/cedar%20mulch.jpg" },
        { name: "grass", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcSA9up3gUpOmPQRTC27TRnCADliwauD4DG_iJ2zbOV9eWFTCbh-EA" },
        { name: "road", url: "http://66.39.75.177/wp-content/uploads/2011/10/pleasant-hill-rd-stefernie-flickr-500x328.jpg" },
        { name: "sidewalk", url: "http://s1.hubimg.com/u/609138_f520.jpg" }
    ];

    var imgsHouse = [
    ];

    var imgsBody = [
    ];

    var imgsExtra = [
        { name: "", url: "" },
        { name: "", url: "" },
        { name: "", url: "" }
    ];

    var groupImages = [
        imgsKitchen,
        imgsTransport,
        imgsOutside,
        imgsAnimals
    ];

    //// Starting Widget

    console.log("starting images");

    $("#edushow").showimgs({
        name: "show1",
        debug: false,
        mainImg: mainImg,
        groupImages: groupImages
    });
	
});
