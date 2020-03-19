define(["esri/layers/FeatureLayer","jimu-arcgis","jimu-core"], function(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/add-layers/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/add-layers/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/widget.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/** @jsx jsx */\r\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\r\nvar jimu_arcgis_1 = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\r\nvar FeatureLayer = __webpack_require__(/*! esri/layers/FeatureLayer */ \"esri/layers/FeatureLayer\");\r\nvar Widget = /** @class */ (function (_super) {\r\n    __extends(Widget, _super);\r\n    function Widget() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.state = {\r\n            jimuMapView: null\r\n        };\r\n        _this.activeViewChangeHandler = function (jmv) {\r\n            if (jmv) {\r\n                _this.setState({\r\n                    jimuMapView: jmv\r\n                });\r\n            }\r\n        };\r\n        _this.formSubmit = function (evt) {\r\n            evt.preventDefault();\r\n            // create a new FeatureLayer\r\n            var layer = new FeatureLayer({\r\n                url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0'\r\n            });\r\n            // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)\r\n            _this.state.jimuMapView.view.map.add(layer);\r\n        };\r\n        return _this;\r\n    }\r\n    Widget.prototype.render = function () {\r\n        return (jimu_core_1.jsx(\"div\", { className: \"widget-starter jimu-widget\" },\r\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\r\n                this.props.useMapWidgetIds &&\r\n                this.props.useMapWidgetIds.length === 1 && (jimu_core_1.jsx(jimu_arcgis_1.JimuMapViewComponent, { useMapWidgetIds: this.props.useMapWidgetIds, onActiveViewChange: this.activeViewChangeHandler })),\r\n            jimu_core_1.jsx(\"form\", { onSubmit: this.formSubmit },\r\n                jimu_core_1.jsx(\"div\", null,\r\n                    jimu_core_1.jsx(\"button\", null, \"Add Layer\")))));\r\n    };\r\n    return Widget;\r\n}(jimu_core_1.BaseWidget));\r\nexports.default = Widget;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3g/ZmQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIgLyoqIEBqc3gganN4ICovXHJcbiBpbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywgQmFzZVdpZGdldCwganN4IH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG4gaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcblxyXG4gaW1wb3J0IEZlYXR1cmVMYXllciA9IHJlcXVpcmUoJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicpO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIEJhc2VXaWRnZXQ8QWxsV2lkZ2V0UHJvcHM8YW55PiwgYW55PiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBqaW11TWFwVmlldzogbnVsbFxyXG4gIH07XHJcblxyXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgamltdU1hcFZpZXc6IGptdlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmb3JtU3VibWl0ID0gZXZ0ID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAvLyBjcmVhdGUgYSBuZXcgRmVhdHVyZUxheWVyXHJcbiAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICB1cmw6ICdodHRwczovL3NlcnZpY2VzMy5hcmNnaXMuY29tL0dWZ2JKYnFtOGhYQVNWWWkvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvUGFya3NfYW5kX09wZW5fU3BhY2UvRmVhdHVyZVNlcnZlci8wJ1xyXG4gICAgfSk7XHJcbiBcclxuICAgIC8vIEFkZCB0aGUgbGF5ZXIgdG8gdGhlIG1hcCAoYWNjZXNzZWQgdGhyb3VnaCB0aGUgRXhwZXJpZW5jZSBCdWlsZGVyIEppbXVNYXBWaWV3IGRhdGEgc291cmNlKVxyXG4gICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc3RhcnRlciBqaW11LXdpZGdldFwiPlxyXG4gICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24+QWRkIExheWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxuICAgfVxyXG4gfSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQXNCQTtBQXBCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/widget.tsx\n");

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCI/YTI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///esri/layers/FeatureLayer\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })});;