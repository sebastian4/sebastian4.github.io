$(function () {
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
    onmove: dragMoveListener,
    onstart: dragStartListener
  });
  
  interact('.draggable')
    .on('doubletap', doubleTapListener);
  
  function dragStartListener (event) {
    // console.log("drag start");
    
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
  
  function doubleTapListener (event) {
      console.log("double tap");

      dragTargetParent = event.target.parentNode;
    //   dragTargetParent.style.backgroundColor="gray";
    
      console.log(dragTargetParent.className);
      
      if (dragTargetParent.className.includes("aclone")) {
        dragTargetParent.parentNode.removeChild(dragTargetParent);
      }

  }

  function dragMoveListener (event) {
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

$( "#box-voice" ).click(function() {
  // console.log( "box-voice .click() called" );
  
  var cloneString = findCloneString();
  
  // console.log(cloneString);
  
  responsiveVoice.speak(cloneString);
});

$( "#imagezone" ).click(function() {
  // console.log( "imagezone .click() called" );
  
  var cloneString = findCloneString();
  
  // console.log(cloneString);

  getImages(cloneString);
});

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

    var googleResults = data.items;
    var link = googleResults[0].link;
    // console.log(link);
    
    $("#zone-image").attr("src", link);

  });
  
}
    
////	
});
