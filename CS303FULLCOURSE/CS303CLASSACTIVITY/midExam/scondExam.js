"use strict";
/* eslint-disable */
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log(`${title} ${width} ${height}`); // My Menu 200 100
    console.log(items); // Item1, Item2
}
showMenu(options);
