function formsubmit(){

    //flag
    var flagusr = false
    var flagpwd = false
    var flagage = false
    var flagultah = false

    var username = document.getElementById("username").value
    console.log(username)
    
    if(username.length < 5){
        document.getElementById("usernameError").innerHTML= "Username must be at least 5 chars"
        flagusr = false
    }
    else{
        document.getElementById("usernameError").innerHTML= ""
        flagusr = true
    }
    

    var password = document.getElementById("password").value
    if(password.length < 8){
        document.getElementById("passwordError").innerHTML = "Password hrs 8 char"
        flagpwd = false 
    }
    else{
        document.getElementById("passwordError").innerHTML = ""
        flagpwd = true
    }

    var age = document.getElementById("umur").value
    if(age < 10){
        flagage = false
    }
    else{
        flagage = true 
    }


    var ultah = new Date(document.getElementById("ultah").value)
    // new Date().getTime() -> tgl hr ini
    var eighteen = new Date("2001-11-30")
    
    if(ultah >= eighteen){
        flagultah = false
    }
    else{
        flagultah = true
    }
    console.log("Date = " + flagultah)


    var gender = document.getElementsByName(gender)
    var flaggender = false
    for(let i=0; i<gender.length; i++)
    {
        if(gender[i].checked==true){
            flaggender = true
            console.log("Gender" + flaggender)
        }
    }

    var job = document.getElementById("job")
    console.log("job " + job.options[job.selectedIndex].value)

    console.log("chkbox " + document.getElementById("agree").checked)

if(flagusr == true && flagpwd == true && flagage == true)
{return true}
else{return false}

}