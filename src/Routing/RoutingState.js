import { injectable } from 'inversify'
import { makeObservable, observable } from 'mobx'

@injectable()
export class RoutingState {
  currentState = { routeId: 'loginLink', params: null, query: null }

  constructor() {
    makeObservable(this, { currentState: observable })
  }
}
