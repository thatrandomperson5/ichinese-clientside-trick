var index;
var list = document.getElementsByClassName("fas fa-book fa-2x");

for (index = 0; index < list.length; ++index) {
    list[index].style.color = "rgb(255, 193, 7)";
}
var index2;
var list2 = document.getElementsByClassName("fab fa-quora fa-2x");

for (index2 = 0; index2 < list2.length; ++index2) {
    list2[index2].style.color = "rgb(255, 193, 7)";
}
var elm = document.getElementsByClassName("progress-bar")[0];
if (elm) {
    elm.style.width = "100%";
}
var elm2 = document.getElementsByClassName("col-12 col-md-8 row")[0].children;
if (elm2) {
    elm2[1].textContent = "100%";
}
