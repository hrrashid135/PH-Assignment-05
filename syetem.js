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


//clear all button functionality starts here
document.getElementById('clear-all-btn').addEventListener('click', function() {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear all content inside the container
});

//copy emergency number button functionality starts here
document.getElementById('copy-emergency').addEventListener('click', function() {
    // Get the text content of the emergency number
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Emergency number copied to clipboard: 999");
});
//copy emergency number button functionality ends here


//copy police helpline number button functionality starts here
document.getElementById('police-copy').addEventListener('click', function() {
    // Get the text content of the emergency number
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Police helpline number copied to clipboard: 999");
});
//copy police helpline number button functionality ends here


//copy fire service helpline number button functionality starts here
document.getElementById('fire-service-copy').addEventListener('click', function() {
    // Get the text content of the emergency number
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Fire Service helpline number copied to clipboard: 999");
});
//copy fireService helpline number button functionality ends here



//copy Ambulence service helpline number button functionality starts here
document.getElementById('ambulence-service-copy').addEventListener('click', function() {
    // Get the text content of the emergency number
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Ambulence Service helpline number copied to clipboard: 1994-999999");
});
//copy Ambulence  helpline number button functionality ends here


//copy Women,children service helpline number button functionality starts here
document.getElementById('women-service-copy').addEventListener('click', function() {
    // Get the text content of the emergency number
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Women and children Helpline helpline number copied to clipboard: 109");
});
//Women & children  helpline number button functionality ends here


//copy Anti Corruption helpline number button functionality starts here
document.getElementById('dudok-copy').addEventListener('click', function() {
    // Get the text content of the emergency number
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Anti-corruption Helpline helpline number copied to clipboard: 106");
});
//Anti -corruption  helpline number button functionality ends here



//Electricity  helpline number button functionality starts here
document.getElementById('electricity-copy').addEventListener('click', function() {
    
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Electricity Helpline helpline number copied to clipboard: 16216");
});
//Electricity  helpline number button functionality ends here



//Brac  helpline number button functionality starts here
document.getElementById('brac-copy').addEventListener('click', function() {
    
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Brac Helpline helpline number copied to clipboard: 16445");
});
//Brac  helpline number button functionality ends here



//Railway  helpline number button functionality starts here
document.getElementById('rail-copy').addEventListener('click', function() {
    
    let copyCount=parseInt(document.getElementById('copy_count').innerText);
    copyCount+=1;
    document.getElementById('copy_count').innerText=copyCount;
   
    alert("Railway Helpline helpline number copied to clipboard: 163");
});
//Railway  helpline number button functionality ends here











