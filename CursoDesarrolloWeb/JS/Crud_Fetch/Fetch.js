// https://jsonplaceholder.typicode.com/guide/
/*
 name: form.elements.name.value,
  age: form.elements.age.value

   id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,

*/

const title = document.getElementById('title');
const body = document.getElementById('body');
const id = document.getElementById('id');
const button_habilitar = document.getElementById('habilitar');
const form = document.getElementById('formulario');
let CheckEvent = false;
const load = document.getElementById('load');
const del = document.getElementById('delete');

const fet1 = function fechData(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(Response => Response.json())
    .then(Response => {
        title.readOnly = true;
        body.readOnly = true;
        id.style.display = 'none';
        title.value += Response.title;
        body.value += Response.body;
        id.textContent = Response.id;  
    })

}

fet1();

button_habilitar.addEventListener('click',e=>{
    e.preventDefault();
    title.readOnly = false;
    body.readOnly = false;
    CheckEvent =  true;
})


form.addEventListener('submit',(e) =>{
    e.preventDefault();

    if(CheckEvent){
        const url = `https://jsonplaceholder.typicode.com/posts/${id.textContent}`; 
        const objec_to_Send = {
            id: id.textContent,
            body: body.value,
            title: title.value,
            userId: 1,
        }
        fetch(url,
            {
                method: 'PUT',
                headers: { 'content-type':'application/json'
            },
                body: JSON.stringify(objec_to_Send)
            }
        )
        .then(data => data.json())
        .then( data => {
            load.style.display = 'block';
            load.textContent = 'Datos modificados correctamente.';
            setTimeout(() => {
                load.style.display = 'none';
                title.readOnly = true;
                body.readOnly = true; 
                title.value = "";
                body.value = "";
                id.textContent = "";  
                //--------------------
                setTimeout( () =>{
                    title.value += data.title;
                    body.value += data.body;
                    id.textContent += data.id;  
                },1000)
            }, 3500);
            
        })
        .catch(e => {
            console.log('There were a mistake to modify the data.',e)
        });
    }else{
        alert('Please, Press the Enable Button.')
    }
        
})

del.addEventListener('click',e => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id.textContent}`,{
        method:'DELETE'
    })
    .then(Response => {
        if(Response.ok){
                load.style.display = 'block';
                load.textContent = 'Se ha eliminado correctamente';
                setTimeout(() =>{
                    load.textContent = '';
                    title.value = "";
                    body.value = "";
                    id.textContent = ""; 
                    title.readOnly = true;
                    body.readOnly = true; 
                },2500)
            document.getElementById('listar').style.display = 'inline-block';
        }else{
            load.textContent = 'No se pudo eliminar';
        }
    })
    .catch(e=>{
        console.log(e);
    })
})

document.getElementById('listar').addEventListener('click',e=>{
    fet1();
})