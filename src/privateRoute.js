import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({RenderComponent, ...rest}) =>{
  return (
  <Route {...rest}
    render={
      props => localStorage.getItem('authToken') !== null && localStorage.getItem('authToken') !== undefined ? (
        <RenderComponent {...props} />
      )
      : <Redirect to='/' /> }
  />
  )
}

export default PrivateRoute