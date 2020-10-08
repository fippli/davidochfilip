const ledger = [
  {
    thing: "Mikrofon (i guld) med hållare och puffskyddsbollhus",
    price: 1394,
    amount: 2,
  },
  {
    thing: "Domän till fin hemsida",
    price: 139,
    amount: 1,
  },
  {
    thing: "Molnlagring",
    price: 57.31,
    amount: 1,
  },
  {
    thing: "Grisar",
    price: -25.33,
    amount: 3,
  },
];

const createRow = () => {
  return document.createElement("tr");
};

const createCloumn = (data) => {
  const column = document.createElement("td");
  column.innerText = data;
  return column;
};

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
  return parent;
};

const createTableRow = ({ thing, price, amount }) =>
  appendChildren(createRow(), [
    createCloumn(thing),
    createCloumn(`${price}kr`),
    createCloumn(amount),
    createCloumn(`${price * amount}kr`),
  ]);

const total = (ledger) =>
  ledger.reduce((sum, { price, amount }) => sum + price * amount, 0);

const breakEven = (ledger) =>
  Math.round(
    (total(ledger) / ledger.filter((e) => e.thing === "Grisar")[0].price) * -1,
  );

const main = () => {
  appendChildren(
    document.getElementById("ledger-element"),
    ledger.map(createTableRow),
  );
  const sumRow = document.createElement("tr");
  sumRow.innerHTML = `
    <td></td>
    <td></td>
    <td><em>SUMMA:</em></td>
    <td>${total(ledger)}</td>
  `;
  document.getElementById("ledger-element").appendChild(sumRow);
  const breakEvenElement = document.getElementById("break-even");
  breakEvenElement.innerHTML = `${breakEven(ledger)} 🐷 till "breakeven"`;
};

main();
