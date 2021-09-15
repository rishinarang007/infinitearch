import 'reflect-metadata'
import './styles.css'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from './Core/WithPresenter'
import { CurrentPageComponent } from './CurrentPageComponent'
import { container } from './ioc'
import { configure } from 'mobx'

configure({
  enforceActions: 'never',
  computedRequiresReaction: false,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  disableErrorBoundaries: false
})

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <Provider container={container}>
      <CurrentPageComponent />
    </Provider>
  </React.StrictMode>,
  rootElement
)
