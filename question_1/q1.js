  let balance = 0;

  const deposit = (amount) => {
      balance += amount; 
      console.log(`Deposit ${amount} into account`);
  }

  const withdrawl = (amount) => { 
      balance -= amount;
      console.log(`Withdrawl ${amount} from account`);
  }

  const checkBalance = () => console.log(`The blance is ${balance}`);
  
  //call functions and outputs results

  checkBalance();
  deposit(100);
  checkBalance();
  withdrawl(25);
  checkBalance();


