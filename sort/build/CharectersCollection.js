"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharectersCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharectersCollection = /** @class */ (function (_super) {
    __extends(CharectersCollection, _super);
    function CharectersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharectersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharectersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    };
    ;
    CharectersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var charecters = this.data.split('');
        var leftHand = charecters[leftIndex];
        charecters[leftIndex] = charecters[rightIndex];
        charecters[rightIndex] = leftHand;
        this.data = charecters.join('');
    };
    CharectersCollection.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return CharectersCollection;
}(Sorter_1.Sorter));
exports.CharectersCollection = CharectersCollection;
