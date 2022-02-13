/* 
Powered | CoderX ©2021 | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
CoderX    :  https://coderx-project.blogspot.com/
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
*/
let
    o1 = document.getElementById("searchEngin"),
    o2 = document.getElementById("fileType"),
    o3 = document.getElementById("option3"),
    o4 = document.getElementById("option4"),
    o5 = document.getElementById("option5"),
    o6 = document.getElementById("option6");

//Get Full Year
const d = new Date();
document.getElementById("getCurrentYear").innerHTML = d.getFullYear();


//Go Buttom
function goButtom() {
    let x = document.getElementById("checkBoxAd").checked;
    if (x != true) {
        window.open(o1.value + o2.value + ' ' + '"' + o3.value + '"', '_blank');
    } else {
        window.open(o1.value + o2.value + ' ' + '"' + o3.value + '"' + ' ' + 'site:' + o4.value + ' ' + 'inurl:' + o5.value + ' ' + 'intext:' + o6.value, '_blank');
    }
}

//Advanced Search Resulte
function advancedSearchAd() {
    let x = document.getElementById("checkBoxAd").checked;
    if (x != true) {
        document.getElementById("advancedSrch").style.display = 'none';
    } else {
        document.getElementById("advancedSrch").style.display = 'block';
    }
}

//Loader Page
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});