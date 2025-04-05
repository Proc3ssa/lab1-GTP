//  bismillah

const characters = document.getElementById("characters").value;
let charLenght = characters.length;

document.getElementById("numOfChar").innerHTML = charLenght; //setting number of characters value to charLength.

// excluding/including  spaces
const spaces = document.getElementById('spaces');

spaces.addEventListener('change', function(){

    if(this.checked){

    }

    else{
        
    }
})


//setting character limit
const limit = document.getElementById('count');


limit.addEventListener('change', function() {
 
  if (this.checked) {

    console.log('Checkbox is now checked!');
    document.getElementById('limit').style.display = 'block';

  } else {
    document.getElementById('limit').style.display = 'none';
  }
});