const _ = (e) => document.createElement(e);
class Render {
    static component(elementName, options) {
        const element = _(elementName);
        for (const key in options) {
            if (Object.hasOwnProperty.call(options, key)) {
                element[key] = options[key];
            }
        }
        return element;
    }
    static div(children, options) {
        const div = Render.component("div", options);
        for (const child of children) {
            div.append(child);
        }
        return div;
    }


}
export default Render;