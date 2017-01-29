$(function () {
////

var voices = ["US English Female", "UK English Female", "UK English Male", "Australian Female", "Spanish Female"];
voiceIndex = 0;

var colors = ["#FF0000","#F1C40F","#00FF00","#008000","#008000","#FF00FF","#800080","#FFA07A","#00FFFF","#F1948A"];

var imagesSource = 0;
var imageIndex = 0;

var messages = [ "messages" ];

////

  interact('.draggable')  
  .draggable({
    // enable inertial throwing
    inertia: true,
    // snapping
    snap: {
      targets: [
        interact.createSnapGrid({ x: 10, y: 10 })
      ],
      range: Infinity,
      relativePoints: [ { x: 0, y: 0 } ]
    },
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,
    // call this function on every dragmove event
    onmove: draggableDragMoveListener,
    onstart: draggableDragStartListener,
    onend: draggableDragDropListener
  });
  
  ////
  
  interact('.draggable')
    .on('doubletap', draggableDoubleTapListener)
    .on('tap', draggableOneTapListener)
    .on('hold', draggableDoubleTapListener);
    
  interact('.voice')
    .on('doubletap', voiceDoubleTapListener)
    .on('tap', voiceOneTapListener)
    .on('hold', voiceDoubleTapListener);
    
  interact('.imagezone')
    .on('doubletap', imageDoubleTapListener)
    .on('tap', imageOneTapListener)
    .on('hold', clearImageArea);
    
  interact('#reset')
    .on('tap', resetClones);
      
  interact('#info')
    .on('tap', showInfo);
    
  // #messagezone
  // #box-space
  
  ////
  
  function draggableDragStartListener (event) {
    //console.log("drag start");
    
    if (!event.target.dragOrigin) {
        // console.log("cloning");
        var rect = event.target.getBoundingClientRect();
        // console.log(rect.top, rect.right, rect.bottom, rect.left);
        var clone = event.target.cloneNode(true);
        clone.dragOrigin = event.target;
        event.interaction.element = clone;
        event.interaction.dragging = false;
        dragTarget = clone;
        document.body.appendChild(clone);
        dragTarget.style.position = "absolute";
        dragTarget.style.top=rect.top+"px";
        dragTarget.style.left=rect.left+"px";
        dragTarget.className += " aclone";
        // console.log('clone created');
    } else {
        // console.log("dragging clone");
        dragTarget = event.target;
    }
  }
  
  function draggableDragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
  
  ////
  
  function draggableDoubleTapListener (event) {
      //console.log("draggable double tap");

      var dragTargetParent = event.target.parentNode;
    
      //console.log(dragTargetParent.className);
      
      if (dragTargetParent.className.includes("aclone")) {
        dragTargetParent.parentNode.removeChild(dragTargetParent);
        setMessage("erased letter");
      }

  }
  
  function draggableOneTapListener (event) {
      //console.log("draggable one tap");

      var dragTargetParent = event.target.parentNode;
    
      // console.log(dragTargetParent.className);
      
      if (dragTargetParent.className.includes("aclone")) {
        var arandom = Math.floor((Math.random() * 10));
        dragTargetParent.style.backgroundColor = colors[arandom];
      }

  }

  function draggableDragDropListener (event) {
    //console.log("draggable drop");
    
    var eventHeight = event.clientY;
    var windowHeight = $(window).height();
    
    // console.log(eventHeight);
    // console.log(windowHeight);
    
    if ((windowHeight/5) > eventHeight) {
      // console.log("in the erase zone so erase");
      
      var dragTarget = event.target;
      
      // console.log(dragTarget.className);
      
      if (dragTarget.className.includes("aclone")) {
        dragTarget.parentNode.removeChild(dragTarget);
        setMessage("erased letter");
      }
      
    }
    
  }

  ////
  
  // enable draggables to be dropped into this
  interact('.dropzone').dropzone({  
    // Require a 50% element overlap for a drop to be possible
    overlap: 0.50,

    // listen for drop related events:

    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target');
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target');
    },
    ondrop: function (event) {
      // event.relatedTarget.textContent = 'Dropped';
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    }
  });
  
  ////

  function voiceOneTapListener (event) {
    //console.log( "voice one tap" );
    
    var cloneString = findCloneString();
    
    if (cloneString == "") {
      return;
    }
    
    // console.log(cloneString);
    setMessage("voice start");
    responsiveVoice.speak(cloneString, voices[voiceIndex]);
    setMessage("voice stop");
  }

  function voiceDoubleTapListener (event) {
    //console.log( "voice double tap" );
    voiceIndex++;
    if (voiceIndex > 4) {
      voiceIndex = 0;
    }
    responsiveVoice.speak(voices[voiceIndex], voices[voiceIndex]);
    setMessage(voices[voiceIndex]);
  }
  
  ////

  function imageOneTapListener (event) {
    //console.log( "image one tap" );
    
    var cloneString = findCloneString();
    
    // console.log(cloneString);

    getImages(cloneString);
  }

  function imageDoubleTapListener (event) {
    //console.log( "image double tap" );

    imagesSource++;
    if (imagesSource > 2) {
      imagesSource = 0;
    }
    
    if (imagesSource == 0) {
      $("#imagezone").css("background-color","#AEC6CF");
      setMessage("set no imgs");
    }
    else if (imagesSource == 1) {
      $("#imagezone").css("background-color","#AEC797");
      setMessage("set flickr imgs");
    }
    else if (imagesSource == 2) {
      $("#imagezone").css("background-color","#DBABC2");
      setMessage("set google imgs");
    }

    $("#zone-image").attr("src", "");
  }
  
  function clearImageArea (event) {
    $("#zone-image").attr("src", "");
  }
  
  ////
  
  function resetClones (event) {
    //console.log( "reset all clones x" );
    
    removeAllClones();
    $("#zone-image").attr("src", "");
    
    setMessage("reset board");
  }

  ////
  
  function removeAllClones() {
    
    $( ".aclone" ).each(function( index ) {
      $(this).remove();
    });
    
  }

  function findCloneString() {
    
    var allClones = [];
    
    $( ".aclone" ).each(function( index ) {
      
      var letter = $( this ).text().replace(/[\n ]/g,'');
      // console.log( index + "=" + letter );
      
      var position = $( this ).offset();
      // console.log(position);
      
      allClones[Math.trunc(position.left)] = letter;
    });
    
    var cloneString = "";
    for (x in allClones) {
      if (typeof(allClones[x]) != "undefined") {
        cloneString = cloneString.concat(allClones[x]);
      }
    }
    
    cloneString = cloneString.replace("_"," ");
    
    //console.log(cloneString);
    
    return cloneString;
  }
  
  ////
  
  function setMessage(message) {
    messages.push(message);
    if (messages.length > 3) {
      messages.splice(0,1);
    }
    $(".messaging").text(messages.join(". ")+'.');
  }
  
  ////
  
  function showInfo (event) {
    //console.log( "show info" );
    
    var message = "Manual\n" +
                  "Main objective is to drag and drop the letters in the drop zone (zone in gray). " +
                  "Once some letters are in the drop zone the user can tap (or click) on the microphone icon to hear the word, " +
                  "or tap (or click) on the image zone (zone in bluish gray) to see a related image show up. " +
                  "To remove a letter the user should either double tap (or double click) a letter or press and hold a letter. " +
                  "To reset and remove all the letters the user should either press and hold the microphone icon or press and " +
                  "hold the image zone. To change a letter to any color the user should tap (or click) that letter, this only works " +
                  "for cloned letters so the original letters will always stay blue. " +
                  "As a voice default the US female voice is chosen and no image search service is chosen. " +
                  "There are US english and british versions and also a spanish voice for spanish words. " +
                  "To change the voice the user should double tap (or double click) the microphone icon and the voice chosen will " +
                  "announce itself. To change the image search service, the user should double tap (or double click) the image zone, " +
                  "and the image zone will change background color to show that its using another image search service. " +
                  "The bluish gray background means no service, the greenish gray background means flickr service and " +
                  "the redish gray background means google service. Google service is the best image search service but it allows " +
                  "only about 50 searches per day for all the users so the likelyhood that it might work is little. " +
                  "So flicker is the most reliable image service for now. " +
                  "The app goes through the best 8 images from flicker (or google image) so that means keep tapping the image zone " +
                  "if an image does not seem to be related to the word. Flicker has that problem because flickr users tag the images " +
                  "with many words. " +
                  "One quick warning for the images: I have no power for what images are returned from google and flickr, " +
                  "the majority of them are clean but that is why the default for images is having no image service, " +
                  "in the case of kids are learning by themselves. So it is best to learn with a supervising adult. " +
                  "If something seems to be failing then the best thing to do is to just reload the page. " +
                  "To invoke this info popup press and hold on the I letter (for Info). " +
                  "\nEnjoy!";
    alert(message);
    setMessage("info invoked");
  }

  ////
  
  function getImages(word) {
    // console.log("getImages "+word);
    
    if (word == "") {
      return;
    }
    
    if (imagesSource == 0) {
      $("#zone-image").attr("src", "");
    }
    else if (imagesSource == 1) {
      
      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      {
        tags: word,
        tagmode: "any",
        format: "json"
      },
      function(data) {
        //console.log("success");

        if (typeof(data)!="undefined" && typeof(data.items)!="undefined") {
          
          var link = data.items[imageIndex].media.m;
          $("#zone-image").attr("src", link);
          
          setMessage("flickr image "+imageIndex);
          
          imageIndex++;
          if (imageIndex > 8) {
            imageIndex = 0;
          }
        }
        else {
          //console.log("flicker image responses were undefined");
          $("#zone-image").attr("src", "");
          setMessage("flickr no response");
        }
        
      });
      
    }
    else if (imagesSource == 2) {
      
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "https://www.googleapis.com/customsearch/v1",
        data: {
          key: "AIzaSyCzb6SI_JRrp6xLLYV617Ary6n59h36ros",
          cx: "004286675445984025592:ypgpkv9fjd4",
          filter: "1",
          searchType: "image",
          //imgSize: "small",
          q: word
        }
      }).done(function(data) {
      
        // console.log("success");
        
        if (typeof(data)!="undefined" && typeof(data.items)!="undefined") {
          
          var googleResults = data.items;
          var link = googleResults[imageIndex].link;
          //console.log(link);
          
          $("#zone-image").attr("src", link);
          
          setMessage("google image "+imageIndex);
          
          imageIndex++;
          if (imageIndex > 8) {
            imageIndex = 0;
          }
        }
        else {
          //console.log("google image responses were undefined");
          $("#zone-image").attr("src", "");
          setMessage("google no response");
        }
      
      });
      
    }

  }
    
////	
});
