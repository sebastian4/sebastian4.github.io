(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesGameState = require('states/GameState');

var _statesGameState2 = _interopRequireDefault(_statesGameState);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);

		this.state.add('GameState', _statesGameState2['default'], false);
		this.state.start('GameState');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/GameState":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonNext = (function (_Phaser$Sprite) {
    _inherits(ButtonNext, _Phaser$Sprite);

    function ButtonNext(game, x, y, key, callback, context) {
        _classCallCheck(this, ButtonNext);

        _get(Object.getPrototypeOf(ButtonNext.prototype), "constructor", this).call(this, game, x, y, key);
        // width, height

        var button = game.add.button(84, 90, key, callback, context, 0, 1, 2, 3);
        button.anchor.x = 0.5;
        button.anchor.y = 0.5;
        button.scale.setTo(0.6, 0.6);

        var text = game.add.text(-60, -25, "NEXT", { font: "48px Arial", fill: "#ff22ff" });
        button.addChild(text);
        button.inputEnabled = true;
    }

    return ButtonNext;
})(Phaser.Sprite);

exports["default"] = ButtonNext;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Placing = (function (_Phaser$Sprite) {
  _inherits(Placing, _Phaser$Sprite);

  function Placing(game, x, y) {
    _classCallCheck(this, Placing);

    _get(Object.getPrototypeOf(Placing.prototype), "constructor", this).call(this, game, x, y);

    this.center = { x: x, y: y };

    this.game = game;

    this.colors = ["#0000a2", "#8b0000", "#006400"];

    this.places = [[], [], []];

    this.placesScreenInit = [this.center.x * 0.58, this.center.x * 0.94, this.center.x * 1.30];

    this.placesScreen = [this.placesScreenInit[0], this.placesScreenInit[1], this.placesScreenInit[2]];

    this.placesTexts = [];

    this.gone = [false, false, false];
  }

  _createClass(Placing, [{
    key: "write",
    value: function write(player, pos) {
      if (this.gone[player] == false) {
        console.log("write: pl=" + player + " pos=" + pos);
        var text = this.game.add.text(this.placesScreen[pos], this.center.y * 1.05, "I", {
          font: "bold 60px Impact",
          fill: this.colors[player]
        });
        this.placesTexts.push(text);
        this.gone[player] = true;
        this.placesScreen[pos] += 20;
        this.places[pos].push(player);
        console.log(this.places);
      }
    }
  }, {
    key: "getPlaces",
    value: function getPlaces() {
      return this.places;
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var index in this.placesTexts) {
        this.placesTexts[index].destroy();
      }
      this.places = [[], [], []];
      this.placesScreen = [this.placesScreenInit[0], this.placesScreenInit[1], this.placesScreenInit[2]];
      this.placesTexts = [];
      this.gone = [false, false, false];
    }
  }]);

  return Placing;
})(Phaser.Sprite);

exports["default"] = Placing;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){

////////

// configs

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.configAdd11 = {
	id: 11,
	name: "addition",
	timeup: 7000,
	quizSize: 180,
	choiceSize: 90,
	moveMainBy: 0,
	timein: 0,
	pre: function pre(game, center) {},
	before: function before(game, center) {},
	calculator: function calculator() {
		var first = Math.floor(Math.random() * (1 + 9)) + 0;
		var second = Math.floor(Math.random() * (1 + 5)) + 0;
		var result = first + second;
		var quizzer = first.toString() + " + " + second.toString();
		return [result, result, quizzer];
	},
	getRandom: function getRandom(number) {
		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
		if (number < 3 || operation == 0) {
			return number + variant;
		} else {
			return number - variant;
		}
	}
};

window.configDel12 = {
	id: 12,
	name: "subtraction",
	timeup: 7000,
	quizSize: 180,
	choiceSize: 90,
	moveMainBy: 0,
	timein: 0,
	pre: function pre(game, center) {},
	before: function before(game, center) {},
	calculator: function calculator() {
		var first = Math.floor(Math.random() * (1 + 10)) + 4;
		var second = Math.floor(Math.random() * (1 + 5)) + 0;
		var result = first - second;
		var quizzer = first.toString() + " - " + second.toString();
		return [result, result, quizzer];
	},
	getRandom: function getRandom(number) {
		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
		if (number < 3 || operation == 0) {
			return number + variant;
		} else {
			return number - variant;
		}
	}
};

window.configMul13 = {
	id: 13,
	name: "multiplication",
	timeup: 9000,
	quizSize: 180,
	choiceSize: 90,
	moveMainBy: 0,
	timein: 0,
	pre: function pre(game, center) {},
	before: function before(game, center) {},
	calculator: function calculator() {
		var first = Math.floor(Math.random() * (1 + 5)) + 1;
		var second = Math.floor(Math.random() * (1 + 4)) + 0;
		var result = first * second;
		var quizzer = first.toString() + " X " + second.toString();
		return [result, result, quizzer];
	},
	getRandom: function getRandom(number) {
		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
		if (number < 3 || operation == 0) {
			return number + variant;
		} else {
			return number - variant;
		}
	}
};

// ..

window.configMem16 = {
	id: 16,
	name: "memorize numbers",
	timeup: 9000,
	quizSize: 180,
	choiceSize: 74,
	moveMainBy: -50,
	timein: 3000,
	pre: function pre(game, center) {},
	mainText: null,
	before: function before(game, center) {
		this.result = this.numcalc();
		var mainText = game.add.text(center.x * 0.74 + this.moveMainBy, center.y * 0.20, this.result, { font: this.quizSize + "px", fill: "#ffffff" });
		window.setTimeout(function () {
			mainText.destroy();
		}, this.timein);
	},
	nums: 5,
	numcalc: function numcalc() {
		var response = "";
		for (var ii = 0; ii < this.nums; ii++) {
			var anum = Math.floor(Math.random() * (1 + 9)) + 0;
			response += anum;
		}
		return response;
	},
	result: -1,
	calculator: function calculator() {
		var quizzer = "which?";
		return [this.result, this.result, quizzer];
	},
	getRandom: function getRandom(number) {
		return this.numcalc();
	}
};

window.configMem17 = {
	id: 17,
	name: "memorize numbers backwards",
	timeup: 9000,
	quizSize: 180,
	choiceSize: 74,
	moveMainBy: -50,
	timein: 3000,
	pre: function pre(game, center) {},
	mainText: null,
	before: function before(game, center) {
		this.result = this.numcalc();
		var reversed = this.result.split("").reverse().join("");
		var mainText = game.add.text(center.x * 0.74 + this.moveMainBy, center.y * 0.20, reversed, { font: this.quizSize + "px", fill: "#ffffff" });
		window.setTimeout(function () {
			mainText.destroy();
		}, this.timein);
	},
	nums: 4,
	numcalc: function numcalc() {
		var response = "";
		for (var ii = 0; ii < this.nums; ii++) {
			var anum = Math.floor(Math.random() * (1 + 9)) + 0;
			response += anum;
		}
		return response;
	},
	result: -1,
	calculator: function calculator() {
		var quizzer = "reversed?";
		return [this.result, this.result, quizzer];
	},
	getRandom: function getRandom(number) {
		return this.numcalc();
	}
};

// ..

window.configRhy21 = {
	id: 21,
	name: "rhymes",
	timeup: 8000,
	quizSize: 84,
	choiceSize: 56,
	moveMainBy: -170,
	timein: 0,
	pre: function pre(game, center) {},
	before: function before(game, center) {},
	calculator: function calculator() {
		var rhymes = [["ball", "wall"], ["net", "bet"], ["moon", "toon"], ["soon", "moon"], ["rice", "nice"], ["kite", "lite"], ["rough", "cough"], ["see", "knee"], ["neat", "seat"], ["dry", "fry"]];
		var rhymeIndex = Math.floor(Math.random() * rhymes.length) + 0;
		var rhymePair = rhymes[rhymeIndex];
		var result = rhymePair[1];
		var quizzer = "rhymes with " + rhymePair[0];
		return [rhymeIndex, result, quizzer];
	},
	getRandom: function getRandom(number) {
		var rhymes = ["joke", "jack", "knot", "what", "mac", "rune", "tin", "chip", "fin", "flan", "dune", "man"];
		var rhymeIndex = Math.floor(Math.random() * rhymes.length) + 0;
		var rhymed = rhymes[rhymeIndex];
		return rhymed;
	}
};

// --

window.configMem31 = {
	id: 31,
	name: "memory 31",
	timeup: 6000,
	quizSize: 74,
	choiceSize: 52,
	moveMainBy: -300,
	timein: 0,
	pre: function pre(game, center) {
		var sprite1 = game.add.sprite(center.x * 0.20, center.y * 0.11, 'bookopen');
		sprite1.scale.setTo(center.x * 0.0067, center.y * 0.0082);
		var style = { font: '50px Arial', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 1200 };
		var text1 = game.add.text(center.x * 0.28, center.y * 0.24, this.message, style);
		window.setTimeout(function () {
			text1.destroy();sprite1.destroy();
		}, 10000);
	},
	before: function before(game, center) {
		// game.add.text(100, 20, "papa papa papa", {font: "40px Arial", fill: "#000000"});
	},
	message: 'Nectar, in botany, is a liquid made by the flowers of plants. It is very sweet because it has a lot of sugar in it. Plants make nectar to attract pollinating animals. It is made in glands called nectaries. The Nectaries are usually at the bottom of the flower. This means the animal trying to get the nectar have to touch the parts of the plant that are used for reproduction. By doing this, the animal getting the nectar helps the plants reproduce. Some plants make nectar outside the flower. These plants do it to attract predatory insects. These insects will eat both the nectar and any plant-eating insects found near the plant.',
	questions: [["what makes nectar", "plants", "bees", "fleas"], ["why is nectar sweet", "sugar", "salt", "bees"], ["are all nectars inside the \nflower", "no", "yes", "yes"], ["where are the nectaries in \nthe flower", "bottom", "top", "air"], ["what does nectar attract", "animals", "babies", "babies"], ["what are nectaries", "glands", "animals", "bees"], ["is nectar a liquid", "yes", "no", "no"]],
	wackyAnswers: ["jack", "joe", "what", "fire", "water", "apple", "cheese", "men"],
	calculator: function calculator() {
		console.log(this.questions);
		var questionIndex = Math.floor(Math.random() * this.questions.length) + 0;
		var questionPair = this.questions[questionIndex];
		var result = questionPair[1];
		var quizzer = questionPair[0] + " ?";
		return [questionIndex, result, quizzer];
	},
	getRandom: function getRandom(number) {
		var answered = "";
		var answerIndex = Math.floor(Math.random() * (1 + 4)) + 2;
		if (answerIndex < 4) {
			answered = this.questions[number][answerIndex];
		} else {
			var wackyAnswerIndex = Math.floor(Math.random() * this.wackyAnswers.length) + 0;
			answered = this.wackyAnswers[wackyAnswerIndex];
		}
		return answered;
	}
};

// --

window.configImg41 = {
	id: 41,
	name: "needs work",
	timeup: 7000,
	quizSize: 90,
	choiceSize: 60,
	moveMainBy: -170,
	timein: 0,
	gamey: null,
	dataURItoBlob: function dataURItoBlob(dataURI) {
		// convert base64/URLEncoded data component to raw binary data held in a string
		var byteString;
		if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);

		// separate out the mime component
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

		// write the bytes of the string to a typed array
		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		return new Blob([ia], { type: mimeString });
	},
	dataURLtoFile: function dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','),
		    mime = arr[0].match(/:(.*?);/)[1],
		    bstr = atob(arr[1]),
		    n = bstr.length,
		    u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, { type: mime });
	},
	urltoFile: function urltoFile(url, filename, mimeType) {
		mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
		return fetch(url).then(function (res) {
			return res.arrayBuffer();
		}).then(function (buf) {
			return new File([buf], filename, { type: mimeType });
		});
	},
	pre: function pre(game, center) {
		console.log("pre");
		this.gamey = game;
		var loader = new Phaser.Loader(game);
		loader.spritesheet('panda', 'extras/animalSheet2009.jpg', 172, 160);
		loader.onLoadComplete.addOnce(this.onLoaded);
		loader.start();
	},
	before: function before(game, center) {},
	onLoaded: function onLoaded() {
		console.log('everything is loaded and ready to be used');
	},
	calculator: function calculator() {
		console.log('calculator');
		var sprite1 = this.gamey.add.sprite(500, 260, 'panda');
		sprite1.frame = 7;
		// sprite1.scale.setTo(0.5,0.5);
		var rhymes = [["ball", "wall"], ["net", "bet"], ["moon", "toon"], ["soon", "moon"], ["rough", "cough"], ["see", "knee"], ["dry", "fry"]];
		var rhymeIndex = Math.floor(Math.random() * rhymes.length) + 0;
		var rhymePair = rhymes[rhymeIndex];
		var result = rhymePair[1];
		var quizzer = "rhymes with " + rhymePair[0];
		return [rhymeIndex, result, quizzer];
	},
	getRandom: function getRandom(number) {
		var rhymes = ["joke", "jack", "knot", "what", "mac", "tin", "chip", "fin", "flan", "dune"];
		var rhymeIndex = Math.floor(Math.random() * rhymes.length) + 0;
		var rhymed = rhymes[rhymeIndex];
		return rhymed;
	}
};

//// default

window.config = window.configAdd11;

////////

var QuizType = (function (_Phaser$Sprite) {
	_inherits(QuizType, _Phaser$Sprite);

	function QuizType(game, x, y, key, context, center) {
		_classCallCheck(this, QuizType);

		_get(Object.getPrototypeOf(QuizType.prototype), "constructor", this).call(this, game, x, y, key);
		// width, height

		// default
		window.config = window.configAdd11;

		this.xposOrig = 26;
		this.xpos = this.xposOrig;
		this.yposOrig = 210;
		this.ypos = this.yposOrig;

		this.center = center;

		var text = null;

		// Add
		var button11 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configAdd11;
		}, context, 0, 1, 2, 3);
		button11.anchor.x = 0.5;
		button11.anchor.y = 0.5;
		button11.scale.setTo(0.14, 0.14);
		text = game.add.text(-60, -100, "+", { font: "200px Arial", fill: "#000000" });
		button11.addChild(text);
		this.xpos += 38;

		// Del
		var button12 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configDel12;
		}, context, 0, 1, 2, 3);
		button12.anchor.x = 0.5;
		button12.anchor.y = 0.5;
		button12.scale.setTo(0.14, 0.14);
		text = game.add.text(-30, -120, "-", { font: "200px Arial", fill: "#000000" });
		button12.addChild(text);
		this.xpos += 38;

		// Mul
		var button13 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configMul13;
		}, context, 0, 1, 2, 3);
		button13.anchor.x = 0.5;
		button13.anchor.y = 0.5;
		button13.scale.setTo(0.14, 0.14);
		text = game.add.text(-50, -120, "x", { font: "200px Arial", fill: "#000000" });
		button13.addChild(text);
		this.xpos += 38;

		// Rhy
		var button21 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configRhy21;
		}, context, 0, 1, 2, 3);
		button21.anchor.x = 0.5;
		button21.anchor.y = 0.5;
		button21.scale.setTo(0.14, 0.14);
		text = game.add.text(-40, -120, "r", { font: "200px Arial", fill: "#000000" });
		button21.addChild(text);
		this.xpos = this.xposOrig;
		this.ypos += 40;

		// Mem
		var button16 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configMem16;
		}, context, 0, 1, 2, 3);
		button16.anchor.x = 0.5;
		button16.anchor.y = 0.5;
		button16.scale.setTo(0.14, 0.14);
		text = game.add.text(-80, -120, "m", { font: "200px Arial", fill: "#000000" });
		button16.addChild(text);
		this.xpos += 38;

		var button17 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configMem17;
		}, context, 0, 1, 2, 3);
		button17.anchor.x = 0.5;
		button17.anchor.y = 0.5;
		button17.scale.setTo(0.14, 0.14);
		text = game.add.text(-80, -120, "m", { font: "200px Arial", fill: "#000000" });
		button17.addChild(text);
		this.xpos += 38;

		//

		// Mem
		var button31 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configMem31;window.config.pre(game, this.center);
		}, context, 0, 1, 2, 3);
		button31.anchor.x = 0.5;
		button31.anchor.y = 0.5;
		button31.scale.setTo(0.14, 0.14);
		text = game.add.text(-80, -120, "m", { font: "200px Arial", fill: "#000000" });
		button31.addChild(text);
		this.xpos += 38;

		// Tmp
		var button41 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configImg41;window.config.pre(game, this.center);
		}, context, 0, 1, 2, 3);
		button41.anchor.x = 0.5;
		button41.anchor.y = 0.5;
		button41.scale.setTo(0.14, 0.14);
		text = game.add.text(-30, -120, "t", { font: "200px Arial", fill: "#000000" });
		button41.addChild(text);
		this.xpos += 38;
	}

	return QuizType;
})(Phaser.Sprite);

exports["default"] = QuizType;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quiz = (function (_Phaser$Sprite) {
  _inherits(Quiz, _Phaser$Sprite);

  function Quiz(game, x, y, key1, key2) {
    _classCallCheck(this, Quiz);

    _get(Object.getPrototypeOf(Quiz.prototype), 'constructor', this).call(this, game, x, y, key1);
    this.game = game;

    this.center = { x: x, y: y };

    this.quizzer = "";
    this.result = -1;
    this.index = -1;

    this.choices = [-1, -1, -1];
    this.correct = -1;

    this.textChoices = [];

    var sprite1 = this.game.add.sprite(x * 0.24, y * 0.16, key1);
    sprite1.scale.setTo(x * 0.0019, y * 0.0011);

    var sprite11 = this.game.add.sprite(x * 0.46, y * 0.72, key2);
    sprite11.scale.setTo(x * 0.00055, y * 0.00055);
    var sprite12 = this.game.add.sprite(x * 0.82, y * 0.72, key2);
    sprite12.scale.setTo(x * 0.00055, y * 0.00055);
    var sprite13 = this.game.add.sprite(x * 1.18, y * 0.72, key2);
    sprite13.scale.setTo(x * 0.00055, y * 0.00055);
  }

  _createClass(Quiz, [{
    key: 'writeMain',
    value: function writeMain() {
      this.calcQuizzer();
      console.log('writeMain - result=' + this.result);
      this.main = this.game.add.text(this.center.x * 0.74 + window.config.moveMainBy, this.center.y * 0.20, this.quizzer, { fontSize: window.config.quizSize + 'px' });
      this.main.addColor("#ffffff", 0);
    }
  }, {
    key: 'writeChoices',
    value: function writeChoices() {
      console.log('writeChoices');
      this.calcChoices();
      var choices = "";
      this.choices.forEach(function (value) {
        choices = choices + " " + value;
      });
      console.log(choices);
      console.log(this.correct);
      var text = null;
      text = this.game.add.text(this.center.x * 0.57, this.center.y * 0.79, this.choices[0], { fontSize: window.config.choiceSize + 'px' });
      this.textChoices.push(text);
      text = this.game.add.text(this.center.x * 0.93, this.center.y * 0.79, this.choices[1], { fontSize: window.config.choiceSize + 'px' });
      this.textChoices.push(text);
      text = this.game.add.text(this.center.x * 1.29, this.center.y * 0.79, this.choices[2], { fontSize: window.config.choiceSize + 'px' });
      this.textChoices.push(text);
    }
  }, {
    key: 'calcChoices',
    value: function calcChoices() {
      var context = this;
      for (var index in this.choices) {
        this.choices[index] = this.getRandomFromIndexNumberOrResult();
      }
      var which = Math.floor(Math.random() * (1 + 2)) + 0;
      this.choices[which] = this.result;
      this.correct = which;
    }
  }, {
    key: 'calcQuizzer',
    value: function calcQuizzer() {
      console.log("calcRandomQuizzer");
      var response = window.config.calculator();
      this.index = response[0];
      this.result = response[1];
      this.quizzer = response[2];
    }
  }, {
    key: 'erase',
    value: function erase() {
      if (this.main != null) {
        this.main.destroy();
      }
      this.quizzer = "";
      this.result = -1;
      for (var index in this.textChoices) {
        this.textChoices[index].destroy();
      }
    }

    // eraseJustMain() {
    //   if (this.main != null) {
    //     this.main.destroy();
    //   }
    // }

  }, {
    key: 'getResult',
    value: function getResult() {
      return this.result;
    }
  }, {
    key: 'getCorrect',
    value: function getCorrect() {
      return this.correct;
    }
  }, {
    key: 'getRandomFromIndexNumberOrResult',
    value: function getRandomFromIndexNumberOrResult() {
      return window.config.getRandom(this.index);
    }
  }]);

  return Quiz;
})(Phaser.Sprite);

exports['default'] = Quiz;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _qtype = require('qtype');

var _qtype2 = _interopRequireDefault(_qtype);

var _quiz = require('quiz');

var _quiz2 = _interopRequireDefault(_quiz);

var _status = require('status');

var _status2 = _interopRequireDefault(_status);

var _placing = require('placing');

var _placing2 = _interopRequireDefault(_placing);

var _next = require('next');

var _next2 = _interopRequireDefault(_next);

var GameState = (function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		_get(Object.getPrototypeOf(GameState.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(GameState, [{
		key: 'preload',
		value: function preload() {
			this.game.stage.backgroundColor = '#f0f0f0';
			this.game.load.image('blackboard', 'assets/blackboard.jpg');
			this.game.load.image('button1', 'assets/button-1045.png');
			this.game.load.image('button2', 'assets/button-1536.png');
			this.game.load.image('button3', 'assets/button-gray.png');
			this.game.load.image('speechbubble', 'assets/speech-bubble-22.png');
			this.game.load.image('bookopen', 'assets/book-open.png');
		}
	}, {
		key: 'create',
		value: function create() {
			console.log('create');
			this.center = { x: this.game.world.centerX, y: this.game.world.centerY };

			var title = this.game.add.text(this.center.x * 0.98, this.center.y * 0.06, 'Quick Quiz', { font: "46px Optima" });
			title.anchor.set(0.5);

			this.subtitle = this.game.add.text(this.center.x * 0.98, this.center.y * 0.13, window.config.name, { font: "18px Optima" });
			this.subtitle.anchor.set(0.5);

			this.next = new _next2['default'](this.game, this.center.x, this.center.y, 'button1', this.nexter, this);

			this.quiztype = new _qtype2['default'](this.game, this.center.x, this.center.y, 'button3', this, this.center);

			this.quiz = new _quiz2['default'](this.game, this.center.x, this.center.y, 'blackboard', 'button2');

			this.status = new _status2['default'](this.game, this.center.x, this.center.y, 'speechbubble');

			this.placing = new _placing2['default'](this.game, this.center.x, this.center.y);

			this.timer = null;

			this.points = [0, 0, 0];
			this.playerColors = ['blue', 'red', 'green'];

			this.gameOn = false;

			this.lastTypeId = 11;
			// window.config.pre(this.game);

			// this.practice01();
			// this.practice02();
			// this.practice03();

			// keys

			// player 1
			this.keyQ = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
			this.keyQ.onDown.add(this.nexter, this);
			this.keyZ = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
			this.keyZ.onDown.add(function () {
				this.selecting(0, 0);
			}, this);
			this.keyC = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
			this.keyC.onDown.add(function () {
				this.selecting(0, 1);
			}, this);
			this.keyE = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
			this.keyE.onDown.add(function () {
				this.selecting(0, 2);
			}, this);

			// player 2
			this.keyR = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
			this.keyR.onDown.add(this.nexter, this);
			this.keyV = this.game.input.keyboard.addKey(Phaser.Keyboard.V);
			this.keyV.onDown.add(function () {
				this.selecting(1, 0);
			}, this);
			this.keyN = this.game.input.keyboard.addKey(Phaser.Keyboard.N);
			this.keyN.onDown.add(function () {
				this.selecting(1, 1);
			}, this);
			this.keyY = this.game.input.keyboard.addKey(Phaser.Keyboard.Y);
			this.keyY.onDown.add(function () {
				this.selecting(1, 2);
			}, this);

			// player 3
			this.keyU = this.game.input.keyboard.addKey(Phaser.Keyboard.U);
			this.keyU.onDown.add(this.nexter, this);
			this.keyM = this.game.input.keyboard.addKey(Phaser.Keyboard.M);
			this.keyM.onDown.add(function () {
				this.selecting(2, 0);
			}, this);
			this.keyPE = this.game.input.keyboard.addKey(Phaser.Keyboard.PERIOD);
			this.keyPE.onDown.add(function () {
				this.selecting(2, 1);
			}, this);
			this.keyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
			this.keyO.onDown.add(function () {
				this.selecting(2, 2);
			}, this);

			// print config
			console.log(window.config);

			//test
			// this.nexter();
		}

		////

	}, {
		key: 'nexter',
		value: function nexter() {
			if (this.gameOn == false) {
				console.log('--------- -------- --------');
				console.log('next - start');
				this.gameOn = true;
				this.reset();

				// if (window.config.id != this.lastTypeId) {
				// 	console.log("reloading pre");
				// 	window.config.pre(this.game);
				// }
				// this.lastTypeId = window.config.id;

				window.config.before(this.game, this.center);

				if (window.config.timein == 0) {
					this.nextcontinue();
				} else {
					var that = this;
					window.setTimeout(function () {
						that.nextcontinue();
					}, window.config.timein);
				}
			}
		}
	}, {
		key: 'nextcontinue',
		value: function nextcontinue() {
			console.log('next - continue');
			this.quiz.writeMain();
			this.quiz.writeChoices();

			this.timerReset();
			this.timer = this.game.time.create(false);
			this.timer.loop(window.config.timeup, this.timerFinished, this);
			this.timer.start();

			this.subtitle.destroy();
			this.subtitle = this.game.add.text(this.center.x * 0.98, this.center.y * 0.12, window.config.name, { font: "18px Optima" });
			this.subtitle.anchor.set(0.5);

			console.log('next - end');
		}
	}, {
		key: 'reset',
		value: function reset() {
			console.log('reset');
			this.quiz.erase();
			this.status.erase();
			this.placing.reset();
			this.points = [0, 0, 0];
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.timer != null) {
				this.game.debug.text('time: ' + this.timer.duration.toFixed(0) / 1000, this.center.x * 0.77, this.center.y * 1.28, 'black', '60px Courier New');
			}
		}

		////

	}, {
		key: 'selecting',
		value: function selecting(player, pos) {
			if (this.gameOn == true) {
				console.log("selected " + player + " " + pos);
				this.placing.write(player, pos);
			}
		}

		////

	}, {
		key: 'calculate',
		value: function calculate() {
			console.log("calculate");

			var correct = this.quiz.getCorrect();
			var places = this.placing.getPlaces();
			console.log(correct);
			console.log(places);

			var message = "";

			if (places[correct].length > 0) {

				for (var index in places[correct]) {
					if (index == 0) {
						// winner
						message += this.playerColors[places[correct][0]] + " won, ";
						this.points[places[correct][0]] += 2;
					} else {
						// also won
						message += this.playerColors[places[correct][index]] + " correct, ";
						this.points[places[correct][index]] += 1;
					}
				}

				console.log(this.points);
				this.status.updateScores(this.points);
				this.status.writeScores();
			} else {
				message = "!!!!!! everyone got it wrong !!!!!!";
			}

			this.status.writeMainStatus(message);
		}

		////

	}, {
		key: 'timerFinished',
		value: function timerFinished() {
			console.log('timer finished');
			this.calculate();
			this.timerReset();
			this.gameOn = false;
		}
	}, {
		key: 'timerReset',
		value: function timerReset() {
			if (this.timer != null) {
				this.timer.destroy();
			}
			this.timer = null;
		}

		////

	}, {
		key: 'practice01',
		value: function practice01() {
			this.quiz.writeMain();
			this.quiz.writeChoices();
			console.log(this.quiz.getCorrect());
		}
	}, {
		key: 'practice02',
		value: function practice02() {
			this.status.writeMainStatus("What's the answer? ... ... ... ... ...");
			// this.status.writeMainStatus("blue first, red second, green wrong");
			this.status.updateScores([2, 0, 1]);
			this.status.writeScores();
			this.status.updateScores([1, 2, 1]);
			this.status.writeScores();
		}
	}, {
		key: 'practice03',
		value: function practice03() {
			// this.placing.write(0, 0);
			// this.placing.write(1, 0);
			this.placing.write(2, 0);
			this.placing.write(1, 1);
			// this.placing.write(2, 1);
			this.placing.write(0, 1);
			this.placing.write(2, 2);
			// this.placing.write(0, 2);
			console.log(this.placing.getPlaces());
			// this.placing.reset();
		}
	}]);

	return GameState;
})(Phaser.State);

exports['default'] = GameState;
module.exports = exports['default'];

},{"next":2,"placing":3,"qtype":4,"quiz":5,"status":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Status = (function (_Phaser$Sprite) {
  _inherits(Status, _Phaser$Sprite);

  function Status(game, x, y, key) {
    _classCallCheck(this, Status);

    _get(Object.getPrototypeOf(Status.prototype), "constructor", this).call(this, game, x, y, key);

    this.center = { x: x, y: y };

    this.game = game;

    this.key = key;

    // this.mainStatus = this.game.add.text(0, 0, "");
    this.mainStatus = null;
    this.mainSprite = null;

    this.scores = [0, 0, 0];

    this.textScores = [];

    this.writeScores();

    this.game.add.text(this.center.x - 315, this.center.y * 1.90, "blue", { fontSize: '34px', fill: "#0000a2" });
    this.game.add.text(this.center.x - 35, this.center.y * 1.90, "red", { fontSize: '34px', fill: "#8b0000" });
    this.game.add.text(this.center.x + 240, this.center.y * 1.90, "green", { fontSize: '34px', fill: "#006400" });
  }

  _createClass(Status, [{
    key: "writeMainStatus",
    value: function writeMainStatus(msg) {
      console.log('writeMainStatus: ' + msg);

      this.erase();

      this.mainStatus = this.game.add.text(this.center.x * 0.30, this.center.y * 1.36, msg, {
        font: "86px Optima",
        fill: "#FFD700"
      });
      this.mainStatus.setShadow(4, 4, 'rgba(0,0,0,0.9)', 6);

      this.mainSprite = this.game.add.sprite(0, this.center.y * 1.32, this.key);
      this.mainSprite.scale.setTo(this.center.x * 0.0032, this.center.y * 0.0013);
    }
  }, {
    key: "updateScores",
    value: function updateScores(arrayPlus) {
      this.scores[0] += arrayPlus[0];
      this.scores[1] += arrayPlus[1];
      this.scores[2] += arrayPlus[2];
    }
  }, {
    key: "writeScores",
    value: function writeScores() {
      console.log('writeScores');

      for (var index in this.textScores) {
        this.textScores[index].destroy();
      }
      this.textScores = [];

      var text = null;
      text = this.game.add.text(this.center.x - 300, this.center.y * 1.72, this.scores[0], { fontSize: '80px', fill: "#0000a2" });
      this.textScores.push(text);
      text = this.game.add.text(this.center.x - 30, this.center.y * 1.72, this.scores[1], { fontSize: '80px', fill: "#8b0000" });
      this.textScores.push(text);
      text = this.game.add.text(this.center.x + 260, this.center.y * 1.72, this.scores[2], { fontSize: '80px', fill: "#006400" });
      this.textScores.push(text);
    }
  }, {
    key: "erase",
    value: function erase() {
      if (this.mainStatus != null) {
        this.mainStatus.destroy();
      }
      if (this.mainSprite != null) {
        this.mainSprite.destroy();
      }
    }
  }]);

  return Status;
})(Phaser.Sprite);

exports["default"] = Status;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
