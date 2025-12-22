 function search(){
        document.getElementById('demo5').style.display="block";
      }
      function display()
      {
        /*document.getElementById('demo').style.display="block";*/
         var details = document.getElementById('demo');
    if (details.style.display == "none" || details.style.display == "") 
    {
        details.style.display = "block";  // Show
    } else {
        details.style.display = "none";   // Hide
    }
      }
      function dark_mode() {
  document.body.classList.add('dark-mode');
}
function light_mode() {
  document.body.classList.remove('dark-mode');
}
      function settings()
      {
        /*document.getElementById('demo1').style.display="block";*/
         var details = document.getElementById('demo1');
    if (details.style.display == "none" || details.style.display == "") 
    {
        details.style.display = "block";  // Show
    } else {
        details.style.display = "none";   // Hide
    }
      }
      function myactivity()
      {
       /* document.getElementById('demo2').style.display="block";*/
        var details = document.getElementById('demo2');
    if (details.style.display == "none" || details.style.display == "") 
    {
        details.style.display = "block";  // Show
    } else {
        details.style.display = "none";   // Hide
    }
      }
      function privacy()
      {
        /*document.getElementById('demo3').style.display="block";*/
         var details = document.getElementById('demo3');
    if (details.style.display == "none" || details.style.display == "") 
    {
        details.style.display = "block";  // Show
    } else {
        details.style.display = "none";   // Hide
    }
      }
      function payments()
      {
        /*document.getElementById('demo4').style.display="block";*/
         var details = document.getElementById('demo4');
    if (details.style.display == "none" || details.style.display == "") 
    {
        details.style.display = "block";  // Show
    } else {
        details.style.display = "none";   // Hide
    }
      }
      function search(){
       /* document.getElementById('demo5').style.display="block";*/
        var details = document.getElementById('demo5');
    if (details.style.display == "none" || details.style.display == "") 
    {
        details.style.display = "block";  // Show
    } else {
        details.style.display = "none";   // Hide
    }
      }
     
document.getElementById('myform').addEventListener('submit', function(event)
{                                              //When this form is submitted, do something
    event.preventDefault(); // it stops page from reloading
    let isvalide = true; // assume the form is valid

    const fullname = document.getElementById('fullname').value.trim();
    let f_length = fullname.length;
    const name_regex = /^[A-Za-z ]+$/;
    if(fullname == ""){
        document.getElementById('fullname_e').style.display = "block";
        document.getElementById('fullname_e').innerHTML = "Full name is required";
        isvalide = false;
    }
    else if(f_length < 2 || f_length > 20){
        document.getElementById('fullname_e').style.display = "block";
        document.getElementById('fullname_e').innerHTML = "Full name must be between 2 to 50 characters";
        isvalide = false;
    }
    else if(!name_regex.test(fullname)){
        document.getElementById('fullname_e').style.display = "block";
        document.getElementById('fullname_e').innerHTML = "Full name must contain only letters and spaces";
        isvalide = false;
    }
    else{
        document.getElementById('fullname_e').style.display = "none";
    }

    const number = document.getElementById('number').value.trim();
    const number_regex = /^[0-9]{10}$/;
    if(number == ""){
        document.getElementById('number_e').style.display = "block";
        document.getElementById('number_e').innerHTML = "Phone number is required";
        isvalide = false;
    }   
    else if(!number_regex.test(number)){
        document.getElementById('number_e').style.display = "block";
        document.getElementById('number_e').innerHTML = "Phone number must be of 10 digits";
        isvalide = false;
    } 
    else{
        document.getElementById('number_e').style.display = "none";
    } 

    const email = document.getElementById('email').value.trim();
    const email_regex = /^[a-z0-9.]+@[a-z.]+\.[a-z]{2,}$/;
    if(email == ""){
        document.getElementById('email_e').style.display = "block";
        document.getElementById('email_e').innerHTML = "Email is required";
        isvalide = false;
    }
    else if(!email_regex.test(email)){
        document.getElementById('email_e').style.display = "block";
        document.getElementById('email_e').innerHTML = "Email format is incorrect";
        isvalide = false;
    }
    else{
        document.getElementById('email_e').style.display = "none";
    }

    const password = document.getElementById('password').value.trim();
    const password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%])[A-Za-z0-9!@#$%]{8,10}$/;
    if(password == ""){
        document.getElementById('password_e').style.display = "block";
        document.getElementById('password_e').innerHTML = "Password is required";
        isvalide = false;
    }
    else if(!password_regex.test(password)){
        document.getElementById('password_e').style.display = "block";
        document.getElementById('password_e').innerHTML = "Password must contain A-Z, a-z, 0-9, (!@#$%), min 8, max 10";
        isvalide = false;
    }
    else{
        document.getElementById('password_e').style.display = "none";
    }

  
    const c_password = document.getElementById('c_password').value.trim();
    if(c_password == ""){
        document.getElementById('c_password_e').style.display = "block";
        document.getElementById('c_password_e').innerHTML = "Confirm password is required";
        isvalide = false;
    }
    else if(password != c_password){
        document.getElementById('c_password_e').style.display = "block";
        document.getElementById('c_password_e').innerHTML = "Confirm password does not match";
        isvalide = false;
    }
    else{
        document.getElementById('c_password_e').style.display = "none";
    }

  
    const gender = document.getElementsByName('gender');
    let selectedgender = false;
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            selectedgender = true;
            break;
        }
    }
    if(!selectedgender){
        document.getElementById('gender_e').style.display = "block";
        document.getElementById('gender_e').innerHTML = "Select your gender";
        isvalide = false;
    }
    else{
        document.getElementById('gender_e').style.display = "none";
    }

    const coffee = document.getElementById('coffee').value;
    if (!coffee) {
        document.getElementById('coffee_e').innerText = "Please select your favorite coffee type.";
        isvalide = false;
    } else {
        document.getElementById('coffee_e').innerText = "";
    }

    const sugar = document.getElementById('sugar').value;
    if (!sugar) {
        document.getElementById('sugar_e').innerText = "Please select your sugar preference.";
        isvalide = false;
    } else {
        document.getElementById('sugar_e').innerText = "";
    }

    const contactCheckboxes = document.querySelectorAll('.contact');
    let checkedCount = 0;
    contactCheckboxes.forEach(function(box) {
        if (box.checked) checkedCount++;
    });
    if (checkedCount === 0) {
        document.getElementById('contact_e').innerText = "Please select at least one contact method.";
        isvalide = false;
    } else if (checkedCount > 2) {
        document.getElementById('contact_e').innerText = "Max select 2 methods.";
        isvalide = false;
    } else {
        document.getElementById('contact_e').style.display = "none";
    }

   // Terms and conditions validation
const terms = document.querySelector('input[type="checkbox"]:not(.contact)');
if (!terms.checked) {
    document.getElementById('terms_e').style.display = "block";
    document.getElementById('terms_e').innerHTML = "You must agree to the terms and conditions";
    isvalide = false; // means the feild is null or not
} else {
    document.getElementById('terms_e').style.display = "none";
    document.getElementById('terms_e').innerHTML = "";
}
    if(isvalide){
        alert("Form successfully submitted");
        event.target.reset();
       
    }
});

