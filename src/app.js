import { createDOM, createElement, render } from "./react";

const vdom = createElement(
    "p",
    {},
    createElement("h1", {}, "React 만들기"),
    createElement(
        "ul",
        {},
        createElement("li", { style: "color:red" }, "첫번째 아이템 만들기"),
        createElement("li", { style: "color:blue" }, "두번째 아이템 만들기"),
        createElement("li", { style: "color:green" }, "세번째 아이템 만들기")
    )
);
render(vdom, document.querySelector("#root"));
