//Завдання 1 Варіант 1
/*let randString = prompt("Input string");
/^[A-Z]/.test(randString)
  ? alert("String's starts with uppercase character")
   : alert("String's not starts with uppercase character");*/


  //Завдання 1 Варіант 2
/*function upperCase(string) { 
  return /^[A-Z]/.test(string) ?
   "String's starts with uppercase character"
   :"String's not starts with uppercase character";
}
randString("kldfgkgld");*/


//Завдання 2

/*function checkEmail(email) { 
   return /^[a-zA-Z0-9]+[\w\.\+\-]+@{1}[a-zA-Z]+[\.]+[a-zA-Z]{2,6}[\.]?([a-zA-Z]{2,6})?$/.test(email);
}
checkEmail("Qmail2@gmail.com")*/

//Завдання 3

/*let testString = prompt("Input string");
let testArr = testString.match(/([^ ]+)\s+([^ ]+)/);
let finalString = testArr[2] + " " + testArr[1];
console.log(finalString);*/


//Завдання 4
/*function bankCard(number) { 
   return /\d{4}\-\d{4}\-\d{4}\-\d{4}/.test(number);
}
bankCard("1234-1234-1234-1234");*/

//Завдання 5

/*function checkEmail(email) { 
   return /^[a-zA-Z0-9]+[\w]+\-{0,1}[\w]*@{1}[a-zA-Z]+[\.]+[a-zA-Z]{2,6}[\.]?([a-zA-Z]{2,6})?$/.test(email);
}
checkEmail("my_ma--il@gmail.com");*/


//Завдання 6

/*function checkLogin(login) {
   const numbers = login.match(/\d+(\.\d+)?/g) || [];
   const isValid = /^[a-zA-Z][a-zA-Z\d.]{1,9}$/.test(login) && (numbers.length === 0 || !numbers[0].startsWith('.'));
   return { isValid, numbers };
 }
 checkLogin('ee1.1ret3');*/
 
 //Завдання 7

document.addEventListener("DOMContentLoaded", function () { 
   const form = document.querySelector('.task-five-form');
   const fullName = document.querySelector("#fullName");
   const email = document.querySelector("#email");
   const phone = document.querySelector("#phone");
   const password = document.querySelector("#password");
   const confirmPassword = document.querySelector("#confirmPassword");
   const agryCheckbox = document.querySelector("#flexCheckDefault");

   form.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullNameValue = fullName.value;
      const emailValue = email.value;
      const phoneValue = phone.value;
      const passwordValue = password.value;
      const confirmPasswordValue = confirmPassword.value;
      const agryCheckboxCheck = agryCheckbox.checked;
      
      const fullNameValueValid = /^[A-Z][a-zA-Z]*[\s]+[A-Z][a-zA-Z]*/.test(fullNameValue);
      const emailValueValid = /^[a-zA-Z0-9]+[\w]+\-{0,1}[\w]*@{1}[a-zA-Z]+[\.]+[a-zA-Z]{2,6}[\.]?([a-zA-Z]{2,6})?$/.test(emailValue);
      const phoneValueValid = /(^\+{1}\d{12}$)|(^\+{1}\d{2}\-\d{3}\-\d{3}\-\d{2}-\d{2}$)/.test(phoneValue);
      const passwordValueValid = /^[a-z0-9_-]{8-18}$/;
      const confirmPasswordValueValid = confirmPasswordValue === passwordValue;
      const agryCheckboxCheckValid = agryCheckboxCheck;

      if (!fullNameValueValid) {
         console.log('Invalid full name');
      }
      if (!emailValueValid) {
         console.log('Invalid email');
      }
      if (!phoneValueValid) {
         console.log('Invalid phone');
      }
      if (!passwordValueValid) {
         console.log('Invalid password');
      }
      if (!confirmPasswordValueValid) {
         console.log('Invalid password confirm');
      }
      if (!agryCheckboxCheckValid) {
         console.log('Plese check this');
      }
      if (fullNameValueValid && emailValueValid && phoneValueValid && passwordValueValid && confirmPasswordValueValid && agryCheckboxCheckValid) {
         console.log("Your data is GOOD!!!");
      }
   });
})


