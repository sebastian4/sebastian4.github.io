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

        self = this;

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
        this._private.mainTitle.text("start");
        this._private.mainSubtitle.text("start");
        this._private.headingFarLeft.text("<");
        this._private.headingLeft.text("<");
        this._private.headingRight.text(">");
        this._private.headingFarRight.text(">");

        // Events
        this._on({
            'click .main-image': function (ev) {
                var randomInt = self._private.imageIndex;
                while (self._private.imageIndex === randomInt) {
                    randomInt = self._getRandomInt(0,self.options.groupImages[self._private.groupIndex].length);
                }
                self._private.imageIndex = randomInt;
                self._imageGuards();
                self._showImages();
            },
            'click .heading-far-right': function (ev) {
                self._private.imageIndex++;
                self._imageGuards();
                self._showImages();
            },
            'click .heading-right': function (ev) {
                self._private.mainImage.attr("src","jui-showimgs/loading1.gif");
                self._private.groupIndex++;
                self._private.imageIndex = 0;
                self._preloadAtStart();
                self._showImages();
            },
            'click .main-square': function (ev) {
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
            'click .main-subtitle': function (ev) {
                self._saveToFavorites();
            },
            'click .heading-left': function (ev) {
                self._private.mainImage.attr("src","jui-showimgs/loading1.gif");
                self._private.groupIndex--;
                self._private.imageIndex = 0;
                self._preloadAtStart();
                self._showImages();
            },
            'click .heading-far-left': function (ev) {
                self._private.imageIndex--;
                self._imageGuards();
                self._showImages();
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
                    this._private.mainTitle = $("<div class='main-title'> </div>").appendTo(this._private.mainSquare);
                    this._private.mainSubtitle = $("<div class='main-subtitle'> </div>").appendTo(this._private.mainSquare);
                this._private.headingRight = $("<td class='heading-right'> </td>").appendTo(this._private.mainHeading);
                this._private.headingFarRight = $("<td class='heading-far-right'> </td>").appendTo(this._private.mainHeading);
            this._private.mainImage = $("<img class='main-image main-image-additions1'> </img>").appendTo(this._private.mainSubcontainer);

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
        self._private.mainTitle.text(self.options.groupImages[this._private.groupIndex][self._private.imageIndex].name);
        self._private.mainSubtitle.text(self.options.groupNames[this._private.groupIndex]);
        self._private.mainImage.attr("src",self._private.images[self._private.imageIndex].src);
    },
    _imageGuards: function() {
        if (self._private.imageIndex >= self.options.groupImages[this._private.groupIndex].length) {
            self._private.imageIndex = 0;
        }
        if (self._private.imageIndex < 0) {
            self._private.imageIndex = self.options.groupImages[this._private.groupIndex].length - 1;
        }
    },
    _groupGuards: function() {
        if (self._private.groupIndex >= self.options.groupImages.length) {
            self._private.groupIndex = 0;
        }
        if (self._private.groupIndex < 0) {
            self._private.groupIndex = self.options.groupImages.length - 1;
        }
    },
    _saveToFavorites: function() {
        var alreadyThere = false;
        for (var ii = 0; ii < self.options.groupImages[self.options.groupImages.length-1].length; ii++) {
            if (self.options.groupImages[self.options.groupImages.length-1][ii].name === self.options.groupImages[self._private.groupIndex][self._private.imageIndex].name) {
                alreadyThere = true;
            }
        }
        if (alreadyThere === false) {
            self.options.groupImages[self.options.groupImages.length-1].push(self.options.groupImages[self._private.groupIndex][self._private.imageIndex]);
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

    //TODO
    //-populate with more images
    //-load to github

});

