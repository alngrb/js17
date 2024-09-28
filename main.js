"use strict";

async function fetchProducts() {
    try {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        let products = data.products.slice(0, 15);
        displayProducts(products);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function displayProducts(products) {
    let catalog = document.getElementById('catalog-block');
    products.forEach(product => {
        let card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}">
            <h2>${product.title}</h2>
            <p>Цена: $${product.price}</p>
        `;

        card.onclick = () => showDetails(product);
        catalog.appendChild(card);
    });
}

fetchProducts();


function showDetails(product) {
    let catalog = document.getElementById('catalog-block');
    let details = document.getElementById('product-details');
    catalog.style.display = 'none';
    details.style.display = 'block';
    details.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.name}" style="width: 400px;">
        <h2>${product.title}</h2>
        <p><span>Описание</span>: ${product.description}</p>
        <p><span>Цена:</span> $${product.price}</p>
        <button class="back-button" onclick="goBack()">назад</button>
    `;
}

function goBack() {
    let catalog = document.getElementById('catalog-block');
    let details = document.getElementById('product-details');
    catalog.style.display = 'flex';
    details.style.display = 'none'; 
}

fetchProducts();