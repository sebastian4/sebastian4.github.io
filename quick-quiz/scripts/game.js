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

        var button = game.add.button(90, 90, key, callback, context, 0, 1, 2, 3);
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

    this.placesScreen = this.placesScreenInit;

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
      this.placesScreen = this.placesScreenInit;
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

window.configAdd = {
	name: "addition",
	timeup: 6000,
	quizSize: 180,
	choiceSize: 90,
	moveMainBy: 0,
	calculator: function calculator() {
		var first = Math.floor(Math.random() * (1 + 9)) + 0;
		var second = Math.floor(Math.random() * (1 + 5)) + 0;
		var result = first + second;
		var quizzer = first.toString() + " + " + second.toString();
		return [result, quizzer];
	},
	getRandom: function getRandom(result) {
		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
		if (result < 3 || operation == 0) {
			return result + variant;
		} else {
			return result - variant;
		}
	}
};

window.configDel = {
	name: "subtraction",
	timeup: 6000,
	quizSize: 180,
	choiceSize: 90,
	moveMainBy: 0,
	calculator: function calculator() {
		var first = Math.floor(Math.random() * (1 + 10)) + 4;
		var second = Math.floor(Math.random() * (1 + 5)) + 0;
		var result = first - second;
		var quizzer = first.toString() + " - " + second.toString();
		return [result, quizzer];
	},
	getRandom: function getRandom(result) {
		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
		if (result < 3 || operation == 0) {
			return result + variant;
		} else {
			return result - variant;
		}
	}
};

window.configMul = {
	name: "multiplication",
	timeup: 7000,
	quizSize: 180,
	choiceSize: 90,
	moveMainBy: 0,
	calculator: function calculator() {
		var first = Math.floor(Math.random() * (1 + 5)) + 1;
		var second = Math.floor(Math.random() * (1 + 4)) + 0;
		var result = first * second;
		var quizzer = first.toString() + " X " + second.toString();
		return [result, quizzer];
	},
	getRandom: function getRandom(result) {
		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
		if (result < 3 || operation == 0) {
			return result + variant;
		} else {
			return result - variant;
		}
	}
};

window.configRhy = {
	name: "rhymes",
	timeup: 7000,
	quizSize: 90,
	choiceSize: 60,
	moveMainBy: -170,
	calculator: function calculator() {
		var rhymes = [["ball", "wall"], ["net", "bet"], ["moon", "toon"], ["soon", "moon"], ["rough", "cough"], ["see", "knee"], ["dry", "fry"]];
		var rhymeIndex = Math.floor(Math.random() * rhymes.length) + 0;
		var rhymePair = rhymes[rhymeIndex];
		var result = rhymePair[1];
		var quizzer = "rhymes with " + rhymePair[0];
		return [result, quizzer];
	},
	getRandom: function getRandom(result) {
		var rhymes = ["joke", "jack", "knot", "what", "mac", "tin", "chip", "fin", "flan", "dune"];
		var rhymeIndex = Math.floor(Math.random() * rhymes.length) + 0;
		var rhymed = rhymes[rhymeIndex];
		return rhymed;
	}
};

// default

window.config = window.configAdd;

////////

var QuizType = (function (_Phaser$Sprite) {
	_inherits(QuizType, _Phaser$Sprite);

	function QuizType(game, x, y, key, context) {
		_classCallCheck(this, QuizType);

		_get(Object.getPrototypeOf(QuizType.prototype), "constructor", this).call(this, game, x, y, key);
		// width, height

		// default
		window.config = window.configAdd;

		this.ypos = 210;
		this.xpos = 40;

		var text = null;

		// Add
		var button11 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configAdd;
		}, context, 0, 1, 2, 3);
		button11.anchor.x = 0.5;
		button11.anchor.y = 0.5;
		button11.scale.setTo(0.14, 0.14);
		text = game.add.text(-60, -100, "+", { font: "200px Arial", fill: "#000000" });
		button11.addChild(text);
		this.xpos += 40;

		// Del
		var button12 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configDel;
		}, context, 0, 1, 2, 3);
		button12.anchor.x = 0.5;
		button12.anchor.y = 0.5;
		button12.scale.setTo(0.14, 0.14);
		text = game.add.text(-30, -120, "-", { font: "200px Arial", fill: "#000000" });
		button12.addChild(text);
		this.xpos += 40;

		// Mul
		var button13 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configMul;
		}, context, 0, 1, 2, 3);
		button13.anchor.x = 0.5;
		button13.anchor.y = 0.5;
		button13.scale.setTo(0.14, 0.14);
		text = game.add.text(-50, -120, "x", { font: "200px Arial", fill: "#000000" });
		button13.addChild(text);
		this.xpos += 40;

		// Mul
		var button14 = game.add.button(this.xpos, this.ypos, key, function () {
			window.config = window.configRhy;
		}, context, 0, 1, 2, 3);
		button14.anchor.x = 0.5;
		button14.anchor.y = 0.5;
		button14.scale.setTo(0.14, 0.14);
		text = game.add.text(-40, -120, "r", { font: "200px Arial", fill: "#000000" });
		button14.addChild(text);
		this.xpos += 40;
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

    this.choices = [-1, -1, -1];
    this.correct = -1;

    this.textChoices = [];

    var sprite1 = this.game.add.sprite(x * 0.26, y * 0.16, key1);
    sprite1.scale.setTo(x * 0.0017, y * 0.0011);

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
        this.choices[index] = this.getRandomFromResult();
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
      this.result = response[0];
      this.quizzer = response[1];
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
    key: 'getRandomFromResult',
    value: function getRandomFromResult() {
      return window.config.getRandom(this.result);
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
		}
	}, {
		key: 'create',
		value: function create() {
			console.log('create');
			this.center = { x: this.game.world.centerX, y: this.game.world.centerY };

			var title = this.game.add.text(this.center.x * 0.98, this.center.y * 0.06, 'Quick Quiz', { font: "46px Optima" });
			title.anchor.set(0.5);

			this.subtitle = this.game.add.text(this.center.x * 0.98, this.center.y * 0.12, window.config.name, { font: "18px Optima" });
			this.subtitle.anchor.set(0.5);

			this.next = new _next2['default'](this.game, this.center.x, this.center.y, 'button1', this.nexter, this);

			this.quiztype = new _qtype2['default'](this.game, this.center.x, this.center.y, 'button3', this);

			this.quiz = new _quiz2['default'](this.game, this.center.x, this.center.y, 'blackboard', 'button2');

			this.status = new _status2['default'](this.game, this.center.x, this.center.y, 'speechbubble');

			this.placing = new _placing2['default'](this.game, this.center.x, this.center.y);

			this.timer = null;

			this.points = [0, 0, 0];
			this.playerColors = ['blue', 'red', 'green'];

			this.gameOn = false;

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
				console.log('next - start');
				this.gameOn = true;
				this.reset();

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
			}
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
