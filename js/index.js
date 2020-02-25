var AbtUsbtn = document.getElementById('AbtUs');
var close = document.getElementById('CloseBtn');
var AbtUsInfoDiv = document.getElementById('DivAbtUs');
var bodyHTML = document.getElementById('TestA');

AbtUsbtn.addEventListener('click', function () {
    AbtUsInfoDiv.style.zIndex = "3";
    AbtUsInfoDiv.style.transition = "all 2s";
    AbtUsInfoDiv.style.top = "0vh";
    //AbtUsInfoDiv.style.opacity = "100";
    AbtUsInfoDiv.style.position = "fixed";
    AbtUsInfoDiv.style.opacity = "100";
    bodyHTML.style.overflowY = "hidden"
});

close.addEventListener('click', function () {
    //AbtUsInfoDiv.classList.toggle('hide');
    AbtUsInfoDiv.style.top = "-180vh";
    bodyHTML.style.overflowY = "scroll";
    //alert('hola');
    //AbtUsInfoDiv.style.opacity = "0";
    //AbtUsInfoDiv.style.marginTop = "-100px;"
    //AbtUsInfoDiv.style.position = "";
    //AbtUsInfoDiv.style.transition = "all 3s";
    //AbtUsInfoDiv.transition = "all 3s";
    //alert('hola');
});