let y=parseInt(document.getElementById('coin-count').innerText);
y=50;
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
    }
    else{
        alert("Not enough coins to make the call.");
    }

})
//call fire service button functionality ends here
