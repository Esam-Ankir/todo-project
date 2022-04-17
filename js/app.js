var userName=prompt("Please enter your name")
var userGender=prompt("Please enter your gender")
var userAge=prompt("Please enter your age")
if(userAge<=0){
    alert("Please enter a real age")
    prompt("Please enter your age again")
}   
var confirmig=confirm("Do you want to skip the welcoming message?")
if(confirmig==false){
    if(userGender.toLowerCase()==="male"){
        alert(`Welcome Mr ${userName}`)
    }else if (userGender.toLowerCase()==="female"){
        alert(`Welcome Ms ${userName}`)
    }else{
        alert(`Welcome ${userName}`)
    }
}




