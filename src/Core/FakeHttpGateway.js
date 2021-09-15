import { injectable, inject } from 'inversify'


@injectable()
export class FakeHttpGateway {
  get = async (path) => {}

  post = async (path, requestDto) => {
    console.log('got here')
  }
}
