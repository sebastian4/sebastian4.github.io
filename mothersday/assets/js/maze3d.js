(function() {
    var width = window.innerWidth * 0.995;
    var height = window.innerHeight * 0.995;
    var canvasContainer = document.getElementById("canvasContainer");
    var renderer, camera, scene;
    var input, miniMap, levelHelper, CameraHelper;
    var map = new Array();
    var running = true;

    function initializeEngine() {
        renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        renderer.setSize(width, height);
        renderer.clear();

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x777777, 25, 1000);

        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.y = 50;

        document.getElementById("canvasContainer").appendChild(renderer.domElement);

        input = new Demonixis.Input();
        levelHelper = new Demonixis.GameHelper.LevelHelper();
        cameraHelper = new Demonixis.GameHelper.CameraHelper(camera);

        window.addEventListener("resize", function() {
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        var messageContainer = document.createElement("div");
        messageContainer.style.position = "absolute";
        messageContainer.style.backgroundColor = "#666";
        messageContainer.style.border = "1px solid #333";

        var message = document.createElement("h1");
        message.innerHTML = "Happy Mother's Day Missie<br/>    - seb<br/>"
         +"Fun maze with pictures we have collected over the years.<br/><br/>"
         +"Use Up/Down/Left/Right arrows or the virtual pad to move and rotate the camera.<br/>"
         +"Press 'p' or click play to change the song and play.";
        message.style.textAlign = "center";
        message.style.color = "#ddd";
        message.style.padding = "15px";
        messageContainer.appendChild(message);

        document.body.appendChild(messageContainer);

        messageContainer.style.left = (window.innerWidth / 2 - messageContainer.offsetWidth / 2) + "px";
        messageContainer.style.top = (window.innerHeight / 2 - messageContainer.offsetHeight / 2) + "px";

        var timer = setTimeout(function() {
            clearTimeout(timer);
            document.body.removeChild(messageContainer);
        }, 6000);
    }

    var textureIndex = 0;
    var textureArray = [

        "assets/images/textures/wall1/IMG_0265_160.png",
        "assets/images/textures/wall1/IMG_0275_160.png",
        "assets/images/textures/wall1/IMG_0283_160.png",
        
        "assets/images/textures/wall1/mother-work.jpg",
        
        "assets/images/textures/wall1/IMG_0399_160.png",
        
        "assets/images/textures/wall1/mothers-day-great.jpg",
        
        "assets/images/textures/wall1/IMG_0457_160.png",
        "assets/images/textures/wall1/IMG_0458_160.png",
        
        
        "assets/images/textures/wall1/IMG_0497_160.png",
        
        // first
        
        "assets/images/textures/wall1/missie-mothers-day.png",
        
        
        
        // first
        
        "assets/images/textures/wall1/love-11.jpg",
        
        "assets/images/textures/wall1/IMG_0510_160.png",
        
        
        
        "assets/images/textures/wall1/IMG_0513_160.png",

        "assets/images/textures/wall1/IMG_0613_160.png",
        
        "assets/images/textures/wall1/mothers-day-quote-31.jpg",
        
        "assets/images/textures/wall1/IMG_0621_160.png",
        
        
        
        "assets/images/textures/wall1/IMG_0314_160.png",
        
        "assets/images/textures/wall1/IMG_0623_160.png",
        
        "assets/images/textures/wall1/mothers-day-12.jpg",
        
        "assets/images/textures/wall1/IMG_0651_160.png",
        "assets/images/textures/wall1/IMG_0713_160.png",
        
        "assets/images/textures/wall1/IMG_0730_160.png",
        "assets/images/textures/wall1/IMG_0991_160.png",
        
        "assets/images/textures/wall1/mothers-day-13.jpg",
        
        "assets/images/textures/wall1/IMG_1070_160.png",
        
        
        
        "assets/images/textures/wall1/IMG_1104_160.png",
        
        
        "assets/images/textures/wall1/mothers-day-21.jpg",
        
        "assets/images/textures/wall1/mcute-mom-poster.jpg",
        
        "assets/images/textures/wall1/IMG_1181_160.png",
        
        "assets/images/textures/wall1/IMG_1185_160.png",
        
        "assets/images/textures/wall1/mothers-day-quote-31.jpg",
        
        "assets/images/textures/wall1/IMG_1293_160.png",
        "assets/images/textures/wall1/IMG_1294_160.png",
        
        "assets/images/textures/wall1/IMG_1356_160.png",
        
        "assets/images/textures/wall1/IMG_1357_160.png",
        
        "assets/images/textures/wall1/mothers-day-11.jpg",
        
        "assets/images/textures/wall1/IMG_1392_160.png",
        
        "assets/images/textures/wall1/IMG_1403_160.png",
        "assets/images/textures/wall1/IMG_1423_160.png",
        
        "assets/images/textures/wall1/mothers-day.png",
        
        "assets/images/textures/wall1/IMG_2198_160.png",
        "assets/images/textures/wall1/IMG_1542_160.png",

        
        
        "assets/images/textures/wall1/mothers-day-22.png",
        
        //
        
        // "assets/images/textures/wall1/.jpg",
        
        // "assets/images/textures/wall1/_160.png",
        // "assets/images/textures/wall1/_160.png",
        // "assets/images/textures/wall1/_160.png",
    ];
    
    function initializeScene() {
        miniMap = new Demonixis.Gui.MiniMap(map[0].length, map.length, "canvasContainer");
        miniMap.create();

        var loader = new THREE.TextureLoader();
        var platformWidth = map[0].length * 100;
        var platformHeight = map.length * 100;

        var floorGeometry = new THREE.BoxGeometry(platformWidth, 5, platformHeight);
        
        var ground = new THREE.Mesh(floorGeometry, new THREE.MeshPhongMaterial({
            map: loader.load("assets/images/textures/floor/3275321-xs.jpg"),
        }));

        // repeatTexture(ground.material.map, 2);
        repeatTexture(ground.material.map, 16);

        ground.position.set(-50, 1, -50);
        scene.add(ground);

        var topMesh = new THREE.Mesh(floorGeometry, new THREE.MeshPhongMaterial({
            map: loader.load("assets/images/textures/roof/ceiling-tile-02.jpg")
        }));

        // repeatTexture(topMesh.material.map, 16);
        repeatTexture(topMesh.material.map, 64);

        topMesh.position.set(-50, 100, -50);
        scene.add(topMesh);

        var size = {
            x: 100,
            y: 100,
            z: 100
        };

        var position = { 
            x: 0, 
            y: 0, 
            z: 0 
        };

        var wallGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
        
        var wallMaterialArray = [];
        for (var j=0; j < textureArray.length; j++) {
            var wallMaterial = new THREE.MeshPhongMaterial({
                map: loader.load( textureArray[j] )
            });
            // repeatTexture(wallMaterial.map, 2);
            repeatTexture(wallMaterial.map, 1);
            wallMaterialArray.push(wallMaterial);
        }
        
        var wallMaterialSingle = new THREE.MeshPhongMaterial({
            // map: loader.load("assets/images/textures/wall1/wall_diffuse.jpg")
            map: loader.load("assets/images/textures/wall1/white-blank-brick-wal.jpg")
        });
        repeatTexture(wallMaterialSingle.map, 1);
        
        // var wallMaterial = new THREE.MeshPhongMaterial({
        //     map: loader.load("assets/images/textures/wall1/wall_diffuse.jpg")
        // });
        // 
        // var wallMaterial2 = new THREE.MeshPhongMaterial({
        //     map: loader.load("assets/images/textures/wall1/miss-0265.png")
        // });

        // repeatTexture(wallMaterial.map, 2);
        // 
        // repeatTexture(wallMaterial2.map, 2);
        
        var loopIndex = 0;

        // Map generation
        for (var y = 0, ly = map.length; y < ly; y++) {
            for (var x = 0, lx = map[x].length; x < lx; x++) {
                position.x = -platformWidth / 2 + size.x * x;
                position.y = 50;
                position.z = -platformHeight / 2 + size.z * y;

                if (x == 0 && y == 0) {
                    cameraHelper.origin.x = position.x;
                    cameraHelper.origin.y = position.y;
                    cameraHelper.origin.z = position.z;
                }

                if (map[y][x] > 1) {
                    
                    // console.log(textureIndex);
                    // console.log(textureIndex%2);
                    
                    if ((loopIndex%2) == 0) {
                        var wall3D = new THREE.Mesh(wallGeometry, wallMaterialSingle);
                        wall3D.position.set(position.x, position.y, position.z);
                        scene.add(wall3D);
                    }
                    else {
                        var wall3D = new THREE.Mesh(wallGeometry, wallMaterialArray[textureIndex]);
                        wall3D.position.set(position.x, position.y, position.z);
                        scene.add(wall3D);
                        textureIndex++;
                    }

                    // if (textureIndex == 0) {
                    //     var wall3D = new THREE.Mesh(wallGeometry, wallMaterial);
                    //     wall3D.position.set(position.x, position.y, position.z);
                    //     scene.add(wall3D);
                    // }
                    // else if (textureIndex == 1) {
                    //     var wall3D = new THREE.Mesh(wallGeometry, wallMaterial2);
                    //     wall3D.position.set(position.x, position.y, position.z);
                    //     scene.add(wall3D);
                    // }
                    
                    loopIndex++;
                    if (textureIndex >= textureArray.length) {
                        textureIndex = 0;
                    }
                    
                }

                if (map[y][x] === "D") {
                    camera.position.set(position.x, position.y, position.z);
                    cameraHelper.origin.position.x = position.x;
                    cameraHelper.origin.position.y = position.y;
                    cameraHelper.origin.position.z = position.z;
                    cameraHelper.origin.position.mapX = x;
                    cameraHelper.origin.position.mapY = y;
                    cameraHelper.origin.position.mapZ = 0;
                }

                miniMap.draw(x, y, map[y][x]);
            }
        }

        // Lights
        var directionalLight = new THREE.HemisphereLight(0x192F3F, 0x28343A, 2);
        directionalLight.position.set(1, 1, 0);
        scene.add(directionalLight);
    }

    function update() {
        if (input.keys.up) {
            moveCamera("up");
        } else if (input.keys.down) {
            moveCamera("down");
        }

        if (input.keys.left) {
            moveCamera("left");
        } else if (input.keys.right) {
            moveCamera("right");
        }
        
        if (input.keys.p) {
            playNextSong();
        }

        // Virtual pad
        var params = {
            rotation: 0.05,
            translation: 5
        };

        if (input.joykeys.up) {
            moveCamera("up", params);
        } else if (input.joykeys.down) {
            moveCamera("down", params);
        }

        if (input.joykeys.left) {
            moveCamera("left", params);
        } else if (input.joykeys.right) {
            moveCamera("right", params);
        }
    }

    function draw() {
        renderer.render(scene, camera);
    }

    function moveCamera(direction, delta) {
        var collides = false;
        var position = {
            x: camera.position.x,
            z: camera.position.z
        };
        var rotation = camera.rotation.y;
        var offset = 50;

        var moveParamaters = {
            translation: (typeof delta != "undefined") ? delta.translation : cameraHelper.translation,
            rotation: (typeof delta != "undefined") ? delta.rotation : cameraHelper.rotation
        };

        switch (direction) {
            case "up":
                position.x -= Math.sin(-camera.rotation.y) * -moveParamaters.translation;
                position.z -= Math.cos(-camera.rotation.y) * moveParamaters.translation;
                break;
            case "down":
                position.x -= Math.sin(camera.rotation.y) * -moveParamaters.translation;
                position.z += Math.cos(camera.rotation.y) * moveParamaters.translation;
                break;
            case "left":
                rotation += moveParamaters.rotation;
                break;
            case "right":
                rotation -= moveParamaters.rotation;
                break;
        }

        // Current position on the map
        var tx = Math.abs(Math.floor(((cameraHelper.origin.x + (camera.position.x * -1)) / 100)));
        var ty = Math.abs(Math.floor(((cameraHelper.origin.z + (camera.position.z * -1)) / 100)));

        // next position
        var newTx = Math.abs(Math.floor(((cameraHelper.origin.x + (position.x * -1) + (offset)) / 100)));
        var newTy = Math.abs(Math.floor(((cameraHelper.origin.z + (position.z * -1) + (offset)) / 100)));

        // Stay on the map
        if (newTx >= map[0].length) {
            newTx = map[0].length;
        }
        if (newTx < 0) {
            newTx = 0;
        }
        if (newTy >= map.length) {
            newTy = map.length;
        }
        if (newTy < 0) {
            newTy = 0;
        }

        if (map[newTy][newTx] != 1 && !isNaN(map[newTy][newTx])) {
            collides = true;
        } else if (map[newTy][newTx] == "A") {
            // Game is over
            running = false;
        }

        if (collides == false) {
            camera.rotation.y = rotation;
            camera.position.x = position.x;
            camera.position.z = position.z;

            miniMap.update({
                x: newTx,
                y: newTy
            });
        } else {
            document.getElementById("bumpSound").play();
        }
    }

    function mainLoop(time) {
        if (running) {
            update();
            draw();
            window.requestAnimationFrame(mainLoop, renderer.domElement);
        } else {
            endScreen();
        }
    }

    function endScreen() {
        if (levelHelper.isFinished || levelHelper.isMobile) {
            alert("Good job, The game is over\n\nThanks you for playing!");
            document.location.href = "https://plus.google.com/u/0/114532615363095107351/posts";
        } else {
            // Remove all childrens.
            for (var i = 0, l = scene.children.length; i < l; i++) {
                scene.remove(scene.children[i]);
            }
            renderer.clear();
            scene = new THREE.Scene();
            loadLevel(levelHelper.getNext());
            running = true;
        }
    }

    // Level loading
    function loadLevel(level) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "assets/maps/maze3d-" + level + ".json", true);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4) {
                map = JSON.parse(ajax.responseText);
                launch();
            }
        }
        ajax.send(null);
    }

    function repeatTexture(texture, size) {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = size;
        texture.repeat.y = size;
        return texture;
    }

    // Game starting
    function launch() {
        initializeScene();
        mainLoop();
    }
    
    // var myTune = document.getElementById('myTune');
    
    var songArray = [
        "assets/sound/zorba-song.mp3",
        "assets/sound/pink-try.mp3",
        "assets/sound/hello-adele.mp3",
        "assets/sound/soul-bossa-nova.mp3"
    ];
    var songIndex = -1;
    
    var songNext = document.getElementById('song-next');
    songNext.addEventListener('click', playNextSong);
    
    function playNextSong() {
        console.log("song next");
        document.getElementById('myTune').pause(); 
        songIndex++;
        if (songIndex >= songArray.length) {
            songIndex = 0;
        }
        document.getElementById('myTune').setAttribute("src", songArray[songIndex]);
        document.getElementById('myTune').currentTime = 0;
        document.getElementById('myTune').play();
    }

    window.onload = function() {
        initializeEngine();

        var level = 1; // Get parameter
        if (level > 0 || level <= levelHelper.count) {
            levelHelper.current = level;
            levelHelper.next = level + 1;
            loadLevel(level);
        } else {
            levelHelper.current = 1;
            levelHelper.next = 2;
            loadLevel(1);
        }
        
        // var audio = new Audio('assets/sound/zorba-song.mp3');
        // audio.loop = true;
        // audio.play();

    };
    
})();
