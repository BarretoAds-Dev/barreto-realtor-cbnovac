import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/util/iteratorProxy.js
var require_iteratorProxy = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/util/iteratorProxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function iteratorProxy() {
      var values = this;
      var index = 0;
      var iter = {
        "@@iterator": function iterator() {
          return iter;
        },
        next: function next() {
          if (index < values.length) {
            var value = values[index];
            index = index + 1;
            return {
              done: false,
              value
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
      return iter;
    }
    var _default = exports.default = iteratorProxy;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/util/iterationDecorator.js
var require_iterationDecorator = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/util/iterationDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = iterationDecorator;
    var _iteratorProxy = _interopRequireDefault(require_iteratorProxy());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function iterationDecorator(collection, entries) {
      if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
        Object.defineProperty(collection, Symbol.iterator, {
          value: _iteratorProxy.default.bind(entries)
        });
      }
      return collection;
    }
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/ariaPropsMap.js
var require_ariaPropsMap = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/ariaPropsMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    var properties = [["aria-activedescendant", {
      "type": "id"
    }], ["aria-atomic", {
      "type": "boolean"
    }], ["aria-autocomplete", {
      "type": "token",
      "values": ["inline", "list", "both", "none"]
    }], ["aria-braillelabel", {
      "type": "string"
    }], ["aria-brailleroledescription", {
      "type": "string"
    }], ["aria-busy", {
      "type": "boolean"
    }], ["aria-checked", {
      "type": "tristate"
    }], ["aria-colcount", {
      type: "integer"
    }], ["aria-colindex", {
      type: "integer"
    }], ["aria-colspan", {
      type: "integer"
    }], ["aria-controls", {
      "type": "idlist"
    }], ["aria-current", {
      type: "token",
      values: ["page", "step", "location", "date", "time", true, false]
    }], ["aria-describedby", {
      "type": "idlist"
    }], ["aria-description", {
      "type": "string"
    }], ["aria-details", {
      "type": "id"
    }], ["aria-disabled", {
      "type": "boolean"
    }], ["aria-dropeffect", {
      "type": "tokenlist",
      "values": ["copy", "execute", "link", "move", "none", "popup"]
    }], ["aria-errormessage", {
      "type": "id"
    }], ["aria-expanded", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-flowto", {
      "type": "idlist"
    }], ["aria-grabbed", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-haspopup", {
      "type": "token",
      "values": [false, true, "menu", "listbox", "tree", "grid", "dialog"]
    }], ["aria-hidden", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-invalid", {
      "type": "token",
      "values": ["grammar", false, "spelling", true]
    }], ["aria-keyshortcuts", {
      type: "string"
    }], ["aria-label", {
      "type": "string"
    }], ["aria-labelledby", {
      "type": "idlist"
    }], ["aria-level", {
      "type": "integer"
    }], ["aria-live", {
      "type": "token",
      "values": ["assertive", "off", "polite"]
    }], ["aria-modal", {
      type: "boolean"
    }], ["aria-multiline", {
      "type": "boolean"
    }], ["aria-multiselectable", {
      "type": "boolean"
    }], ["aria-orientation", {
      "type": "token",
      "values": ["vertical", "undefined", "horizontal"]
    }], ["aria-owns", {
      "type": "idlist"
    }], ["aria-placeholder", {
      type: "string"
    }], ["aria-posinset", {
      "type": "integer"
    }], ["aria-pressed", {
      "type": "tristate"
    }], ["aria-readonly", {
      "type": "boolean"
    }], ["aria-relevant", {
      "type": "tokenlist",
      "values": ["additions", "all", "removals", "text"]
    }], ["aria-required", {
      "type": "boolean"
    }], ["aria-roledescription", {
      type: "string"
    }], ["aria-rowcount", {
      type: "integer"
    }], ["aria-rowindex", {
      type: "integer"
    }], ["aria-rowspan", {
      type: "integer"
    }], ["aria-selected", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-setsize", {
      "type": "integer"
    }], ["aria-sort", {
      "type": "token",
      "values": ["ascending", "descending", "none", "other"]
    }], ["aria-valuemax", {
      "type": "number"
    }], ["aria-valuemin", {
      "type": "number"
    }], ["aria-valuenow", {
      "type": "number"
    }], ["aria-valuetext", {
      "type": "string"
    }]];
    var ariaPropsMap = {
      entries: function entries() {
        return properties;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _properties = properties; _i < _properties.length; _i++) {
          var _properties$_i = _slicedToArray(_properties[_i], 2), key = _properties$_i[0], values = _properties$_i[1];
          fn.call(thisArg, values, key, properties);
        }
      },
      get: function get(key) {
        var item = properties.filter(function(tuple) {
          return tuple[0] === key ? true : false;
        })[0];
        return item && item[1];
      },
      has: function has(key) {
        return !!ariaPropsMap.get(key);
      },
      keys: function keys() {
        return properties.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values() {
        return properties.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = exports.default = (0, _iterationDecorator.default)(ariaPropsMap, ariaPropsMap.entries());
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/domMap.js
var require_domMap = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/domMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    var dom = [["a", {
      reserved: false
    }], ["abbr", {
      reserved: false
    }], ["acronym", {
      reserved: false
    }], ["address", {
      reserved: false
    }], ["applet", {
      reserved: false
    }], ["area", {
      reserved: false
    }], ["article", {
      reserved: false
    }], ["aside", {
      reserved: false
    }], ["audio", {
      reserved: false
    }], ["b", {
      reserved: false
    }], ["base", {
      reserved: true
    }], ["bdi", {
      reserved: false
    }], ["bdo", {
      reserved: false
    }], ["big", {
      reserved: false
    }], ["blink", {
      reserved: false
    }], ["blockquote", {
      reserved: false
    }], ["body", {
      reserved: false
    }], ["br", {
      reserved: false
    }], ["button", {
      reserved: false
    }], ["canvas", {
      reserved: false
    }], ["caption", {
      reserved: false
    }], ["center", {
      reserved: false
    }], ["cite", {
      reserved: false
    }], ["code", {
      reserved: false
    }], ["col", {
      reserved: true
    }], ["colgroup", {
      reserved: true
    }], ["content", {
      reserved: false
    }], ["data", {
      reserved: false
    }], ["datalist", {
      reserved: false
    }], ["dd", {
      reserved: false
    }], ["del", {
      reserved: false
    }], ["details", {
      reserved: false
    }], ["dfn", {
      reserved: false
    }], ["dialog", {
      reserved: false
    }], ["dir", {
      reserved: false
    }], ["div", {
      reserved: false
    }], ["dl", {
      reserved: false
    }], ["dt", {
      reserved: false
    }], ["em", {
      reserved: false
    }], ["embed", {
      reserved: false
    }], ["fieldset", {
      reserved: false
    }], ["figcaption", {
      reserved: false
    }], ["figure", {
      reserved: false
    }], ["font", {
      reserved: false
    }], ["footer", {
      reserved: false
    }], ["form", {
      reserved: false
    }], ["frame", {
      reserved: false
    }], ["frameset", {
      reserved: false
    }], ["h1", {
      reserved: false
    }], ["h2", {
      reserved: false
    }], ["h3", {
      reserved: false
    }], ["h4", {
      reserved: false
    }], ["h5", {
      reserved: false
    }], ["h6", {
      reserved: false
    }], ["head", {
      reserved: true
    }], ["header", {
      reserved: false
    }], ["hgroup", {
      reserved: false
    }], ["hr", {
      reserved: false
    }], ["html", {
      reserved: true
    }], ["i", {
      reserved: false
    }], ["iframe", {
      reserved: false
    }], ["img", {
      reserved: false
    }], ["input", {
      reserved: false
    }], ["ins", {
      reserved: false
    }], ["kbd", {
      reserved: false
    }], ["keygen", {
      reserved: false
    }], ["label", {
      reserved: false
    }], ["legend", {
      reserved: false
    }], ["li", {
      reserved: false
    }], ["link", {
      reserved: true
    }], ["main", {
      reserved: false
    }], ["map", {
      reserved: false
    }], ["mark", {
      reserved: false
    }], ["marquee", {
      reserved: false
    }], ["menu", {
      reserved: false
    }], ["menuitem", {
      reserved: false
    }], ["meta", {
      reserved: true
    }], ["meter", {
      reserved: false
    }], ["nav", {
      reserved: false
    }], ["noembed", {
      reserved: true
    }], ["noscript", {
      reserved: true
    }], ["object", {
      reserved: false
    }], ["ol", {
      reserved: false
    }], ["optgroup", {
      reserved: false
    }], ["option", {
      reserved: false
    }], ["output", {
      reserved: false
    }], ["p", {
      reserved: false
    }], ["param", {
      reserved: true
    }], ["picture", {
      reserved: true
    }], ["pre", {
      reserved: false
    }], ["progress", {
      reserved: false
    }], ["q", {
      reserved: false
    }], ["rp", {
      reserved: false
    }], ["rt", {
      reserved: false
    }], ["rtc", {
      reserved: false
    }], ["ruby", {
      reserved: false
    }], ["s", {
      reserved: false
    }], ["samp", {
      reserved: false
    }], ["script", {
      reserved: true
    }], ["section", {
      reserved: false
    }], ["select", {
      reserved: false
    }], ["small", {
      reserved: false
    }], ["source", {
      reserved: true
    }], ["spacer", {
      reserved: false
    }], ["span", {
      reserved: false
    }], ["strike", {
      reserved: false
    }], ["strong", {
      reserved: false
    }], ["style", {
      reserved: true
    }], ["sub", {
      reserved: false
    }], ["summary", {
      reserved: false
    }], ["sup", {
      reserved: false
    }], ["table", {
      reserved: false
    }], ["tbody", {
      reserved: false
    }], ["td", {
      reserved: false
    }], ["textarea", {
      reserved: false
    }], ["tfoot", {
      reserved: false
    }], ["th", {
      reserved: false
    }], ["thead", {
      reserved: false
    }], ["time", {
      reserved: false
    }], ["title", {
      reserved: true
    }], ["tr", {
      reserved: false
    }], ["track", {
      reserved: true
    }], ["tt", {
      reserved: false
    }], ["u", {
      reserved: false
    }], ["ul", {
      reserved: false
    }], ["var", {
      reserved: false
    }], ["video", {
      reserved: false
    }], ["wbr", {
      reserved: false
    }], ["xmp", {
      reserved: false
    }]];
    var domMap = {
      entries: function entries() {
        return dom;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _dom = dom; _i < _dom.length; _i++) {
          var _dom$_i = _slicedToArray(_dom[_i], 2), key = _dom$_i[0], values = _dom$_i[1];
          fn.call(thisArg, values, key, dom);
        }
      },
      get: function get(key) {
        var item = dom.filter(function(tuple) {
          return tuple[0] === key ? true : false;
        })[0];
        return item && item[1];
      },
      has: function has(key) {
        return !!domMap.get(key);
      },
      keys: function keys() {
        return dom.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values() {
        return dom.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = exports.default = (0, _iterationDecorator.default)(domMap, domMap.entries());
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/commandRole.js
var require_commandRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/commandRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var commandRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget"]]
    };
    var _default = exports.default = commandRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js
var require_compositeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var compositeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-disabled": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget"]]
    };
    var _default = exports.default = compositeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/inputRole.js
var require_inputRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/inputRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var inputRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null
      },
      relatedConcepts: [{
        concept: {
          name: "input"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget"]]
    };
    var _default = exports.default = inputRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js
var require_landmarkRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var landmarkRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = landmarkRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js
var require_rangeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rangeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuenow": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = rangeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js
var require_roletypeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var roletypeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {
        "aria-atomic": null,
        "aria-busy": null,
        "aria-controls": null,
        "aria-current": null,
        "aria-describedby": null,
        "aria-details": null,
        "aria-dropeffect": null,
        "aria-flowto": null,
        "aria-grabbed": null,
        "aria-hidden": null,
        "aria-keyshortcuts": null,
        "aria-label": null,
        "aria-labelledby": null,
        "aria-live": null,
        "aria-owns": null,
        "aria-relevant": null,
        "aria-roledescription": null
      },
      relatedConcepts: [{
        concept: {
          name: "role"
        },
        module: "XHTML"
      }, {
        concept: {
          name: "type"
        },
        module: "Dublin Core"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: []
    };
    var _default = exports.default = roletypeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js
var require_sectionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var sectionRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "frontmatter"
        },
        module: "DTB"
      }, {
        concept: {
          name: "level"
        },
        module: "DTB"
      }, {
        concept: {
          name: "level"
        },
        module: "SMIL"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = sectionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js
var require_sectionheadRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var sectionheadRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = sectionheadRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/selectRole.js
var require_selectRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/selectRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var selectRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
    };
    var _default = exports.default = selectRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/structureRole.js
var require_structureRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/structureRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var structureRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype"]]
    };
    var _default = exports.default = structureRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js
var require_widgetRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var widgetRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype"]]
    };
    var _default = exports.default = widgetRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/windowRole.js
var require_windowRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/abstract/windowRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var windowRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-modal": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype"]]
    };
    var _default = exports.default = windowRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js
var require_ariaAbstractRoles = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _commandRole = _interopRequireDefault(require_commandRole());
    var _compositeRole = _interopRequireDefault(require_compositeRole());
    var _inputRole = _interopRequireDefault(require_inputRole());
    var _landmarkRole = _interopRequireDefault(require_landmarkRole());
    var _rangeRole = _interopRequireDefault(require_rangeRole());
    var _roletypeRole = _interopRequireDefault(require_roletypeRole());
    var _sectionRole = _interopRequireDefault(require_sectionRole());
    var _sectionheadRole = _interopRequireDefault(require_sectionheadRole());
    var _selectRole = _interopRequireDefault(require_selectRole());
    var _structureRole = _interopRequireDefault(require_structureRole());
    var _widgetRole = _interopRequireDefault(require_widgetRole());
    var _windowRole = _interopRequireDefault(require_windowRole());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ariaAbstractRoles = [["command", _commandRole.default], ["composite", _compositeRole.default], ["input", _inputRole.default], ["landmark", _landmarkRole.default], ["range", _rangeRole.default], ["roletype", _roletypeRole.default], ["section", _sectionRole.default], ["sectionhead", _sectionheadRole.default], ["select", _selectRole.default], ["structure", _structureRole.default], ["widget", _widgetRole.default], ["window", _windowRole.default]];
    var _default = exports.default = ariaAbstractRoles;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/alertRole.js
var require_alertRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/alertRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var alertRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-atomic": "true",
        "aria-live": "assertive"
      },
      relatedConcepts: [{
        concept: {
          name: "alert"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = alertRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js
var require_alertdialogRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var alertdialogRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "alert"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
    };
    var _default = exports.default = alertdialogRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/applicationRole.js
var require_applicationRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/applicationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var applicationRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "Device Independence Delivery Unit"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = applicationRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/articleRole.js
var require_articleRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/articleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var articleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          name: "article"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "document"]]
    };
    var _default = exports.default = articleRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/bannerRole.js
var require_bannerRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/bannerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bannerRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          constraints: ["scoped to the body element"],
          name: "header"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = bannerRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js
var require_blockquoteRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var blockquoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "blockquote"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = blockquoteRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/buttonRole.js
var require_buttonRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/buttonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var buttonRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-pressed": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "button"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "image"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "reset"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "submit"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          name: "button"
        },
        module: "HTML"
      }, {
        concept: {
          name: "trigger"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command"]]
    };
    var _default = exports.default = buttonRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/captionRole.js
var require_captionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/captionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var captionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "caption"
        },
        module: "HTML"
      }],
      requireContextRole: ["figure", "grid", "table"],
      requiredContextRole: ["figure", "grid", "table"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = captionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/cellRole.js
var require_cellRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/cellRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var cellRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-colindex": null,
        "aria-colspan": null,
        "aria-rowindex": null,
        "aria-rowspan": null
      },
      relatedConcepts: [{
        concept: {
          constraints: ["ancestor table element has table role"],
          name: "td"
        },
        module: "HTML"
      }],
      requireContextRole: ["row"],
      requiredContextRole: ["row"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = cellRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js
var require_checkboxRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var checkboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-checked": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "checkbox"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          name: "option"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = exports.default = checkboxRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/codeRole.js
var require_codeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/codeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var codeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "code"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = codeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js
var require_columnheaderRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var columnheaderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-sort": null
      },
      relatedConcepts: [{
        concept: {
          name: "th"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "scope",
            value: "col"
          }],
          name: "th"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "scope",
            value: "colgroup"
          }],
          name: "th"
        },
        module: "HTML"
      }],
      requireContextRole: ["row"],
      requiredContextRole: ["row"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
    };
    var _default = exports.default = columnheaderRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js
var require_comboboxRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var comboboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-autocomplete": null,
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-expanded": "false",
        "aria-haspopup": "listbox"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "email"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "search"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "tel"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "text"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "url"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "url"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "multiple"
          }, {
            constraints: ["undefined"],
            name: "size"
          }],
          constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          name: "select"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-controls": null,
        "aria-expanded": "false"
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = exports.default = comboboxRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js
var require_complementaryRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var complementaryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          constraints: ["scoped to the body element", "scoped to the main element"],
          name: "aside"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-label"
          }],
          constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
          name: "aside"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-labelledby"
          }],
          constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
          name: "aside"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = complementaryRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js
var require_contentinfoRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var contentinfoRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          constraints: ["scoped to the body element"],
          name: "footer"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = contentinfoRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/definitionRole.js
var require_definitionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/definitionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var definitionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "dd"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = definitionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/deletionRole.js
var require_deletionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/deletionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var deletionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "del"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = deletionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/dialogRole.js
var require_dialogRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/dialogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var dialogRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "dialog"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "window"]]
    };
    var _default = exports.default = dialogRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/directoryRole.js
var require_directoryRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/directoryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var directoryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        module: "DAISY Guide"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "list"]]
    };
    var _default = exports.default = directoryRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/documentRole.js
var require_documentRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/documentRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var documentRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "Device Independence Delivery Unit"
        }
      }, {
        concept: {
          name: "html"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = documentRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js
var require_emphasisRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var emphasisRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "em"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = emphasisRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/feedRole.js
var require_feedRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/feedRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var feedRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["article"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "list"]]
    };
    var _default = exports.default = feedRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/figureRole.js
var require_figureRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/figureRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var figureRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "figure"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = figureRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/formRole.js
var require_formRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/formRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var formRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-label"
          }],
          name: "form"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-labelledby"
          }],
          name: "form"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "name"
          }],
          name: "form"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = formRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/genericRole.js
var require_genericRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/genericRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var genericRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "a"
        },
        module: "HTML"
      }, {
        concept: {
          name: "area"
        },
        module: "HTML"
      }, {
        concept: {
          name: "aside"
        },
        module: "HTML"
      }, {
        concept: {
          name: "b"
        },
        module: "HTML"
      }, {
        concept: {
          name: "bdo"
        },
        module: "HTML"
      }, {
        concept: {
          name: "body"
        },
        module: "HTML"
      }, {
        concept: {
          name: "data"
        },
        module: "HTML"
      }, {
        concept: {
          name: "div"
        },
        module: "HTML"
      }, {
        concept: {
          constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
          name: "footer"
        },
        module: "HTML"
      }, {
        concept: {
          constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
          name: "header"
        },
        module: "HTML"
      }, {
        concept: {
          name: "hgroup"
        },
        module: "HTML"
      }, {
        concept: {
          name: "i"
        },
        module: "HTML"
      }, {
        concept: {
          name: "pre"
        },
        module: "HTML"
      }, {
        concept: {
          name: "q"
        },
        module: "HTML"
      }, {
        concept: {
          name: "samp"
        },
        module: "HTML"
      }, {
        concept: {
          name: "section"
        },
        module: "HTML"
      }, {
        concept: {
          name: "small"
        },
        module: "HTML"
      }, {
        concept: {
          name: "span"
        },
        module: "HTML"
      }, {
        concept: {
          name: "u"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = genericRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/gridRole.js
var require_gridRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/gridRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var gridRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-multiselectable": null,
        "aria-readonly": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["row"], ["row", "rowgroup"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
    };
    var _default = exports.default = gridRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js
var require_gridcellRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var gridcellRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-selected": null
      },
      relatedConcepts: [{
        concept: {
          constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
          name: "td"
        },
        module: "HTML"
      }],
      requireContextRole: ["row"],
      requiredContextRole: ["row"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
    };
    var _default = exports.default = gridcellRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/groupRole.js
var require_groupRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/groupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var groupRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-disabled": null
      },
      relatedConcepts: [{
        concept: {
          name: "details"
        },
        module: "HTML"
      }, {
        concept: {
          name: "fieldset"
        },
        module: "HTML"
      }, {
        concept: {
          name: "optgroup"
        },
        module: "HTML"
      }, {
        concept: {
          name: "address"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = groupRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/headingRole.js
var require_headingRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/headingRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var headingRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-level": "2"
      },
      relatedConcepts: [{
        concept: {
          name: "h1"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h2"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h3"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h4"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h5"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h6"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-level": "2"
      },
      superClass: [["roletype", "structure", "sectionhead"]]
    };
    var _default = exports.default = headingRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/imgRole.js
var require_imgRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/imgRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var imgRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "alt"
          }],
          name: "img"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "alt"
          }],
          name: "img"
        },
        module: "HTML"
      }, {
        concept: {
          name: "imggroup"
        },
        module: "DTB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = imgRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/insertionRole.js
var require_insertionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/insertionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var insertionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "ins"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = insertionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/linkRole.js
var require_linkRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/linkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var linkRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "href"
          }],
          name: "a"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "href"
          }],
          name: "area"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command"]]
    };
    var _default = exports.default = linkRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/listRole.js
var require_listRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/listRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var listRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menu"
        },
        module: "HTML"
      }, {
        concept: {
          name: "ol"
        },
        module: "HTML"
      }, {
        concept: {
          name: "ul"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["listitem"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = listRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/listboxRole.js
var require_listboxRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/listboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var listboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-invalid": null,
        "aria-multiselectable": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-orientation": "vertical"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: [">1"],
            name: "size"
          }],
          constraints: ["the size attribute value is greater than 1"],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "multiple"
          }],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          name: "datalist"
        },
        module: "HTML"
      }, {
        concept: {
          name: "list"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "select"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["option", "group"], ["option"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = exports.default = listboxRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/listitemRole.js
var require_listitemRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/listitemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var listitemRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-level": null,
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
          name: "li"
        },
        module: "HTML"
      }, {
        concept: {
          name: "item"
        },
        module: "XForms"
      }],
      requireContextRole: ["directory", "list"],
      requiredContextRole: ["directory", "list"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = listitemRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/logRole.js
var require_logRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/logRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var logRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-live": "polite"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = logRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/mainRole.js
var require_mainRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/mainRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var mainRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "main"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = mainRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/markRole.js
var require_markRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/markRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var markRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: [],
      props: {
        "aria-braillelabel": null,
        "aria-brailleroledescription": null,
        "aria-description": null
      },
      relatedConcepts: [{
        concept: {
          name: "mark"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = markRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js
var require_marqueeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var marqueeRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = marqueeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/mathRole.js
var require_mathRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/mathRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var mathRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "math"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = mathRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuRole.js
var require_menuRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": "vertical"
      },
      relatedConcepts: [{
        concept: {
          name: "MENU"
        },
        module: "JAPI"
      }, {
        concept: {
          name: "list"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "select"
        },
        module: "XForms"
      }, {
        concept: {
          name: "sidebar"
        },
        module: "DTB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = exports.default = menuRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menubarRole.js
var require_menubarRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menubarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menubarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": "horizontal"
      },
      relatedConcepts: [{
        concept: {
          name: "toolbar"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
    };
    var _default = exports.default = menubarRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js
var require_menuitemRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuitemRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          name: "MENU_ITEM"
        },
        module: "JAPI"
      }, {
        concept: {
          name: "listitem"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "option"
        },
        module: "ARIA"
      }],
      requireContextRole: ["group", "menu", "menubar"],
      requiredContextRole: ["group", "menu", "menubar"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command"]]
    };
    var _default = exports.default = menuitemRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js
var require_menuitemcheckboxRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuitemcheckboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menuitem"
        },
        module: "ARIA"
      }],
      requireContextRole: ["group", "menu", "menubar"],
      requiredContextRole: ["group", "menu", "menubar"],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
    };
    var _default = exports.default = menuitemcheckboxRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js
var require_menuitemradioRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuitemradioRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menuitem"
        },
        module: "ARIA"
      }],
      requireContextRole: ["group", "menu", "menubar"],
      requiredContextRole: ["group", "menu", "menubar"],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
    };
    var _default = exports.default = menuitemradioRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/meterRole.js
var require_meterRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/meterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var meterRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-valuetext": null,
        "aria-valuemax": "100",
        "aria-valuemin": "0"
      },
      relatedConcepts: [{
        concept: {
          name: "meter"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-valuenow": null
      },
      superClass: [["roletype", "structure", "range"]]
    };
    var _default = exports.default = meterRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/navigationRole.js
var require_navigationRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/navigationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var navigationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "nav"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = navigationRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/noneRole.js
var require_noneRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/noneRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var noneRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: []
    };
    var _default = exports.default = noneRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/noteRole.js
var require_noteRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/noteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var noteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = noteRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/optionRole.js
var require_optionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/optionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var optionRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-checked": null,
        "aria-posinset": null,
        "aria-setsize": null,
        "aria-selected": "false"
      },
      relatedConcepts: [{
        concept: {
          name: "item"
        },
        module: "XForms"
      }, {
        concept: {
          name: "listitem"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "option"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-selected": "false"
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = exports.default = optionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js
var require_paragraphRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var paragraphRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "p"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = paragraphRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/presentationRole.js
var require_presentationRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/presentationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var presentationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "alt",
            value: ""
          }],
          name: "img"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = presentationRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js
var require_progressbarRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var progressbarRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-valuetext": null
      },
      relatedConcepts: [{
        concept: {
          name: "progress"
        },
        module: "HTML"
      }, {
        concept: {
          name: "status"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
    };
    var _default = exports.default = progressbarRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/radioRole.js
var require_radioRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/radioRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var radioRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-checked": null,
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "radio"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = exports.default = radioRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js
var require_radiogroupRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var radiogroupRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null
      },
      relatedConcepts: [{
        concept: {
          name: "list"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["radio"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = exports.default = radiogroupRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/regionRole.js
var require_regionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/regionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var regionRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-label"
          }],
          name: "section"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-labelledby"
          }],
          name: "section"
        },
        module: "HTML"
      }, {
        concept: {
          name: "Device Independence Glossart perceivable unit"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = regionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/rowRole.js
var require_rowRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/rowRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rowRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-colindex": null,
        "aria-expanded": null,
        "aria-level": null,
        "aria-posinset": null,
        "aria-rowindex": null,
        "aria-selected": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          name: "tr"
        },
        module: "HTML"
      }],
      requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
      requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
      requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
    };
    var _default = exports.default = rowRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js
var require_rowgroupRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rowgroupRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "tbody"
        },
        module: "HTML"
      }, {
        concept: {
          name: "tfoot"
        },
        module: "HTML"
      }, {
        concept: {
          name: "thead"
        },
        module: "HTML"
      }],
      requireContextRole: ["grid", "table", "treegrid"],
      requiredContextRole: ["grid", "table", "treegrid"],
      requiredOwnedElements: [["row"]],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = rowgroupRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js
var require_rowheaderRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rowheaderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-sort": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "scope",
            value: "row"
          }],
          name: "th"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "scope",
            value: "rowgroup"
          }],
          name: "th"
        },
        module: "HTML"
      }],
      requireContextRole: ["row", "rowgroup"],
      requiredContextRole: ["row", "rowgroup"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
    };
    var _default = exports.default = rowheaderRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js
var require_scrollbarRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var scrollbarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-valuetext": null,
        "aria-orientation": "vertical",
        "aria-valuemax": "100",
        "aria-valuemin": "0"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-controls": null,
        "aria-valuenow": null
      },
      superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
    };
    var _default = exports.default = scrollbarRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/searchRole.js
var require_searchRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/searchRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var searchRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = searchRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js
var require_searchboxRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var searchboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "search"
          }],
          constraints: ["the list attribute is not set"],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "input", "textbox"]]
    };
    var _default = exports.default = searchboxRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/separatorRole.js
var require_separatorRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/separatorRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var separatorRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-orientation": "horizontal",
        "aria-valuemax": "100",
        "aria-valuemin": "0",
        "aria-valuenow": null,
        "aria-valuetext": null
      },
      relatedConcepts: [{
        concept: {
          name: "hr"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = exports.default = separatorRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/sliderRole.js
var require_sliderRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/sliderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var sliderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-valuetext": null,
        "aria-orientation": "horizontal",
        "aria-valuemax": "100",
        "aria-valuemin": "0"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "range"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-valuenow": null
      },
      superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
    };
    var _default = exports.default = sliderRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js
var require_spinbuttonRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var spinbuttonRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-valuetext": null,
        "aria-valuenow": "0"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "number"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
    };
    var _default = exports.default = spinbuttonRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/statusRole.js
var require_statusRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/statusRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var statusRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-atomic": "true",
        "aria-live": "polite"
      },
      relatedConcepts: [{
        concept: {
          name: "output"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = statusRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/strongRole.js
var require_strongRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/strongRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var strongRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "strong"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = strongRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js
var require_subscriptRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var subscriptRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "sub"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = subscriptRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js
var require_superscriptRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var superscriptRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "sup"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = superscriptRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/switchRole.js
var require_switchRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/switchRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var switchRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "button"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input", "checkbox"]]
    };
    var _default = exports.default = switchRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tabRole.js
var require_tabRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tabRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tabRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-posinset": null,
        "aria-setsize": null,
        "aria-selected": "false"
      },
      relatedConcepts: [],
      requireContextRole: ["tablist"],
      requiredContextRole: ["tablist"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
    };
    var _default = exports.default = tabRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tableRole.js
var require_tableRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tableRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tableRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-colcount": null,
        "aria-rowcount": null
      },
      relatedConcepts: [{
        concept: {
          name: "table"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["row"], ["row", "rowgroup"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = tableRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tablistRole.js
var require_tablistRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tablistRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tablistRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-level": null,
        "aria-multiselectable": null,
        "aria-orientation": "horizontal"
      },
      relatedConcepts: [{
        module: "DAISY",
        concept: {
          name: "guide"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["tab"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"]]
    };
    var _default = exports.default = tablistRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js
var require_tabpanelRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tabpanelRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = tabpanelRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/termRole.js
var require_termRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/termRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var termRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "dfn"
        },
        module: "HTML"
      }, {
        concept: {
          name: "dt"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = termRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/textboxRole.js
var require_textboxRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/textboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var textboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-autocomplete": null,
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-multiline": null,
        "aria-placeholder": null,
        "aria-readonly": null,
        "aria-required": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "type"
          }, {
            constraints: ["undefined"],
            name: "list"
          }],
          constraints: ["the list attribute is not set"],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "email"
          }],
          constraints: ["the list attribute is not set"],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "tel"
          }],
          constraints: ["the list attribute is not set"],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "text"
          }],
          constraints: ["the list attribute is not set"],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "url"
          }],
          constraints: ["the list attribute is not set"],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          name: "input"
        },
        module: "XForms"
      }, {
        concept: {
          name: "textarea"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = exports.default = textboxRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/timeRole.js
var require_timeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/timeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var timeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "time"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = timeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/timerRole.js
var require_timerRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/timerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var timerRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "status"]]
    };
    var _default = exports.default = timerRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js
var require_toolbarRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var toolbarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": "horizontal"
      },
      relatedConcepts: [{
        concept: {
          name: "menubar"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "group"]]
    };
    var _default = exports.default = toolbarRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js
var require_tooltipRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tooltipRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = tooltipRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/treeRole.js
var require_treeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/treeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var treeRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-multiselectable": null,
        "aria-required": null,
        "aria-orientation": "vertical"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = exports.default = treeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/treegridRole.js
var require_treegridRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/treegridRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var treegridRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["row"], ["row", "rowgroup"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
    };
    var _default = exports.default = treegridRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js
var require_treeitemRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var treeitemRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-expanded": null,
        "aria-haspopup": null
      },
      relatedConcepts: [],
      requireContextRole: ["group", "tree"],
      requiredContextRole: ["group", "tree"],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-selected": null
      },
      superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
    };
    var _default = exports.default = treeitemRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js
var require_ariaLiteralRoles = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _alertRole = _interopRequireDefault(require_alertRole());
    var _alertdialogRole = _interopRequireDefault(require_alertdialogRole());
    var _applicationRole = _interopRequireDefault(require_applicationRole());
    var _articleRole = _interopRequireDefault(require_articleRole());
    var _bannerRole = _interopRequireDefault(require_bannerRole());
    var _blockquoteRole = _interopRequireDefault(require_blockquoteRole());
    var _buttonRole = _interopRequireDefault(require_buttonRole());
    var _captionRole = _interopRequireDefault(require_captionRole());
    var _cellRole = _interopRequireDefault(require_cellRole());
    var _checkboxRole = _interopRequireDefault(require_checkboxRole());
    var _codeRole = _interopRequireDefault(require_codeRole());
    var _columnheaderRole = _interopRequireDefault(require_columnheaderRole());
    var _comboboxRole = _interopRequireDefault(require_comboboxRole());
    var _complementaryRole = _interopRequireDefault(require_complementaryRole());
    var _contentinfoRole = _interopRequireDefault(require_contentinfoRole());
    var _definitionRole = _interopRequireDefault(require_definitionRole());
    var _deletionRole = _interopRequireDefault(require_deletionRole());
    var _dialogRole = _interopRequireDefault(require_dialogRole());
    var _directoryRole = _interopRequireDefault(require_directoryRole());
    var _documentRole = _interopRequireDefault(require_documentRole());
    var _emphasisRole = _interopRequireDefault(require_emphasisRole());
    var _feedRole = _interopRequireDefault(require_feedRole());
    var _figureRole = _interopRequireDefault(require_figureRole());
    var _formRole = _interopRequireDefault(require_formRole());
    var _genericRole = _interopRequireDefault(require_genericRole());
    var _gridRole = _interopRequireDefault(require_gridRole());
    var _gridcellRole = _interopRequireDefault(require_gridcellRole());
    var _groupRole = _interopRequireDefault(require_groupRole());
    var _headingRole = _interopRequireDefault(require_headingRole());
    var _imgRole = _interopRequireDefault(require_imgRole());
    var _insertionRole = _interopRequireDefault(require_insertionRole());
    var _linkRole = _interopRequireDefault(require_linkRole());
    var _listRole = _interopRequireDefault(require_listRole());
    var _listboxRole = _interopRequireDefault(require_listboxRole());
    var _listitemRole = _interopRequireDefault(require_listitemRole());
    var _logRole = _interopRequireDefault(require_logRole());
    var _mainRole = _interopRequireDefault(require_mainRole());
    var _markRole = _interopRequireDefault(require_markRole());
    var _marqueeRole = _interopRequireDefault(require_marqueeRole());
    var _mathRole = _interopRequireDefault(require_mathRole());
    var _menuRole = _interopRequireDefault(require_menuRole());
    var _menubarRole = _interopRequireDefault(require_menubarRole());
    var _menuitemRole = _interopRequireDefault(require_menuitemRole());
    var _menuitemcheckboxRole = _interopRequireDefault(require_menuitemcheckboxRole());
    var _menuitemradioRole = _interopRequireDefault(require_menuitemradioRole());
    var _meterRole = _interopRequireDefault(require_meterRole());
    var _navigationRole = _interopRequireDefault(require_navigationRole());
    var _noneRole = _interopRequireDefault(require_noneRole());
    var _noteRole = _interopRequireDefault(require_noteRole());
    var _optionRole = _interopRequireDefault(require_optionRole());
    var _paragraphRole = _interopRequireDefault(require_paragraphRole());
    var _presentationRole = _interopRequireDefault(require_presentationRole());
    var _progressbarRole = _interopRequireDefault(require_progressbarRole());
    var _radioRole = _interopRequireDefault(require_radioRole());
    var _radiogroupRole = _interopRequireDefault(require_radiogroupRole());
    var _regionRole = _interopRequireDefault(require_regionRole());
    var _rowRole = _interopRequireDefault(require_rowRole());
    var _rowgroupRole = _interopRequireDefault(require_rowgroupRole());
    var _rowheaderRole = _interopRequireDefault(require_rowheaderRole());
    var _scrollbarRole = _interopRequireDefault(require_scrollbarRole());
    var _searchRole = _interopRequireDefault(require_searchRole());
    var _searchboxRole = _interopRequireDefault(require_searchboxRole());
    var _separatorRole = _interopRequireDefault(require_separatorRole());
    var _sliderRole = _interopRequireDefault(require_sliderRole());
    var _spinbuttonRole = _interopRequireDefault(require_spinbuttonRole());
    var _statusRole = _interopRequireDefault(require_statusRole());
    var _strongRole = _interopRequireDefault(require_strongRole());
    var _subscriptRole = _interopRequireDefault(require_subscriptRole());
    var _superscriptRole = _interopRequireDefault(require_superscriptRole());
    var _switchRole = _interopRequireDefault(require_switchRole());
    var _tabRole = _interopRequireDefault(require_tabRole());
    var _tableRole = _interopRequireDefault(require_tableRole());
    var _tablistRole = _interopRequireDefault(require_tablistRole());
    var _tabpanelRole = _interopRequireDefault(require_tabpanelRole());
    var _termRole = _interopRequireDefault(require_termRole());
    var _textboxRole = _interopRequireDefault(require_textboxRole());
    var _timeRole = _interopRequireDefault(require_timeRole());
    var _timerRole = _interopRequireDefault(require_timerRole());
    var _toolbarRole = _interopRequireDefault(require_toolbarRole());
    var _tooltipRole = _interopRequireDefault(require_tooltipRole());
    var _treeRole = _interopRequireDefault(require_treeRole());
    var _treegridRole = _interopRequireDefault(require_treegridRole());
    var _treeitemRole = _interopRequireDefault(require_treeitemRole());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ariaLiteralRoles = [["alert", _alertRole.default], ["alertdialog", _alertdialogRole.default], ["application", _applicationRole.default], ["article", _articleRole.default], ["banner", _bannerRole.default], ["blockquote", _blockquoteRole.default], ["button", _buttonRole.default], ["caption", _captionRole.default], ["cell", _cellRole.default], ["checkbox", _checkboxRole.default], ["code", _codeRole.default], ["columnheader", _columnheaderRole.default], ["combobox", _comboboxRole.default], ["complementary", _complementaryRole.default], ["contentinfo", _contentinfoRole.default], ["definition", _definitionRole.default], ["deletion", _deletionRole.default], ["dialog", _dialogRole.default], ["directory", _directoryRole.default], ["document", _documentRole.default], ["emphasis", _emphasisRole.default], ["feed", _feedRole.default], ["figure", _figureRole.default], ["form", _formRole.default], ["generic", _genericRole.default], ["grid", _gridRole.default], ["gridcell", _gridcellRole.default], ["group", _groupRole.default], ["heading", _headingRole.default], ["img", _imgRole.default], ["insertion", _insertionRole.default], ["link", _linkRole.default], ["list", _listRole.default], ["listbox", _listboxRole.default], ["listitem", _listitemRole.default], ["log", _logRole.default], ["main", _mainRole.default], ["mark", _markRole.default], ["marquee", _marqueeRole.default], ["math", _mathRole.default], ["menu", _menuRole.default], ["menubar", _menubarRole.default], ["menuitem", _menuitemRole.default], ["menuitemcheckbox", _menuitemcheckboxRole.default], ["menuitemradio", _menuitemradioRole.default], ["meter", _meterRole.default], ["navigation", _navigationRole.default], ["none", _noneRole.default], ["note", _noteRole.default], ["option", _optionRole.default], ["paragraph", _paragraphRole.default], ["presentation", _presentationRole.default], ["progressbar", _progressbarRole.default], ["radio", _radioRole.default], ["radiogroup", _radiogroupRole.default], ["region", _regionRole.default], ["row", _rowRole.default], ["rowgroup", _rowgroupRole.default], ["rowheader", _rowheaderRole.default], ["scrollbar", _scrollbarRole.default], ["search", _searchRole.default], ["searchbox", _searchboxRole.default], ["separator", _separatorRole.default], ["slider", _sliderRole.default], ["spinbutton", _spinbuttonRole.default], ["status", _statusRole.default], ["strong", _strongRole.default], ["subscript", _subscriptRole.default], ["superscript", _superscriptRole.default], ["switch", _switchRole.default], ["tab", _tabRole.default], ["table", _tableRole.default], ["tablist", _tablistRole.default], ["tabpanel", _tabpanelRole.default], ["term", _termRole.default], ["textbox", _textboxRole.default], ["time", _timeRole.default], ["timer", _timerRole.default], ["toolbar", _toolbarRole.default], ["tooltip", _tooltipRole.default], ["tree", _treeRole.default], ["treegrid", _treegridRole.default], ["treeitem", _treeitemRole.default]];
    var _default = exports.default = ariaLiteralRoles;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js
var require_docAbstractRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAbstractRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "abstract [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docAbstractRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js
var require_docAcknowledgmentsRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAcknowledgmentsRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "acknowledgments [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docAcknowledgmentsRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js
var require_docAfterwordRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAfterwordRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "afterword [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docAfterwordRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js
var require_docAppendixRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAppendixRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "appendix [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docAppendixRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js
var require_docBacklinkRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBacklinkRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "referrer [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = exports.default = docBacklinkRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js
var require_docBiblioentryRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBiblioentryRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "EPUB biblioentry [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: ["doc-bibliography"],
      requiredContextRole: ["doc-bibliography"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "listitem"]]
    };
    var _default = exports.default = docBiblioentryRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js
var require_docBibliographyRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBibliographyRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "bibliography [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["doc-biblioentry"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docBibliographyRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js
var require_docBibliorefRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBibliorefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "biblioref [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = exports.default = docBibliorefRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js
var require_docChapterRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docChapterRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "chapter [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docChapterRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js
var require_docColophonRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docColophonRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "colophon [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docColophonRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js
var require_docConclusionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docConclusionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "conclusion [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docConclusionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js
var require_docCoverRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docCoverRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "cover [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "img"]]
    };
    var _default = exports.default = docCoverRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js
var require_docCreditRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docCreditRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "credit [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docCreditRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js
var require_docCreditsRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docCreditsRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "credits [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docCreditsRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js
var require_docDedicationRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docDedicationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "dedication [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docDedicationRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js
var require_docEndnoteRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEndnoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "rearnote [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: ["doc-endnotes"],
      requiredContextRole: ["doc-endnotes"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "listitem"]]
    };
    var _default = exports.default = docEndnoteRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js
var require_docEndnotesRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEndnotesRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "rearnotes [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["doc-endnote"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docEndnotesRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js
var require_docEpigraphRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEpigraphRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "epigraph [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docEpigraphRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js
var require_docEpilogueRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEpilogueRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "epilogue [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docEpilogueRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js
var require_docErrataRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docErrataRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "errata [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docErrataRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js
var require_docExampleRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docExampleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docExampleRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js
var require_docFootnoteRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docFootnoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "footnote [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docFootnoteRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js
var require_docForewordRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docForewordRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "foreword [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docForewordRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js
var require_docGlossaryRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docGlossaryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "glossary [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["definition"], ["term"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docGlossaryRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js
var require_docGlossrefRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docGlossrefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "glossref [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = exports.default = docGlossrefRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js
var require_docIndexRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docIndexRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "index [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
    };
    var _default = exports.default = docIndexRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js
var require_docIntroductionRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docIntroductionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "introduction [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docIntroductionRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js
var require_docNoterefRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docNoterefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "noteref [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = exports.default = docNoterefRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js
var require_docNoticeRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docNoticeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "notice [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "note"]]
    };
    var _default = exports.default = docNoticeRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js
var require_docPagebreakRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPagebreakRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "pagebreak [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "separator"]]
    };
    var _default = exports.default = docPagebreakRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPagefooterRole.js
var require_docPagefooterRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPagefooterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPagefooterRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: [],
      props: {
        "aria-braillelabel": null,
        "aria-brailleroledescription": null,
        "aria-description": null,
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docPagefooterRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPageheaderRole.js
var require_docPageheaderRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPageheaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPageheaderRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: [],
      props: {
        "aria-braillelabel": null,
        "aria-brailleroledescription": null,
        "aria-description": null,
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docPageheaderRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js
var require_docPagelistRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPagelistRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "page-list [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
    };
    var _default = exports.default = docPagelistRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js
var require_docPartRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPartRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "part [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docPartRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js
var require_docPrefaceRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPrefaceRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "preface [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docPrefaceRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js
var require_docPrologueRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPrologueRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "prologue [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = exports.default = docPrologueRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js
var require_docPullquoteRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPullquoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "pullquote [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["none"]]
    };
    var _default = exports.default = docPullquoteRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js
var require_docQnaRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docQnaRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "qna [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = exports.default = docQnaRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js
var require_docSubtitleRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docSubtitleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "subtitle [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "sectionhead"]]
    };
    var _default = exports.default = docSubtitleRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js
var require_docTipRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docTipRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "help [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "note"]]
    };
    var _default = exports.default = docTipRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js
var require_docTocRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docTocRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "toc [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
    };
    var _default = exports.default = docTocRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js
var require_ariaDpubRoles = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _docAbstractRole = _interopRequireDefault(require_docAbstractRole());
    var _docAcknowledgmentsRole = _interopRequireDefault(require_docAcknowledgmentsRole());
    var _docAfterwordRole = _interopRequireDefault(require_docAfterwordRole());
    var _docAppendixRole = _interopRequireDefault(require_docAppendixRole());
    var _docBacklinkRole = _interopRequireDefault(require_docBacklinkRole());
    var _docBiblioentryRole = _interopRequireDefault(require_docBiblioentryRole());
    var _docBibliographyRole = _interopRequireDefault(require_docBibliographyRole());
    var _docBibliorefRole = _interopRequireDefault(require_docBibliorefRole());
    var _docChapterRole = _interopRequireDefault(require_docChapterRole());
    var _docColophonRole = _interopRequireDefault(require_docColophonRole());
    var _docConclusionRole = _interopRequireDefault(require_docConclusionRole());
    var _docCoverRole = _interopRequireDefault(require_docCoverRole());
    var _docCreditRole = _interopRequireDefault(require_docCreditRole());
    var _docCreditsRole = _interopRequireDefault(require_docCreditsRole());
    var _docDedicationRole = _interopRequireDefault(require_docDedicationRole());
    var _docEndnoteRole = _interopRequireDefault(require_docEndnoteRole());
    var _docEndnotesRole = _interopRequireDefault(require_docEndnotesRole());
    var _docEpigraphRole = _interopRequireDefault(require_docEpigraphRole());
    var _docEpilogueRole = _interopRequireDefault(require_docEpilogueRole());
    var _docErrataRole = _interopRequireDefault(require_docErrataRole());
    var _docExampleRole = _interopRequireDefault(require_docExampleRole());
    var _docFootnoteRole = _interopRequireDefault(require_docFootnoteRole());
    var _docForewordRole = _interopRequireDefault(require_docForewordRole());
    var _docGlossaryRole = _interopRequireDefault(require_docGlossaryRole());
    var _docGlossrefRole = _interopRequireDefault(require_docGlossrefRole());
    var _docIndexRole = _interopRequireDefault(require_docIndexRole());
    var _docIntroductionRole = _interopRequireDefault(require_docIntroductionRole());
    var _docNoterefRole = _interopRequireDefault(require_docNoterefRole());
    var _docNoticeRole = _interopRequireDefault(require_docNoticeRole());
    var _docPagebreakRole = _interopRequireDefault(require_docPagebreakRole());
    var _docPagefooterRole = _interopRequireDefault(require_docPagefooterRole());
    var _docPageheaderRole = _interopRequireDefault(require_docPageheaderRole());
    var _docPagelistRole = _interopRequireDefault(require_docPagelistRole());
    var _docPartRole = _interopRequireDefault(require_docPartRole());
    var _docPrefaceRole = _interopRequireDefault(require_docPrefaceRole());
    var _docPrologueRole = _interopRequireDefault(require_docPrologueRole());
    var _docPullquoteRole = _interopRequireDefault(require_docPullquoteRole());
    var _docQnaRole = _interopRequireDefault(require_docQnaRole());
    var _docSubtitleRole = _interopRequireDefault(require_docSubtitleRole());
    var _docTipRole = _interopRequireDefault(require_docTipRole());
    var _docTocRole = _interopRequireDefault(require_docTocRole());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ariaDpubRoles = [["doc-abstract", _docAbstractRole.default], ["doc-acknowledgments", _docAcknowledgmentsRole.default], ["doc-afterword", _docAfterwordRole.default], ["doc-appendix", _docAppendixRole.default], ["doc-backlink", _docBacklinkRole.default], ["doc-biblioentry", _docBiblioentryRole.default], ["doc-bibliography", _docBibliographyRole.default], ["doc-biblioref", _docBibliorefRole.default], ["doc-chapter", _docChapterRole.default], ["doc-colophon", _docColophonRole.default], ["doc-conclusion", _docConclusionRole.default], ["doc-cover", _docCoverRole.default], ["doc-credit", _docCreditRole.default], ["doc-credits", _docCreditsRole.default], ["doc-dedication", _docDedicationRole.default], ["doc-endnote", _docEndnoteRole.default], ["doc-endnotes", _docEndnotesRole.default], ["doc-epigraph", _docEpigraphRole.default], ["doc-epilogue", _docEpilogueRole.default], ["doc-errata", _docErrataRole.default], ["doc-example", _docExampleRole.default], ["doc-footnote", _docFootnoteRole.default], ["doc-foreword", _docForewordRole.default], ["doc-glossary", _docGlossaryRole.default], ["doc-glossref", _docGlossrefRole.default], ["doc-index", _docIndexRole.default], ["doc-introduction", _docIntroductionRole.default], ["doc-noteref", _docNoterefRole.default], ["doc-notice", _docNoticeRole.default], ["doc-pagebreak", _docPagebreakRole.default], ["doc-pagefooter", _docPagefooterRole.default], ["doc-pageheader", _docPageheaderRole.default], ["doc-pagelist", _docPagelistRole.default], ["doc-part", _docPartRole.default], ["doc-preface", _docPrefaceRole.default], ["doc-prologue", _docPrologueRole.default], ["doc-pullquote", _docPullquoteRole.default], ["doc-qna", _docQnaRole.default], ["doc-subtitle", _docSubtitleRole.default], ["doc-tip", _docTipRole.default], ["doc-toc", _docTocRole.default]];
    var _default = exports.default = ariaDpubRoles;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js
var require_graphicsDocumentRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var graphicsDocumentRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        module: "GRAPHICS",
        concept: {
          name: "graphics-object"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "img"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "article"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "document"]]
    };
    var _default = exports.default = graphicsDocumentRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js
var require_graphicsObjectRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var graphicsObjectRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        module: "GRAPHICS",
        concept: {
          name: "graphics-document"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "group"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "img"
        }
      }, {
        module: "GRAPHICS",
        concept: {
          name: "graphics-symbol"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "group"]]
    };
    var _default = exports.default = graphicsObjectRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js
var require_graphicsSymbolRole = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var graphicsSymbolRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "img"]]
    };
    var _default = exports.default = graphicsSymbolRole;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js
var require_ariaGraphicsRoles = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _graphicsDocumentRole = _interopRequireDefault(require_graphicsDocumentRole());
    var _graphicsObjectRole = _interopRequireDefault(require_graphicsObjectRole());
    var _graphicsSymbolRole = _interopRequireDefault(require_graphicsSymbolRole());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ariaGraphicsRoles = [["graphics-document", _graphicsDocumentRole.default], ["graphics-object", _graphicsObjectRole.default], ["graphics-symbol", _graphicsSymbolRole.default]];
    var _default = exports.default = ariaGraphicsRoles;
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/rolesMap.js
var require_rolesMap = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/rolesMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ariaAbstractRoles = _interopRequireDefault(require_ariaAbstractRoles());
    var _ariaLiteralRoles = _interopRequireDefault(require_ariaLiteralRoles());
    var _ariaDpubRoles = _interopRequireDefault(require_ariaDpubRoles());
    var _ariaGraphicsRoles = _interopRequireDefault(require_ariaGraphicsRoles());
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _createForOfIteratorHelper(r, e) {
      var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
          t && (r = t);
          var _n = 0, F = function F2() {
          };
          return { s: F, n: function n() {
            return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
          }, e: function e2(r2) {
            throw r2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o, a = true, u = false;
      return { s: function s() {
        t = t.call(r);
      }, n: function n() {
        var r2 = t.next();
        return a = r2.done, r2;
      }, e: function e2(r2) {
        u = true, o = r2;
      }, f: function f() {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      } };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    var roles = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default, _ariaGraphicsRoles.default);
    roles.forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), roleDefinition = _ref2[1];
      var _iterator = _createForOfIteratorHelper(roleDefinition.superClass), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var superClassIter = _step.value;
          var _iterator2 = _createForOfIteratorHelper(superClassIter), _step2;
          try {
            var _loop = function _loop2() {
              var superClassName = _step2.value;
              var superClassRoleTuple = roles.filter(function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 1), name = _ref4[0];
                return name === superClassName;
              })[0];
              if (superClassRoleTuple) {
                var superClassDefinition = superClassRoleTuple[1];
                for (var _i = 0, _Object$keys = Object.keys(superClassDefinition.props); _i < _Object$keys.length; _i++) {
                  var prop = _Object$keys[_i];
                  if (
                    // $FlowIssue Accessing the hasOwnProperty on the Object prototype is fine.
                    !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)
                  ) {
                    roleDefinition.props[prop] = superClassDefinition.props[prop];
                  }
                }
              }
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    var rolesMap = {
      entries: function entries() {
        return roles;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _iterator3 = _createForOfIteratorHelper(roles), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _step3$value = _slicedToArray(_step3.value, 2), key = _step3$value[0], values = _step3$value[1];
            fn.call(thisArg, values, key, roles);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      get: function get(key) {
        var item = roles.filter(function(tuple) {
          return tuple[0] === key ? true : false;
        })[0];
        return item && item[1];
      },
      has: function has(key) {
        return !!rolesMap.get(key);
      },
      keys: function keys() {
        return roles.map(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 1), key = _ref6[0];
          return key;
        });
      },
      values: function values() {
        return roles.map(function(_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2), values2 = _ref8[1];
          return values2;
        });
      }
    };
    var _default = exports.default = (0, _iterationDecorator.default)(rolesMap, rolesMap.entries());
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/elementRoleMap.js
var require_elementRoleMap = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/elementRoleMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _rolesMap = _interopRequireDefault(require_rolesMap());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i2, u, a = [], f = true, o = false;
        try {
          if (i2 = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    var elementRoles = [];
    var keys = _rolesMap.default.keys();
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      role = _rolesMap.default.get(key);
      if (role) {
        concepts = [].concat(role.baseConcepts, role.relatedConcepts);
        _loop = function _loop2() {
          var relation = concepts[k];
          if (relation.module === "HTML") {
            var concept = relation.concept;
            if (concept) {
              var elementRoleRelation = elementRoles.filter(function(relation2) {
                return ariaRoleRelationConceptEquals(relation2[0], concept);
              })[0];
              var roles;
              if (elementRoleRelation) {
                roles = elementRoleRelation[1];
              } else {
                roles = [];
              }
              var isUnique = true;
              for (var _i = 0; _i < roles.length; _i++) {
                if (roles[_i] === key) {
                  isUnique = false;
                  break;
                }
              }
              if (isUnique) {
                roles.push(key);
              }
              if (!elementRoleRelation) {
                elementRoles.push([concept, roles]);
              }
            }
          }
        };
        for (k = 0; k < concepts.length; k++) {
          _loop();
        }
      }
    }
    var key;
    var role;
    var concepts;
    var _loop;
    var k;
    var i;
    var elementRoleMap = {
      entries: function entries() {
        return elementRoles;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i2 = 0, _elementRoles = elementRoles; _i2 < _elementRoles.length; _i2++) {
          var _elementRoles$_i = _slicedToArray(_elementRoles[_i2], 2), _key = _elementRoles$_i[0], values = _elementRoles$_i[1];
          fn.call(thisArg, values, _key, elementRoles);
        }
      },
      get: function get(key2) {
        var item = elementRoles.filter(function(tuple) {
          return key2.name === tuple[0].name && ariaRoleRelationConceptAttributeEquals(key2.attributes, tuple[0].attributes);
        })[0];
        return item && item[1];
      },
      has: function has(key2) {
        return !!elementRoleMap.get(key2);
      },
      keys: function keys2() {
        return elementRoles.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key2 = _ref2[0];
          return key2;
        });
      },
      values: function values() {
        return elementRoles.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    function ariaRoleRelationConceptEquals(a, b) {
      return a.name === b.name && ariaRoleRelationConstraintsEquals(a.constraints, b.constraints) && ariaRoleRelationConceptAttributeEquals(a.attributes, b.attributes);
    }
    function ariaRoleRelationConstraintsEquals(a, b) {
      if (a === void 0 && b !== void 0) {
        return false;
      }
      if (a !== void 0 && b === void 0) {
        return false;
      }
      if (a !== void 0 && b !== void 0) {
        if (a.length !== b.length) {
          return false;
        }
        for (var _i3 = 0; _i3 < a.length; _i3++) {
          if (a[_i3] !== b[_i3]) {
            return false;
          }
        }
      }
      return true;
    }
    function ariaRoleRelationConceptAttributeEquals(a, b) {
      if (a === void 0 && b !== void 0) {
        return false;
      }
      if (a !== void 0 && b === void 0) {
        return false;
      }
      if (a !== void 0 && b !== void 0) {
        if (a.length !== b.length) {
          return false;
        }
        for (var _i4 = 0; _i4 < a.length; _i4++) {
          if (a[_i4].name !== b[_i4].name || a[_i4].value !== b[_i4].value) {
            return false;
          }
          if (a[_i4].constraints === void 0 && b[_i4].constraints !== void 0) {
            return false;
          }
          if (a[_i4].constraints !== void 0 && b[_i4].constraints === void 0) {
            return false;
          }
          if (a[_i4].constraints !== void 0 && b[_i4].constraints !== void 0) {
            if (a[_i4].constraints.length !== b[_i4].constraints.length) {
              return false;
            }
            for (var j = 0; j < a[_i4].constraints.length; j++) {
              if (a[_i4].constraints[j] !== b[_i4].constraints[j]) {
                return false;
              }
            }
          }
        }
      }
      return true;
    }
    var _default = exports.default = (0, _iterationDecorator.default)(elementRoleMap, elementRoleMap.entries());
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/roleElementMap.js
var require_roleElementMap = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/roleElementMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _rolesMap = _interopRequireDefault(require_rolesMap());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i2, u, a = [], f = true, o = false;
        try {
          if (i2 = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    var roleElement = [];
    var keys = _rolesMap.default.keys();
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      role = _rolesMap.default.get(key);
      relationConcepts = [];
      if (role) {
        concepts = [].concat(role.baseConcepts, role.relatedConcepts);
        for (k = 0; k < concepts.length; k++) {
          relation = concepts[k];
          if (relation.module === "HTML") {
            concept = relation.concept;
            if (concept != null) {
              relationConcepts.push(concept);
            }
          }
        }
        if (relationConcepts.length > 0) {
          roleElement.push([key, relationConcepts]);
        }
      }
    }
    var key;
    var role;
    var relationConcepts;
    var concepts;
    var relation;
    var concept;
    var k;
    var i;
    var roleElementMap = {
      entries: function entries() {
        return roleElement;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _roleElement = roleElement; _i < _roleElement.length; _i++) {
          var _roleElement$_i = _slicedToArray(_roleElement[_i], 2), _key = _roleElement$_i[0], values = _roleElement$_i[1];
          fn.call(thisArg, values, _key, roleElement);
        }
      },
      get: function get(key2) {
        var item = roleElement.filter(function(tuple) {
          return tuple[0] === key2 ? true : false;
        })[0];
        return item && item[1];
      },
      has: function has(key2) {
        return !!roleElementMap.get(key2);
      },
      keys: function keys2() {
        return roleElement.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key2 = _ref2[0];
          return key2;
        });
      },
      values: function values() {
        return roleElement.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = exports.default = (0, _iterationDecorator.default)(roleElementMap, roleElementMap.entries());
  }
});

// node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/aria-query@5.3.2/node_modules/aria-query/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.roles = exports.roleElements = exports.elementRoles = exports.dom = exports.aria = void 0;
    var _ariaPropsMap = _interopRequireDefault(require_ariaPropsMap());
    var _domMap = _interopRequireDefault(require_domMap());
    var _rolesMap = _interopRequireDefault(require_rolesMap());
    var _elementRoleMap = _interopRequireDefault(require_elementRoleMap());
    var _roleElementMap = _interopRequireDefault(require_roleElementMap());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var aria = exports.aria = _ariaPropsMap.default;
    var dom = exports.dom = _domMap.default;
    var roles = exports.roles = _rolesMap.default;
    var elementRoles = exports.elementRoles = _elementRoleMap.default;
    var roleElements = exports.roleElements = _roleElementMap.default;
  }
});
export default require_lib();
//# sourceMappingURL=astro___aria-query.js.map
