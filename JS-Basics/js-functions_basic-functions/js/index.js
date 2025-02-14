console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

const title = "Bootcamp deluxe limited Edition";
const author = "Felix Kirchhoff";
let rating = 3.2;
let numberOfSales = 450;

console.log(title);

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--

console.log(`Title: ${title}`);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Number of Sales: " + numberOfSales);

console.log()

numberOfSales = numberOfSales + 120;
rating = 7;

logbookData()


// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

function logbookData() {
  console.log(`Title: ${title}`);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Number of Sales: " + numberOfSales);
  return logbookData;
}

// --v-- write your code here --v--

// --^-- write your code here --^--
