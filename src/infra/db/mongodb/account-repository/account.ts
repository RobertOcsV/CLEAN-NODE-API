import type { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import type { AddAccountModel } from '../../../../domain/usecases/add-account'
import type { AccountModel } from '../../../../domain/models/account'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountObject = {
      ...accountData,
      _id: new ObjectId()
    }

    const accountWithoutId = MongoHelper.map(accountData, accountObject._id)
    return accountWithoutId
  }
}
