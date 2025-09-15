let y=parseInt(document.getElementById('coin-count').innerText);
y=110;
document.getElementById('coin-count').innerText=y;



// Heaert icon click functionality starts here
// Get all elements with class 'heart-icon'
const hearts = document.getElementsByClassName('heart-icon');

// Loop through each heart and attach click listener
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function() {
        let x = parseInt(document.getElementById('heart-count').innerText);
        x += 1;
        document.getElementById('heart-count').innerText = x;
        console.log("clicked");
    });
}
// Heaert icon click functionality ends here




//call emergency button functionality starts here 
document.getElementById('call-emergency').addEventListener('click', function() {
    if(y>=20){
        alert("Calling Emergency Services...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
        // Creating a new card element
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('emergency-number-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>National Emergency Number</h2>
                    <p>999</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//call emergency button functionality ends here



//call police button functionality starts here
document.getElementById('call-police').addEventListener('click', function() {
    if(y>=20){
        alert("Calling Police...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
        
        // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('police-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Police Helpline Number</h2>
                    <p>999</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//call police button functionality ends here

//call  fire service button functionality starts here
document.getElementById('fire-service-calling').addEventListener('click', function() {
    if(y>=20){
        alert("Calling FireService...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('fire-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Fire-Service Helpline Number</h2>
                    <p>999</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//call fire service button functionality ends here




//Ambulance service button functionality starts here

document.getElementById('ambulence-calling-btn').addEventListener('click', function() {
    if(y>=20){
        alert("Calling Ambulence...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('ambulence-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Ambulence Service </h2>
                    <p>1994-999999</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})




//W&C help button functionality starts here
document.getElementById('w&c-help-btn').addEventListener('click', function() {
    if(y>=20){
        alert("Women child helping calling...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('ambulence-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Women & Child Helpline </h2>
                    <p>109</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//W&C help button functionality Ends here


//Anti-corruption helpline button functionality starts here


document.getElementById('dudok-call-btn').addEventListener('click', function() {
    if(y>=20){
        alert("Dudok calling...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('ambulence-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Anti-Corruption Helpline </h2>
                    <p>106</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//Anti-corruption helpline button functionality Ends here


//Electricity helpline button functionality starts here
document.getElementById('karenter-mistiri-btn').addEventListener('click', function() {
    if(y>=20){
        alert("Electricity helpline calling...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('ambulence-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Electricity Helpline</h2>
                    <p>16216</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//electricity helpline button functionality Ends here


// Brack Helpline starts here
document.getElementById('brac-calling-btn').addEventListener('click', function() {
    if(y>=20){
        alert("Brac calling...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('ambulence-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>BracHelpline</h2>
                    <p>16445</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//Brack Helpline ends here


// Railway button functionality starts here
document.getElementById('railway-calling-btn').addEventListener('click', function() {
    if(y>=20){
        alert("Railway calling...");
        y -= 20;
        document.getElementById('coin-count').innerText = y;
         // Creating a new card element
        //getting date first
        const now = new Date(); 
        const dateTime = now.toLocaleString(); 
             const container = document.getElementById('cards-container');

            const newCard = document.createElement('div');
            newCard.classList.add('ambulence-service-called', 'flex', 'justify-between', 'items-center', 'border', 'p-5', 'm-5');
            newCard.innerHTML = `
                <div class="left">
                    <h2>Railway Helpine</h2>
                    <p>163</p>
                </div>
                <div class="right">
                ${dateTime}
                </div>
            `;
            container.appendChild(newCard);
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//Railway button functionality Ends here







