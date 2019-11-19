import React from 'react'
const products = [
  {naziv: 'mleko', cena: 100},
  {naziv: 'kafa', cena: 200},
  {naziv: 'cigare', cena: 233.33}
 ]
 
const withSearch = WrappedComponent => {
  class WithSearch extends React.Component {
    constructor(props) {
      super(props) 
      this.state= { query: ''}
    }
    handleSearch = event =>  this.setState({query: event.target.value})
    
    filterProducts = query => {
      return products.filter(product => {
        let str = `${product.naziv} ${product.cena}`
          return str.indexOf(query) >= 0
      })
    }

    render() {
      const {query} = this.state
      let filteredProducts = this.filterProducts(query)
      return (
        <div>
          <input onChange={this.handleSearch} value={query} type='text' placeholder='Search'/>
          <WrappedComponent  data={filteredProducts} />
        </div>
      )
    }
  }

  WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`
  return WithSearch

}

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.naziv || 'Component'
}

export default withSearch