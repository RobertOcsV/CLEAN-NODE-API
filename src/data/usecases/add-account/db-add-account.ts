import type { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    const newAccount: AccountModel = {

      id: '123',
      name: 'valid_name',
      email: 'example@example.com',
      password: 'valid_password'
      // ... outros campos
    }

    return await new Promise<AccountModel>(resolve => { resolve(newAccount) })
  }
}
