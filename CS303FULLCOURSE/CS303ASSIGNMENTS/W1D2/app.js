"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthor, findID }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}
/**
 * @returns {object} array holdig all authet
 */
function showAuthors() {
    const authors = findAuthors();
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}
/**
 * 
 * @returns {object} array
 */
function findAuthors() {
    let authors = [];
    authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];  //FIX THIS!!
    // implement this and other functions
    return authors;

}
/**
 * @returns {Object} to find
 */
function showID() {
    const ids = findID();
    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}
/**
 * 
 * @returns {number} array
 */
function findID() {
    let ids = [];
    ids = [1254, 4264, 3245];  //FIX THIS!!
    // implement this and other functions
    return ids;

}
/**
 * 
 * @param {number} libraryID to
 * @param {String} title to
 * @param {String} author to
 * @return {Object} object
 */
function addBook(libraryID, title, author) {
    let newBook = {};
    newBook.libraryID = 1144;
    newBook.title = "My New Book";
    newBook.author = "Me Too";
    return newBook;
}