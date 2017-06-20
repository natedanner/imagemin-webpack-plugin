'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

/**
 * Optimizes a single image asset, returning the orignal if the "optimized" version is larger
 * @param  {Object}  asset
 * @param  {Object}  imageminOptions
 * @return {Promise(asset)}
 */
var optimizeImage = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(asset, imageminOptions) {
    var assetSource, assetOrigSize, assetContents, optimizedAssetContents;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // Grab the orig source and size
            assetSource = asset.source();
            assetOrigSize = asset.size();

            // Ensure that the contents i have are in the form of a buffer

            assetContents = Buffer.isBuffer(assetSource) ? assetSource : new Buffer(assetSource, 'utf8');

            // Await for imagemin to do the compression

            _context4.next = 5;
            return _imagemin2.default.buffer(assetContents, imageminOptions);

          case 5:
            optimizedAssetContents = _context4.sent;

            if (!(optimizedAssetContents.length < assetOrigSize)) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt('return', new _RawSource2.default(optimizedAssetContents));

          case 10:
            return _context4.abrupt('return', asset);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function optimizeImage(_x4, _x5) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Tests a filename to see if it matches any of the given test globs/regexes
 * @param  {String} filename
 * @param  {Array} regexes
 * @return {Boolean}
 */


/**
 * async wrapper for fs readFile.  
 * @param {any} filename 
 * @returns * @return {Promise(buffer)}
 */
var readFile = function () {
  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(filename) {
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', new _promise2.default(function (resolve, reject) {
              _fs2.default.readFile(filename, '', function (error, result) {
                if (error) {
                  reject(error);
                  return;
                }
                resolve(result);
              });
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function readFile(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * async wrapper for exists
 * @param {any} directory 
 * @returns 
 */


var exists = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(directory) {
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', new _promise2.default(function (resolve, reject) {
              _fs2.default.exists(directory, function (exists) {
                resolve(exists);
              });
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function exists(_x7) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * async wrapper for writeFile
 * @param {any} filename 
 * @param {any} buffer 
 * @returns 
 */


var writeFile = function () {
  var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(filename, buffer) {
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', new _promise2.default(function (resolve, reject) {

              var doWrite = function doWrite() {
                _fs2.default.writeFile(filename, buffer, function (error) {
                  if (error) {
                    reject(error);
                    return;
                  }
                  resolve();
                });
              };
              var directory = _path2.default.dirname(filename);
              exists(directory).then(function (exists) {
                if (!exists) {
                  _fs2.default.mkdir(directory, doWrite);
                } else {
                  doWrite();
                }
              });
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function writeFile(_x8, _x9) {
    return _ref9.apply(this, arguments);
  };
}();

var _lodash = require('lodash.map');

var _lodash2 = _interopRequireDefault(_lodash);

var _RawSource = require('webpack-sources/lib/RawSource');

var _RawSource2 = _interopRequireDefault(_RawSource);

var _imagemin = require('imagemin');

var _imagemin2 = _interopRequireDefault(_imagemin);

var _imageminPngquant = require('imagemin-pngquant');

var _imageminPngquant2 = _interopRequireDefault(_imageminPngquant);

var _imageminOptipng = require('imagemin-optipng');

var _imageminOptipng2 = _interopRequireDefault(_imageminOptipng);

var _imageminGifsicle = require('imagemin-gifsicle');

var _imageminGifsicle2 = _interopRequireDefault(_imageminGifsicle);

var _imageminJpegtran = require('imagemin-jpegtran');

var _imageminJpegtran2 = _interopRequireDefault(_imageminJpegtran);

var _imageminSvgo = require('imagemin-svgo');

var _imageminSvgo2 = _interopRequireDefault(_imageminSvgo);

var _os = require('os');

var _asyncThrottle = require('async-throttle');

var _asyncThrottle2 = _interopRequireDefault(_asyncThrottle);

var _minimatch = require('minimatch');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageminPlugin = function () {
  function ImageminPlugin() {
    var _options$imageminOpti;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, ImageminPlugin);

    // I love ES2015!
    var _options$disable = options.disable,
        disable = _options$disable === undefined ? false : _options$disable,
        _options$test = options.test,
        test = _options$test === undefined ? /.*/ : _options$test,
        _options$maxConcurren = options.maxConcurrency,
        maxConcurrency = _options$maxConcurren === undefined ? (0, _os.cpus)().length : _options$maxConcurren,
        _options$plugins = options.plugins,
        plugins = _options$plugins === undefined ? [] : _options$plugins,
        _options$optipng = options.optipng,
        optipng = _options$optipng === undefined ? {
      optimizationLevel: 3
    } : _options$optipng,
        _options$gifsicle = options.gifsicle,
        gifsicle = _options$gifsicle === undefined ? {
      optimizationLevel: 1
    } : _options$gifsicle,
        _options$jpegtran = options.jpegtran,
        jpegtran = _options$jpegtran === undefined ? {
      progressive: false
    } : _options$jpegtran,
        _options$svgo = options.svgo,
        svgo = _options$svgo === undefined ? {} : _options$svgo,
        _options$pngquant = options.pngquant,
        pngquant = _options$pngquant === undefined ? null : _options$pngquant,
        _options$externalImag = options.externalImages,
        externalImages = _options$externalImag === undefined ? {
      sources: [],
      destination: null
    } : _options$externalImag;


    this.options = {
      disable,
      maxConcurrency,
      imageminOptions: {
        plugins: []
      },
      testRegexes: compileTestOption(test),
      externalImages

      // As long as the options aren't `null` then include the plugin. Let the destructuring above
      // control whether the plugin is included by default or not.
    };var _arr = [[_imageminOptipng2.default, optipng], [_imageminGifsicle2.default, gifsicle], [_imageminJpegtran2.default, jpegtran], [_imageminSvgo2.default, svgo], [_imageminPngquant2.default, pngquant]];
    for (var _i = 0; _i < _arr.length; _i++) {
      var _ref = _arr[_i];

      var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

      var plugin = _ref2[0];
      var pluginOptions = _ref2[1];

      if (pluginOptions !== null) {
        this.options.imageminOptions.plugins.push(plugin(pluginOptions));
      }
    }

    // And finally, add any plugins that they pass in the options to the internal plugins array
    (_options$imageminOpti = this.options.imageminOptions.plugins).push.apply(_options$imageminOpti, (0, _toConsumableArray3.default)(plugins));
  }

  (0, _createClass3.default)(ImageminPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      // If disabled, short-circuit here and just return
      if (this.options.disable === true) return null;

      // Pull out the regex test
      var testRegexes = this.options.testRegexes;
      var externalImages = this.options.externalImages;

      // Access the assets once they have been assembled
      compiler.plugin('emit', function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(compilation, callback) {
          var throttle;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  throttle = (0, _asyncThrottle2.default)(_this.options.maxConcurrency);
                  _context3.prev = 1;
                  _context3.next = 4;
                  return _promise2.default.all((0, _lodash2.default)(compilation.assets, function (asset, filename) {
                    return throttle((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!testFile(filename, testRegexes)) {
                                _context.next = 4;
                                break;
                              }

                              _context.next = 3;
                              return optimizeImage(asset, _this.options.imageminOptions);

                            case 3:
                              compilation.assets[filename] = _context.sent;

                            case 4:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this);
                    })));
                  }));

                case 4:
                  if (!(externalImages && externalImages.sources && Array.isArray(externalImages.sources) && externalImages.sources.length)) {
                    _context3.next = 7;
                    break;
                  }

                  _context3.next = 7;
                  return _promise2.default.all((0, _lodash2.default)(externalImages.sources, function (filename) {
                    return throttle((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                      var buffer, optimizedAssetContents;
                      return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return readFile(filename);

                            case 2:
                              buffer = _context2.sent;
                              _context2.next = 5;
                              return _imagemin2.default.buffer(buffer, _this.options.imageminOptions);

                            case 5:
                              optimizedAssetContents = _context2.sent;


                              // if a destination was provided use it otherwise overwrite in place
                              if (externalImages.destination && typeof externalImages.destination === 'string') {
                                filename = _path2.default.normalize(`${externalImages.destination}/${_path2.default.basename(filename)}`);
                              }
                              _context2.next = 9;
                              return writeFile(filename, optimizedAssetContents);

                            case 9:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this);
                    })));
                  }));

                case 7:

                  // At this point everything is done, so call the callback without anything in it
                  callback();
                  _context3.next = 13;
                  break;

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3['catch'](1);

                  callback(_context3.t0);

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this, [[1, 10]]);
        }));

        return function (_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
  return ImageminPlugin;
}();

exports.default = ImageminPlugin;
function testFile(filename, regexes) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(regexes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var regex = _step.value;

      if (regex.test(filename)) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

/**
 * Compiles a regex, glob, or an array of globs to a single regex for testing later
 * @param  {RegExp|String|String[]} rawTestValue
 * @return {RegExp}
 */
function compileTestOption(rawTestValue) {
  var tests = Array.isArray(rawTestValue) ? rawTestValue : [rawTestValue];

  return tests.map(function (test) {
    if (test instanceof RegExp) {
      // If it's a regex, just return it
      return test;
    } else if (typeof test === 'string') {
      // If it's a string, let minimatch convert it to a regex
      return (0, _minimatch.makeRe)(test);
    } else {
      throw new Error('test parameter must be a regex, glob string, or an array of regexes or glob strings');
    }
  });
}