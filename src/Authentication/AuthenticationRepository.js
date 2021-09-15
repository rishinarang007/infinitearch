import { injectable, inject } from 'inversify'
import { makeObservable, action } from 'mobx'
import { Types } from '../Core/Types'
import { Router } from '../Routing/Router'

@injectable()
export class AuthenticationRepository {
  @inject(Router)
  router

  @inject(Types.IDataGateway)
  dataGateway

  constructor() {}

  logout = async () => {
    this.router.goToId('loginLink')
  }
}
