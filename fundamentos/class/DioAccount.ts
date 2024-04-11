export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }
  setName = (name: string): void => {
    this.name = name;
    console.log("nome alterado com sucesso");
  }

  insertBalance(balance: number): void {
    this.balance = this.balance + balance

  }
  validateWithDraw(value: number): boolean {
    return this.balance >= value;
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valueDeposit: number): number => {

    if (this.validateStatus()) {
      this.insertBalance(valueDeposit)
    }
    console.log(`Depósito efetuado com sucesso, novo saldo${this.balance}`)

    return this.balance

  }

  setNewBalance(balance: number): void {
    this.balance = balance;
  }



  withdraw = (valueWithDraw: number): void => {
    if (this.validateStatus() && this.validateWithDraw(valueWithDraw)) {
      this.balance = this.balance - valueWithDraw
      console.log(this.balance);

    }
  }
  getBalance = (): number => { return this.balance }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error
  }

}