const timer = document.getElementById("Stopwatch");

var hr = 0;
var ms = 0;
var s = 0;
var stime = true;
function start() {
  if (stime == true) {
    stime = false;
    tcycle();
  }
}
function stop() {
  if (stime == false) {
    stime = true;
  }
}
function reset() {
  timer.innerHTML = "00.00.00";
}
// function stimer(){
//   if(stime == true){
//     stime = false;
//     tcycle();
//   }//hii ni ya nini? tulitumia start() okay
// hii ni ya ku start ama tulitumia function name gani kwa html

function tcycle() {
  if (stime == false) {
    s = parseInt(s);
    ms = parseInt(ms);
    hr = parseInt(hr);
    //ebu explain hii part sielewi whats happening
    s = s + 1;
    if (s == 60) {
      ms = ms + 1;
      s = 0;
    }
    // nishaeka kwa html
    // guess what ?? its working haiyaa im trying to run and nothing ama let me try kwa html
    //we can go through the js code  umeeka kwa html kweli juu sioni
    // nimeeka kwa hiyo section ya script alafu nikatoa import okay
    //ama let me do it on my end juu sioni hiyo change unasema
    //eka kwa html ooh
    // iko na shida kama ile ingine ati its not defined i dunno why (^_^)
    if (ms == 60) {
      hr = hr + 1;
      ms = 0;
      s = 0;
    }

    timer.innerHTML = hr + ":" + ms + ":" + s;
    setTimeout(tcycle(), 1000); // th
  }
}
