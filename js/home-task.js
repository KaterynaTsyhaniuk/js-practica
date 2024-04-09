'use strict';

/*function getFileName(file) {
  const index = file.indexOf('.');
  console.log(index);
  if (index !== -1) {
    return file.slice(0, index);
  } else {
    return file;
  }
}

console.log(getFileName('styles.css')); //"styles"
console.log(getFileName('app.js')); //"app"
console.log(getFileName('app')); //"app"
console.log(getFileName('index.js')); //"index"
console.log(getFileName('index.html')); //"index"
console.log(getFileName('index.css')); // "index"
console.log(getFileName('index')); //"index" */

/*function createFileName(name, ext) {

  const trimmedName = name.trim();
  const fileName = `${trimmedName}.${ext.trim()}`;
  return fileName;
}
console.log(createFileName(' order ', 'txt')); // "order.txt"
console.log(createFileName('report ', 'csv')); //"report.csv"
console.log(createFileName(' presentation', 'xml')); // "presentation.xml"*/

/*function calculateTotal(number) {
  let sum = 0;
  while (number > 0) {
    sum += number;
    number -= 1;
  }
  return sum;
}

console.log(calculateTotal(1)); //повертає 1
console.log(calculateTotal(3)); //повертає 6
console.log(calculateTotal(0)); //повертає 0
console.log(calculateTotal(18)); //повертає 171
console.log(calculateTotal(24)); //повертає 300
console.log(calculateTotal()); //з випадковим числом повертає правильне значення*/

/*function calculateTotal(number) {
  let sum = 0;
  for (number; number > 0; number -= 1) {
    //console.log(number);
    sum += number;
  }
  return sum;
}

console.log(calculateTotal(1)); // повертає 1
console.log(calculateTotal(0)); // повертає 0
console.log(calculateTotal(7)); // повертає 28
console.log(calculateTotal(18)); // повертає 171
console.log(calculateTotal(24)); // повертає 300
console.log(calculateTotal()); //з випадковим числом повертає правильне значення */

/*function calculateEvenTotal(number) {
  let sum = 0;
  let currentNumber = number % 2 === 0 ? number : number - 1; // почати з парного числа
  while (currentNumber > 0) {
    sum += currentNumber;
    currentNumber -= 2;
  }
  return sum;
}

console.log(calculateEvenTotal(1)); //повертає 0
console.log(calculateEvenTotal(3)); //повертає 2
console.log(calculateEvenTotal(7)); //повертає 12
console.log(calculateEvenTotal(18)); //повертає 90
console.log(calculateEvenTotal(27)); //повертає 182
console.log(calculateEvenTotal()); //з випадковим числом повертає правильне значення*/

/*function calculateEvenTotal(number) {
  let sum = 0;
  let currentNumber = number % 2 === 0 ? number : number - 1; // почати з парного числа
  for (currentNumber; currentNumber > 0; currentNumber -= 2) {
    sum += currentNumber;
  }
  return sum;
}

console.log(calculateEvenTotal(1)); //повертає 0
console.log(calculateEvenTotal(3)); //повертає 2
console.log(calculateEvenTotal(7)); //повертає 12
console.log(calculateEvenTotal(18)); //повертає 90
console.log(calculateEvenTotal(27)); //повертає 182
console.log(calculateEvenTotal()); //з випадковим числом*/

/*function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"*/

/*function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return `${message.slice(0, maxLength)}...`;
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"*/

/*function checkForSpam(message) {
  const newMessage = message.toLowerCase();
  console.log(newMessage);
  if (newMessage.includes('spam') || newMessage.includes('sale')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true*/

function getShippingCost(country) {
  let price;
  switch (country) {
    case 'China':
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Chile':
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Australia':
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Jamaica':
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
