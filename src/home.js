function renderHeading(content) {
    const heading = document.createElement('div');
    heading.classList.add('heading');
    const title = document.createElement('h1'); 
    title.textContent = 'Olga & Jan Kanty';
    heading.appendChild(title);
    const navigation = document.createElement('ul');
    navigation.classList.add('navigation');
    let navigationBar = ['Home', 'Plan uroczystości', 'Informacje dla gości', 'Jak dojechać'];
    navigationBar.forEach(sectionText => {
        const section = document.createElement('li');
        section.textContent = sectionText;
        section.classList.add('nav-bar');
        navigation.appendChild(section);
    });
    heading.appendChild(navigation);
    content.appendChild(heading);
}

function preload(images) {
    const body = document.querySelector('body');
    for (let tag in images) {
        const img = new Image()
        img.src = images[tag].split("'")[1];
        img.style.transform = "scale(0.5)";
        img.style.opacity = "0"
        img.style.position = "fixed";
        body.appendChild(img);
    }
}

function renderHomeContent(content) {
    const mainContent = document.createElement('div');
    mainContent.classList.add('on-photo')
    const h2 = document.createElement('h2');
    h2.textContent = 'Pobieramy się!';
    const h3 = document.createElement('h3');
    h3.textContent = '26.09.2020';
    mainContent.appendChild(h2);
    mainContent.appendChild(h3);
    content.appendChild(mainContent);
}

function renderFooter(content) {
    const footer = document.createElement('footer');
    footer.textContent = 'Created by Olga Nowakowska';
    content.appendChild(footer);
}


export {renderHeading, renderHomeContent, renderFooter, preload};