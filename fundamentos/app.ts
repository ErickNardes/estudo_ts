
import { DioAccount } from './class/DioAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Erick', 10)
const companyAccount: CompanyAccount = new CompanyAccount('Erick', 10,)


peopleAccount.deposit(100);
peopleAccount.withdraw(10);
companyAccount.getLoan(100)

