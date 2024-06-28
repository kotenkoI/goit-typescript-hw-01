const categoryList = document.querySelector('ul#categories');
const categoryNumber = document.querySelector('li.item').length;
console.log('Number of categories: ' + categoryNumber);
const categories = document.querySelectorAll('li.item');
categories.forEach(item => {
    let categoryName = item.querySelector('h2');
    let categoryElementsCount = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryElementsCount}`);
});