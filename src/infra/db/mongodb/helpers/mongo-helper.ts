import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (url: string): Promise<void> {
    beforeAll(async () => {
      if (process.env.MONGODB_URI) {
        this.client = await MongoClient.connect(process.env.MONGODB_URI)
        console.log('connection to mongodb successful')
      } else {
        throw new Error('MONGODB_URI environment variable is not defined.')
      }
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
