import datefuntion from './myFunction'
require("./style.css")







function hi(greeting){
    console.log(greeting)
}
hi('Hi')


const charactersList = document.getElementById('characters-list');
const modal = document.getElementById('modal');
const characterDetails = document.getElementById('character-details');

// Функция для отображения списка персонажей
const renderCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const characters = data.results;
        
        charactersList.innerHTML = ''; // Очищаем контейнер перед отрисовкой

        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="info">
                    <p>Name: ${character.name}</p>
                    <p>Status: ${character.status}</p>
                </div>
            `;
            characterCard.addEventListener('click', () => {
                displayModal(character);
            });
            charactersList.appendChild(characterCard);
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
};


// Функция для отображения модального окна с подробной информацией о персонаже
const displayModal = (character) => {
    modal.style.display = 'block';
    characterDetails.innerHTML = `
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Origin: ${character.origin.name}</p>
        <p>Location: ${character.location.name}</p>
        <img src="${character.image}" alt="${character.name}">
    `;
};


// Закрытие модального окна
modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
});

// Загрузка персонажей при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
});

import './favorites.js';
