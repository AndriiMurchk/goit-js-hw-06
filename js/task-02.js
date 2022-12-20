
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];


const ListEl = document.getElementById("ingredients");

const makeList = (vegetaible) => {
  
  const ItemEl = document.createElement('li');
  ItemEl.classList.add('item');
  ItemEl.innerHTML = vegetaible;
  
  

  return ItemEl; 
};

const ListVegEl = ingredients.map (el => makeList(el));

ListEl.append(...ListVegEl);

