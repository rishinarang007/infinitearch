import { injectable, inject } from 'inversify'
import { Config } from './Config'

@injectable()
export class HttpGateway {
  @inject(Config)
  config

  get = async (path) => {
    const response = await fetch(this.config.apiUrl + path)
    const dto = response.json()
    return dto
  }

  post = async (path, requestDto) => {
    const response = await fetch(this.config.apiUrl + path, {
      method: 'POST',
      body: JSON.stringify(requestDto),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseDto = response.json()
    return responseDto
  }
}
