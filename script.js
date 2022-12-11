const name1=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('password1');
const clickButton=document.getElementById('but');
const data1=document.getElementById('data');

clickButton.addEventListener('click',function(){
    if(name1.value.length <=3 || name1.value.length >= 16){
        alert('Enter Name between 3 and 16 characters');
        return;
    }
    var Emaildata=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if(email == '' || ! Emaildata.test(email.value)){
        alert('Please Enter a valid Email Address');
        
        return;
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(! password.value.match(passw)){
        alert('Enter password in between 6 and 20 and 1 UpperCase Letter One Lower Case Letter and spetial Character');
        return;
    }
    if(password.value !== repassword.value){
        alert('Enter the same password');
        return;
    }
    let html =``;
    html += ` <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
  </tr>
  <tr>
    <td>${name1.value}</td>
    <td>${email.value}</td>
    <td>${password.value}</td>
  </tr>`;
    data1.innerHTML=html;
})