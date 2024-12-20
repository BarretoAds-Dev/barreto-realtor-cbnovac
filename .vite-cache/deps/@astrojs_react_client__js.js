import {
  require_react_dom
} from "./chunk-RGZJWIVM.js";
import {
  require_react
} from "./chunk-GCKCDIMM.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (true) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h2, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h2, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/.pnpm/@astrojs+react@4.1.1_@types+node@22.10.2_@types+react-dom@18.3.5_@types+react@18.3.18__@types_jrtlfkgpjca6skchecjvbzvll4/node_modules/@astrojs/react/client.js
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());

// node_modules/.pnpm/@astrojs+react@4.1.1_@types+node@22.10.2_@types+react-dom@18.3.5_@types+react@18.3.18__@types_jrtlfkgpjca6skchecjvbzvll4/node_modules/@astrojs/react/static-html.js
var import_react = __toESM(require_react(), 1);
var StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return (0, import_react.createElement)(tagName, {
    name,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: value }
  });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

// node_modules/.pnpm/@astrojs+react@4.1.1_@types+node@22.10.2_@types+react-dom@18.3.5_@types+react@18.3.18__@types_jrtlfkgpjca6skchecjvbzvll4/node_modules/@astrojs/react/client.js
function isAlreadyHydrated(element) {
  for (const key in element) {
    if (key.startsWith("__reactContainer")) {
      return key;
    }
  }
}
function createReactElementFromDOMElement(element) {
  let attrs = {};
  for (const attr of element.attributes) {
    attrs[attr.name] = attr.value;
  }
  if (element.firstChild === null) {
    return (0, import_react2.createElement)(element.localName, attrs);
  }
  return (0, import_react2.createElement)(
    element.localName,
    attrs,
    Array.from(element.childNodes).map((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        return c.data;
      } else if (c.nodeType === Node.ELEMENT_NODE) {
        return createReactElementFromDOMElement(c);
      } else {
        return void 0;
      }
    }).filter((a) => !!a)
  );
}
function getChildren(childString, experimentalReactChildren) {
  if (experimentalReactChildren && childString) {
    let children = [];
    let template = document.createElement("template");
    template.innerHTML = childString;
    for (let child of template.content.children) {
      children.push(createReactElementFromDOMElement(child));
    }
    return children;
  } else if (childString) {
    return (0, import_react2.createElement)(static_html_default, { value: childString });
  } else {
    return void 0;
  }
}
var rootMap = /* @__PURE__ */ new WeakMap();
var getOrCreateRoot = (element, creator) => {
  let root = rootMap.get(element);
  if (!root) {
    root = creator();
    rootMap.set(element, root);
  }
  return root;
};
var client_default = (element) => (Component, props, { default: children, ...slotted }, { client }) => {
  if (!element.hasAttribute("ssr")) return;
  const actionKey = element.getAttribute("data-action-key");
  const actionName = element.getAttribute("data-action-name");
  const stringifiedActionResult = element.getAttribute("data-action-result");
  const formState = actionKey && actionName && stringifiedActionResult ? [JSON.parse(stringifiedActionResult), actionKey, actionName] : void 0;
  const renderOptions = {
    identifierPrefix: element.getAttribute("prefix"),
    formState
  };
  for (const [key, value] of Object.entries(slotted)) {
    props[key] = (0, import_react2.createElement)(static_html_default, { value, name: key });
  }
  const componentEl = (0, import_react2.createElement)(
    Component,
    props,
    getChildren(children, element.hasAttribute("data-react-children"))
  );
  const rootKey = isAlreadyHydrated(element);
  if (rootKey) {
    delete element[rootKey];
  }
  if (client === "only") {
    return (0, import_react2.startTransition)(() => {
      const root = getOrCreateRoot(element, () => {
        const r = (0, import_client.createRoot)(element);
        element.addEventListener("astro:unmount", () => r.unmount(), { once: true });
        return r;
      });
      root.render(componentEl);
    });
  }
  (0, import_react2.startTransition)(() => {
    const root = getOrCreateRoot(element, () => {
      const r = (0, import_client.hydrateRoot)(element, componentEl, renderOptions);
      element.addEventListener("astro:unmount", () => r.unmount(), { once: true });
      return r;
    });
    root.render(componentEl);
  });
};
export {
  client_default as default
};
//# sourceMappingURL=@astrojs_react_client__js.js.map
