const shoppingItems = ['Anggur', 'Gedhang', 'Jeruk', 'Mangga', 'Udud'];
const shoppingList = document.getElementById('shopping-list');

for (let i = 0; i < shoppingItems.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = shoppingItems[i];
    shoppingList.appendChild(listItem);
}
