import React from 'react'

const withProps = injctedProps => WrappedComponent =>{
  const WithProps = props => <WrappedComponent {...injctedProps} {...props}/>
return WithProps
}

export default withProps