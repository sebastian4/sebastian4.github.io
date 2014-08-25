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
        groupImages: []
        //images: []
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
        this._private.headingFarLeft.text("<<");
        this._private.headingLeft.text("<");
        this._private.headingRight.text(">");
        this._private.headingFarRight.text(">>");

        // Events
        this._on({
            'click .main-image': function (ev) {
                self._private.imageIndex++;
                self._imageGuards();
                self._showImages();
            },
            'click .heading-far-right': function (ev) {
                self._private.imageIndex++;
                self._imageGuards();
                self._showImages();
            },
            'click .heading-right': function (ev) {
                self._private.groupIndex++;
                self._private.imageIndex = 0;
                self._preloadAtStart();
                self._showImages();
            },
            'click .main-title': function (ev) {
                self._private.imageIndex = self._getRandomInt(0,self.options.groupImages[self._private.groupIndex].length);
                self._imageGuards();
                self._showImages();
            },
            'click .heading-left': function (ev) {
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
                this._private.mainTitle = $("<td class='main-title'> </td>").appendTo(this._private.mainHeading);
                this._private.headingRight = $("<td class='heading-right'> </td>").appendTo(this._private.mainHeading);
                this._private.headingFarRight = $("<td class='heading-far-right'> </td>").appendTo(this._private.mainHeading);
            this._private.mainImage = $("<img class='main-image'> </img>").appendTo(this._private.mainSubcontainer);

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

