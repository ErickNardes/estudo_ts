import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }



  getLoan = (valueLoan: number): void => {
    let valueBalance = this.getBalance();
    if (this.validateStatus()) {
      this.setNewBalance(valueBalance + valueLoan)
    }

    console.log(this.getBalance());


  }
  deposit = (): number => {
    return 2
  };

}