import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on sucess', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Robert',
        email: 'robert@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
