import { Container } from 'inversify'
import { RouterGateway } from './Routing/RouterGateway'
import { HttpGateway } from './Core/HttpGateway'
import { Router } from './Routing/Router'
import { RoutingState } from './Routing/RoutingState'
import { Types } from './Core/Types'

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
})

container.bind(Types.IDataGateway).to(HttpGateway)
container.bind(Types.IRouterGateway).to(RouterGateway).inSingletonScope()
container.bind(RoutingState).to(RoutingState).inSingletonScope()
container.bind(Router).to(Router).inSingletonScope()
