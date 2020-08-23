bg ;
    document.getElementById("bg")

moon;
document.getElementById("moon")

mountain;
    document.getElementById("mountain")

Road;
    document.getElementById("road")
Text;
    document.getElementById("text")


window.addEventListener('scroll', function() {
    var value = window.scrollY;

    bg.style.top = value * 0.5, 'px';
})