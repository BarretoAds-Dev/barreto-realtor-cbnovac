import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/util/iteratorProxy.js
var require_iteratorProxy = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/util/iteratorProxy.js"(exports) {
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
    var _default = iteratorProxy;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/util/iterationDecorator.js
var require_iterationDecorator = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/util/iterationDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = iterationDecorator;
    var _iteratorProxy = _interopRequireDefault(require_iteratorProxy());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
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

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AbbrRole.js
var require_AbbrRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AbbrRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var AbbrRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "abbr"
        }
      }],
      type: "structure"
    };
    var _default = AbbrRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AlertDialogRole.js
var require_AlertDialogRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AlertDialogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var AlertDialogRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "alertdialog"
        }
      }],
      type: "window"
    };
    var _default = AlertDialogRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AlertRole.js
var require_AlertRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AlertRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var AlertRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "alert"
        }
      }],
      type: "structure"
    };
    var _default = AlertRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AnnotationRole.js
var require_AnnotationRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AnnotationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var AnnotationRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = AnnotationRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ApplicationRole.js
var require_ApplicationRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ApplicationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ApplicationRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "application"
        }
      }],
      type: "window"
    };
    var _default = ApplicationRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ArticleRole.js
var require_ArticleRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ArticleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ArticleRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "article"
        }
      }, {
        module: "HTML",
        concept: {
          name: "article"
        }
      }],
      type: "structure"
    };
    var _default = ArticleRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AudioRole.js
var require_AudioRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/AudioRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var AudioRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "audio"
        }
      }],
      type: "widget"
    };
    var _default = AudioRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/BannerRole.js
var require_BannerRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/BannerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var BannerRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "banner"
        }
      }],
      type: "structure"
    };
    var _default = BannerRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/BlockquoteRole.js
var require_BlockquoteRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/BlockquoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var BlockquoteRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "blockquote"
        }
      }],
      type: "structure"
    };
    var _default = BlockquoteRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/BusyIndicatorRole.js
var require_BusyIndicatorRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/BusyIndicatorRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var BusyIndicatorRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          attributes: [{
            name: "aria-busy",
            value: "true"
          }]
        }
      }],
      type: "widget"
    };
    var _default = BusyIndicatorRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ButtonRole.js
var require_ButtonRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ButtonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ButtonRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "button"
        }
      }, {
        module: "HTML",
        concept: {
          name: "button"
        }
      }],
      type: "widget"
    };
    var _default = ButtonRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CanvasRole.js
var require_CanvasRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CanvasRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var CanvasRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "canvas"
        }
      }],
      type: "widget"
    };
    var _default = CanvasRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CaptionRole.js
var require_CaptionRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CaptionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var CaptionRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "caption"
        }
      }],
      type: "structure"
    };
    var _default = CaptionRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CellRole.js
var require_CellRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CellRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var CellRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "cell"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "gridcell"
        }
      }, {
        module: "HTML",
        concept: {
          name: "td"
        }
      }],
      type: "widget"
    };
    var _default = CellRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CheckBoxRole.js
var require_CheckBoxRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/CheckBoxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var CheckBoxRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "checkbox"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "checkbox"
          }]
        }
      }],
      type: "widget"
    };
    var _default = CheckBoxRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ColorWellRole.js
var require_ColorWellRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ColorWellRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ColorWellRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "color"
          }]
        }
      }],
      type: "widget"
    };
    var _default = ColorWellRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ColumnHeaderRole.js
var require_ColumnHeaderRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ColumnHeaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ColumnHeaderRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "columnheader"
        }
      }, {
        module: "HTML",
        concept: {
          name: "th"
        }
      }],
      type: "widget"
    };
    var _default = ColumnHeaderRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ColumnRole.js
var require_ColumnRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ColumnRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ColumnRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = ColumnRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ComboBoxRole.js
var require_ComboBoxRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ComboBoxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ComboBoxRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "combobox"
        }
      }, {
        module: "HTML",
        concept: {
          name: "select"
        }
      }],
      type: "widget"
    };
    var _default = ComboBoxRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ComplementaryRole.js
var require_ComplementaryRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ComplementaryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ComplementaryRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "complementary"
        }
      }],
      type: "structure"
    };
    var _default = ComplementaryRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ContentInfoRole.js
var require_ContentInfoRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ContentInfoRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ContentInfoRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "structureinfo"
        }
      }],
      type: "structure"
    };
    var _default = ContentInfoRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DateRole.js
var require_DateRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DateRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DateRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "date"
          }]
        }
      }],
      type: "widget"
    };
    var _default = DateRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DateTimeRole.js
var require_DateTimeRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DateTimeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DateTimeRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "datetime"
          }]
        }
      }],
      type: "widget"
    };
    var _default = DateTimeRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DefinitionRole.js
var require_DefinitionRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DefinitionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DefinitionRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "dfn"
        }
      }],
      type: "structure"
    };
    var _default = DefinitionRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DescriptionListDetailRole.js
var require_DescriptionListDetailRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DescriptionListDetailRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DescriptionListDetailRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "dd"
        }
      }],
      type: "structure"
    };
    var _default = DescriptionListDetailRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DescriptionListRole.js
var require_DescriptionListRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DescriptionListRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DescriptionListRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "dl"
        }
      }],
      type: "structure"
    };
    var _default = DescriptionListRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DescriptionListTermRole.js
var require_DescriptionListTermRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DescriptionListTermRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DescriptionListTermRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "dt"
        }
      }],
      type: "structure"
    };
    var _default = DescriptionListTermRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DetailsRole.js
var require_DetailsRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DetailsRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DetailsRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "details"
        }
      }],
      type: "structure"
    };
    var _default = DetailsRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DialogRole.js
var require_DialogRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DialogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DialogRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "dialog"
        }
      }, {
        module: "HTML",
        concept: {
          name: "dialog"
        }
      }],
      type: "window"
    };
    var _default = DialogRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DirectoryRole.js
var require_DirectoryRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DirectoryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DirectoryRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "directory"
        }
      }, {
        module: "HTML",
        concept: {
          name: "dir"
        }
      }],
      type: "structure"
    };
    var _default = DirectoryRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DisclosureTriangleRole.js
var require_DisclosureTriangleRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DisclosureTriangleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DisclosureTriangleRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          constraints: ["scoped to a details element"],
          name: "summary"
        }
      }],
      type: "widget"
    };
    var _default = DisclosureTriangleRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DivRole.js
var require_DivRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DivRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DivRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "div"
        }
      }],
      type: "generic"
    };
    var _default = DivRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DocumentRole.js
var require_DocumentRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/DocumentRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var DocumentRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "document"
        }
      }],
      type: "structure"
    };
    var _default = DocumentRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/EmbeddedObjectRole.js
var require_EmbeddedObjectRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/EmbeddedObjectRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var EmbeddedObjectRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "embed"
        }
      }],
      type: "widget"
    };
    var _default = EmbeddedObjectRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FeedRole.js
var require_FeedRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FeedRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var FeedRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "feed"
        }
      }],
      type: "structure"
    };
    var _default = FeedRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FigcaptionRole.js
var require_FigcaptionRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FigcaptionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var FigcaptionRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "figcaption"
        }
      }],
      type: "structure"
    };
    var _default = FigcaptionRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FigureRole.js
var require_FigureRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FigureRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var FigureRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "figure"
        }
      }, {
        module: "HTML",
        concept: {
          name: "figure"
        }
      }],
      type: "structure"
    };
    var _default = FigureRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FooterRole.js
var require_FooterRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FooterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var FooterRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "footer"
        }
      }],
      type: "structure"
    };
    var _default = FooterRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FormRole.js
var require_FormRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/FormRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var FormRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "form"
        }
      }, {
        module: "HTML",
        concept: {
          name: "form"
        }
      }],
      type: "structure"
    };
    var _default = FormRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/GridRole.js
var require_GridRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/GridRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var GridRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "grid"
        }
      }],
      type: "widget"
    };
    var _default = GridRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/GroupRole.js
var require_GroupRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/GroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var GroupRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "group"
        }
      }],
      type: "structure"
    };
    var _default = GroupRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/HeadingRole.js
var require_HeadingRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/HeadingRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var HeadingRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "heading"
        }
      }, {
        module: "HTML",
        concept: {
          name: "h1"
        }
      }, {
        module: "HTML",
        concept: {
          name: "h2"
        }
      }, {
        module: "HTML",
        concept: {
          name: "h3"
        }
      }, {
        module: "HTML",
        concept: {
          name: "h4"
        }
      }, {
        module: "HTML",
        concept: {
          name: "h5"
        }
      }, {
        module: "HTML",
        concept: {
          name: "h6"
        }
      }],
      type: "structure"
    };
    var _default = HeadingRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/IframePresentationalRole.js
var require_IframePresentationalRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/IframePresentationalRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var IframePresentationalRole = {
      relatedConcepts: [],
      type: "window"
    };
    var _default = IframePresentationalRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/IframeRole.js
var require_IframeRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/IframeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var IframeRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "iframe"
        }
      }],
      type: "window"
    };
    var _default = IframeRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/IgnoredRole.js
var require_IgnoredRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/IgnoredRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var IgnoredRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = IgnoredRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ImageMapLinkRole.js
var require_ImageMapLinkRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ImageMapLinkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ImageMapLinkRole = {
      relatedConcepts: [],
      type: "widget"
    };
    var _default = ImageMapLinkRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ImageMapRole.js
var require_ImageMapRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ImageMapRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ImageMapRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "img",
          attributes: [{
            name: "usemap"
          }]
        }
      }],
      type: "structure"
    };
    var _default = ImageMapRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ImageRole.js
var require_ImageRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ImageRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ImageRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "img"
        }
      }, {
        module: "HTML",
        concept: {
          name: "img"
        }
      }],
      type: "structure"
    };
    var _default = ImageRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/InlineTextBoxRole.js
var require_InlineTextBoxRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/InlineTextBoxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var InlineTextBoxRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "input"
        }
      }],
      type: "widget"
    };
    var _default = InlineTextBoxRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/InputTimeRole.js
var require_InputTimeRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/InputTimeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var InputTimeRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "time"
          }]
        }
      }],
      type: "widget"
    };
    var _default = InputTimeRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LabelRole.js
var require_LabelRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LabelRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var LabelRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "label"
        }
      }],
      type: "structure"
    };
    var _default = LabelRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LegendRole.js
var require_LegendRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LegendRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var LegendRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "legend"
        }
      }],
      type: "structure"
    };
    var _default = LegendRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LineBreakRole.js
var require_LineBreakRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LineBreakRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var LineBreakRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "br"
        }
      }],
      type: "structure"
    };
    var _default = LineBreakRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LinkRole.js
var require_LinkRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LinkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var LinkRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "link"
        }
      }, {
        module: "HTML",
        concept: {
          name: "a",
          attributes: [{
            name: "href"
          }]
        }
      }],
      type: "widget"
    };
    var _default = LinkRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListBoxOptionRole.js
var require_ListBoxOptionRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListBoxOptionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ListBoxOptionRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "option"
        }
      }, {
        module: "HTML",
        concept: {
          name: "option"
        }
      }],
      type: "widget"
    };
    var _default = ListBoxOptionRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListBoxRole.js
var require_ListBoxRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListBoxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ListBoxRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "listbox"
        }
      }, {
        module: "HTML",
        concept: {
          name: "datalist"
        }
      }, {
        module: "HTML",
        concept: {
          name: "select"
        }
      }],
      type: "widget"
    };
    var _default = ListBoxRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListItemRole.js
var require_ListItemRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListItemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ListItemRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "listitem"
        }
      }, {
        module: "HTML",
        concept: {
          name: "li"
        }
      }],
      type: "structure"
    };
    var _default = ListItemRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListMarkerRole.js
var require_ListMarkerRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListMarkerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ListMarkerRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = ListMarkerRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListRole.js
var require_ListRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ListRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ListRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "list"
        }
      }, {
        module: "HTML",
        concept: {
          name: "ul"
        }
      }, {
        module: "HTML",
        concept: {
          name: "ol"
        }
      }],
      type: "structure"
    };
    var _default = ListRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LogRole.js
var require_LogRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/LogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var LogRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "log"
        }
      }],
      type: "structure"
    };
    var _default = LogRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MainRole.js
var require_MainRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MainRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MainRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "main"
        }
      }, {
        module: "HTML",
        concept: {
          name: "main"
        }
      }],
      type: "structure"
    };
    var _default = MainRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MarkRole.js
var require_MarkRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MarkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MarkRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "mark"
        }
      }],
      type: "structure"
    };
    var _default = MarkRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MarqueeRole.js
var require_MarqueeRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MarqueeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MarqueeRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "marquee"
        }
      }, {
        module: "HTML",
        concept: {
          name: "marquee"
        }
      }],
      type: "structure"
    };
    var _default = MarqueeRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MathRole.js
var require_MathRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MathRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MathRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "math"
        }
      }],
      type: "structure"
    };
    var _default = MathRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuBarRole.js
var require_MenuBarRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuBarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuBarRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "menubar"
        }
      }],
      type: "structure"
    };
    var _default = MenuBarRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuButtonRole.js
var require_MenuButtonRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuButtonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuButtonRole = {
      relatedConcepts: [],
      type: "widget"
    };
    var _default = MenuButtonRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuItemRole.js
var require_MenuItemRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuItemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuItemRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "menuitem"
        }
      }, {
        module: "HTML",
        concept: {
          name: "menuitem"
        }
      }],
      type: "widget"
    };
    var _default = MenuItemRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuItemCheckBoxRole.js
var require_MenuItemCheckBoxRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuItemCheckBoxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuItemCheckBoxRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "menuitemcheckbox"
        }
      }],
      type: "widget"
    };
    var _default = MenuItemCheckBoxRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuItemRadioRole.js
var require_MenuItemRadioRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuItemRadioRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuItemRadioRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "menuitemradio"
        }
      }],
      type: "widget"
    };
    var _default = MenuItemRadioRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuListOptionRole.js
var require_MenuListOptionRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuListOptionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuListOptionRole = {
      relatedConcepts: [],
      type: "widget"
    };
    var _default = MenuListOptionRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuListPopupRole.js
var require_MenuListPopupRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuListPopupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuListPopupRole = {
      relatedConcepts: [],
      type: "widget"
    };
    var _default = MenuListPopupRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuRole.js
var require_MenuRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MenuRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MenuRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "menu"
        }
      }, {
        module: "HTML",
        concept: {
          name: "menu"
        }
      }],
      type: "structure"
    };
    var _default = MenuRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MeterRole.js
var require_MeterRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/MeterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var MeterRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "meter"
        }
      }],
      type: "structure"
    };
    var _default = MeterRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/NavigationRole.js
var require_NavigationRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/NavigationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var NavigationRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "navigation"
        }
      }, {
        module: "HTML",
        concept: {
          name: "nav"
        }
      }],
      type: "structure"
    };
    var _default = NavigationRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/NoneRole.js
var require_NoneRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/NoneRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var NoneRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "none"
        }
      }],
      type: "structure"
    };
    var _default = NoneRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/NoteRole.js
var require_NoteRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/NoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var NoteRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "note"
        }
      }],
      type: "structure"
    };
    var _default = NoteRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/OutlineRole.js
var require_OutlineRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/OutlineRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var OutlineRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = OutlineRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ParagraphRole.js
var require_ParagraphRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ParagraphRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ParagraphRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "p"
        }
      }],
      type: "structure"
    };
    var _default = ParagraphRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/PopUpButtonRole.js
var require_PopUpButtonRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/PopUpButtonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var PopUpButtonRole = {
      relatedConcepts: [],
      type: "widget"
    };
    var _default = PopUpButtonRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/PreRole.js
var require_PreRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/PreRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var PreRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "pre"
        }
      }],
      type: "structure"
    };
    var _default = PreRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/PresentationalRole.js
var require_PresentationalRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/PresentationalRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var PresentationalRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "presentation"
        }
      }],
      type: "structure"
    };
    var _default = PresentationalRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ProgressIndicatorRole.js
var require_ProgressIndicatorRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ProgressIndicatorRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ProgressIndicatorRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "progressbar"
        }
      }, {
        module: "HTML",
        concept: {
          name: "progress"
        }
      }],
      type: "structure"
    };
    var _default = ProgressIndicatorRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RadioButtonRole.js
var require_RadioButtonRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RadioButtonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RadioButtonRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "radio"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "radio"
          }]
        }
      }],
      type: "widget"
    };
    var _default = RadioButtonRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RadioGroupRole.js
var require_RadioGroupRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RadioGroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RadioGroupRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "radiogroup"
        }
      }],
      type: "structure"
    };
    var _default = RadioGroupRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RegionRole.js
var require_RegionRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RegionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RegionRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "region"
        }
      }],
      type: "structure"
    };
    var _default = RegionRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RootWebAreaRole.js
var require_RootWebAreaRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RootWebAreaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RootWebAreaRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = RootWebAreaRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RowHeaderRole.js
var require_RowHeaderRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RowHeaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RowHeaderRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "rowheader"
        }
      }, {
        module: "HTML",
        concept: {
          name: "th",
          attributes: [{
            name: "scope",
            value: "row"
          }]
        }
      }],
      type: "widget"
    };
    var _default = RowHeaderRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RowRole.js
var require_RowRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RowRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RowRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "row"
        }
      }, {
        module: "HTML",
        concept: {
          name: "tr"
        }
      }],
      type: "structure"
    };
    var _default = RowRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RubyRole.js
var require_RubyRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RubyRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RubyRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "ruby"
        }
      }],
      type: "structure"
    };
    var _default = RubyRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RulerRole.js
var require_RulerRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/RulerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var RulerRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = RulerRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ScrollAreaRole.js
var require_ScrollAreaRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ScrollAreaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ScrollAreaRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = ScrollAreaRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ScrollBarRole.js
var require_ScrollBarRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ScrollBarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ScrollBarRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "scrollbar"
        }
      }],
      type: "widget"
    };
    var _default = ScrollBarRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SeamlessWebAreaRole.js
var require_SeamlessWebAreaRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SeamlessWebAreaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SeamlessWebAreaRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = SeamlessWebAreaRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SearchRole.js
var require_SearchRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SearchRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SearchRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "search"
        }
      }],
      type: "structure"
    };
    var _default = SearchRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SearchBoxRole.js
var require_SearchBoxRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SearchBoxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SearchBoxRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "searchbox"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "search"
          }]
        }
      }],
      type: "widget"
    };
    var _default = SearchBoxRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SliderRole.js
var require_SliderRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SliderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SliderRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "slider"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "range"
          }]
        }
      }],
      type: "widget"
    };
    var _default = SliderRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SliderThumbRole.js
var require_SliderThumbRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SliderThumbRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SliderThumbRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = SliderThumbRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SpinButtonRole.js
var require_SpinButtonRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SpinButtonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SpinButtonRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "spinbutton"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "number"
          }]
        }
      }],
      type: "widget"
    };
    var _default = SpinButtonRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SpinButtonPartRole.js
var require_SpinButtonPartRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SpinButtonPartRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SpinButtonPartRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = SpinButtonPartRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SplitterRole.js
var require_SplitterRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SplitterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SplitterRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "separator"
        }
      }],
      type: "widget"
    };
    var _default = SplitterRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/StaticTextRole.js
var require_StaticTextRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/StaticTextRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var StaticTextRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = StaticTextRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/StatusRole.js
var require_StatusRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/StatusRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var StatusRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "status"
        }
      }],
      type: "structure"
    };
    var _default = StatusRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SVGRootRole.js
var require_SVGRootRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SVGRootRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SVGRootRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = SVGRootRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SwitchRole.js
var require_SwitchRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/SwitchRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var SwitchRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "switch"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "checkbox"
          }]
        }
      }],
      type: "widget"
    };
    var _default = SwitchRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabGroupRole.js
var require_TabGroupRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabGroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TabGroupRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "tablist"
        }
      }],
      type: "structure"
    };
    var _default = TabGroupRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabRole.js
var require_TabRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TabRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "tab"
        }
      }],
      type: "widget"
    };
    var _default = TabRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TableHeaderContainerRole.js
var require_TableHeaderContainerRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TableHeaderContainerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TableHeaderContainerRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = TableHeaderContainerRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TableRole.js
var require_TableRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TableRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TableRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "table"
        }
      }, {
        module: "HTML",
        concept: {
          name: "table"
        }
      }],
      type: "structure"
    };
    var _default = TableRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabListRole.js
var require_TabListRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabListRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TabListRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "tablist"
        }
      }],
      type: "structure"
    };
    var _default = TabListRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabPanelRole.js
var require_TabPanelRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TabPanelRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TabPanelRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "tabpanel"
        }
      }],
      type: "structure"
    };
    var _default = TabPanelRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TermRole.js
var require_TermRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TermRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TermRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "term"
        }
      }],
      type: "structure"
    };
    var _default = TermRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TextAreaRole.js
var require_TextAreaRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TextAreaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TextAreaRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          attributes: [{
            name: "aria-multiline",
            value: "true"
          }],
          name: "textbox"
        }
      }, {
        module: "HTML",
        concept: {
          name: "textarea"
        }
      }],
      type: "widget"
    };
    var _default = TextAreaRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TextFieldRole.js
var require_TextFieldRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TextFieldRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TextFieldRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "textbox"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input"
        }
      }, {
        module: "HTML",
        concept: {
          name: "input",
          attributes: [{
            name: "type",
            value: "text"
          }]
        }
      }],
      type: "widget"
    };
    var _default = TextFieldRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TimeRole.js
var require_TimeRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TimeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TimeRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "time"
        }
      }],
      type: "structure"
    };
    var _default = TimeRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TimerRole.js
var require_TimerRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TimerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TimerRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "timer"
        }
      }],
      type: "structure"
    };
    var _default = TimerRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ToggleButtonRole.js
var require_ToggleButtonRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ToggleButtonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ToggleButtonRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          attributes: [{
            name: "aria-pressed"
          }]
        }
      }],
      type: "widget"
    };
    var _default = ToggleButtonRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ToolbarRole.js
var require_ToolbarRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/ToolbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var ToolbarRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "toolbar"
        }
      }],
      type: "structure"
    };
    var _default = ToolbarRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TreeRole.js
var require_TreeRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TreeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TreeRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "tree"
        }
      }],
      type: "widget"
    };
    var _default = TreeRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TreeGridRole.js
var require_TreeGridRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TreeGridRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TreeGridRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "treegrid"
        }
      }],
      type: "widget"
    };
    var _default = TreeGridRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TreeItemRole.js
var require_TreeItemRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/TreeItemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var TreeItemRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "treeitem"
        }
      }],
      type: "widget"
    };
    var _default = TreeItemRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/UserInterfaceTooltipRole.js
var require_UserInterfaceTooltipRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/UserInterfaceTooltipRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var UserInterfaceTooltipRole = {
      relatedConcepts: [{
        module: "ARIA",
        concept: {
          name: "tooltip"
        }
      }],
      type: "structure"
    };
    var _default = UserInterfaceTooltipRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/VideoRole.js
var require_VideoRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/VideoRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var VideoRole = {
      relatedConcepts: [{
        module: "HTML",
        concept: {
          name: "video"
        }
      }],
      type: "widget"
    };
    var _default = VideoRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/WebAreaRole.js
var require_WebAreaRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/WebAreaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var WebAreaRole = {
      relatedConcepts: [],
      type: "structure"
    };
    var _default = WebAreaRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/WindowRole.js
var require_WindowRole = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/etc/objects/WindowRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var WindowRole = {
      relatedConcepts: [],
      type: "window"
    };
    var _default = WindowRole;
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/AXObjectsMap.js
var require_AXObjectsMap = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/AXObjectsMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _AbbrRole = _interopRequireDefault(require_AbbrRole());
    var _AlertDialogRole = _interopRequireDefault(require_AlertDialogRole());
    var _AlertRole = _interopRequireDefault(require_AlertRole());
    var _AnnotationRole = _interopRequireDefault(require_AnnotationRole());
    var _ApplicationRole = _interopRequireDefault(require_ApplicationRole());
    var _ArticleRole = _interopRequireDefault(require_ArticleRole());
    var _AudioRole = _interopRequireDefault(require_AudioRole());
    var _BannerRole = _interopRequireDefault(require_BannerRole());
    var _BlockquoteRole = _interopRequireDefault(require_BlockquoteRole());
    var _BusyIndicatorRole = _interopRequireDefault(require_BusyIndicatorRole());
    var _ButtonRole = _interopRequireDefault(require_ButtonRole());
    var _CanvasRole = _interopRequireDefault(require_CanvasRole());
    var _CaptionRole = _interopRequireDefault(require_CaptionRole());
    var _CellRole = _interopRequireDefault(require_CellRole());
    var _CheckBoxRole = _interopRequireDefault(require_CheckBoxRole());
    var _ColorWellRole = _interopRequireDefault(require_ColorWellRole());
    var _ColumnHeaderRole = _interopRequireDefault(require_ColumnHeaderRole());
    var _ColumnRole = _interopRequireDefault(require_ColumnRole());
    var _ComboBoxRole = _interopRequireDefault(require_ComboBoxRole());
    var _ComplementaryRole = _interopRequireDefault(require_ComplementaryRole());
    var _ContentInfoRole = _interopRequireDefault(require_ContentInfoRole());
    var _DateRole = _interopRequireDefault(require_DateRole());
    var _DateTimeRole = _interopRequireDefault(require_DateTimeRole());
    var _DefinitionRole = _interopRequireDefault(require_DefinitionRole());
    var _DescriptionListDetailRole = _interopRequireDefault(require_DescriptionListDetailRole());
    var _DescriptionListRole = _interopRequireDefault(require_DescriptionListRole());
    var _DescriptionListTermRole = _interopRequireDefault(require_DescriptionListTermRole());
    var _DetailsRole = _interopRequireDefault(require_DetailsRole());
    var _DialogRole = _interopRequireDefault(require_DialogRole());
    var _DirectoryRole = _interopRequireDefault(require_DirectoryRole());
    var _DisclosureTriangleRole = _interopRequireDefault(require_DisclosureTriangleRole());
    var _DivRole = _interopRequireDefault(require_DivRole());
    var _DocumentRole = _interopRequireDefault(require_DocumentRole());
    var _EmbeddedObjectRole = _interopRequireDefault(require_EmbeddedObjectRole());
    var _FeedRole = _interopRequireDefault(require_FeedRole());
    var _FigcaptionRole = _interopRequireDefault(require_FigcaptionRole());
    var _FigureRole = _interopRequireDefault(require_FigureRole());
    var _FooterRole = _interopRequireDefault(require_FooterRole());
    var _FormRole = _interopRequireDefault(require_FormRole());
    var _GridRole = _interopRequireDefault(require_GridRole());
    var _GroupRole = _interopRequireDefault(require_GroupRole());
    var _HeadingRole = _interopRequireDefault(require_HeadingRole());
    var _IframePresentationalRole = _interopRequireDefault(require_IframePresentationalRole());
    var _IframeRole = _interopRequireDefault(require_IframeRole());
    var _IgnoredRole = _interopRequireDefault(require_IgnoredRole());
    var _ImageMapLinkRole = _interopRequireDefault(require_ImageMapLinkRole());
    var _ImageMapRole = _interopRequireDefault(require_ImageMapRole());
    var _ImageRole = _interopRequireDefault(require_ImageRole());
    var _InlineTextBoxRole = _interopRequireDefault(require_InlineTextBoxRole());
    var _InputTimeRole = _interopRequireDefault(require_InputTimeRole());
    var _LabelRole = _interopRequireDefault(require_LabelRole());
    var _LegendRole = _interopRequireDefault(require_LegendRole());
    var _LineBreakRole = _interopRequireDefault(require_LineBreakRole());
    var _LinkRole = _interopRequireDefault(require_LinkRole());
    var _ListBoxOptionRole = _interopRequireDefault(require_ListBoxOptionRole());
    var _ListBoxRole = _interopRequireDefault(require_ListBoxRole());
    var _ListItemRole = _interopRequireDefault(require_ListItemRole());
    var _ListMarkerRole = _interopRequireDefault(require_ListMarkerRole());
    var _ListRole = _interopRequireDefault(require_ListRole());
    var _LogRole = _interopRequireDefault(require_LogRole());
    var _MainRole = _interopRequireDefault(require_MainRole());
    var _MarkRole = _interopRequireDefault(require_MarkRole());
    var _MarqueeRole = _interopRequireDefault(require_MarqueeRole());
    var _MathRole = _interopRequireDefault(require_MathRole());
    var _MenuBarRole = _interopRequireDefault(require_MenuBarRole());
    var _MenuButtonRole = _interopRequireDefault(require_MenuButtonRole());
    var _MenuItemRole = _interopRequireDefault(require_MenuItemRole());
    var _MenuItemCheckBoxRole = _interopRequireDefault(require_MenuItemCheckBoxRole());
    var _MenuItemRadioRole = _interopRequireDefault(require_MenuItemRadioRole());
    var _MenuListOptionRole = _interopRequireDefault(require_MenuListOptionRole());
    var _MenuListPopupRole = _interopRequireDefault(require_MenuListPopupRole());
    var _MenuRole = _interopRequireDefault(require_MenuRole());
    var _MeterRole = _interopRequireDefault(require_MeterRole());
    var _NavigationRole = _interopRequireDefault(require_NavigationRole());
    var _NoneRole = _interopRequireDefault(require_NoneRole());
    var _NoteRole = _interopRequireDefault(require_NoteRole());
    var _OutlineRole = _interopRequireDefault(require_OutlineRole());
    var _ParagraphRole = _interopRequireDefault(require_ParagraphRole());
    var _PopUpButtonRole = _interopRequireDefault(require_PopUpButtonRole());
    var _PreRole = _interopRequireDefault(require_PreRole());
    var _PresentationalRole = _interopRequireDefault(require_PresentationalRole());
    var _ProgressIndicatorRole = _interopRequireDefault(require_ProgressIndicatorRole());
    var _RadioButtonRole = _interopRequireDefault(require_RadioButtonRole());
    var _RadioGroupRole = _interopRequireDefault(require_RadioGroupRole());
    var _RegionRole = _interopRequireDefault(require_RegionRole());
    var _RootWebAreaRole = _interopRequireDefault(require_RootWebAreaRole());
    var _RowHeaderRole = _interopRequireDefault(require_RowHeaderRole());
    var _RowRole = _interopRequireDefault(require_RowRole());
    var _RubyRole = _interopRequireDefault(require_RubyRole());
    var _RulerRole = _interopRequireDefault(require_RulerRole());
    var _ScrollAreaRole = _interopRequireDefault(require_ScrollAreaRole());
    var _ScrollBarRole = _interopRequireDefault(require_ScrollBarRole());
    var _SeamlessWebAreaRole = _interopRequireDefault(require_SeamlessWebAreaRole());
    var _SearchRole = _interopRequireDefault(require_SearchRole());
    var _SearchBoxRole = _interopRequireDefault(require_SearchBoxRole());
    var _SliderRole = _interopRequireDefault(require_SliderRole());
    var _SliderThumbRole = _interopRequireDefault(require_SliderThumbRole());
    var _SpinButtonRole = _interopRequireDefault(require_SpinButtonRole());
    var _SpinButtonPartRole = _interopRequireDefault(require_SpinButtonPartRole());
    var _SplitterRole = _interopRequireDefault(require_SplitterRole());
    var _StaticTextRole = _interopRequireDefault(require_StaticTextRole());
    var _StatusRole = _interopRequireDefault(require_StatusRole());
    var _SVGRootRole = _interopRequireDefault(require_SVGRootRole());
    var _SwitchRole = _interopRequireDefault(require_SwitchRole());
    var _TabGroupRole = _interopRequireDefault(require_TabGroupRole());
    var _TabRole = _interopRequireDefault(require_TabRole());
    var _TableHeaderContainerRole = _interopRequireDefault(require_TableHeaderContainerRole());
    var _TableRole = _interopRequireDefault(require_TableRole());
    var _TabListRole = _interopRequireDefault(require_TabListRole());
    var _TabPanelRole = _interopRequireDefault(require_TabPanelRole());
    var _TermRole = _interopRequireDefault(require_TermRole());
    var _TextAreaRole = _interopRequireDefault(require_TextAreaRole());
    var _TextFieldRole = _interopRequireDefault(require_TextFieldRole());
    var _TimeRole = _interopRequireDefault(require_TimeRole());
    var _TimerRole = _interopRequireDefault(require_TimerRole());
    var _ToggleButtonRole = _interopRequireDefault(require_ToggleButtonRole());
    var _ToolbarRole = _interopRequireDefault(require_ToolbarRole());
    var _TreeRole = _interopRequireDefault(require_TreeRole());
    var _TreeGridRole = _interopRequireDefault(require_TreeGridRole());
    var _TreeItemRole = _interopRequireDefault(require_TreeItemRole());
    var _UserInterfaceTooltipRole = _interopRequireDefault(require_UserInterfaceTooltipRole());
    var _VideoRole = _interopRequireDefault(require_VideoRole());
    var _WebAreaRole = _interopRequireDefault(require_WebAreaRole());
    var _WindowRole = _interopRequireDefault(require_WindowRole());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    var AXObjects = [["AbbrRole", _AbbrRole.default], ["AlertDialogRole", _AlertDialogRole.default], ["AlertRole", _AlertRole.default], ["AnnotationRole", _AnnotationRole.default], ["ApplicationRole", _ApplicationRole.default], ["ArticleRole", _ArticleRole.default], ["AudioRole", _AudioRole.default], ["BannerRole", _BannerRole.default], ["BlockquoteRole", _BlockquoteRole.default], ["BusyIndicatorRole", _BusyIndicatorRole.default], ["ButtonRole", _ButtonRole.default], ["CanvasRole", _CanvasRole.default], ["CaptionRole", _CaptionRole.default], ["CellRole", _CellRole.default], ["CheckBoxRole", _CheckBoxRole.default], ["ColorWellRole", _ColorWellRole.default], ["ColumnHeaderRole", _ColumnHeaderRole.default], ["ColumnRole", _ColumnRole.default], ["ComboBoxRole", _ComboBoxRole.default], ["ComplementaryRole", _ComplementaryRole.default], ["ContentInfoRole", _ContentInfoRole.default], ["DateRole", _DateRole.default], ["DateTimeRole", _DateTimeRole.default], ["DefinitionRole", _DefinitionRole.default], ["DescriptionListDetailRole", _DescriptionListDetailRole.default], ["DescriptionListRole", _DescriptionListRole.default], ["DescriptionListTermRole", _DescriptionListTermRole.default], ["DetailsRole", _DetailsRole.default], ["DialogRole", _DialogRole.default], ["DirectoryRole", _DirectoryRole.default], ["DisclosureTriangleRole", _DisclosureTriangleRole.default], ["DivRole", _DivRole.default], ["DocumentRole", _DocumentRole.default], ["EmbeddedObjectRole", _EmbeddedObjectRole.default], ["FeedRole", _FeedRole.default], ["FigcaptionRole", _FigcaptionRole.default], ["FigureRole", _FigureRole.default], ["FooterRole", _FooterRole.default], ["FormRole", _FormRole.default], ["GridRole", _GridRole.default], ["GroupRole", _GroupRole.default], ["HeadingRole", _HeadingRole.default], ["IframePresentationalRole", _IframePresentationalRole.default], ["IframeRole", _IframeRole.default], ["IgnoredRole", _IgnoredRole.default], ["ImageMapLinkRole", _ImageMapLinkRole.default], ["ImageMapRole", _ImageMapRole.default], ["ImageRole", _ImageRole.default], ["InlineTextBoxRole", _InlineTextBoxRole.default], ["InputTimeRole", _InputTimeRole.default], ["LabelRole", _LabelRole.default], ["LegendRole", _LegendRole.default], ["LineBreakRole", _LineBreakRole.default], ["LinkRole", _LinkRole.default], ["ListBoxOptionRole", _ListBoxOptionRole.default], ["ListBoxRole", _ListBoxRole.default], ["ListItemRole", _ListItemRole.default], ["ListMarkerRole", _ListMarkerRole.default], ["ListRole", _ListRole.default], ["LogRole", _LogRole.default], ["MainRole", _MainRole.default], ["MarkRole", _MarkRole.default], ["MarqueeRole", _MarqueeRole.default], ["MathRole", _MathRole.default], ["MenuBarRole", _MenuBarRole.default], ["MenuButtonRole", _MenuButtonRole.default], ["MenuItemRole", _MenuItemRole.default], ["MenuItemCheckBoxRole", _MenuItemCheckBoxRole.default], ["MenuItemRadioRole", _MenuItemRadioRole.default], ["MenuListOptionRole", _MenuListOptionRole.default], ["MenuListPopupRole", _MenuListPopupRole.default], ["MenuRole", _MenuRole.default], ["MeterRole", _MeterRole.default], ["NavigationRole", _NavigationRole.default], ["NoneRole", _NoneRole.default], ["NoteRole", _NoteRole.default], ["OutlineRole", _OutlineRole.default], ["ParagraphRole", _ParagraphRole.default], ["PopUpButtonRole", _PopUpButtonRole.default], ["PreRole", _PreRole.default], ["PresentationalRole", _PresentationalRole.default], ["ProgressIndicatorRole", _ProgressIndicatorRole.default], ["RadioButtonRole", _RadioButtonRole.default], ["RadioGroupRole", _RadioGroupRole.default], ["RegionRole", _RegionRole.default], ["RootWebAreaRole", _RootWebAreaRole.default], ["RowHeaderRole", _RowHeaderRole.default], ["RowRole", _RowRole.default], ["RubyRole", _RubyRole.default], ["RulerRole", _RulerRole.default], ["ScrollAreaRole", _ScrollAreaRole.default], ["ScrollBarRole", _ScrollBarRole.default], ["SeamlessWebAreaRole", _SeamlessWebAreaRole.default], ["SearchRole", _SearchRole.default], ["SearchBoxRole", _SearchBoxRole.default], ["SliderRole", _SliderRole.default], ["SliderThumbRole", _SliderThumbRole.default], ["SpinButtonRole", _SpinButtonRole.default], ["SpinButtonPartRole", _SpinButtonPartRole.default], ["SplitterRole", _SplitterRole.default], ["StaticTextRole", _StaticTextRole.default], ["StatusRole", _StatusRole.default], ["SVGRootRole", _SVGRootRole.default], ["SwitchRole", _SwitchRole.default], ["TabGroupRole", _TabGroupRole.default], ["TabRole", _TabRole.default], ["TableHeaderContainerRole", _TableHeaderContainerRole.default], ["TableRole", _TableRole.default], ["TabListRole", _TabListRole.default], ["TabPanelRole", _TabPanelRole.default], ["TermRole", _TermRole.default], ["TextAreaRole", _TextAreaRole.default], ["TextFieldRole", _TextFieldRole.default], ["TimeRole", _TimeRole.default], ["TimerRole", _TimerRole.default], ["ToggleButtonRole", _ToggleButtonRole.default], ["ToolbarRole", _ToolbarRole.default], ["TreeRole", _TreeRole.default], ["TreeGridRole", _TreeGridRole.default], ["TreeItemRole", _TreeItemRole.default], ["UserInterfaceTooltipRole", _UserInterfaceTooltipRole.default], ["VideoRole", _VideoRole.default], ["WebAreaRole", _WebAreaRole.default], ["WindowRole", _WindowRole.default]];
    var AXObjectsMap = {
      entries: function entries() {
        return AXObjects;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _AXObjects = AXObjects; _i < _AXObjects.length; _i++) {
          var _AXObjects$_i = _slicedToArray(_AXObjects[_i], 2), key = _AXObjects$_i[0], values = _AXObjects$_i[1];
          fn.call(thisArg, values, key, AXObjects);
        }
      },
      get: function get(key) {
        var item = AXObjects.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!AXObjectsMap.get(key);
      },
      keys: function keys() {
        return AXObjects.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values() {
        return AXObjects.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(AXObjectsMap, AXObjectsMap.entries());
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/AXObjectElementMap.js
var require_AXObjectElementMap = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/AXObjectElementMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _AXObjectsMap = _interopRequireDefault(require_AXObjectsMap());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var AXObjectElements = [];
    var _iterator = _createForOfIteratorHelper(_AXObjectsMap.default.entries());
    var _step;
    try {
      _loop = function _loop2() {
        var _step$value = _slicedToArray(_step.value, 2), name = _step$value[0], def = _step$value[1];
        var relatedConcepts = def.relatedConcepts;
        if (Array.isArray(relatedConcepts)) {
          relatedConcepts.forEach(function(relation) {
            if (relation.module === "HTML") {
              var concept = relation.concept;
              if (concept) {
                var index = AXObjectElements.findIndex(function(_ref5) {
                  var _ref6 = _slicedToArray(_ref5, 1), key = _ref6[0];
                  return key === name;
                });
                if (index === -1) {
                  AXObjectElements.push([name, []]);
                  index = AXObjectElements.length - 1;
                }
                AXObjectElements[index][1].push(concept);
              }
            }
          });
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _loop;
    var AXObjectElementMap = {
      entries: function entries() {
        return AXObjectElements;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _AXObjectElements = AXObjectElements; _i < _AXObjectElements.length; _i++) {
          var _AXObjectElements$_i = _slicedToArray(_AXObjectElements[_i], 2), key = _AXObjectElements$_i[0], values = _AXObjectElements$_i[1];
          fn.call(thisArg, values, key, AXObjectElements);
        }
      },
      get: function get(key) {
        var item = AXObjectElements.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!AXObjectElementMap.get(key);
      },
      keys: function keys() {
        return AXObjectElements.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values() {
        return AXObjectElements.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(AXObjectElementMap, AXObjectElementMap.entries());
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/AXObjectRoleMap.js
var require_AXObjectRoleMap = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/AXObjectRoleMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _AXObjectsMap = _interopRequireDefault(require_AXObjectsMap());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var AXObjectRoleElements = [];
    var _iterator = _createForOfIteratorHelper(_AXObjectsMap.default.entries());
    var _step;
    try {
      _loop = function _loop2() {
        var _step$value = _slicedToArray(_step.value, 2), name = _step$value[0], def = _step$value[1];
        var relatedConcepts = def.relatedConcepts;
        if (Array.isArray(relatedConcepts)) {
          relatedConcepts.forEach(function(relation) {
            if (relation.module === "ARIA") {
              var concept = relation.concept;
              if (concept) {
                var index = AXObjectRoleElements.findIndex(function(_ref5) {
                  var _ref6 = _slicedToArray(_ref5, 1), key = _ref6[0];
                  return key === name;
                });
                if (index === -1) {
                  AXObjectRoleElements.push([name, []]);
                  index = AXObjectRoleElements.length - 1;
                }
                AXObjectRoleElements[index][1].push(concept);
              }
            }
          });
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _loop;
    var AXObjectRoleMap = {
      entries: function entries() {
        return AXObjectRoleElements;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _AXObjectRoleElements = AXObjectRoleElements; _i < _AXObjectRoleElements.length; _i++) {
          var _AXObjectRoleElements2 = _slicedToArray(_AXObjectRoleElements[_i], 2), key = _AXObjectRoleElements2[0], values = _AXObjectRoleElements2[1];
          fn.call(thisArg, values, key, AXObjectRoleElements);
        }
      },
      get: function get(key) {
        var item = AXObjectRoleElements.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!AXObjectRoleMap.get(key);
      },
      keys: function keys() {
        return AXObjectRoleElements.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values() {
        return AXObjectRoleElements.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(AXObjectRoleMap, AXObjectRoleMap.entries());
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/elementAXObjectMap.js
var require_elementAXObjectMap = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/elementAXObjectMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _AXObjectsMap = _interopRequireDefault(require_AXObjectsMap());
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var elementAXObjects = [];
    var _iterator = _createForOfIteratorHelper(_AXObjectsMap.default.entries());
    var _step;
    try {
      _loop = function _loop2() {
        var _step$value = _slicedToArray(_step.value, 2), name = _step$value[0], def = _step$value[1];
        var relatedConcepts = def.relatedConcepts;
        if (Array.isArray(relatedConcepts)) {
          relatedConcepts.forEach(function(relation) {
            if (relation.module === "HTML") {
              var concept = relation.concept;
              if (concept != null) {
                var conceptStr = JSON.stringify(concept);
                var axObjects;
                var index = 0;
                for (; index < elementAXObjects.length; index++) {
                  var key = elementAXObjects[index][0];
                  if (JSON.stringify(key) === conceptStr) {
                    axObjects = elementAXObjects[index][1];
                    break;
                  }
                }
                if (!Array.isArray(axObjects)) {
                  axObjects = [];
                }
                var loc = axObjects.findIndex(function(item) {
                  return item === name;
                });
                if (loc === -1) {
                  axObjects.push(name);
                }
                if (index < elementAXObjects.length) {
                  elementAXObjects.splice(index, 1, [concept, axObjects]);
                } else {
                  elementAXObjects.push([concept, axObjects]);
                }
              }
            }
          });
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _loop;
    function deepAxObjectModelRelationshipConceptAttributeCheck(a, b) {
      if (a === void 0 && b !== void 0) {
        return false;
      }
      if (a !== void 0 && b === void 0) {
        return false;
      }
      if (a !== void 0 && b !== void 0) {
        if (a.length != b.length) {
          return false;
        }
        for (var i = 0; i < a.length; i++) {
          if (b[i].name !== a[i].name || b[i].value !== a[i].value) {
            return false;
          }
        }
      }
      return true;
    }
    var elementAXObjectMap = {
      entries: function entries() {
        return elementAXObjects;
      },
      forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        for (var _i = 0, _elementAXObjects = elementAXObjects; _i < _elementAXObjects.length; _i++) {
          var _elementAXObjects$_i = _slicedToArray(_elementAXObjects[_i], 2), key = _elementAXObjects$_i[0], values = _elementAXObjects$_i[1];
          fn.call(thisArg, values, key, elementAXObjects);
        }
      },
      get: function get(key) {
        var item = elementAXObjects.find(function(tuple) {
          return key.name === tuple[0].name && deepAxObjectModelRelationshipConceptAttributeCheck(key.attributes, tuple[0].attributes);
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!elementAXObjectMap.get(key);
      },
      keys: function keys() {
        return elementAXObjects.map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values() {
        return elementAXObjects.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), values2 = _ref4[1];
          return values2;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(elementAXObjectMap, elementAXObjectMap.entries());
    exports.default = _default;
  }
});

// node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/axobject-query@4.1.0/node_modules/axobject-query/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementAXObjects = exports.AXObjects = exports.AXObjectRoles = exports.AXObjectElements = void 0;
    var _AXObjectElementMap = _interopRequireDefault(require_AXObjectElementMap());
    var _AXObjectRoleMap = _interopRequireDefault(require_AXObjectRoleMap());
    var _AXObjectsMap = _interopRequireDefault(require_AXObjectsMap());
    var _elementAXObjectMap = _interopRequireDefault(require_elementAXObjectMap());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var AXObjectElements = _AXObjectElementMap.default;
    exports.AXObjectElements = AXObjectElements;
    var AXObjectRoles = _AXObjectRoleMap.default;
    exports.AXObjectRoles = AXObjectRoles;
    var AXObjects = _AXObjectsMap.default;
    exports.AXObjects = AXObjects;
    var elementAXObjects = _elementAXObjectMap.default;
    exports.elementAXObjects = elementAXObjects;
  }
});
export default require_lib();
//# sourceMappingURL=astro___axobject-query.js.map
