export default function menuTab() {
    const tabContent = document.getElementById('tab-content');

    // create menu elements
    const pageTitle = document.createElement('p');
    const menu = document.createElement('div');

    // page title
    pageTitle.classList.add('page-title');
    pageTitle.textContent = "Menu";

    // menu
    menu.classList.add('menu');

    for (let i = 0; i < 5; i++) {
        const container = document.createElement('div');
        container.classList.add('container');
        const category = document.createElement('p');
        const menuContainer = document.createElement('div');
        const dishContainer = document.createElement('div');
        const priceContainer = document.createElement('div');
        category.classList.add('category');
        menuContainer.classList.add('menu-container');
        dishContainer.classList.add('dish-container');
        priceContainer.classList.add('price-container');

        menuContainer.appendChild(dishContainer);
        menuContainer.appendChild(priceContainer);
        container.appendChild(category);
        container.appendChild(menuContainer);
        menu.appendChild(container);

        for (let i = 0; i < 5; i++) {
            const dish = document.createElement('p');
            dish.classList.add('dish');
            dishContainer.appendChild(dish);
            const price = document.createElement('p');
            price.classList.add('price');
            priceContainer.appendChild(price);
        }
    }

    menu.children[0].children[0].textContent = "Main course";
    menu.children[0].children[1].children[0].children[0].textContent = "Dumplings";
    menu.children[0].children[1].children[1].children[0].textContent = "$9.99";
    menu.children[0].children[1].children[0].children[1].textContent = "Steak";
    menu.children[0].children[1].children[1].children[1].textContent = "$49.99";
    menu.children[0].children[1].children[0].children[2].textContent = "Cabbage roll";
    menu.children[0].children[1].children[1].children[2].textContent = "$13.49";
    menu.children[0].children[1].children[0].children[3].textContent = "Pork chop";
    menu.children[0].children[1].children[1].children[3].textContent = "$19.49";
    menu.children[0].children[1].children[0].children[4].textContent = "Spaghetti";
    menu.children[0].children[1].children[1].children[4].textContent = "$12.99";

    menu.children[1].children[0].textContent = "Soup";
    menu.children[1].children[1].children[0].children[0].textContent = "Tomato soup";
    menu.children[1].children[1].children[1].children[0].textContent = "$8.49";
    menu.children[1].children[1].children[0].children[1].textContent = "Broth";
    menu.children[1].children[1].children[1].children[1].textContent = "$7.49";
    menu.children[1].children[1].children[0].children[2].textContent = "Sour rye soup";
    menu.children[1].children[1].children[1].children[2].textContent = "$6.99";
    menu.children[1].children[1].children[0].children[3].textContent = "Mushroom soup";
    menu.children[1].children[1].children[1].children[3].textContent = "$5.99";
    menu.children[1].children[1].children[0].children[4].textContent = "Cauliflower soup";
    menu.children[1].children[1].children[1].children[4].textContent = "$4.49";

    menu.children[2].children[0].textContent = "Salad";
    menu.children[2].children[1].children[0].children[0].textContent = "Summer Asian Slaw";
    menu.children[2].children[1].children[1].children[0].textContent = "$3.99";
    menu.children[2].children[1].children[0].children[1].textContent = "Broccoli Salad";
    menu.children[2].children[1].children[1].children[1].textContent = "$7.99";
    menu.children[2].children[1].children[0].children[2].textContent = "Shredded Brussels Sprout Salad";
    menu.children[2].children[1].children[1].children[2].textContent = "$5.99";
    menu.children[2].children[1].children[0].children[3].textContent = "Pasta Salad";
    menu.children[2].children[1].children[1].children[3].textContent = "$2.99";
    menu.children[2].children[1].children[0].children[4].textContent = "Rainbow Orzo Salad";
    menu.children[2].children[1].children[1].children[4].textContent = "$12.99";

    menu.children[3].children[0].textContent = "Dessert";
    menu.children[3].children[1].children[0].children[0].textContent = "Ice cream";
    menu.children[3].children[1].children[1].children[0].textContent = "$3.49";
    menu.children[3].children[1].children[0].children[1].textContent = "Poppy seed cake";
    menu.children[3].children[1].children[1].children[1].textContent = "$5.99";
    menu.children[3].children[1].children[0].children[2].textContent = "Cheesecake";
    menu.children[3].children[1].children[1].children[2].textContent = "$6.49";
    menu.children[3].children[1].children[0].children[3].textContent = "Tiramisu";
    menu.children[3].children[1].children[1].children[3].textContent = "$12.99";
    menu.children[3].children[1].children[0].children[4].textContent = "Chocolate cake";
    menu.children[3].children[1].children[1].children[4].textContent = "$8.99";

    menu.children[4].children[0].textContent = "Drink";
    menu.children[4].children[1].children[0].children[0].textContent = "Water";
    menu.children[4].children[1].children[1].children[0].textContent = "FREE";
    menu.children[4].children[1].children[0].children[1].textContent = "Coca-Cola";
    menu.children[4].children[1].children[1].children[1].textContent = "$3.99";
    menu.children[4].children[1].children[0].children[2].textContent = "Pepsi";
    menu.children[4].children[1].children[1].children[2].textContent = "$3.99";
    menu.children[4].children[1].children[0].children[3].textContent = "Apple juice";
    menu.children[4].children[1].children[1].children[3].textContent = "$2.49";
    menu.children[4].children[1].children[0].children[4].textContent = "Orange juice";
    menu.children[4].children[1].children[1].children[4].textContent = "$2.49";

    tabContent.appendChild(pageTitle);
    tabContent.appendChild(menu);
}