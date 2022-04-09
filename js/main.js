//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


//const clear = document.getElementById('stuff')
 // stuff.innerHTML = ""


 







document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  // clear the li out of "example" ul 
  const list = document.getElementById('example');
  list.innerHTML = '';
    let drink = document.querySelector('input').value
  console.log(drink)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      let max = data.drinks.length-1
      
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions

      let result = ""
      for(let i = 1; i < 15; i++)
          if( data.drinks[counter]['strIngredient' + i] !== null & data.drinks[counter]['strIngredient' + i] != "") {
      result += data.drinks[counter]['strIngredient' + i]
              if (data.drinks[counter]['strMeasure' + i] !== null){
                  result += " (" + data.drinks[counter]['strMeasure' + i] + "), "
            
                  //creat new li 
                  const newLi = document.createElement('li')
                  
                  // pass the content 
          
                  newLi.textContent = result
                  example.appendChild(newLi);
                  result = ''
              }
          }




    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }

  
document.querySelector('.arrow-right').addEventListener('click', getDrink2)
let counter = 1
function getDrink2(){
  // clear the li out of "example" ul 
  const list = document.getElementById('example');
  list.innerHTML = '';

  let drink = document.querySelector('input').value
  console.log('test')
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let max = data.drinks.length-1
    if( counter < max) {counter ++
      console.log(max)
    console.log(counter)
  }
    else if(counter === max){
      counter = 0
    }
    document.querySelector('h2').innerText = data.drinks[counter].strDrink
    document.querySelector('img').src = data.drinks[counter].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[counter].strInstructions
    let result = ""
        for(let i = 1; i < 15; i++)
            if( data.drinks[counter]['strIngredient' + i] !== null & data.drinks[counter]['strIngredient' + i] != "") {
        result += data.drinks[counter]['strIngredient' + i]
                if (data.drinks[counter]['strMeasure' + i] !== null){
                    result += " (" + data.drinks[counter]['strMeasure' + i] + "), "
              
                    //creat new li 
                    const newLi = document.createElement('li')
                    
                    // pass the content 
            
                    newLi.textContent = result
                    example.appendChild(newLi);
                    result = ''
                }
            }
        
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

//     let result = ""
//     for(let i = 1; i < 15; i++)
//     if( data.drinks[0]['strIngredient' + i] !== null) {
//       result += data.drinks[0]['strIngredient' + i]
//               if (data.drinks[0]['strMeasure' + i] !== null){
//                   result += " (" + data.drinks[0]['strMeasure' + i] + "), "
//     document.querySelector("ul").innerText = result 
//    }
    
// }


document.querySelector('.arrow-left').addEventListener('click', getDrink3)

function getDrink3(){
 // clear the li out of "example" ul 
 const list = document.getElementById('example');
 list.innerHTML = '';
  let drink = document.querySelector('input').value
  console.log(counter)
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let max = data.drinks.length -1
    if(counter > 0 ){counter --}
    else if(counter <= 0){counter = max}
    console.log(counter)
    document.querySelector('h2').innerText = data.drinks[counter].strDrink
    document.querySelector('img').src = data.drinks[counter].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[counter].strInstructions

    let result = ""
    for(let i = 1; i < 15; i++)
        if( data.drinks[counter]['strIngredient' + i] !== null & data.drinks[counter]['strIngredient' + i] != "") {
    result += data.drinks[counter]['strIngredient' + i]
            if (data.drinks[counter]['strMeasure' + i] !== null){
                result += " (" + data.drinks[counter]['strMeasure' + i] + "), "
          
                //creat new li 
                const newLi = document.createElement('li')
                
                // pass the content 
        
                newLi.textContent = result
                example.appendChild(newLi);
                result = ''
            }
        }


    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
