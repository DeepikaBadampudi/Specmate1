"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CEGNode_1 = require("../../../../model/CEGNode");
var config_1 = require("../../../../config/config");
var Url_1 = require("../../../../util/Url");
var create_tool_1 = require("./create-tool");
var NodeTool = (function (_super) {
    __extends(NodeTool, _super);
    function NodeTool(parent, dataService) {
        _super.call(this, parent, dataService);
        this.parent = parent;
        this.dataService = dataService;
        this.name = "Add Node";
        this.icon = "plus";
        this.color = "primary";
    }
    Object.defineProperty(NodeTool.prototype, "newNode", {
        get: function () {
            return new CEGNode_1.CEGNode();
        },
        enumerable: true,
        configurable: true
    });
    NodeTool.prototype.click = function (event) {
        this.createNewNode(event.offsetX, event.offsetY);
    };
    NodeTool.prototype.select = function (element) {
        this.selectedElements[0] = element;
    };
    NodeTool.prototype.createNewNode = function (x, y) {
        var _this = this;
        this.getNewId(config_1.Config.CEG_NODE_BASE_ID).then(function (id) {
            var node = _this.nodeFactory(id, x, y);
            _this.createAndSelect(node);
        });
    };
    NodeTool.prototype.nodeFactory = function (id, x, y) {
        var url = Url_1.Url.build([this.parent.url, id]);
        var node = this.newNode;
        node.name = config_1.Config.CEG_NEW_NODE_NAME;
        node.description = config_1.Config.CEG_NEW_NODE_DESCRIPTION;
        node.id = id;
        node.url = url;
        node.variable = config_1.Config.CEG_NODE_NEW_VARIABLE;
        node.operator = config_1.Config.CEG_NODE_NEW_OPERATOR;
        node.value = config_1.Config.CEG_NODE_NEW_VALUE;
        node.x = x;
        node.y = y;
        return node;
    };
    return NodeTool;
}(create_tool_1.CreateTool));
exports.NodeTool = NodeTool;
//# sourceMappingURL=node-tool.js.map