import React from 'react'

const withHOC = WrappedComponent => {
   class HOC extends React.Component {
     render() {
      console.log(this.props)
       return <WrappedComponent />
     }
   }
   return HOC
}

export default withHOC