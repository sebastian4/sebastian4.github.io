/**
 * showimgs: shows images
 *
 * @author sebastian lopez
 */

$.widget("jui.allimgs", {

    // OPTIONS

    options: {
        name: "default",
        debug: false,
        label: "name",
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

        this.mainSubcontainer = $("<div class='jui-allimgs-div-all'> <h2>All</h2> <div><img src='"+this.options.mainImg+"' height='60' width='60'></div> </div>").appendTo(this.element);

        this.divGroups = [];

        var count = 0;

        for (var groupIndex in this.options.groupImages) {

          if (this.options.debug) console.log(this.options.groupNames[groupIndex]+":");

            this.divGroups[groupIndex] = $("<div class='jui-allimgs-div-group'> <h3>"+this.options.groupNames[groupIndex]+"</h3> </div>").appendTo(this.mainSubcontainer);

            for (var imageIndex in this.options.groupImages[groupIndex]) {

              if (this.options.debug) console.log(this.options.groupImages[groupIndex][imageIndex].name);

              $('<span class="jui-allimgs-span-img"> <img src="'+this.options.groupImages[groupIndex][imageIndex].url+'" height="60" width="60"> <span>'+this.options.groupImages[groupIndex][imageIndex].name+'</span> / <span>'+this.options.groupImages[groupIndex][imageIndex].es+'</span> </span>')
                .appendTo(this.divGroups[groupIndex]);

              count++;
            }
        }

        $("<div> count = "+count+"</div>").appendTo(this.mainSubcontainer);

        if (this.options.debug) console.log("count = "+count);
    },

    // PUBLIC FUNCTIONS - API

    destroy: function() {
        this.element
            .removeClass( "jui-allimgs" )
            .text( "" );

        // Call the base destroy function.
        $.Widget.prototype.destroy.call( this );
    }

});
