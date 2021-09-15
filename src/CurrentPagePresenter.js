import 'reflect-metadata'
import { inject } from 'inversify'
import { Router } from './Routing/Router'
import { RoutingState } from './Routing/RoutingState'
import { makeObservable, computed } from 'mobx'
import { injectable } from 'inversify'

@injectable()
export class CurrentPagePresenter {
  @inject(Router)
  router

  @inject(RoutingState)
  routingState

  get currentRouteId() {
    return this.routingState.currentState.routeId
  }

  constructor() {
    makeObservable(this, {
      currentRouteId: computed,
    })
  }

  bootstrap = async () => {
    this.router.registerRoutes()
    this.loading = false
  }
}
