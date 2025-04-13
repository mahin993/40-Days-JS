//  Closure
function outer(){
  let x = 10;

  return function inner(){
    console.log(x)
  }

  
}

let func = outer()
// console.log(func());


function outerCount(){
  let count = 0;

  return function innerCount(){
    count++;
    console.log(count)
  }
}

let retVal = outerCount();
// console.log(retVal());



// Real world example of Closure:
// function createBankAccount(initialBalance){
//   let balance = initialBalance;

//   return {
//     "deposit" : (amount) => {
//       balance += amount;
//       console.log(`Deposited: ${amount}, Current Balance: ${balance}`);      
//     },

//     "withdraw" : (amount) => {
//       if(amount > balance){
//         console.warn("Insufficient Balance")
//       } else {
//         balance -= amount;
//         console.log(`Withdrawn: ${amount}, Current Balance: ${balance}`); 
//       }     
//     },

//     "checkBalance" : () => console.log(`Current Balance ${balance}`)
    
//   }
// }

// let account = createBankAccount(100);
// console.log(account.deposit(300)); // 400
// console.log(account.withdraw(50)); // 350
// console.log(account.withdraw(20)); // 330
// console.log(account.withdraw(50)); // 280
// console.log(account.withdraw(150)); // 130
// console.log(account.checkBalance()); // 130


function createBankAccount(initialBalance){
  let balance = initialBalance;

  return {
    "deposit" : (amount) => {
      balance += amount;
      console.log(`Deposited ${amount}, Current Balance ${balance}`);      
    },

    "withdraw" : (amount) => {
      if(amount > balance){
        console.warn("Insufficient Balance")
      } else {
        balance -= amount;
        console.log(`Withdrawn ${amount}, Current Balance ${balance}`);
      }
    },

    "checkBalance" : () => console.log(`Current Balance ${balance}`)
  }
}

let account = createBankAccount(100);
// console.log(account.deposit(500));
// console.log(account.withdraw(500));
// console.log(account.deposit(1000));
// console.log(account.withdraw(900));
// console.log(account.checkBalance());

/**
 Usefulness of Closure
 * Keep the variables private without exposing them.
 * Stop variable pollution.
 * Create a function factory.
 * Keep a variable alive between multiple calls.
 */

 function timer(){
  let seconds = 0;

  return function(){
    seconds++;
    console.log(`Elapsed Seconds ${seconds}`);
  }
 }

 let timerInstance = timer();
 timerInstance();
 timerInstance();
 timerInstance();

 function setupBtn(){
  let btnCount = 0;
  document.getElementById("btn").addEventListener("click", () => {
    btnCount++;
    console.log(`Button Clicked ${btnCount} times`);    
  })
 }

 setupBtn()
