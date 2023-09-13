/*
Nombre completo [text]
Número de teléfono principal [number]
Número de teléfono secundario [number]
Dirección de correo electrónico principal [email]
Dirección física (calle, número, ciudad, estado/provincia, código postal, país) [string]
Fecha de cumpleaños [date] 
Organización o empresa [string]
Cargo o puesto de trabajo [string]
Notas adicionales [string]
Sitio web [url]
Foto de perfil [img]
*/


document.getElementById('formulario').addEventListener('submit',(e) =>

{
    
    e.preventDefault();

    let verify = false;

    const name = document.getElementById('fullName').value;
    const mainNumber = document.getElementById('mainNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const email = document.getElementById('email').value;
    const direction = document.getElementById('direction').value;
    const hbd = document.getElementById('hbd').value;
    const org = document.getElementById('org').value;
    const position = document.getElementById('position').value;
    const website = document.getElementById('website').value;
    const pic = document.getElementById('pic').value;
    const textarea = document.getElementById('textarea').value;

    if(validator.isEmpty(name) && (!validator.isAlpha(name))){
        alert('Your name is incorrect, verify again.');
        verify = true;
    }
    if( !validator.isNumeric(mainNumber) && validator.isEmpty(mainNumber)){
        alert('Your phone Number is incorrect, verify the information again.')
        verify = true;
    }
    if(!validator.isNumeric(secondNumber)){
        alert('The second number is empty.');
        verify = true;
    }
    if(!validator.isEmail(email) && validator.isEmpty(email)){
        alert('email incorrect o empty.');
        verify = true;
    }
    if(validator.isEmpty(direction) ) {
        alert('direction is empty.');
        verify = true;
    }
    if(validator.isEmpty(hbd)){
        alert('email is empty.');
        verify = true;
    }
    if(validator.isEmpty(org) && !validator.isAlpha(org)){
        alert('the information of org is invalid. Check again.');
        verify = true;
    }
    if(validator.isEmpty(position) && !validator.isAlpha(position)){
        alert('is incorrect the information in the position of org.');
        verify = true;
    }
    if( validator.isEmpty(website)){
        alert('check the information in the website box');
        verify = true;
    }
   
    if(verify){
        console.log('Hay un error. No se pueden guardar los datos aun.')
    }else{
        const dataJson = {
            "Name": name,
            "Main Number": mainNumber,
            "Second Number" : secondNumber,
            "Email" : email,
            "Direction": direction,
            "BirthDay": hbd,
            "Organization" : org,
            "Position" : position,
            "Name of WebSite": website,
            "Comment" : textarea
        }

        console.log(dataJson);

        fetch('/savedata',{
            body: dataJson,
            headers: {
                'Content-Type':'application/json'
            },
            method:'PUT'
        })
        .then( Response => Response.text())
        .then(Response => {
            console.log('Datos enviados exitosamente. ',Response)
        })
        .catch(e => {
            console.log(e)
        })
    }

})