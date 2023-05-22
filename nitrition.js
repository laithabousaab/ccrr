let wight=document.getElementById("wight");
let haight=document.getElementById("haight");
let alkaser=document.getElementById("alkaser");
let reelfate=document.getElementById("reelfate");
let reelalkaser=document.getElementById("reelalkaser");
let maseles=document.getElementById("maseles");
let bons=document.getElementById("bons");
let atherthinks=document.getElementById("atherthinks");
let creat=document.getElementById("creat");





creat.onclick=function()
{
 if ( wight.value > 0 && haight.value > 0 &&alkaser.value > 0)
 {
   
     let totle;
    totle=wight.value*0.38; 
    let totle2;
    totle2=haight.value*0.074
    let totle3;
    totle3=alkaser.value*0.07;
    reelfate.innerHTML=totle-totle2 + totle3;


    let totle4;
    totle4=wight.value*0.38; 
    let totle5;
    totle5=haight.value*0.074
    let totle6;
    totle6=alkaser.value*0.03;
    maseles.innerHTML=totle4-totle5 + totle6;


    let totle7;
    totle7=wight.value*0.36; 
    let totle8;
    totle8=haight.value*0.075
    let totle9;
    totle9=alkaser.value*0.029;
    bons.innerHTML=totle7-totle8 + totle9;



    let totle10;
    totle10=wight.value*0.29; 
    let totle11;
    totle11=haight.value*0.074
    let totle12;
    totle12=alkaser.value*0.023;
    atherthinks.innerHTML=totle10-totle11 + totle12;

 }else{}





}





