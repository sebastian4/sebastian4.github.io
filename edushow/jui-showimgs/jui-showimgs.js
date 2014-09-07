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

        var self = this;

        this.element.addClass( "jui-showimgs" );

        this._private = {
            bigFatRatio: true,
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

        this._createMarkup();

        this._preloadAtStart();

        this._private.mainImage.attr("src",this.options.mainImg);
        this._private.mainControl1.text(".");
        this._private.mainControl2.text(".");
        this._private.mainControl3.text(".");
        this._private.mainTitle.text("start");
        this._private.mainSubtitle.text("start");
        this._private.headingFarLeft.text("<");
        this._private.headingLeft.text("<");
        this._private.headingRight.text(">");
        this._private.headingFarRight.text(">");

        // Events
        this._on({
            'click .main-image': function (ev) {
                self._chooseRandomImage();
            },
            'click .heading-far-right': function (ev) {
                self._getNextImage();
            },
            'click .heading-right': function (ev) {
                self._getNextGroup();
            },
            'click .main-square-table-r1-ctrl1': function (ev) {
                console.log("change game");
            },
            'click .main-square-table-r1-ctrl2': function (ev) {
                self._adjustImage();
            },
            'click .main-square-table-r1-ctrl3': function (ev) {
                self._saveToFavorites();
            },
            'click .heading-left': function (ev) {
                self._getPreviousGroup();
            },
            'click .heading-far-left': function (ev) {
                self._getPreviousImage();
            }
        });

    },
    _createMarkup: function() {
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
                this._private.mainImage = $("<img class='main-image main-image-additions1'> </img>").appendTo(this._private.mainBody);
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
        this._private.mainTitle.text(this.options.groupImages[this._private.groupIndex][this._private.imageIndex].name);
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
        this._preloadAtStart();
        this._showImages();
    },
    _getNextGroup: function() {
        this._private.mainImage.attr("src","jui-showimgs/loading1.gif");
        this._private.groupIndex++;
        this._private.imageIndex = 0;
        this._preloadAtStart();
        this._showImages();
    },
    _getNextImage: function() {
        this._private.imageIndex++;
        this._imageGuards();
        this._showImages();
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
            if (this.options.groupImages[this.options.groupImages.length-1][ii].name === this.options.groupImages[this._private.groupIndex][this._private.imageIndex].name) {
                alreadyThere = true;
            }
        }
        if (alreadyThere === false) {
            this.options.groupImages[this.options.groupImages.length-1].push(this.options.groupImages[this._private.groupIndex][this._private.imageIndex]);
        }
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

