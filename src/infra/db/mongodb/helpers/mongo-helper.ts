import { MongoClient } from 'mongodb'
import type { Collection, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,
  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri ?? '')
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null as any
  },

  async getCollection (name: string): Promise <Collection> {
    if (!this.client?.connect) { await this.connect(this.uri) }
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
