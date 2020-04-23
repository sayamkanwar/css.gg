"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPhone = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;transform:scale(var(--ggs,1))}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{width:18px;height:18px;border-top-left-radius:1px;border-bottom-right-radius:1px;border-bottom-left-radius:12px;border-left:4px solid;border-bottom:4px solid;left:2px;bottom:2px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat right 11px/6px 4px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat -1px 0/4px 6px}&::before{width:20px;height:20px;border:6px double;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;border-radius:50%;transform:rotate(-45deg);bottom:2px;left:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;transform:scale(var(--ggs,1))}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{width:18px;height:18px;border-top-left-radius:1px;border-bottom-right-radius:1px;border-bottom-left-radius:12px;border-left:4px solid;border-bottom:4px solid;left:2px;bottom:2px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat right 11px/6px 4px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat -1px 0/4px 6px}&::before{width:20px;height:20px;border:6px double;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;border-radius:50%;transform:rotate(-45deg);bottom:2px;left:2px}\n"])));
exports.Phone = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPhone, tslib_1.__assign({}, props, { ref: ref, "icon-role": "phone" }))));
});
var templateObject_1;
//# sourceMappingURL=Phone.js.map