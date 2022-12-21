
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];


const listEl = document.getElementById("ingredients");

const makeList = (vegetaible) => {
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.innerHTML = vegetaible;
  
  

  return itemEl; 
};

const listVegEl = ingredients.map (el => makeList(el));

listEl.append(...listVegEl);

