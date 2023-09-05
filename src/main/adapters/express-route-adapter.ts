import type { Controller, HttpRequest } from '../../presentation/protocols'
import type { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    controller.handle(httpRequest)
      .then(httpResponse => {
        res.status(httpResponse.statusCode).json(httpResponse.body)
      })
      .catch(() => {
        res.status(500).json({ error: 'Internal Server Error' })
      })
  }
}
