let Limitcheckbox = document.getElementById("count");
let limit = document.getElementById("limit");


Limitcheckbox.onchange = function() {
    limit.style.display = this.checked ? "block" : "none";
}
console.log(Limitcheckbox.checked);