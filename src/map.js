
function renderMap(content) {
    const mainContent = document.createElement('div');
    mainContent.classList.add('plan');
    const adressInfo = document.createElement('div');
    adressInfo.classList.add('adress');
    const adress = ['Hanza Pałac Wellness & SPA', 'Rulewo 13', 'k. miasta Grudziądz ', 'Zjazd Warlubie, 10 min. od trasy A1'];
    const objectName = document.createElement('p');
    objectName.style.fontWeight = 'bold'
    objectName.textContent = adress[0];
    const objectAdress = document.createElement('p');
    objectAdress.textContent = adress[1];
    const city = document.createElement('p');
    city.textContent = adress[2];
    const highway = document.createElement('p');
    highway.textContent = adress[3];
    highway.style.fontWeight = 'bold'
    adressInfo.appendChild(objectName);
    adressInfo.appendChild(objectAdress);
    adressInfo.appendChild(city);
    adressInfo.appendChild(highway);
    mainContent.appendChild(adressInfo);
    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2370.3329917841993!2d18.600166851049625!3d53.55182293668206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1598551696521!5m2!1spl!2spl' 
    mainContent.appendChild(map);
    content.appendChild(mainContent);
}

export {renderMap};