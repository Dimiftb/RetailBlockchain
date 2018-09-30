var form = document.getElementById('formDiv');
var search = document.getElementById('listSearches');

function changeView() {
    label = document.getElementById('fillAll').innerHTML = "";

   if (form.style.display == "none") {
       form.style.display = "";
       search.style.display = "none";
   } else {
       search.style.display = "";
       form.style.display = "none";
   }
}

function buyTicket() {

}