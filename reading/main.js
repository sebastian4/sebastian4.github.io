$(function () {
////

var voices = ["US English Female", "UK English Female", "UK English Male", "Australian Female"];
voiceIndex = 0;

var colors = ["#FF0000","#F1C40F","#00FF00","#008000","#008000","#FF00FF","#800080","#FFA07A","#00FFFF","#F1948A"];

var imagesSource = 0;
var imageIndex = 0;

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
    onstart: draggableDragStartListener
  });
  
  ////
  
  interact('.draggable')
    .on('doubletap', draggableDoubleTapListener)
    .on('tap', draggableOneTapListener)
    .on('hold', draggableDoubleTapListener);
    
  interact('.voice')
    .on('doubletap', voiceDoubleTapListener)
    .on('tap', voiceOneTapListener)
    .on('hold', resetClones);
    
  interact('.imagezone')
    .on('doubletap', imageDoubleTapListener)
    .on('tap', imageOneTapListener)
    .on('hold', resetClones);
      
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

      dragTargetParent = event.target.parentNode;
    
      //console.log(dragTargetParent.className);
      
      if (dragTargetParent.className.includes("aclone")) {
        dragTargetParent.parentNode.removeChild(dragTargetParent);
      }

  }
  
  function draggableOneTapListener (event) {
      //console.log("draggable one tap");

      dragTargetParent = event.target.parentNode;
    
      // console.log(dragTargetParent.className);
      
      if (dragTargetParent.className.includes("aclone")) {
        var arandom = Math.floor((Math.random() * 10));
        dragTargetParent.style.backgroundColor = colors[arandom];
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
    
    // console.log(cloneString);
    
    responsiveVoice.speak(cloneString, voices[voiceIndex]);
  }

  function voiceDoubleTapListener (event) {
    //console.log( "voice double tap" );
    voiceIndex++;
    if (voiceIndex > 3) {
      voiceIndex = 0;
    }
    responsiveVoice.speak(voices[voiceIndex], voices[voiceIndex]);
    
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
    }
    else if (imagesSource == 1) {
      $("#imagezone").css("background-color","#AEC797");
    }
    else if (imagesSource == 2) {
      $("#imagezone").css("background-color","#DBABC2");
    }

  }
  
  ////
  
  function resetClones (event) {
    //console.log( "reset all clones x" );
    
    removeAllClones();
    
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
    
    return cloneString;
  }

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
          
          imageIndex++;
          if (imageIndex > 6) {
            imageIndex = 0;
          }
        }
        else {
          //console.log("flicker image responses were undefined");
          $("#zone-image").attr("src", "");
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
          
          imageIndex++;
          if (imageIndex > 6) {
            imageIndex = 0;
          }
        }
        else {
          //console.log("google image responses were undefined");
          $("#zone-image").attr("src", "");
        }
      
      });
      
    }

  }
    
////	
});
