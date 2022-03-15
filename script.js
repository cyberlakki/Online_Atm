database=[{user:"urvi",pin:"1234"},{user:"namrata",pin:"12345"}]
    

function atm(){

}
function user()
{
   let username= document.getElementById("username").value
   let pincode= document.getElementById("pin").value

    var user=database.filter(x => {
        if(x.user==username && x.pin==pincode) {
            return x
            
        }  
    })

    if(user.length>0){
        document.location.href="http://127.0.0.1:5500/atm2.html"
    }
    else{
        alert("Invalid Input")
    }

    }
