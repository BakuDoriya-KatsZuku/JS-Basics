const cowsay = require("cowsay"); //Import cowsay library
const quote = require("inspirational-quotes"); //Import quotes library

console.log(quote.getQuote()); //output is an object of 2 strings where one is text and other is author. For selecting the text varibales use .text after the object varibale

function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);

console.log(
  cowsay.say({
    text: quote.getQuote().text,
    e: "Oo",
    T: "U ",
  })
);
