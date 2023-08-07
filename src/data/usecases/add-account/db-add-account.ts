import type { AccountModel } from '../../../domain/models/account'
import type { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import type { Encrypter } from '../../protocols/encrypter'

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
