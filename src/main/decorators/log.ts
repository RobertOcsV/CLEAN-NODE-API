import type { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.controller.handle(httpRequest)

    const bodytest = {
      statusCode: 200,
      body: 'ok'
    }
    return await new Promise(resolve => { resolve(bodytest) })
  }
}
