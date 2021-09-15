function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("password").value;  
    var pw2 = document.getElementById("confirm_password").value; 
    var email=document.getElementById("Email").value;
    var name1 = document.getElementById("FName").value;  
    var name2 = document.getElementById("LName").value; 
    //console.log(pw1) ;
      
    //check empty first name field  
    if(name1 == "") {  
      document.getElementById("FNameMsg").innerHTML = "**Fill the first name";  
      return false;  
    }

      
    //character data validation  
    if(!isNaN(name1)){  
      document.getElementById("FNameMsg").innerHTML = "**Only characters are allowed";  
      return false;  
    }  
  
   //character data validation  
    if(!isNaN(name2)){  
      document.getElementById("LNameMsg").innerHTML = "**Only characters are allowed";  
      return false;  
    }   

    //check email name field  
    if(email == "") {  
      document.getElementById("EmailMsg").innerHTML = "**Please Enter the email";  
      return false;  
    }
    
    //check empty password field  
    if(pw1 == "") {  
      document.getElementById("passwordMessage").innerHTML = "**Fill the password please!";  
      return false;  
    }  
    
    //check empty confirm password field  
    if(pw2 == "") {  
      document.getElementById("confirm_password_message").innerHTML = "**Enter the password please!";  
      return false;  
    }   
     
    //minimum password length validation  
    if(pw1.length < 8) {  
      document.getElementById("passwordMessage").innerHTML = "**Password length must be atleast 8 characters";  
      return false;  
    }  
  
    //maximum length of password validation  
    if(pw1.length > 15) {  
      document.getElementById("passwordMessage").innerHTML = "**Password length must not exceed 15 characters";  
      return false;  
    }  
    
    if(pw1 != pw2) {  
      document.getElementById("confirm_password_message").innerHTML = "**Passwords are not same";  
      return false;  
    } 
    else {  
      console.log(name1);
      console.log(name2);
      console.log(email);
      console.log(pw1); 
      alert ("Your password created successfully");   
     
    }  
 }  