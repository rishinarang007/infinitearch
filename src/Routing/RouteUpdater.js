import { inject, injectable } from 'inversify'
import { action, makeObservable } from 'mobx'
import { RoutingState } from './RoutingState'
import { Routes } from './Routes'

@injectable()
export class RouteUpdater {
  @inject(RoutingState)
  routingState

  @inject(Routes)
  routes

  constructor() {
    makeObservable(this, {
      updateCurrentRoute: action,
      updateRouteDetails: action
    })
  }

  // AUTHENTICATION CODE
  // public canView = (routeId: string): boolean => {
  //   const targetRoute = this.routes.find(route => route.routeId === routeId)
  //   if (!targetRoute) return false
  //   if (!targetRoute.routeDef.permissionId) return true
  //   return this.authenticationRepository.canView(targetRoute.routeDef.permissionId)
  // }

  updateCurrentRoute = async (routeId, params, query) => {
    // AUTHENTICATION CODE
    // if (!this.canView(routeId)) {
    //   this.logoutUser()
    //   return
    // }

    const oldRouteId = this.routingState.currentState.routeId
    const routeChanged = oldRouteId !== routeId
    const targetRouteId = this.findRoute(routeId).routeId

    console.log('old route is ', oldRouteId)
    console.log('new route is ', targetRouteId)

    if (routeChanged && oldRouteId && this.findRoute(routeId).onLeave) this.findRoute(routeId).onLeave()
    if (routeChanged && this.findRoute(routeId).onEnter) this.findRoute(routeId).onEnter()
    this.updateRouteDetails(targetRouteId, params, query)
  }

  findRoute(routeId) {
    const route = this.routes.routes.find((route) => {
      return route.routeId === routeId
    })
    return route || { routeId: 'loadingSpinner', routeDef: { path: '' } }
  }

  updateRouteDetails = (routeId, params, query) => {
    console.log('updating route')
    this.routingState.currentState.routeId = routeId
    this.routingState.currentState.params = params
    this.routingState.currentState.query = query
  }
}
