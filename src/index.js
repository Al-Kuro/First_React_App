import React from "react";
import ReactDom from "react-dom";

const element = <h1>Hello World! Меня зовут: Алексей Кимнатный</h1>;

console.log(element);
ReactDom.render(element, document.querySelector("#root"));
