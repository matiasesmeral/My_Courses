//https://restcountries.com/v3.1/all


const titleinterval = document.getElementById("h1");

titleinterval.innerHTML = `Please, wait for ten minutes, we are getting the information`;

document.getElementById("id").style.visibility = `hidden`;
document.getElementById("title").style.visibility = `hidden`;

setTimeout( ()=>{
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then( response => {
        let idjson = response.id;
        let titlejson = response.title;
        let state = response.completed;
        const hstate = document.getElementById("state");
        document.getElementById("id").style.visibility = `visible`;
        document.getElementById("title").style.visibility = `visible`;

        document.getElementById("id").textContent += `${idjson}`;
        document.getElementById("title").textContent += `${titlejson}`;
        hstate.innerHTML += `${state}`;
        titleinterval.style.display = "none";
    }
    )
    .catch(err => console.log("There are a mistake in the request of http"))

},5000) 
