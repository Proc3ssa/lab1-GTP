// bismillah


function toggleTheme() {
  let isDark = document.body.classList.toggle('dark-theme');

  const toggle = document.getElementById('toggle');
    
  toggle.src = isDark ? './assets/images/icon-sun.svg' : './assets/images/icon-moon.svg';
}





let characters = document.getElementById("characters");
let sentences;
function getCharLen(excSpace){ //get and set charater lenght

let charLength, wordCount;

wordCount = characters.value.split(/\s/g).length;
wordCount < 10 ? wordCount = "0"+wordCount : "";
document.getElementById("numOfWords").innerHTML = wordCount;

if(excSpace){
charLength < 10 ? charLength = "0"+charLength : "";

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

function getSentences(){
  sentences = characters.value.split(".").length;
  
  document.getElementById("sentCount").innerHTML = sentences;
}

getCharLen(false);
getSpaceStatus();
getSentences();



// setting limit bound 

let limit = document.getElementById("limit");
let limitValue;

limit.addEventListener('change', function(){
  limitValue = limit.value;
})