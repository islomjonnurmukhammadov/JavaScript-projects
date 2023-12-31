let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");
let a5=document.getElementById("a5");
let a6=document.getElementById("a6");
let a7=document.getElementById("a7");
let a8=document.getElementById("a8");
let a9=document.getElementById("a9");

var bir=Math.floor(Math.random(1,10) * (10-1+1));
// var bir = 1;
var ikki=Math.floor(Math.random(1,10) * (10-1+1));
var uch=Math.floor(Math.random(1,10) * (10-1+1));
var tort=Math.floor(Math.random(1,10) * (10-1+1));
var besh=Math.floor(Math.random(1,10) * (10-1+1));
var olti=Math.floor(Math.random(1,10) * (10-1+1));
var yetti=Math.floor(Math.random(1,10) * (10-1+1));
var sakkiz=Math.floor(Math.random(1,10) * (10-1+1));
var toqqiz=Math.floor(Math.random(1,10) * (10-1+1));
if (bir!=0 && ikki!=0 && uch!=0 && tort!=0 && besh!=0 && olti!=0 && yetti!=0 && sakkiz!=0 && toqqiz!=0){
    if (bir==1){
        a1.href="/random/tas1.html";
    }else if(bir==2){
        a1.href="/random/tas2.html";
    }
}