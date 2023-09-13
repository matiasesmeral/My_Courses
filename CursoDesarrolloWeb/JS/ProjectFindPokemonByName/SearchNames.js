
const id = document.getElementById('id');
const buscar = document.getElementById('buscar');
const body = document.body;
const section = document.querySelector('section');
const aside = document.querySelector("aside");
let conta = 0;

buscar.addEventListener("click",(e) =>{
    e.preventDefault;
    SearchPicachu(id.value);
});

id.addEventListener("keyup",e=>{
  e.preventDefault;
  if(e.key == 'Enter'){
    SearchPicachu(id.value);
  }
  })

function asign_color(){
    const colorDominante = getRandomColor();    
    body.style.backgroundColor = colorDominante;
    //-----------------------------------------------------------------------------------------
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function SearchPicachu(pokemon){ 
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(data => data.json())
    .then (    data => 
      {
          conta++;

          const base_experience = data.base_experience;
          const height = data.height;
          const name = data.name;
          const img = data.sprites.back_default;
          const weight = data.weight;
          const titles = ["Name","Base Experience","Height","Weight"]
          const answers = [name,base_experience,height,weight];

          asign_color();

          if(conta == 1){
                const table = document.createElement("table");
                table.id = 'table';
                const thead = document.createElement("thead");
                const tbody = document.createElement("tbody");
              
                table.setAttribute("border","2");
                table.style.textAlign = 'center';
                var tr = document.createElement("tr");
                  for(let j=0;j<titles.length;j++)
                    {
                        var th = document.createElement("th");
                        th.textContent= `${titles[j]}`;
                        tr.appendChild(th);
                    }
                    thead.appendChild(tr);

                  for(let z = 0;z<answers.length;z++)
                  {
                    var trd = document.createElement("tr");
                        for (let f=0;f<answers.length;f++)
                        {
                          var td = document.createElement("td");
                          td.textContent= answers[f] ;
                          trd.appendChild(td);
                        }
                  }
                      tbody.appendChild(trd);
                      table.appendChild(thead);
                      table.appendChild(tbody);
                      section.appendChild(table);
                      createImg(img);
          } 
          
          if(conta > 1 && conta < 7) {

            const idtb = document.querySelector('table');
            var trd2 = document.createElement("tr");

              for (let f=0;f<answers.length;f++){
                var td2 = document.createElement("td");
                td2.textContent= answers[f] ;
                trd2.appendChild(td2);
              }
              
            var tbody2 = idtb.getElementsByTagName('tbody')[0];
            tbody2.appendChild(trd2);
            createImg(img);

          }else if(conta > 6)
          {
            section.innerHTML = '';
            aside.innerHTML= '';
            conta = 0;
          }

      })
    .catch(err => {
          var p = document.createElement("p");
          p.textContent = `Invalid the name of Pokemon, Please type again the name. `;
          section.appendChild(p);
          console.log(err);    
    })
}
function createImg(img){
    var imghtml = document.createElement("img");
    imghtml.src = img;
    imghtml.height = 230;
    imghtml.width = 230;
    imghtml.id = 'img-pokemon';
    imghtml.alt = "Imagen del pokemon";    
    aside.appendChild(imghtml);
}