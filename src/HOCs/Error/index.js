import React from 'react'


const branch = (test, ComponentPass, ComponentFail) => props => test ? <ComponentPass {...props} /> : ComponentFail ? <ComponentFail {...props} /> : null

const withError = (ErrorComponent=Error) => WrappedComponent => {
  const HasError = props => branch(props.hasError, ErrorComponent, WrappedComponent)(props)
  return HasError
}

export default withError