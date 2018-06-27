(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = (function () {
  function Config(id, name, config) {
    _classCallCheck(this, Config);

    this.id = id;
    this.name = name;
    this.timeup = 7000;
    this.quizSize = 180;
    this.choiceSize = 10;
    this.moveMainBy = 0;
    this.timein = 0;
    this.setConfig(config);
  }

  _createClass(Config, [{
    key: "setConfig",
    value: function setConfig(config) {
      for (var key in config) {
        if (config.hasOwnProperty(key)) {
          this[key] = config[key];
          // console.log(key + " -> " + p[key]);
        }
      }
    }
  }, {
    key: "pre",
    value: function pre(game, center) {}
  }, {
    key: "before",
    value: function before(game, center) {}
  }, {
    key: "calculator",
    value: function calculator() {
      return [-1, -1, -1];
    }
  }, {
    key: "getRandom",
    value: function getRandom(number) {
      return -1;
    }
  }, {
    key: "after",
    value: function after(game, center) {}

    // get area() { return this.height * this.width; }
    // set area(value) { this.area = value; }

  }]);

  return Config;
})();

exports["default"] = Config;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var ConfigCalc = (function (_Config) {
	_inherits(ConfigCalc, _Config);

	function ConfigCalc(id, name, config, firstmin, firstmax, secondmax, optype) {
		_classCallCheck(this, ConfigCalc);

		_get(Object.getPrototypeOf(ConfigCalc.prototype), "constructor", this).call(this, id, name, config);
		this.firstmin = firstmin;
		this.firstmax = firstmax;
		this.secondmax = secondmax;
		this.optype = optype;
	}

	_createClass(ConfigCalc, [{
		key: "calculator",
		value: function calculator() {
			var first = Math.floor(Math.random() * (1 + this.firstmax)) + this.firstmin;
			var second = Math.floor(Math.random() * (1 + this.secondmax)) + 0;
			var quizzer = first.toString() + " " + this.optype + " " + second.toString();
			var result = eval(quizzer);
			return [result, result, quizzer];
		}
	}, {
		key: "getRandom",
		value: function getRandom(number) {
			var operation = Math.floor(Math.random() * (1 + 1)) + 0;
			var variant = Math.floor(Math.random() * (1 + 3)) + 1;
			if (number < 3 || operation == 0) {
				return number + variant;
			} else {
				return number - variant;
			}
		}
	}]);

	return ConfigCalc;
})(_config2["default"]);

exports["default"] = ConfigCalc;
module.exports = exports["default"];

},{"config":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var ConfigLect = (function (_Config) {
  _inherits(ConfigLect, _Config);

  function ConfigLect(id, name, config, message, keywords, timeread) {
    _classCallCheck(this, ConfigLect);

    _get(Object.getPrototypeOf(ConfigLect.prototype), 'constructor', this).call(this, id, name, config);
    this.message = message;
    this.sentences = message.split(".");
    this.keywords = keywords;
    this.timeread = timeread;
    // find keywords index arrays
    this.readtimer = null;
    this.index = -1;
    this.sprite1 = null;
    this.text1 = null;
  }

  _createClass(ConfigLect, [{
    key: 'pre',
    value: function pre(game, center) {
      this.sprite1 = game.add.sprite(center.x * 0.20, center.y * 0.11, 'bookopen');
      this.sprite1.scale.setTo(center.x * 0.0068, center.y * 0.0081);
      this.sprite1.bringToTop();
      var style = { font: '50px Arial', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: center.x * 1.63 };
      this.text1 = game.add.text(center.x * 0.28, center.y * 0.24, this.message, style);
      var that = this;
      this.readtimer = window.setTimeout(function () {
        that.text1.destroy();that.sprite1.destroy();
      }, this.timeread);
      console.log("message length is " + this.message.length);
      // ideally length should be under 450.
    }
  }, {
    key: 'before',
    value: function before(game, center) {
      window.clearTimeout(this.readtimer);
      this.text1.destroy();this.sprite1.destroy();
    }
  }, {
    key: 'calculator',
    value: function calculator() {
      console.log("lect calc");
      // get random keyword
      var keywordIndex = Math.floor(Math.random() * this.keywords.length) + 0;
      var word = this.keywords[keywordIndex];
      // get random sentence index, where index is at, then raplace
      var sentenceIndex = this.getRandomSentenceWithWord(word);
      var sentence = this.sentences[sentenceIndex];
      var sentence = sentence.replace(word, "___");
      return [keywordIndex, word, sentence];
      // index: word index in keywords
      // result: word
      // quizzer: sentence replaced with _
    }
  }, {
    key: 'getRandom',
    value: function getRandom(number) {
      // console.log("lect get random");
      // get random from keywords, not index
      // return: random
      var keywordIndex = -1;
      while (true) {
        keywordIndex = Math.floor(Math.random() * this.keywords.length) + 0;
        if (keywordIndex != number) {
          return this.keywords[keywordIndex];
        }
      }
    }
  }, {
    key: 'getRandomSentenceWithWord',
    value: function getRandomSentenceWithWord(word) {
      // console.log("lect get random sent - "+word);
      var sentenceIndex = -1;
      while (true) {
        sentenceIndex = Math.floor(Math.random() * this.sentences.length) + 0;
        var index = this.sentences[sentenceIndex].indexOf(word);
        // console.log("sentenceIndex: "+sentenceIndex+" "+index);
        if (index > -1) {
          return sentenceIndex;
        }
      }
      // this.sentences.forEach(function(sentence) {
      //   console.log(sentence);
      // });
    }

    // getIndicesOf(searchStr, str, caseSensitive) {
    //     var searchStrLen = searchStr.length;
    //     if (searchStrLen == 0) {
    //         return [];
    //     }
    //     var startIndex = 0, index, indices = [];
    //     if (!caseSensitive) {
    //         str = str.toLowerCase();
    //         searchStr = searchStr.toLowerCase();
    //     }
    //     while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    //         indices.push(index);
    //         startIndex = index + searchStrLen;
    //     }
    //     return indices;
    // }

  }]);

  return ConfigLect;
})(_config2['default']);

exports['default'] = ConfigLect;
module.exports = exports['default'];

},{"config":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var ConfigMem = (function (_Config) {
  _inherits(ConfigMem, _Config);

  function ConfigMem(id, name, config, nums, callback) {
    _classCallCheck(this, ConfigMem);

    _get(Object.getPrototypeOf(ConfigMem.prototype), "constructor", this).call(this, id, name, config);
    this.nums = nums;
    this.callback = callback;
    //
    this.mainText = "";
    this.result = -1;
  }

  _createClass(ConfigMem, [{
    key: "before",
    value: function before(game, center) {
      this.result = this.numcalc();
      var message = this.callback(this.result);
      var mainText = game.add.text(center.x * 0.74 + this.moveMainBy, center.y * 0.20, message, { font: this.quizSize + "px", fill: "#ffffff" });
      window.setTimeout(function () {
        mainText.destroy();
      }, this.timein);
    }
  }, {
    key: "numcalc",
    value: function numcalc() {
      var response = "";
      for (var ii = 0; ii < this.nums; ii++) {
        var anum = Math.floor(Math.random() * (1 + 9)) + 0;
        response += anum;
      }
      return response;
    }
  }, {
    key: "calculator",
    value: function calculator() {
      var quizzer = "which?";
      return [this.result, this.result, quizzer];
    }
  }, {
    key: "getRandom",
    value: function getRandom(number) {
      return this.numcalc();
    }
  }]);

  return ConfigMem;
})(_config2["default"]);

exports["default"] = ConfigMem;
module.exports = exports["default"];

},{"config":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var ConfigQues = (function (_Config) {
  _inherits(ConfigQues, _Config);

  function ConfigQues(id, name, config, ante, afte, questions, wackys) {
    _classCallCheck(this, ConfigQues);

    _get(Object.getPrototypeOf(ConfigQues.prototype), "constructor", this).call(this, id, name, config);
    this.ante = ante;
    this.afte = afte;
    this.questions = questions;
    this.wackys = wackys;
    //
    this.index = -1;
  }

  _createClass(ConfigQues, [{
    key: "calculator",
    value: function calculator() {
      var questionIndex = Math.floor(Math.random() * this.questions.length) + 0;
      var questionPair = this.questions[questionIndex];
      var result = questionPair[1];
      var quizzer = this.ante + questionPair[0] + this.afte;
      this.index = questionIndex;
      return [questionIndex, result, quizzer];
    }
  }, {
    key: "getRandom",
    value: function getRandom(number) {
      var answered = "";
      var answerIndex = Math.floor(Math.random() * (1 + 3)) + 2;
      if (answerIndex < 3) {
        answered = this.questions[number][answerIndex];
      } else {
        var wackyIndex = Math.floor(Math.random() * this.wackys.length) + 0;
        answered = this.wackys[wackyIndex];
      }
      return answered;
    }
  }]);

  return ConfigQues;
})(_config2["default"]);

exports["default"] = ConfigQues;
module.exports = exports["default"];

},{"config":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configQues = require('configQues');

var _configQues2 = _interopRequireDefault(_configQues);

var ConfigQuesImag = (function (_ConfigQues) {
  _inherits(ConfigQuesImag, _ConfigQues);

  function ConfigQuesImag(id, name, config, ante, afte, questions, wackys, sheetfile) {
    _classCallCheck(this, ConfigQuesImag);

    _get(Object.getPrototypeOf(ConfigQuesImag.prototype), 'constructor', this).call(this, id, name, config, ante, afte, questions, wackys);
    this.sheetfile = sheetfile;
    //
    this.game = null;
    this.sprite = null;
  }

  _createClass(ConfigQuesImag, [{
    key: 'pre',
    value: function pre(game, center) {
      console.log("pre");
      this.game = game;
      var loader = new Phaser.Loader(game);
      loader.spritesheet('sheet', this.sheetfile, 172, 160);
      loader.onLoadComplete.addOnce(this.onLoaded);
      loader.start();
    }
  }, {
    key: 'onLoaded',
    value: function onLoaded() {
      console.log('image sheet is loaded and ready to be used');
    }
  }, {
    key: 'before',
    value: function before(game, center) {
      if (this.sprite != null) {
        this.sprite.destroy();
      }
      this.sprite = this.game.add.sprite(center.x * 0.77, center.y * 0.19, 'sheet');
      this.sprite.scale.setTo(center.x * 0.0028, center.y * 0.0030);
    }
  }, {
    key: 'after',
    value: function after(game, center) {
      this.sprite.frame = this.index;
    }
  }]);

  return ConfigQuesImag;
})(_configQues2['default']);

exports['default'] = ConfigQuesImag;
module.exports = exports['default'];

},{"configQues":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configQues = require('configQues');

var _configQues2 = _interopRequireDefault(_configQues);

var ConfigQuesRead = (function (_ConfigQues) {
  _inherits(ConfigQuesRead, _ConfigQues);

  function ConfigQuesRead(id, name, config, ante, afte, message, questions, wackys) {
    _classCallCheck(this, ConfigQuesRead);

    _get(Object.getPrototypeOf(ConfigQuesRead.prototype), 'constructor', this).call(this, id, name, config, ante, afte, questions, wackys);
    this.message = message;
  }

  _createClass(ConfigQuesRead, [{
    key: 'pre',
    value: function pre(game, center) {
      var sprite1 = game.add.sprite(center.x * 0.20, center.y * 0.11, 'bookopen');
      sprite1.scale.setTo(center.x * 0.0068, center.y * 0.0081);
      var style = { font: '50px Arial', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: center.x * 1.63 };
      var text1 = game.add.text(center.x * 0.28, center.y * 0.24, this.message, style);
      window.setTimeout(function () {
        text1.destroy();sprite1.destroy();
      }, 10000);
      console.log("message length is " + this.message.length);
      // ideally length should be under 450.
    }
  }]);

  return ConfigQuesRead;
})(_configQues2['default']);

exports['default'] = ConfigQuesRead;
module.exports = exports['default'];

},{"configQues":5}],8:[function(require,module,exports){
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

},{"states/GameState":14}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
				value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configCalc = require('configCalc');

var _configCalc2 = _interopRequireDefault(_configCalc);

var _configMem = require('configMem');

var _configMem2 = _interopRequireDefault(_configMem);

var _configQues = require('configQues');

var _configQues2 = _interopRequireDefault(_configQues);

var _configQuesRead = require('configQuesRead');

var _configQuesRead2 = _interopRequireDefault(_configQuesRead);

var _configQuesImag = require('configQuesImag');

var _configQuesImag2 = _interopRequireDefault(_configQuesImag);

var _configLect = require('configLect');

var _configLect2 = _interopRequireDefault(_configLect);

// import Config from 'config';

////////

// configs

// window.configAdd11 = {
// 	id: 11,
// 	name: "addition",
// 	timeup: 7000,
// 	quizSize: 180,
// 	choiceSize: 90,
//   moveMainBy: 0,
// 	timein: 0,
// 	pre: function(game,center) {},
// 	before: function(game,center) {},
// 	calculator: function() {
// 		var first = Math.floor(Math.random() * (1 + 9)) + 0;
// 	  var second = Math.floor(Math.random() * (1 + 5)) + 0;
// 	  var result = first + second;
// 		var quizzer = first.toString() + " + " + second.toString();
// 		return [result, result, quizzer];
// 	},
// 	getRandom: function(number) {
// 		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
// 		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
// 		if (number < 3 || operation == 0) {
// 			return number + variant;
// 		}
// 		else {
// 			return number - variant;
// 		}
// 	}
// }

// window.configDel12 = {
// 	id: 12,
// 	name: "subtraction",
// 	timeup: 7000,
// 	quizSize: 180,
// 	choiceSize: 90,
//   moveMainBy: 0,
// 	timein: 0,
// 	pre: function(game,center) {},
// 	before: function(game,center) {},
// 	calculator: function() {
// 		var first = Math.floor(Math.random() * (1 + 10)) + 4;
// 	  var second = Math.floor(Math.random() * (1 + 5)) + 0;
// 	  var result = first - second;
// 		var quizzer = first.toString() + " - " + second.toString();
// 		return [result, result, quizzer];
// 	},
// 	getRandom: function(number) {
// 		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
// 		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
// 		if (number < 3 || operation == 0) {
// 			return number + variant;
// 		}
// 		else {
// 			return number - variant;
// 		}
// 	}
// }

// window.configMul13 = {
// 	id: 13,
// 	name: "multiplication",
// 	timeup: 9000,
// 	quizSize: 180,
// 	choiceSize: 90,
//   moveMainBy: 0,
// 	timein: 0,
// 	pre: function(game,center) {},
// 	before: function(game,center) {},
// 	calculator: function() {
// 		var first = Math.floor(Math.random() * (1 + 5)) + 1;
// 	  var second = Math.floor(Math.random() * (1 + 4)) + 0;
// 	  var result = first * second;
// 		var quizzer = first.toString() + " X " + second.toString();
// 		return [result, result, quizzer];
// 	},
// 	getRandom: function(number) {
// 		var operation = Math.floor(Math.random() * (1 + 1)) + 0;
// 		var variant = Math.floor(Math.random() * (1 + 3)) + 1;
// 		if (number < 3 || operation == 0) {
// 			return number + variant;
// 		}
// 		else {
// 			return number - variant;
// 		}
// 	}
// }

// window.configMem16 = {
// 	id: 16,
// 	name: "memorize numbers",
// 	timeup: 9000,
// 	quizSize: 180,
// 	choiceSize: 74,
//   moveMainBy: -50,
// 	timein: 3000,
// 	pre: function(game,center) {},
// 	mainText: null,
// 	before: function(game,center) {
// 		this.result = this.numcalc();
// 		var mainText = game.add.text(center.x*0.74+this.moveMainBy, center.y*0.20, this.result, {font: this.quizSize+"px", fill: "#ffffff"});
// 		window.setTimeout(function(){ mainText.destroy(); }, this.timein);
// 	},
// 	nums: 5,
// 	numcalc: function() {
// 		var response = "";
// 		for (var ii=0; ii<this.nums; ii++) {
// 			var anum = Math.floor(Math.random() * (1 + 9)) + 0;
// 			response += anum;
// 		}
// 		return response;
// 	},
// 	result: -1,
// 	calculator: function() {
// 		var quizzer = "which?";
// 		return [this.result, this.result, quizzer];
// 	},
// 	getRandom: function(number) {
// 		return this.numcalc();
// 	}
// }

// window.configMem17 = {
// 	id: 17,
// 	name: "memorize numbers backwards",
// 	timeup: 9000,
// 	quizSize: 180,
// 	choiceSize: 74,
//   moveMainBy: -50,
// 	timein: 3000,
// 	pre: function(game,center) {},
// 	mainText: null,
// 	before: function(game,center) {
// 		this.result = this.numcalc();
// 		var reversed = this.result.split("").reverse().join("");
// 		var mainText = game.add.text(center.x*0.74+this.moveMainBy, center.y*0.20, reversed, {font: this.quizSize+"px", fill: "#ffffff"});
// 		window.setTimeout(function(){ mainText.destroy(); }, this.timein);
// 	},
// 	nums: 4,
// 	numcalc: function() {
// 		var response = "";
// 		for (var ii=0; ii<this.nums; ii++) {
// 			var anum = Math.floor(Math.random() * (1 + 9)) + 0;
// 			response += anum;
// 		}
// 		return response;
// 	},
// 	result: -1,
// 	calculator: function() {
// 		var quizzer = "reversed?";
// 		return [this.result, this.result, quizzer];
// 	},
// 	getRandom: function(number) {
// 		return this.numcalc();
// 	}
// }

// window.configRhy21 = {
// 	id: 21,
// 	name: "rhymes",
// 	timeup: 8000,
// 	quizSize: 84,
// 	choiceSize: 56,
//   moveMainBy: -170,
// 	timein: 0,
// 	pre: function(game,center) {},
// 	before: function(game,center) {},
// 	calculator: function() {
//     var rhymes = [
//       ["ball", "wall"],
//       ["net", "bet"],
//       ["moon", "toon"],
//       ["soon", "moon"],
// 			["rice", "nice"],
// 			["kite", "lite"],
//       ["rough", "cough"],
//       ["see", "knee"],
// 			["neat", "seat"],
//       ["dry", "fry"]
//     ];
// 		var rhymeIndex = Math.floor(Math.random() * (rhymes.length)) + 0;
//     var rhymePair = rhymes[rhymeIndex];
// 	  var result = rhymePair[1];
// 		var quizzer = "rhymes with " + rhymePair[0];
// 		return [rhymeIndex, result, quizzer];
// 	},
// 	getRandom: function(number) {
//     var rhymes = [
//       "joke", "jack", "knot", "what", "mac", "rune",
//       "tin", "chip", "fin", "flan", "dune", "man"
//     ];
// 		var rhymeIndex = Math.floor(Math.random() * (rhymes.length)) + 0;
//     var rhymed = rhymes[rhymeIndex];
//     return rhymed;
// 	}
// }

// window.configMem31 = {
// 	id: 31,
// 	name: "memory 31",
// 	timeup: 6000,
// 	quizSize: 74,
// 	choiceSize: 52,
//   moveMainBy: -300,
// 	timein: 0,
// 	pre: function(game,center) {
// 		var sprite1 = game.add.sprite(center.x*0.20, center.y*0.11, 'bookopen');
// 		sprite1.scale.setTo(center.x*0.0067,center.y*0.0082);
// 		var style = { font: '50px Arial', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 1200 };
// 		var text1 = game.add.text(center.x*0.28, center.y*0.24, this.message, style);
// 		window.setTimeout(function(){ text1.destroy(); sprite1.destroy(); }, 10000);
// 	},
// 	before: function(game,center) {
// 		// game.add.text(100, 20, "papa papa papa", {font: "40px Arial", fill: "#000000"});
// 	},
// 	message: 'Nectar, in botany, is a liquid made by the flowers of plants. It is very sweet because it has a lot of sugar in it. Plants make nectar to attract pollinating animals. It is made in glands called nectaries. The Nectaries are usually at the bottom of the flower. This means the animal trying to get the nectar have to touch the parts of the plant that are used for reproduction. By doing this, the animal getting the nectar helps the plants reproduce. Some plants make nectar outside the flower. These plants do it to attract predatory insects.',
// 	questions: [
// 		["what makes nectar", "plants", "bees", "fleas"],
// 		["why is nectar sweet", "sugar", "salt", "bees"],
// 		["are all nectars inside the \nflower", "no", "yes", "yes"],
// 		["where are the nectaries in \nthe flower", "bottom", "top", "air"],
// 		["what does nectar attract", "animals", "babies", "babies"],
// 		["what are nectaries", "glands", "animals", "bees"],
// 		["is nectar a liquid", "yes", "no", "no"]
// 	],
// 	wackyAnswers: [
// 		"jack", "joe", "what", "fire",
// 		"water", "apple", "cheese", "men"
// 	],
// 	calculator: function() {
// 		console.log(this.questions);
// 		var questionIndex = Math.floor(Math.random() * (this.questions.length)) + 0;
//     var questionPair = this.questions[questionIndex];
// 	  var result = questionPair[1];
// 		var quizzer = questionPair[0] + " ?";
// 		return [questionIndex, result, quizzer];
// 	},
// 	getRandom: function(number) {
// 		var answered = "";
// 		var answerIndex = Math.floor(Math.random() * (1 + 4)) + 2;
// 		if (answerIndex < 4) {
// 			answered = this.questions[number][answerIndex];
// 		}
// 		else {
// 			var wackyAnswerIndex = Math.floor(Math.random() * (this.wackyAnswers.length)) + 0;
// 			answered = this.wackyAnswers[wackyAnswerIndex];
// 		}
//     return answered;
// 	}
// }

// window.configImg41 = {
// 	id: 41,
// 	name: "needs work",
// 	timeup: 7000,
// 	quizSize: 90,
// 	choiceSize: 60,
//   moveMainBy: -170,
// 	timein: 0,
// 	gamey: null,
// 	dataURItoBlob: function(dataURI) {
// 	    // convert base64/URLEncoded data component to raw binary data held in a string
// 	    var byteString;
// 	    if (dataURI.split(',')[0].indexOf('base64') >= 0)
// 	        byteString = atob(dataURI.split(',')[1]);
// 	    else
// 	        byteString = unescape(dataURI.split(',')[1]);
//
// 	    // separate out the mime component
// 	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//
// 	    // write the bytes of the string to a typed array
// 	    var ia = new Uint8Array(byteString.length);
// 	    for (var i = 0; i < byteString.length; i++) {
// 	        ia[i] = byteString.charCodeAt(i);
// 	    }
//
// 	    return new Blob([ia], {type:mimeString});
// 	},
// 	dataURLtoFile: function(dataurl, filename) {
// 	    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
// 	        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
// 	    while(n--){
// 	        u8arr[n] = bstr.charCodeAt(n);
// 	    }
// 	    return new File([u8arr], filename, {type:mime});
// 	},
// 	urltoFile: function(url, filename, mimeType){
// 	    mimeType = mimeType || (url.match(/^data:([^;]+);/)||'')[1];
// 	    return (fetch(url)
// 	        .then(function(res){return res.arrayBuffer();})
// 	        .then(function(buf){return new File([buf], filename, {type:mimeType});})
// 	    );
// 	},
// 	pre: function(game,center) {
// 		console.log("pre")
// 		this.gamey = game;
// 		var loader = new Phaser.Loader(game);
// 		loader.spritesheet('panda', 'extras/animalSheet2009.jpg', 172, 160);
// 		loader.onLoadComplete.addOnce(this.onLoaded);
// 		loader.start();
// 	},
// 	before: function(game,center) {},
// 	onLoaded: function() {  
// 		console.log('everything is loaded and ready to be used');
// 	},
// 	calculator: function() {
// 		console.log('calculator');
// 		var sprite1 = this.gamey.add.sprite(500, 260, 'panda');
// 		sprite1.frame = 7;
// 		// sprite1.scale.setTo(0.5,0.5);
//     var rhymes = [
//       ["ball", "wall"],
//       ["net", "bet"],
//       ["moon", "toon"],
//       ["soon", "moon"],
//       ["rough", "cough"],
//       ["see", "knee"],
//       ["dry", "fry"]
//     ];
// 		var rhymeIndex = Math.floor(Math.random() * (rhymes.length)) + 0;
//     var rhymePair = rhymes[rhymeIndex];
// 	  var result = rhymePair[1];
// 		var quizzer = "rhymes with " + rhymePair[0];
// 		return [rhymeIndex, result, quizzer];
// 	},
// 	getRandom: function(number) {
//     var rhymes = [
//       "joke", "jack", "knot", "what", "mac",
//       "tin", "chip", "fin", "flan", "dune"
//     ];
// 		var rhymeIndex = Math.floor(Math.random() * (rhymes.length)) + 0;
//     var rhymed = rhymes[rhymeIndex];
//     return rhymed;
// 	}
// }

//// default

// window.config = window.configAdd11;

////////

var QuizType = (function (_Phaser$Sprite) {
				_inherits(QuizType, _Phaser$Sprite);

				function QuizType(game, x, y, key, context, center) {
								_classCallCheck(this, QuizType);

								_get(Object.getPrototypeOf(QuizType.prototype), 'constructor', this).call(this, game, x, y, key);
								// width, height

								// default
								// window.config = window.configAdd11;

								this.xposOrig = 26;
								this.xpos = this.xposOrig;
								this.yposOrig = 210;
								this.ypos = this.yposOrig;

								this.center = center;

								var text = null;

								//////

								var add11 = new _configCalc2['default'](11, "additin", { choiceSize: 90 }, 0, 9, 5, "+");
								//
								var del12 = new _configCalc2['default'](12, "subtractin", { choiceSize: 90 }, 4, 10, 5, "-");
								//
								var mul13 = new _configCalc2['default'](13, "multiplicatin", { choiceSize: 90 }, 1, 5, 4, "*");
								//
								var mem16 = new _configMem2['default'](16, "memoize numbers 5", { quizSize: 160, choiceSize: 60, moveMainBy: -50, timeup: 9000, timein: 3000 }, 5, function (result) {
												return result;
								});
								//
								var mem17 = new _configMem2['default'](17, "revers numbers", { quizSize: 160, choiceSize: 68, moveMainBy: -50, timeup: 9000, timein: 3000 }, 4, function (result) {
												console.log('AA AA');return result.split("").reverse().join("");
								});
								//
								var mem18 = new _configMem2['default'](18, "memoize numbers 6", { quizSize: 160, choiceSize: 52, moveMainBy: -50, timeup: 9000, timein: 3000 }, 6, function (result) {
												return result;
								});
								//
								var rhymes = [["ball", "wall", "bell"], ["net", "bet", "cat"], ["moon", "toon", "spawn"], ["soon", "moon", "ant"], ["rice", "nice", "like"], ["kite", "lite", "king"], ["rough", "cough", "latch"], ["see", "knee", "dean"], ["neat", "seat", "note"], ["dry", "fry", "dress"]];
								var wackys = ["duck", "jack", "where", "what", "mac", "rune", "tin", "chip", "fin", "flan", "dune", "man"];
								var rhy21 = new _configQues2['default'](21, "rhymes", { quizSize: 84, choiceSize: 54, moveMainBy: -170, timeup: 8000 }, "rhymes with ", " ?", rhymes, wackys);
								//
								var message = 'Nectar, in botany, is a liquid made by the flowers of plants. It is very sweet because it has a lot of sugar in it. Plants make nectar to attract pollinating animals. It is made in glands called nectaries. The Nectaries are usually at the bottom of the flower. This means the animal trying to get the nectar have to touch the parts of the plant that are used for reproduction. Some plants make nectar outside the flower.';
								var questions = [["what makes nectar", "plants", "bees"], ["why is nectar sweet", "sugar", "salt"], ["are all nectars inside the \nflower", "no", "yes"], ["where are the nectaries in \nthe flower", "bottom", "top"], ["what does nectar attract", "animals", "babies"], ["what are nectaries", "glands", "animals"], ["is nectar a liquid", "yes", "no"]];
								var wackys = ["jack", "joe", "what", "fire", "sand", "apple", "cheese", "ice cream", "men"];
								var mem31 = new _configQuesRead2['default'](31, "read comprehend", { quizSize: 74, choiceSize: 50, moveMainBy: -300, timeup: 6000 }, "", " ?", message, questions, wackys);
								//
								// ["", "", ""],
								var opposites = [["up", "down", "right"], ["right", "left", "up"], ["left", "right", "down"], ["walk", "run", "smile"], ["happy", "sad", "naughty"], ["over", "under", "cooked"], ["wet", "dry", "sleep"], ["new", "old", "salty"]];
								var wackys = ["duck", "jack", "where", "what", "who", "honey", "chip", "flan", "piano", "drum"];
								var opp22 = new _configQues2['default'](22, "opposites", { quizSize: 84, choiceSize: 54, moveMainBy: -170, timeup: 8000 }, "opposite of ", " ?", opposites, wackys);
								//
								var sequences = [["1 2 3 _", "5", "6"], ["2 4 6 _", "8", "7"], ["4 5 _ 7", "6", "7"], ["4 6 _ 10", "8", "6"], ["5 4 3 _", "2", "1"], ["4 3 2 _", "1", "2"], ["3 6 _ 12", "9", "10"], ["10 20 _ 40", "30", "21"], ["1 3 _ 7", "5", "6"], ["100 200 _", "300", "1000"], ["10 12 14 _", "16", "18"]];
								var wackys = ["0", "7", "11", "13", "17", "19", "21", "99"];
								var seq25 = new _configQues2['default'](25, "sequence", { quizSize: 84, choiceSize: 54, moveMainBy: -170, timeup: 8000 }, "sequence:   ", "", sequences, wackys);
								//
								var questions = [["", "frog", "fog"], ["", "cat", "cart"], ["", "dog", "doog"], ["", "bird", "burd"], ["", "elephant", "aliphant"], ["", "fish", "fin"], ["", "giraffe", "girafy"], ["", "hippo", "hiper"], ["", "monkey", "mankey"], ["", "mouse", "moose"], ["", "panda", "ponda"], ["", "tiger", "tigre"], ["", "unicorn", "hunicorn"], ["", "zebra", "zubra"]];
								var wackys = ["jack", "jill", "horse", "dinasour", "shark", "whale", "cheese"];
								var img41 = new _configQuesImag2['default'](41, "what is it", { choiceSize: 50, timeup: 7000 }, "", "", questions, wackys, 'extras/animalSheet2009.jpg');
								//
								var questions = [["", "f", "g"], ["", "c", "t"], ["", "d", "g"], ["", "b", "g"], ["", "e", "t"], ["", "f", "h"], ["", "g", "f"], ["", "h", "i"], ["", "m", "n"], ["", "m", "t"], ["", "p", "o"], ["", "t", "r"], ["", "u", "h"], ["", "z", "y"]];
								var wackys = ["x", "y", "w"];
								var img42 = new _configQuesImag2['default'](41, "first letter", { choiceSize: 50, timeup: 7000 }, "", "", questions, wackys, 'extras/animalSheet2009.jpg');
								//
								// ["", "", ""],
								var trivia = [["which country is home to the\n kangaroo", "Australia", "Mexico"], ["which color is in a rainbow", "blue", "gold"], ["What farm animal gives us milk to drink", "cow", "mouse"], ["What animal purrs and is known for chasing mice", "cat", "dog"], ["what do Jack and Jill go up the hill to fetch", "water", "flowers"], ["what color are the leaves in summer", "green", "black"], ["what season is usually cold", "winter", "summer"], ["what season usually has red leaves", "fall", "summer"], ["what runs on a track and blows a whistle", "train", "car"], ["what color is a stop sign", "red", "blue"], ["what is a baby pig called", "piglet", "calf"], ["who defeated goliath with a sling and a stone", "david", "victor"], ["who was abel's brother", "cain", "moses"], ["what color is snow usually", "white", "red"], ["what bug makes honey", "bee", "dolphin"], ["where do fish usually live", "water", "moon"]];
								var wackys = ["duck", "jack", "where", "what", "cheese", "jill", "clifford"];
								var tri51 = new _configQues2['default'](51, "trivia 51", { quizSize: 64, choiceSize: 48, moveMainBy: -250, timeup: 8000 }, "", " ?", trivia, wackys);
								//
								var message = 'The United States of America (USA), is a country in North America. USA is made up of 50 states, a federal district, and five territories. The capital of the United States is Washington DC, its federal district. It is one of the worlds superpowers. It is famous for its influence over finance, trade, culture, military, politics, and technology.';
								var keywords = ["United", "USA", "North", "50", "federal", "Washington", "superpowers", "influence"];
								var red61 = new _configLect2['default'](61, "read & comprehend", { quizSize: 64, choiceSize: 46, moveMainBy: -296, timeup: 6000 }, message, keywords, 40000);
								//
								var message = 'Bread is a type of baked food. It is mainly made from dough, which is made mainly from flour, yeast and water. Bread is often baked in an oven. Bread can be toasted or used to make a sandwich. Pizza is a food based on bread. There are many different kinds of bread. Cake is made in a similar way to bread but sugar, fat and milk are added to the dough.';
								var keywords = ["Bread", "food", "flour", "water", "sandwich", "food", "kinds", "Cake", "sugar"];
								var red62 = new _configLect2['default'](62, "read & comprehend", { quizSize: 64, choiceSize: 44, moveMainBy: -296, timeup: 6000 }, message, keywords, 40000);
								//
								var message = 'The Earth is the third planet from the Sun and it is the only planet known to have life on it. The Earth formed around 4,5 billion years ago. Earth is one of four rocky planets on the inside of the Solar System. The large mass of the Sun makes the Earth move around it. The mass of the Earth makes the moon move around it. The Earth also turns around in space. The Earth goes around the Sun once a year.';
								var keywords = ["Earth", "third", "planet", "billion", "years", "rocky", "planets", "Sun", "moon", "turns", "year"];
								var red63 = new _configLect2['default'](63, "read & comprehend", { quizSize: 64, choiceSize: 44, moveMainBy: -296, timeup: 6000 }, message, keywords, 40000);

								//
								var message = 'Virginia is a state in the United States. Its capital is Richmond and its largest city is Virginia Beach. The official name of Virginia is the Commonwealth of Virginia. Virginia became a state in 1788 after the American Revolution. Before the United States, Virginia was a colony of Great Britain. The state of West Virginia used to be part of Virginia.';
								var keywords = ["Virginia", "United", "Richmond", "Beach", "official", "Revolution", "Britain", "West"];
								var red64 = new _configLect2['default'](64, "read & comprehend", { quizSize: 64, choiceSize: 44, moveMainBy: -296, timeup: 6000 }, message, keywords, 40000);
								//
								window.config = add11;
								//////

								var bStyle = { font: "120px Arial", fill: "#000000" };

								// Add
								var button11 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = add11;
								}, context, 0, 1, 2, 3);
								button11.anchor.x = 0.5;
								button11.anchor.y = 0.5;
								button11.scale.setTo(0.14, 0.14);
								text = game.add.text(-60, -80, "++", bStyle);
								button11.addChild(text);

								this.xpos += 38;

								// Del
								var button12 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = del12;
								}, context, 0, 1, 2, 3);
								button12.anchor.x = 0.5;
								button12.anchor.y = 0.5;
								button12.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "--", bStyle);
								button12.addChild(text);

								this.xpos += 38;

								// Mul
								var button13 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = mul13;
								}, context, 0, 1, 2, 3);
								button13.anchor.x = 0.5;
								button13.anchor.y = 0.5;
								button13.scale.setTo(0.14, 0.14);
								text = game.add.text(-50, -80, "xx", bStyle);
								button13.addChild(text);

								this.xpos += 38;

								// seq25
								var button25 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = seq25;
								}, context, 0, 1, 2, 3);
								button25.anchor.x = 0.5;
								button25.anchor.y = 0.5;
								button25.scale.setTo(0.14, 0.14);
								text = game.add.text(-40, -80, "s5", bStyle);
								button25.addChild(text);

								this.xpos = this.xposOrig;
								this.ypos += 40;

								// Rhy
								var button21 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = rhy21;
								}, context, 0, 1, 2, 3);
								button21.anchor.x = 0.5;
								button21.anchor.y = 0.5;
								button21.scale.setTo(0.14, 0.14);
								text = game.add.text(-40, -80, "r1", bStyle);
								button21.addChild(text);

								this.xpos += 38;

								// opp22
								var button22 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = opp22;
								}, context, 0, 1, 2, 3);
								button22.anchor.x = 0.5;
								button22.anchor.y = 0.5;
								button22.scale.setTo(0.14, 0.14);
								text = game.add.text(-40, -80, "o1", bStyle);
								button22.addChild(text);

								this.xpos = this.xposOrig;
								this.ypos += 40;

								// Mem16
								var button16 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = mem16;
								}, context, 0, 1, 2, 3);
								button16.anchor.x = 0.5;
								button16.anchor.y = 0.5;
								button16.scale.setTo(0.14, 0.14);
								text = game.add.text(-80, -80, "m6", bStyle);
								button16.addChild(text);

								this.xpos += 38;

								// mem17
								var button17 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = mem17;
								}, context, 0, 1, 2, 3);
								button17.anchor.x = 0.5;
								button17.anchor.y = 0.5;
								button17.scale.setTo(0.14, 0.14);
								text = game.add.text(-80, -80, "m7", bStyle);
								button17.addChild(text);

								this.xpos += 38;

								// mem18
								var button18 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = mem18;
								}, context, 0, 1, 2, 3);
								button18.anchor.x = 0.5;
								button18.anchor.y = 0.5;
								button18.scale.setTo(0.14, 0.14);
								text = game.add.text(-80, -80, "m8", bStyle);
								button18.addChild(text);

								this.xpos = this.xposOrig;
								this.ypos += 40;

								// tri51
								var button51 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = tri51;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button51.anchor.x = 0.5;
								button51.anchor.y = 0.5;
								button51.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "t1", bStyle);
								button51.addChild(text);

								this.xpos += 38;

								// img41
								var button41 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = img41;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button41.anchor.x = 0.5;
								button41.anchor.y = 0.5;
								button41.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "i1", bStyle);
								button41.addChild(text);

								this.xpos += 38;

								// img42
								var button42 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = img42;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button42.anchor.x = 0.5;
								button42.anchor.y = 0.5;
								button42.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "i2", bStyle);
								button42.addChild(text);

								this.xpos = this.xposOrig;
								this.ypos += 40;

								// Mem reading
								var button31 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = mem31;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button31.anchor.x = 0.5;
								button31.anchor.y = 0.5;
								button31.scale.setTo(0.14, 0.14);
								text = game.add.text(-80, -80, "m1", bStyle);
								button31.addChild(text);

								this.xpos += 38;

								// red61
								var button61 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = red61;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button61.anchor.x = 0.5;
								button61.anchor.y = 0.5;
								button61.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "r1", bStyle);
								button61.addChild(text);

								this.xpos = this.xposOrig;
								this.ypos += 40;

								// red62
								var button62 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = red62;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button62.anchor.x = 0.5;
								button62.anchor.y = 0.5;
								button62.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "r2", bStyle);
								button62.addChild(text);

								this.xpos += 38;

								// red63
								var button63 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = red63;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button63.anchor.x = 0.5;
								button63.anchor.y = 0.5;
								button63.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "r3", bStyle);
								button63.addChild(text);

								this.xpos += 38;

								// red64

								var button64 = game.add.button(this.xpos, this.ypos, key, function () {
												window.config = red64;window.config.pre(game, this.center);
								}, context, 0, 1, 2, 3);
								button64.anchor.x = 0.5;
								button64.anchor.y = 0.5;
								button64.scale.setTo(0.14, 0.14);
								text = game.add.text(-30, -80, "r4", bStyle);
								button64.addChild(text);

								this.xpos += 38;

								//////
				}

				return QuizType;
})(Phaser.Sprite);

exports['default'] = QuizType;
module.exports = exports['default'];

},{"configCalc":2,"configLect":3,"configMem":4,"configQues":5,"configQuesImag":6,"configQuesRead":7}],12:[function(require,module,exports){
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

    var sprite1 = this.game.add.sprite(x * 0.24, y * 0.145, key1);
    sprite1.scale.setTo(x * 0.0019, y * 0.0012);

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
      this.main = this.game.add.text(this.center.x * 0.74 + window.config.moveMainBy, this.center.y * 0.20, this.quizzer, { fontSize: window.config.quizSize + 'px', wordWrap: true, wordWrapWidth: this.center.x * 1.55 });
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
      text = this.game.add.text(this.center.x * 0.56, this.center.y * 0.79, this.choices[0], { fontSize: window.config.choiceSize + 'px' });
      this.textChoices.push(text);
      text = this.game.add.text(this.center.x * 0.92, this.center.y * 0.79, this.choices[1], { fontSize: window.config.choiceSize + 'px' });
      this.textChoices.push(text);
      text = this.game.add.text(this.center.x * 1.28, this.center.y * 0.79, this.choices[2], { fontSize: window.config.choiceSize + 'px' });
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

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RunConfig = (function (_Phaser$Sprite) {
  _inherits(RunConfig, _Phaser$Sprite);

  function RunConfig(game, x, y, key, context, timedefault) {
    _classCallCheck(this, RunConfig);

    _get(Object.getPrototypeOf(RunConfig.prototype), "constructor", this).call(this, game, x, y);

    this.center = { x: x, y: y };

    this.game = game;

    var bStyle = { font: "140px Arial", fill: "#000000" };

    var text = null;

    this.timeup = timedefault;

    //

    this.xposOrig = 26;
    this.xpos = this.xposOrig;

    var that = this;

    var button10 = game.add.button(this.xpos, this.center.y * 1.88, key, function () {
      that.timeup -= 1;that.changeTimeText();
    }, context, 0, 1, 2, 3);
    button10.anchor.x = 0.5;
    button10.anchor.y = 0.5;
    button10.scale.setTo(0.14, 0.14);
    text = game.add.text(-30, -80, "-", bStyle);
    button10.addChild(text);
    this.xpos += 38;

    var button11 = game.add.button(this.xpos, this.center.y * 1.88, key, function () {
      that.timeup += 1;that.changeTimeText();
    }, context, 0, 1, 2, 3);
    button11.anchor.x = 0.5;
    button11.anchor.y = 0.5;
    button11.scale.setTo(0.14, 0.14);
    text = game.add.text(-30, -80, "+", bStyle);
    button11.addChild(text);
    this.xpos += 44;

    this.changeTimeText();
  }

  _createClass(RunConfig, [{
    key: "changeTimeText",
    value: function changeTimeText() {
      console.log('changeTimeText ' + this.timeup);
      if (this.timetext != null) {
        this.timetext.destroy();
      }
      this.timetext = this.game.add.text(this.xpos, this.center.y * 1.884, this.timeup, { font: "32px Optima" });
      this.timetext.anchor.set(0.5);
    }
  }, {
    key: "setTimeText",
    value: function setTimeText(number) {
      this.timeup = number / 1000;
      this.changeTimeText();
    }
  }, {
    key: "getTimeText",
    value: function getTimeText() {
      return this.timeup * 1000;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.timeup = timedefault;
      this.changeTimeText();
    }
  }]);

  return RunConfig;
})(Phaser.Sprite);

exports["default"] = RunConfig;
module.exports = exports["default"];

},{}],14:[function(require,module,exports){
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

var _runConfig = require('runConfig');

var _runConfig2 = _interopRequireDefault(_runConfig);

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

			this.subtitle = this.game.add.text(this.center.x * 0.98, this.center.y * 0.13, ":)", { font: "18px Optima" });
			this.subtitle.anchor.set(0.5);

			this.next = new _next2['default'](this.game, this.center.x, this.center.y, 'button1', this.nexter, this);

			this.quiztype = new _qtype2['default'](this.game, this.center.x, this.center.y, 'button3', this, this.center);

			this.quiz = new _quiz2['default'](this.game, this.center.x, this.center.y, 'blackboard', 'button2');

			this.status = new _status2['default'](this.game, this.center.x, this.center.y, 'speechbubble');

			this.placing = new _placing2['default'](this.game, this.center.x, this.center.y);

			this.runConfig = new _runConfig2['default'](this.game, this.center.x, this.center.y, 'button3', this, 10);

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

			// set first timer
			this.runConfig.setTimeText(window.config.timeup);

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

				window.config.before(this.game, this.center);

				if (window.config.id != this.lastTypeId) {
					console.log("reloading diff id");
					this.runConfig.setTimeText(window.config.timeup);
				}
				this.lastTypeId = window.config.id;

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

			var timeup = this.runConfig.getTimeText();

			this.timerReset();
			this.timer = this.game.time.create(false);
			this.timer.loop(timeup, this.timerFinished, this);
			this.timer.start();

			this.subtitle.destroy();
			this.subtitle = this.game.add.text(this.center.x * 0.98, this.center.y * 0.12, window.config.name, { font: "18px Optima" });
			this.subtitle.anchor.set(0.5);

			window.config.after(this.game, this.center);

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
			// this.game.debug.text('', this.center.x*0.77, this.center.y*1.28, 'black', '60px Courier New');
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

},{"next":9,"placing":10,"qtype":11,"quiz":12,"runConfig":13,"status":15}],15:[function(require,module,exports){
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

},{}]},{},[8])
//# sourceMappingURL=game.js.map
