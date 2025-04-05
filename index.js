// bismillah

function getCharLen(excSpace){ //get and set charater lenght

let characters = document.getElementById("characters");
let charLength;

if(excSpace){
charLength = (characters.value).replace(/\s/g, "").length;
document.getElementById("sps").style.display = "inline";

}
else{
  charLength = characters.value.length
  document.getElementById("sps").style.display = "none";
  
}


document.getElementById("numOfChar").innerHTML = charLength ?? 0;
}


// showing/hiding character limit input

let charLimit = document.getElementById("count");
charLimit.addEventListener('change', function(){

  if(this.checked){
    document.getElementById("limit").style.display = "inline";
  }

  else{
    document.getElementById("limit").style.display = "none";

  }
})




function getSpaceStatus(){ // including/excluding spaces

let excludeSpaces;


let Spaces = document.getElementById("spaces");
Spaces.addEventListener('change', function(){
  
  if(this.checked){
    excludeSpaces = true;
    getCharLen(excludeSpaces);

  }
  else{
    excludeSpaces = false;
    getCharLen(excludeSpaces);
  }

})
}

getCharLen(false);
getSpaceStatus();



// setting limit bound 

let limit = document.getElementById("limit");
let limitValue;

limit.addEventListener('change', function(){
  limitValue = limit.value;
})