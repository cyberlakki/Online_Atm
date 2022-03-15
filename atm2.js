function ww(){
    document.getElementById('msg').innerHTML=`<b><label for='amount'>Enter Amount:- </label><input type='text' id="amount"></b><button onclick="ww1()" >Submit</button>`
    
}
function dp(){
    document.getElementById('msg').innerHTML=`<b><label for='amount'>Enter Amount:- </label><input type='text' id="amount"></b><button onclick="ww2()" >Submit</button>`
    
}


function ww1(){
let balance= document.getElementById('bal').value;
let amount=document.getElementById('amount').value;
if(amount>balance)
{
alert("Insufficient Balance")
}
else{
document.getElementById('bal').value=balance-amount;
document.getElementById('msg').innerHTML='<b>Transaction Successfull !'
}
}
function ww2(){
let balance=parseInt(document.getElementById('bal').value);
let amount=parseInt(document.getElementById('amount').value);

if(amount>=0){
document.getElementById('bal').value=balance+amount;
document.getElementById('msg').innerHTML='<b>Deposit Successfull !'

}
else{
alert("Please Enter your Amount")
}
}

function logout(){
document.location.href="http://127.0.0.1:5500/atm.html"

}