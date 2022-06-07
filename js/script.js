function changeNav() {
    var header = document.getElementById('header'); 
    var headerClassLists = header.classList; 
    if(headerClassLists.contains('header_mobile')){ 
        headerClassLists.remove('header_mobile'); 
    } else { 
        headerClassLists.add('header_mobile'); 
    }
 }
 

var acc = document.getElementsByClassName("block__title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var block__text = this.nextElementSibling;
        if (block__text.style.display === "block") {
            block__text.style.display = "none";
        } else {
            block__text.style.display = "block";
        }
    });
} 