import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/WithPresenter'
import { AuthenticationRepository } from '../Authentication/AuthenticationRepository'

export const LogoutComp = observer((props) => {
  return (
    <div
      onClick={() => {
        props.authenticationRepository.logout()
      }}
      className="navigation-item"
      style={{ backgroundColor: '#5BCA06' }}
    >
      ← Logout
    </div>
  )
})

export const LogoutComponent = withInjection({ authenticationRepository: AuthenticationRepository })(LogoutComp)
