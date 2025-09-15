let y = parseInt(document.getElementById('coin-count').innerText);
y = 110;
document.getElementById('coin-count').innerText = y;

// Function to handle calling services
function handleCall(buttonId, alertMessage, title, number, cssClass) {
    document.getElementById(buttonId).addEventListener('click', function () {
        if (y >= 20) {
            alert(alertMessage);
            y -= 20;
            document.getElementById('coin-count').innerText = y;

            // Date & Time
            const now = new Date();
            const dateTime = now.toLocaleString();

            // Create new card
            const container = document.getElementById('cards-container');
            const newCard = document.createElement('div');
            newCard.classList.add(cssClass, 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>${title}</h2>
                    <p>${number}</p>
                </div>
                <div class="right">
                    ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
        } else {
            alert("Not enough coins to make the call.");
        }
    });
}

// Attach different buttons with one function
handleCall('call-emergency', "Calling Emergency Services...", "National Emergency Number", "999", "emergency-number-called");
handleCall('call-police', "Calling Police...", "Police Helpline Number", "999", "police-called");
handleCall('fire-service-calling', "Calling Fire Service...", "Fire-Service Helpline Number", "999", "fire-service-called");
handleCall('ambulence-calling-btn', "Calling Ambulance...", "Ambulance Service", "1994-999999", "ambulence-service-called");
handleCall('w&c-help-btn', "Women & Child Helping...", "Women & Child Helpline", "109", "wc-service-called");
handleCall('dudok-call-btn', "Dudok calling...", "Anti-Corruption Helpline", "106", "dudok-service-called");
handleCall('karenter-mistiri-btn', "Electricity Helpline calling...", "Electricity Helpline", "16216", "electricity-service-called");
handleCall('brac-calling-btn', "Brac calling...", "Brac Helpline", "16445", "brac-service-called");
handleCall('railway-calling-btn', "Railway calling...", "Railway Helpline", "163", "railway-service-called");

// Heart icon functionality (unchanged)
const hearts = document.getElementsByClassName('heart-icon');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let x = parseInt(document.getElementById('heart-count').innerText);
        x += 1;
        document.getElementById('heart-count').innerText = x;
        console.log("clicked");
    });
}
