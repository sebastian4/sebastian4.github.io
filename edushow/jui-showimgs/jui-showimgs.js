/**
 * showimgs: shows images
 *
 * @author sebastian lopez
 */

$.widget("jui.showimgs", {

    // OPTIONS

    options: {
        name: "default",
        debug: false,
        label: "name",
        defaultlabel: "name",
        mode: "single",
        mainImg: "",
        groupImages: [],
        groupNames: []
    },

    // OPTIONS FUNCTIONS

    _setOption: function( key, value ) {
        this._super( key, value );
    },
    _setOptions: function( options ) {
        this._super( options );
        this.refresh();
    },

    // PRIVATE FUNCTIONS

    _create: function() {
        if (this.options.debug) console.log(this.options.name+" create");

        this.element.addClass( "jui-showimgs" );

        this._private = {
            bigFatRatio: true,
            flashcardMode: true,
            currentWinningBucket: -1,
            containerDiv: null,
            mainImage: null,
            mainTitle: null,
            headingFarLeft: null,
            headingLeft: null,
            headingRight: null,
            headingFarRight: null,
            imageIndex: -1,
            groupIndex: -1,
            images: []
        }

        this._createStaticMarkup();

        this._setAllCaptions();

        this._createDynamicFlashcardMarkup();

        this._setAllEvents();

        this._preloadAtStart();
    },
    _createStaticMarkup: function() {
        if (this.options.debug) console.log(this.options.name+" createMarkup");

        this._private.mainSubcontainer = $("<div class='main-subcontainer'> </div>").appendTo(this.element);
            this._private.mainHeading = $("<table class='main-heading'> </table>").appendTo(this._private.mainSubcontainer);
                this._private.headingFarLeft = $("<td class='heading-far-left'> </td>").appendTo(this._private.mainHeading);
                this._private.headingLeft = $("<td class='heading-left'> </td>").appendTo(this._private.mainHeading);
                this._private.mainSquare = $("<td class='main-square'> </td>").appendTo(this._private.mainHeading);
                    this._private.mainSquareTable = $("<table class='main-square-table'> </table>").appendTo(this._private.mainSquare);
                        this._private.mainSquareTableRow1 = $("<tr class='main-square-table-r1'> </tr>").appendTo(this._private.mainSquareTable);
                            this._private.mainControl1 = $("<td class='main-square-table-r1-ctrl1'> </td>").appendTo(this._private.mainSquareTableRow1);
                            this._private.mainControl2 = $("<td class='main-square-table-r1-ctrl2'> </td>").appendTo(this._private.mainSquareTableRow1);
                            this._private.mainControl3 = $("<td class='main-square-table-r1-ctrl3'> </td>").appendTo(this._private.mainSquareTableRow1);
                        this._private.mainSquareTableRow2 = $("<tr class='main-square-table-r2'> </tr>").appendTo(this._private.mainSquareTable);
                            this._private.mainTitle = $("<td class='main-title' colspan='3'> </td>").appendTo(this._private.mainSquareTableRow2);
                        this._private.mainSquareTableRow3 = $("<tr class='main-square-table-r3'> </tr>").appendTo(this._private.mainSquareTable);
                            this._private.mainSubtitle = $("<td class='main-subtitle' colspan='3'> </td>").appendTo(this._private.mainSquareTableRow3);
                this._private.headingRight = $("<td class='heading-right'> </td>").appendTo(this._private.mainHeading);
                this._private.headingFarRight = $("<td class='heading-far-right'> </td>").appendTo(this._private.mainHeading);
            this._private.mainBody = $("<span class-='main-body''> </span>").appendTo(this._private.mainSubcontainer);

    },
    _createDynamicFlashcardMarkup: function() {

        this._private.flashcardMode = true;

        this._private.mainBody.empty();
            this._private.mainImage = $("<img class='main-image main-image-additions1'> </img>").appendTo(this._private.mainBody);

        this._resetValues();
        this._groupGuards();
        this._imageGuards();

        this._private.mainImage.attr("src",this.options.mainImg);

        this._setAllCaptions();

        this._preloadAtStart();
    },
    _createDynamicQuizMarkup: function() {

        this._private.flashcardMode = false;

        this._private.mainBody.empty();
            this._private.mainTableForImages = $("<table class='main-table-for-images'> </table>").appendTo(this._private.mainBody);
                this._private.mainTableImagesTr1 = $("<tr class='main-table-images-tr1'> </tr>").appendTo(this._private.mainTableForImages);
                    this._private.mainTableImagesTr1Td1 = $("<td class='main-table-images-td'> </td>").appendTo(this._private.mainTableImagesTr1);
                        this._private.tableImageTr1Td1 = $("<img class='table-image-tr1-td1'> </img>").appendTo(this._private.mainTableImagesTr1Td1);
                    this._private.mainTableImagesTr1Td2 = $("<td class='main-table-images-td'> </td>").appendTo(this._private.mainTableImagesTr1);
                        this._private.tableImageTr1Td2 = $("<img class='table-image-tr1-td2'> </img>").appendTo(this._private.mainTableImagesTr1Td2);
                    this._private.mainTableImagesTr1Td3 = $("<td class='main-table-images-td'> </td>").appendTo(this._private.mainTableImagesTr1);
                        this._private.tableImageTr1Td3 = $("<img class='table-image-tr1-td3'> </img>").appendTo(this._private.mainTableImagesTr1Td3);

        this._resetValues();
        this._groupGuards();
        this._imageGuards();

        this._private.tableImageTr1Td1.attr("src",this.options.mainImg);
        this._private.tableImageTr1Td2.attr("src",this.options.mainImg);
        this._private.tableImageTr1Td3.attr("src",this.options.mainImg);

        this._setAllCaptions();

        this._private.mainControl2.text("?");

        this._preloadAtStart();
    },
    _resetValues: function() {
        this._private.imageIndex = -1;
        this._private.groupIndex = -1;
        this._private.images = [];
    },
    _setAllCaptions: function() {

        this._private.mainControl1.text(".");
        this._private.mainControl2.text(".");
        this._private.mainControl3.text(".");
        this._private.mainTitle.text("start");
        this._private.mainSubtitle.text("start");
        this._private.headingFarLeft.text("<");
        this._private.headingLeft.text("<");
        this._private.headingRight.text(">");
        this._private.headingFarRight.text(">");

    },
    _setAllEvents: function() {

        var self = this;

        this._on({
            'click .main-image': function (ev) {
                if (self._private.flashcardMode === true)   self._chooseRandomImage();
            },
            'click .table-image-tr1-td1': function (ev) {
                if (self._private.flashcardMode === false)   self._checkForWinningBucket(0);
            },
            'click .table-image-tr1-td2': function (ev) {
                if (self._private.flashcardMode === false)   self._checkForWinningBucket(1);
            },
            'click .table-image-tr1-td3': function (ev) {
                if (self._private.flashcardMode === false)   self._checkForWinningBucket(2);
            },
            'click .heading-far-right': function (ev) {
                if (self._private.flashcardMode === true)   self._getNextImage();
                else    self._getDifferentQuiz();
            },
            'click .heading-right': function (ev) {
                if (self._private.flashcardMode === true)   self._getNextGroup();
                else    self._getNextQuizGroup();
            },
            'click .main-square-table-r1-ctrl1': function (ev) {
                console.log("change game");
                if (self._private.flashcardMode === true)   self._createDynamicQuizMarkup();
                else    self._createDynamicFlashcardMarkup();
            },
            'click .main-square-table-r1-ctrl2': function (ev) {
                if (self._private.flashcardMode === true)   self._adjustImage();
            },
            'click .main-square-table-r1-ctrl3': function (ev) {
                if (self._private.flashcardMode === true)   self._toggleLanguage();
            },
            'click .heading-left': function (ev) {
                if (self._private.flashcardMode === true)   self._getPreviousGroup();
                else    self._getPreviousQuizGroup();
            },
            'click .heading-far-left': function (ev) {
                if (self._private.flashcardMode === true)   self._getPreviousImage();
                else    self._getDifferentQuiz();
            }
        });

    },
    _preloadAtStart: function() {
        if (this.options.debug) console.log(this.options.name+" loadAtStart");
        this._private.images = [];
        this._groupGuards();
        this._imageGuards();

        for (var counter=0; counter<this.options.groupImages[this._private.groupIndex].length; counter++) {
            this._private.images[counter] = new Image();
            this._private.images[counter].src = this.options.groupImages[this._private.groupIndex][counter].url;
        }
    },
    _showImages: function() {
        var label = (this.options.groupImages[this._private.groupIndex][this._private.imageIndex][this.options.label] != "") 
            ? this.options.groupImages[this._private.groupIndex][this._private.imageIndex][this.options.label] : this.options.groupImages[this._private.groupIndex][this._private.imageIndex][this.options.defaultlabel];
        this._private.mainTitle.text(label);
        this._private.mainSubtitle.text(this.options.groupNames[this._private.groupIndex]);
        this._private.mainImage.attr("src",this._private.images[this._private.imageIndex].src);
    },
    _imageGuards: function() {
        if (this._private.imageIndex >= this.options.groupImages[this._private.groupIndex].length) {
            this._private.imageIndex = 0;
        }
        if (this._private.imageIndex < 0) {
            this._private.imageIndex = this.options.groupImages[this._private.groupIndex].length - 1;
        }
    },
    _groupGuards: function() {
        if (this._private.groupIndex >= this.options.groupImages.length) {
            this._private.groupIndex = 0;
        }
        if (this._private.groupIndex < 0) {
            this._private.groupIndex = this.options.groupImages.length - 1;
        }
    },
    _chooseRandomImage: function() {
        var randomInt = this._private.imageIndex;
        while (this._private.imageIndex === randomInt) {
            randomInt = this._getRandomInt(0,this.options.groupImages[this._private.groupIndex].length);
        }
        this._private.imageIndex = randomInt;
        this._imageGuards();
        this._showImages();
    },
    _getPreviousImage: function() {
        this._private.imageIndex--;
        this._imageGuards();
        this._showImages();
    },
    _getPreviousGroup: function() {
        this._private.mainImage.attr("src","jui-showimgs/loading1.gif");
        this._private.groupIndex--;
        this._private.imageIndex = 0;
        this._groupGuards();
        this._preloadAtStart();
        this._showImages();
    },
    _getNextGroup: function() {
        this._private.mainImage.attr("src","jui-showimgs/loading1.gif");
        this._private.groupIndex++;
        this._private.imageIndex = 0;
        this._groupGuards();
        this._preloadAtStart();
        this._showImages();
    },
    _getNextImage: function() {
        this._private.imageIndex++;
        this._imageGuards();
        this._showImages();
    },
    _getPreviousQuizGroup: function() {
        this._private.mainImage.attr("src","jui-showimgs/loading1.gif");
        this._private.groupIndex--;
        this._private.imageIndex = 0;
        this._groupGuards();
        this._preloadAtStart();
        this._private.mainSubtitle.text(this.options.groupNames[this._private.groupIndex]);
        this._getDifferentQuiz();
        this._private.mainControl2.text("?");
    },
    _getDifferentQuiz: function() {
        var maxSize = this.options.groupImages[this._private.groupIndex].length - 1;
        var buckets = [ -1, -1, -1 ];
        for (var randomIndex=0; randomIndex<3; randomIndex++) {
            var randomInt = -1;
            while (buckets[0] === randomInt || buckets[1] === randomInt || buckets[2] === randomInt) {
                randomInt = this._getRandomInt(0,maxSize);
            }
            buckets[randomIndex] = randomInt;
        }
        //console.log(maxSize+"   "+buckets);
        this._private.currentWinningBucket = this._getRandomInt(0,2);
        var label = (this.options.groupImages[this._private.groupIndex][buckets[this._private.currentWinningBucket]][this.options.label] != "") 
            ? this.options.groupImages[this._private.groupIndex][buckets[this._private.currentWinningBucket]][this.options.label] : this.options.groupImages[this._private.groupIndex][buckets[this._private.currentWinningBucket]][this.options.defaultlabel];
        this._private.mainTitle.text(label);
        this._private.tableImageTr1Td1.attr("src",this._private.images[buckets[0]].src);
        this._private.tableImageTr1Td2.attr("src",this._private.images[buckets[1]].src);
        this._private.tableImageTr1Td3.attr("src",this._private.images[buckets[2]].src);
        this._private.mainControl2.text("?");
    },
    _getNextQuizGroup: function() {
        this._private.mainImage.attr("src","jui-showimgs/loading1.gif");
        this._private.groupIndex++;
        this._private.imageIndex = 0;
        this._groupGuards();
        this._preloadAtStart();
        this._private.mainSubtitle.text(this.options.groupNames[this._private.groupIndex]);
        this._getDifferentQuiz();
        this._private.mainControl2.text("?");
    },
    _checkForWinningBucket: function(num) {
        if (this._private.currentWinningBucket == num) {
            this._private.mainControl2.text("YAY");
        } else {
            this._private.mainControl2.text("no");
        }
    },
    _adjustImage: function() {
        if (this._private.bigFatRatio) {
            this._private.bigFatRatio = false;
            this._private.mainImage.addClass( "main-image-additions2" );
            this._private.mainImage.removeClass( "main-image-additions1" );
        } else {
            this._private.bigFatRatio = true;
            this._private.mainImage.addClass( "main-image-additions1" );
            this._private.mainImage.removeClass( "main-image-additions2" );
        }
    },
    _saveToFavorites: function() {
        var alreadyThere = false;
        for (var ii = 0; ii < this.options.groupImages[this.options.groupImages.length-1].length; ii++) {
            if (this.options.groupImages[this.options.groupImages.length-1][ii][this.options.label] === this.options.groupImages[this._private.groupIndex][this._private.imageIndex][this.options.label]) {
                alreadyThere = true;
            }
        }
        if (alreadyThere === false) {
            this.options.groupImages[this.options.groupImages.length-1].push(this.options.groupImages[this._private.groupIndex][this._private.imageIndex]);
        }
    },
    _toggleLanguage: function() {
        if (this.options.label === "name") {
            this.options.label = "es";
        } else {
            this.options.label = "name";
        }
        this._getNextImage();
    },
    _getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // PUBLIC FUNCTIONS - API

    destroy: function() {
        this.element
            .removeClass( "jui-showimgs" )
            .text( "" );

        // Call the base destroy function.
        $.Widget.prototype.destroy.call( this );
    }

});

