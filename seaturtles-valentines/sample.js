// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(precards){
			console.log('init');

			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			// this.cardsArray = $.merge(cards, cards);
			this.shuffleCards();
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     		this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(){

			console.log('shuffle');

			var arr = []
			while(arr.length < 6){
			    var randomnumber = Math.floor(Math.random()*12);
			    if(arr.indexOf(randomnumber) > -1) continue;
			    arr[arr.length] = randomnumber;
			}
			console.log(arr);

			var cards = [];

			for (x=0; x<arr.length; x++) {
				cards.push(precards[arr[x]]);
			}

			this.cardsArray = $.merge(cards, cards);
			var array = this.cardsArray;

			var counter = array.length, temp, index;
		   	// While there are elements in the array
		   	while (counter > 0) {
	        	// Pick a random index
	        	index = Math.floor(Math.random() * counter);
	        	// Decrease counter by 1
	        	counter--;
	        	// And swap the last element with it
	        	temp = array[counter];
	        	array[counter] = array[index];
	        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="heart22.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var precards = [
		{
			name: "teachers",
			img: "imgs/lindseycarrie.png",
			id: 1,
		},
		{
			name: "michael",
			img: "imgs/michael.png",
			id: 2
		},
		{
			name: "matthew",
			img: "imgs/matthew.png",
			id: 3
		},
		{
			name: "daniel",
			img: "imgs/daniel.png",
			id: 4
		}, 
		{
			name: "landon",
			img: "imgs/landon.png",
			id: 5
		},
		{
			name: "bella",
			img: "imgs/bella.png",
			id: 6
		},
		{
			name: "owen",
			img: "imgs/owen.png",
			id: 7
		},
		{
			name: "bennett",
			img: "imgs/bennett.png",
			id: 8
		},
		{
			name: "thomas",
			img: "imgs/thomas.png",
			id: 9
		},
		{
			name: "gia",
			img: "imgs/gia.png",
			id: 10
		},
		{
			name: "ella",
			img: "imgs/ella.png",
			id: 11
		},
		{
			name: "alex",
			img: "imgs/alex.png",
			id: 12
		},
	];
    
	Memory.init(precards);

})();