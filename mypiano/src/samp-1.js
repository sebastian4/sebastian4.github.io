(function(){

	'use strict';

	console.log('samp-1');

    window.pcache = [];
    window.playingSong = false;
    
    //// events
    
    $("#clear").click(function() {
        $("#output").text('.');
        window.cache = [];
        console.log(window.pcache);
        // clearInterval(window.myTimer);
    });

    $("#happy-bday-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
            
            ['C,0', 3],
            ['C,0', 3],
            ['D,0', 3],
            ['C,0', 3],
            ['F,0', 2],
            ['E,0', 3],
            
        ]);
    });
    
    $("#happy-bday-2").click(function() {
        $("#output").text('');
        window.piano.playSong([
            
            ['C,0', 3],
            ['C,0', 3],
            ['D,0', 3],
            ['C,0', 3],
            ['F,0', 2],
            ['E,0', 1],
            
            ['C,0', 3],
            ['C,0', 3],
            ['D,0', 3],
            ['C,0', 3],
            ['G,0', 2],
            ['F,0', 3],
            
        ]);
    });

    $("#frozen-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
            
            ['G,0', 4],
            ['G,0', 4],
            ['G,0', 4],
            ['D,0', 4],
            ['G,0', 4],
            ['B,0', 4],
            ['A,0', 2],
            ['B,0', 4],
            
        ]);
    });
    
    $("#s-mario-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
            
            ['E,0', 5],
            ['E,0', 4],
            ['E,0', 3],
            ['C,0', 3],
            ['E,0', 3],
            ['G,0', 2],
            ['G,-1', 3],
            
        ]);
    });
    
    $("#twinkle-st-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
    
            ['C,0', 3],
            ['C,0', 3],
            ['G,0', 3],
            ['G,0', 3],
            ['A,0', 3],
            ['A,0', 3],
            ['G,0', 2],

            ['F,0', 3],
            ['F,0', 3],
            ['E,0', 3],
            ['E,0', 3],
            ['D,0', 3],
            ['D,0', 3],
            ['C,0', 2],
    
        ]);
    });
    
    $("#itsy-spid-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
    
            ['G,-1', 4],
            ['C,0', 4],
            ['C,0', 4],
            ['C,0', 4],
            ['D,0', 4],
            ['E,0', 2],
            ['E,0', 2],
            ['E,0', 4],
            ['D,0', 4],
            ['C,0', 4],
            ['D,0', 4],
            ['E,0', 4],
            ['C,0', 4],
    
        ]);
    });

    $("#sunshine-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
            
            ['G,-1', 3],
            ['C,0', 4],
            ['D,0', 4],
            ['E,0', 4],
            ['E,0', 2],
            ['E,0', 3],
            ['D,0', 4],
            ['E,0', 4],
            ['C,0', 4],
            ['C,0', 2],

            ['C,0', 3],
            ['D,0', 4],
            ['E,0', 4],
            ['F,0', 4],
            ['A,0', 2],
            ['A,0', 3],
            ['G,0', 4],
            ['F,0', 4],
            ['E,0', 4],

            // [',0', 4],
            // [',0', 4],
            // [',0', 4],
            // [',0', 4],
            
        ]);
    });


    $("#total-eclip-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
    
            ['G#,0', 4],
            ['G#,0', 4],
            ['G,0', 4],
            ['G#,0', 2],
            ['A#,0', 4],
            ['G,0', 4],
            ['G#,0', 2],
            ['G#,0', 4],
            ['G#,0', 4],
            ['G,0', 4],
            ['G#,0', 4],
            ['A#,0', 4],
            ['G,0', 4],
            ['G,0', 4],
            ['G#,0', 4],
    
        ]);
    });

    $("#wanna-be-1").click(function() {
        $("#output").text('');
        window.piano.playSong([
    
            ['E,0', 4],['E,0', 4],['E,0', 4],
            ['F,0', 4],['F,0', 4],
            ['G,0', 4],['G,0', 4],
            ['G,0', 4],['G,0', 4],
            ['F,0', 4],['F,0', 4],['F,0', 4],
            ['G,0', 2],['E,0', 4],

        ]);
    });
    
    $("#replay-1").click(function() {
        console.log("replay");
        $("#output").text('.');

        console.log(window.pcache);
        window.piano.playSong(window.pcache);
    });

    $("#sampling-1").click(function() {
        $("#output").text('');
        // window.piano.playSong([
        // 
        //     ['C,0', 1],
        //     ['D,0', 1],
        //     ['E,0', 1],
        //     ['F,0', 1],
        //     ['G,0', 1],
        //     ['A,0', 4],
        //     ['B,0', 4],
        // 
        // ]);
        
        // window.piano.playKey({keyCode:"73"});
        // window.piano.playKey({keyCode:"74"});
        // window.piano.playKey({keyCode:"75"});
        // window.piano.playKey({keyCode:"76"});
        // window.piano.playKey({keyCode:"77"});
        // window.piano.playKey({keyCode:"78"});
        
        // window.myTimer = setInterval(myTimerFunc, 2000);
        // var ii = 70;
        // function myTimerFunc() {
        //     window.piano.playKey({keyCode:""+ii});
        //     ii++;
        // }

    });

    // $("#sample").click(function() {
    //     window.piano.playSong([
    // 
    //         [',0', 4],
    //         [',0', 4],
    //         [',0', 4],
    //         [',0', 4],
    //         [',0', 4],
    //         [',0', 4],
    //         [',0', 4],
    //         [',0', 4],
    // 
    //     ]);
    // });
    
    // $("#song-1").click(function() {
    //     window.piano.playSong([
    // 
    //         ['E,0', 8],
    //         ['D,0', 8],
    //         ['C,0', 2],
    //         ['C,0', 8],
    //         ['D,0', 8],
    //         ['C,0', 8],
    //         ['E,0', 8],
    //         ['D,0', 1],
    // 
    //         ['C,0', 8],
    //         ['D,0', 8],
    //         ['E,0', 2],
    //         ['A,0', 8],
    //         ['G,0', 8],
    //         ['E,0', 8],
    //         ['C,0', 8],
    //         ['D,0', 1],
    //         ['A,0', 8],
    //         ['B,0', 8],
    //         ['C,1', 2],
    //         ['B,0', 8],
    //         ['C,1', 8],
    //         ['D,1', 8],
    //         ['C,1', 8],
    //         ['A,0', 1],
    //         ['G,0', 8],
    //         ['A,0', 8],
    //         ['B,0', 2],
    //         ['C,1', 8],
    //         ['B,0', 8],
    //         ['A,0', 8],
    //         ['G,0', 8],
    //         ['A,0', 1]
    // 
    //     ]);
    // });
    
})();
