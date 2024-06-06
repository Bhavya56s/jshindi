const library = [
    "Python for Data Science Handbook",
    "The Pragmatic Programmer",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Head First Java",
    "JavaScript: The Good Parts",
    "Code Complete",
    "Code Complete",
    "Learning React: A Hands-On Guide to Building Web Applications Using React and Redux",
    "Cracking the Coding Interview",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "Refactoring: Improving the Design of Existing Code"
];


function get(bookName) {
  const boxNum = library.findIndex((item) => item === bookName)+1
    console.log(boxNum)
}

const bookToFind = "Head First Java"

get(bookToFind)