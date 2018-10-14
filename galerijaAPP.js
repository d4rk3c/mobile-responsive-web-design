var img = document.querySelector('.pickImg')
var showImg = document.getElementById('show-img');
var close = document.querySelector('.closeImg');
var show = document.querySelector('.show-gallery');

document.querySelector('.divPic').addEventListener("click", function (event) {
    funct(event.target)
})
function funct(element) {
    
    show.style.display = 'block';
    showImg.src = element.src
    close.addEventListener("click", function () {
        show.style.display = "none";
    })
    window.onclick = function (event) {
        if (event.target == show) {
            show.style.display = "none";
        }
    }

}
