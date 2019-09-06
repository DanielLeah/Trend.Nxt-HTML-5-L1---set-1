/*jslint devel: true */

/*eslint no-console: "off", no-undef: "off" */

function red1() {
    document.getElementById("part1").setAttribute("style","background-color: red;");
}
function blue1() {
    document.getElementById("part1").setAttribute("style","background-color: blue;");
}
function green1() {
    document.getElementById("part1").setAttribute("style","background-color: green;");
}
function red2() {
    document.getElementById("part2").setAttribute("style","background-color: red;");
}
function blue2() {
    document.getElementById("part2").setAttribute("style","background-color: blue;");
}
function green2() {
    document.getElementById("part2").setAttribute("style","background-color: green;");
}

var myVideo = document.getElementById("video1");

function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 