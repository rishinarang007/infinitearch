import * as React from 'react'
import { HomeComponent } from './Home/HomeComponent'
import { withInjection } from './Core/WithPresenter'
import { observer } from 'mobx-react'
import { CurrentPagePresenter } from './CurrentPagePresenter'
import { BooksComponent } from './Books/BooksComponent'

export const CurrentPageComp = observer((props) => {
  React.useEffect(() => {
    props.presenter.bootstrap()
  })

  const renderedComponents = [
    {
      id: 'homeLink',
      component: <HomeComponent key="homePage" />
    },
    {
      id: 'booksLink',
      component: <BooksComponent key="booksLink" />
    }
  ]
  return (
    <div>
      {props.presenter.currentRouteId === 'loginLink' ? (
        <div>Create the login and register page</div>
      ) : (
        <div>Create the navigation menu and content pages</div>
      )}
    </div>
  )
})

export const CurrentPageComponent = withInjection({
  presenter: CurrentPagePresenter
})(CurrentPageComp)
