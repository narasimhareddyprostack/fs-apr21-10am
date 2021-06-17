let shirts = [
  { productName: "shirtOne", size: 40, price: 500 },
  { productName: "shirtTwo", size: 42, price: 600 },
  { productName: "shirtThree", size: 40, price: 700 },
  { productName: "shirtFour", size: 42, price: 1100 },
  { productName: "shirtFive", size: 44, price: 900 },
];

let result = shirts.forEach((value, index) => {
  return value.price > 1000 ? value : null;
});

console.log(result);
