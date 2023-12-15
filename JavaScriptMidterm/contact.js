function sendEmail(){
  Email.send({
  Host : "smtp.elasticemail.com",
    Username : "tehtrueman@gmail.com",
     Password : "D551FE63CDCF99C2C7BF488085CD76EDC269",
     To : 'klassikeats@gmail.com',
    From : document.getElementById("email").value,
     Subject : "Klassik in Contact",
     Body : "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone No: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("msg").value
  }).then(
    message => alert(message)
  );	
  
  }