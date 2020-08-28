class Events {
    constructor() {
        this.list = []
    }
    
    addEvent(time, description, place) {
        let event = {time, about:description, place};
        this.list.push(event);
    }
}

function renderPlanContent(content, plan) {
    const mainContent = document.createElement('div');
    mainContent.classList.add('plan')
    plan.list.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event')
        for (let prop in event) {
            const line = document.createElement('p');
            line.textContent = event[prop]; 
            if (prop === 'time') {
                line.style.fontWeight = 'bold';
            }
            eventDiv.appendChild(line);
        }
        mainContent.appendChild(eventDiv);
    });
    content.appendChild(mainContent);
}

export {Events, renderPlanContent};

