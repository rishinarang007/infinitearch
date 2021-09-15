import { NavigationPresenter } from './NavigationPresenter'
import { Router } from '../Routing/Router'
import { RoutingState } from '../Routing/RoutingState'
import { Types } from '../Core/Types'

beforeEach(() => {})

/// navigation path ///
/// home
/// ----> booksLink
/// ---------------> home (skips out the expandable nodes)
///
it('should navigate back to root from anywhere', () => {
  // anchor - check the naviationPresenter
  // click - the correct menu item (remember to pivot the routingState.currentState.routeId)
  // back - navigationPresenter.backToTop()
})
