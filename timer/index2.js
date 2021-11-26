// DOM Elements
var pomodoro = document.getElementById("pomodoro");
var firstBtn = document.getElementById("first-btn");

var minElem = document.getElementById("min");
var secElem = document.getElementById("sec");

// Variables
var min = 0;
var sec = 10;
var interv = null;
var isRest = false;

// events
firstBtn.addEventListener("click", firstBtnClickHandler);


// handlers
function firstBtnClickHandler(e) {

    timer();

}

// helper functions
function timer() {
    interv = setInterval(function () {
    sec--;
    if (sec < 0) {
        min--;
        if (min < 0) {
        reset();
        } else {
        sec = 59;

        // set Minutes in the DOM
        changeTimeUi(minElem, min);
        }
    }
    // set seconds in the DOM
    changeTimeUi(secElem, sec);
    }, 1000);
}

function changeTimeUi(elem, time) {
    var str = time + "";
    if (str.length === 1) str = "0" + str;
    elem.innerHTML = str;
}

function reset() {
    alert('제한시간이 초과되었습니다.')
    min = 0;
    sec = 10;
    interv = null;
    changeTimeUi(minElem, min);
    changeTimeUi(secElem, sec);
}



  