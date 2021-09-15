import { inject, injectable } from 'inversify'
import { computed, makeObservable } from 'mobx'
import { NavigationTree } from '../Navigation/NavigationTree'
import { Router } from '../Routing/Router'

@injectable()
export class NavigationPresenter {
  @inject(NavigationTree)
  navigationTree

  @inject(Router)
  router

  constructor() {
    makeObservable(this, {
      currentSelectedNavigationNode: computed,
      currentBackTarget: computed,
      isTop: computed
    })
  }

  get currentSelectedNavigationNode() {
    if (!this.findCurrentNode()) return
    return this.findCurrentNode().model.id
  }

  get currentBackTarget() {
    if (!this.findCurrentNode()) return
    if (this.findCurrentNode().parent) {
      return { enabled: true, target: this.findCurrentNode().parent.model.id }
    } else return { enabled: false, target: null }
  }

  get isTop() {
    return !this.findCurrentNode().parent
  }

  viewModel = () => {
    return this.navigationTree.getTree()
  }

  backToTop = () => {
    let parent = this.findCurrentNode()
    do {
      parent = parent.parent
    } while (parent.model.type !== 'root')

    this.router.goToId(parent.model.id)
  }

  findCurrentNode = () => {
    var self = this
    return this.navigationTree.getTree().all(function (node) {
      return node.model.id === self.router.currentRouteId
    })[0]
  }
}
