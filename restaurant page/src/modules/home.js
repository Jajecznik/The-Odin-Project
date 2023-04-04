export default function homeTab() {
    const tabContent = document.getElementById('tab-content');

    // create home elements
    const pageTitle = document.createElement('p');
    const description = document.createElement('div');
    const textDesciption = document.createElement('p');
    const hours = document.createElement('div');
    const daysContainer = document.createElement('div');
    const openHoursContainer = document.createElement('div');

    // page title
    pageTitle.classList.add('page-title');
    pageTitle.textContent = "Giga Restaurant";

    // description
    description.classList.add('description');
    textDesciption.classList.add('text-description');
    textDesciption.textContent = "Giga Restaurant is a stylish and inviting dining establishment with exceptional customer service and a diverse menu of high-quality dishes. Locally-sourced ingredients are used to create classic and adventurous options, and the well-stocked bar offers craft beers, wines, and cocktails. It's a great choice for quality dining in a welcoming atmosphere."
    description.appendChild(textDesciption);

    // hours
    hours.classList.add('hours');
    daysContainer.classList.add('days-container');
    openHoursContainer.classList.add('hours-container');
    hours.appendChild(daysContainer);
    hours.appendChild(openHoursContainer);

    for (let i = 0; i < 3; i++) {
        const days = document.createElement('p');
        days.classList.add('days');
        daysContainer.appendChild(days);
        const openHours = document.createElement('p');
        openHours.classList.add('open-hours');
        openHoursContainer.appendChild(openHours);
    }

    // adding open days and hours info
    daysContainer.children[0].textContent = "Monday - Friday";
    daysContainer.children[1].textContent = "Saturday";
    daysContainer.children[2].textContent = "Sunday";
    openHoursContainer.children[0].textContent = "07:00 - 23:00";
    openHoursContainer.children[1].textContent = "06:00 - 01:00";
    openHoursContainer.children[2].textContent = "08:00 - 23:00";

    tabContent.appendChild(pageTitle);
    tabContent.appendChild(description);
    tabContent.appendChild(hours);
}
