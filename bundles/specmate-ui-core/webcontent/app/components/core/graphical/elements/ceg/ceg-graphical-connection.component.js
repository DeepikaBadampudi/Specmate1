"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CEGConnection_1 = require("../../../../../model/CEGConnection");
var graphical_connection_base_1 = require("../graphical-connection-base");
var CEGGraphicalConnection = (function (_super) {
    __extends(CEGGraphicalConnection, _super);
    function CEGGraphicalConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeType = CEGConnection_1.CEGConnection;
        return _this;
    }
    Object.defineProperty(CEGGraphicalConnection.prototype, "isNegated", {
        get: function () {
            return (this.connection.negate + '').toLowerCase() === 'true';
        },
        enumerable: true,
        configurable: true
    });
    CEGGraphicalConnection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[ceg-graphical-connection]',
            templateUrl: 'ceg-graphical-connection.component.svg',
            styleUrls: ['ceg-graphical-connection.component.css']
        })
    ], CEGGraphicalConnection);
    return CEGGraphicalConnection;
}(graphical_connection_base_1.GraphicalConnectionBase));
exports.CEGGraphicalConnection = CEGGraphicalConnection;
//# sourceMappingURL=ceg-graphical-connection.component.js.map