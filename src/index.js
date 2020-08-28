import {renderHeading, renderHomeContent, renderFooter, preload} from './home.js';
import {Events, renderPlanContent} from './plan.js';
import {renderMap} from './map.js';

const content = document.querySelector('#content');

const images = {
    home_bg: "url('css/images/main_photo.jpg')",
    plan_bg: "url('css/images/_IMG3905.JPG')",
    info_bg: "url('css/images/_IMG3645.JPG')",
    directions_bg: "url('css/images/_IMG3924.JPG')"
}

preload(images);
renderHeading(content);
renderHomeContent(content);
renderFooter(content);
setNavigation();


function setNavigation() {
    const navigation = document.querySelectorAll('.nav-bar');

    navigation.forEach((nav) => {
        nav.addEventListener('click', renderContent)
    });
}

function renderContent() {
    content.innerHTML = ''; 
    const direction = this.textContent;
    renderHeading(content);
    setNavigation();
    if (direction === 'Home') {
        content.style.backgroundImage = images.home_bg;
        renderHomeContent(content);
    }
    if (direction === 'Plan uroczystości') {
        content.style.backgroundImage = images.plan_bg;
        const dayPlan = new Events;
        dayPlan.addEvent('16:00', 'Uroczystość zaślubin', 'Park przy Pałacu Hanza');
        dayPlan.addEvent('18:00-04:00', 'Wesele', 'Sala Parkowa Pałacu Hanza');
        dayPlan.addEvent('08:00-11:00', 'Śniadanie dla gości śpiących w hotelu', '');
        dayPlan.addEvent('12:00', 'Koniec doby hotelowej', '');
        renderPlanContent(content, dayPlan);
    }
    if (direction === 'Informacje dla gości') {
        content.style.backgroundImage = images.info_bg;
    }
    if (direction === 'Jak dojechać') {
        content.style.backgroundImage = images.directions_bg;
        renderMap(content);
    }
    renderFooter(content);
};



