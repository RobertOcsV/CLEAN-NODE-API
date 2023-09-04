import { MongoClient } from 'mongodb'
import type { Collection, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri ?? '')
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any, objectId: ObjectId): any => {
    const collectionWithoutId = {
      name: collection.name,
      email: collection.email,
      password: collection.password,
      id: objectId.toHexString()
    }

    return collectionWithoutId
  }

}
