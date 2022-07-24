let clicked = 0;
let rickRolled = 0
document.addEventListener('click', () => {
    if(clicked == 0) {
        clicked = 1
        document.getElementById('main').style.display = "initial"
        gsap.from("#main", {duration: 3, y: -100, opacity: 0})
        gsap.from("#msg", {duration: 3, y: -100, opacity: 0})
        var vid = document.querySelector('video'); 
        vid.play();
        document.getElementById('start').style.display = "none"
    }
})

    document.querySelector('video').addEventListener('ended', () => {
       rickRolled++;
       document.getElementById("msg").innerHTML = `Rickrolled: ${rickRolled} times`;
       setTimeout(() => {
        document.querySelector('video').play()
       }, 1000)
    })
