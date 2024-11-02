const burguerJson = [
    {id:1, name: 'Super Furioso', img:'../src/assets/images/hamburguer.jpg', price: 35.90, description: 'Contém carne 160g, queijo, ovo, 2 fatias de bacon crocantes, além do nosso molho especial da casa!'},
    {id:2, name: 'Super Salada', img:'../src/assets/images/hamburguer.jpg', price: 36.90, description: 'Contém carne 160g, queijo, alface, tomate, ovo, 2 fatias de bacon crocantes, além do nosso molho especial da casa'}, 
    {id:3, name: 'Super Picante', img:'../src/assets/images/hamburguer.jpg', price: 38.90, description: 'Contém carne 160g, queijo, alface, tomate, ovo, 2 fatias de bacon crocantes, geléia de pimenta, além do nosso molho especial da casa'},
    {id:4, name: 'Super Queijo', img:'../src/assets/images/hamburguer.jpg', price: 38.90, description: 'Contém carne 160g, 4 fatias de queijo, alface, tomate, ovo, 2 fatias de bacon crocantes, além do nosso molho especial da casa'},
    {id:5, name: 'Super Bacon', img:'../src/assets/images/hamburguer.jpg', price:39.90, description: 'Contém carne 160g, queijo, alface, tomate, ovo, 8 fatias de bacon crocantes, além do nosso molho especial da casa'},
    {id:6, name: 'Super Carne', img:'../src/assets/images/hamburguer.jpg', price:40.90, description: 'Contém 2 carnes 160g, queijo, alface, tomate, ovo, 2 fatias de bacon crocantes, além do nosso molho especial da casa'},
];

const drinksJson = [
    {id:7, name: 'Refrigerante', img: '../src/assets/images/refri.jpg', price:8.00 },
    {id:8, name: 'Suco de laranja', img: '../src/assets/images/suco.jpg', price: 10.00},
    {id:9, name: 'Drink', img: '../src/assets/images/drink.jpg', price: 14.00},
];

// Função para limpar a área de hambúrgueres
function clearBurgerArea() {
    const burgerArea = document.querySelector('.burguer-area');
    while (burgerArea.firstChild) {
        burgerArea.removeChild(burgerArea.firstChild);
    }
}

// Função para renderizar os hambúrgueres na div
function renderBurgers() {
    const burgerArea = document.querySelector('.burguer-area');
    clearBurgerArea(); // Limpa o conteúdo da div

    burguerJson.forEach(burguer => {
        // Cria o contêiner principal
        const burguerItem = document.createElement('div');
        burguerItem.className = 'p-4 rounded-lg shadow-md flex flex-col items-center text-center border border-black mb-5';

        // Imagem do hambúrguer
        const img = document.createElement('img');
        img.src = burguer.img;
        img.alt = burguer.name;
        img.className = 'w-64 h-auto object-cover rounded-2xl mb-4 mt-5 ';
        burguerItem.appendChild(img);

        // Nome do hambúrguer
        const name = document.createElement('h2');
        name.textContent = burguer.name;
        name.className = 'text-xl font-semibold text-gray-800 text-2xl mt-4';
        burguerItem.appendChild(name);

        // Descrição do hambúrguer
        const description = document.createElement('p');
        description.textContent = burguer.description;
        description.className = 'text-gray-600 mt-2 text-center h-24';
        burguerItem.appendChild(description);

        // Preço do hambúrguer
        const price = document.createElement('p');
        price.textContent = `R$ ${burguer.price.toFixed(2)}`;
        price.className = 'text-lg font-bold mt-2';
        burguerItem.appendChild(price);

        // Botão de adicionar
        const button = document.createElement('button');
        button.textContent = 'Adicionar';
        button.className = 'w-36 h-10 mt-4 mb-5 bg-black text-white rounded hover:bg-white hover:text-black hover:border hover:border-black addToCart';
        button.setAttribute('data-id', burguer.id); // Define o id do item
        burguerItem.appendChild(button);

        // Adiciona o item do hambúrguer na área principal
        burgerArea.appendChild(burguerItem);
    });
}

// Função para limpar a área de drinks
function clearDrinksArea() {
    const drinkArea = document.querySelector('.drinks-area');
    while (drinkArea.firstChild) {
        drinkArea.removeChild(drinkArea.firstChild);
    }
}

// Função para renderizar os drinks na div
function renderDrinks() {
    const drinkArea = document.querySelector('.drinks-area');
    clearDrinksArea(); // Limpa o conteúdo da div

    drinksJson.forEach(drink => {
        // Cria o contêiner principal
        const drinkItem = document.createElement('div');
        drinkItem.className = 'p-4 rounded-lg shadow-md flex flex-col items-center text-center border border-black mb-5';

        // Imagem do drink
        const img = document.createElement('img');
        img.src = drink.img;
        img.alt = drink.name;
        img.className = 'w-64 h-auto object-cover rounded-2xl mb-4 mt-5 ';
        drinkItem.appendChild(img);

        // Nome do drink
        const name = document.createElement('h2');
        name.textContent = drink.name;
        name.className = 'text-xl font-semibold text-gray-800 text-2xl mt-4';
        drinkItem.appendChild(name);

        // Preço do drink
        const price = document.createElement('p');
        price.textContent = `R$ ${drink.price.toFixed(2)}`;
        price.className = 'text-lg font-bold mt-2';
        drinkItem.appendChild(price);

        // Botão de adicionar
        const button = document.createElement('button');
        button.textContent = 'Adicionar';
        button.className = 'w-36 h-10 mt-4 mb-5 bg-black text-white rounded hover:bg-white hover:text-black hover:border hover:border-black addToCart';
        button.setAttribute('data-id', drink.id); // Define o id do item
        drinkItem.appendChild(button);

        // Adiciona o item do drink na área principal
        drinkArea.appendChild(drinkItem);
    });
}

// Configura o evento de clique nos botões "Adicionar" para adicionar ao carrinho
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza os itens na tela
    renderBurgers();
    renderDrinks();

    // Configura os botões de "adicionar ao carrinho"
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('addToCart')) {
            const itemId = parseInt(event.target.getAttribute('data-id'), 10);
            addToCart(itemId); // Função para adicionar ao carrinho
        }
    });
});