

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

totalCategories.forEach(  
  categories => console.log(`Категория: ${categories.firstElementChild.textContent}
  Количество элементов: ${categories.lastElementChild.children.length}`));


