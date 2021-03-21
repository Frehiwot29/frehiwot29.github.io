"use strict"
/**
 * 
 */
function loading(){
    let subTotal;
    let tip;
    var total;
    var totalElem =document.getElementById('total');
    let calculate=document.getElementById("btn")
    calculate.onclick=calcTip;
    /**
     * 
     */
    function calcTip() {
         subTotal =Number(document.getElementById('subtotal').value); 
         tip=Number(document.getElementById('tip').value); 
        total = (subTotal+subTotal*(tip/100));
        totalElem.innerHTML = '$' + total;
    }
}
/**
 * 
 */
function initialization(){
    window.onload = loading; 
}

initialization();