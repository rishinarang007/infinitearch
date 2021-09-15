import { injectable } from 'inversify'

@injectable()
export class Routes {
  routes = [
    {
      routeId: 'homeLink',
      routeDef: {
        path: '/app/home'
      },
      onEnter: () => {
        console.log('enter home')
      },
      onLeave: () => {
        console.log('leave home')
      }
    },
    {
      routeId: 'booksLink',
      routeDef: {
        path: '/app/books'
      }
    },
    {
      routeId: 'loginLink',
      routeDef: {
        path: '/app/authentication/login'
      }
    }
  ]
}
