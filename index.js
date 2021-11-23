// Objeto literal y const precios

const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// Bucle que crea la lista de productos para posteriormente aparecer en pantalla.

let showAllProducts = (productList) => {
  for (const product of productList) {
    obtainList(product);
  }
};

//Función que crea elementos en pantalla para mostrar el objeto literal

let obtainList = (product) => {
  let div = document.createElement("div");
  div.setAttribute("class", "product-item");

  let descriptionProduct = document.createElement("h5");
  descriptionProduct.innerText = product.description;

  let input = document.createElement("input");
  input.setAttribute("class", "product-unit");
  input.setAttribute("type", "number");
  input.setAttribute("value", product.units);
  input.setAttribute("min", 0);
  input.setAttribute("max", product.stock);
  input.addEventListener(
    "change",
    (event) => (product.units = event.target.value)
  );

  let cart = document.getElementById("chart");
  cart.appendChild(div).appendChild(descriptionProduct).appendChild(input);
  cart.appendChild(div).appendChild(input);
};

// Cálculos

let totalIva = (product) => {
  let iva = 0;
  for (let item of products) {
    if (item.tax === REGULAR_TYPE) {
      iva += (item.price * item.units * 21) / 100;
    } else if (item.tax === LOWER_TYPE) {
      iva += (item.price * item.units * 4) / 100;
    } else {
      iva += 0;
    }
  }
  return parseFloat(iva).toFixed(2);
};
let subTotal = (product) => {
  let subTotalChart = 0;
  for (let item of products) {
    subTotalChart += item.price * item.units;
  }
  return parseFloat(subTotalChart).toFixed(2);
};

let totalC = () => {
  let calculado = Number(subTotal()) + Number(totalIva());
  return calculado.toFixed(2);
};

let handleTotalCart = () => {
  event.preventDefault();

  document.getElementById("subtotal").innerText = subTotal() + "€";
  document.getElementById("totalIva").innerText = totalIva() + "€";
  document.getElementById("totalChart").innerText = totalC() + "€";
};

showAllProducts(products);

document.getElementById("button").addEventListener("click", handleTotalCart);
