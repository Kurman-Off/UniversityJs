'use strict';

const btnHome = document.querySelector('.home');
const btnCatalog = document.querySelector('.catalog');
const content = document.querySelector('.main__content');

btnHome.addEventListener('click', () => location.reload());

btnCatalog.addEventListener('click', () => {
    loadCategories();
});

function loadCategories() {
    fetch('JSON/categories.json')
        .then(response => response.json())
        .then(categories => {
            content.innerHTML = '';

            const list = document.createElement('ul');
            list.className = 'category-list';

            categories.forEach(cat => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = cat.name;
                link.addEventListener('click', () => loadCategoryItems(cat.shortname));
                li.appendChild(link);
                list.appendChild(li);
            });

            const specialLi = document.createElement('li');
            const specialLink = document.createElement('a');
            specialLink.href = '#';
            specialLink.textContent = 'Specials';
            specialLink.addEventListener('click', () => {
                const random = categories[Math.floor(Math.random() * categories.length)];
                loadCategoryItems(random.shortname);
            });
            specialLi.appendChild(specialLink);
            list.appendChild(specialLi);

            content.appendChild(list);
        });
}

function loadCategoryItems(shortname) {
    fetch(`JSON/${shortname}.json`)
        .then(response => response.json())
        .then(data => {
            content.innerHTML = '';

            const header = document.createElement('h2');
            header.textContent = data.categoryName;
            content.appendChild(header);

            const grid = document.createElement('div');
            grid.className = 'product';

            data.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card';

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name;

                const name = document.createElement('h3');
                name.textContent = item.name;

                const desc = document.createElement('p');
                desc.textContent = `Опис: ${item.description}`;

                const price = document.createElement('strong');
                price.textContent = `Ціна: ${item.price}`;

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(desc);
                card.appendChild(price);

                grid.appendChild(card);
            });

            content.appendChild(grid);
        });
}
