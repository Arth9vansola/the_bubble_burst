var Timer = 60
var score = 0
var ohit = 0

var makeBubble = () => {//this is entire code for making bubble
    var clutter = ""
    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `  <div class="bubble">${rn}</div>`
    }

    var pbtm = document.querySelector(".pbtm")

    pbtm.innerHTML = clutter
}

var runTimer = () => {
    var timeint = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#time").textContent = Timer
        } else {
            document.querySelector("#nhit").textContent = 0
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`
            clearInterval(timeint)
        }

    }, 1000);

}

var getnewHit = () => {
    ohit = Math.floor(Math.random() * 10)
    document.querySelector('#nhit').textContent = ohit
}


var increaseScore = () => {
    score += 10
    document.querySelector("#newscore").textContent = score
}



document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent)//target give number that on which you clicked
    if (clickednum === ohit) {
        increaseScore()
        makeBubble()
        getnewHit()
    }
})

getnewHit()
runTimer()
makeBubble()


//event bubbling - when we click on some event and there is event not happen it check in parent and in parent there is no event it will check on the parent of their parent

//black color - string and blue color - number