import React, {PureComponent} from 'react'
import {NavLink, Route, Redirect} from 'react-router-dom'
import UsersPage from '../../pages/Users'
class UserLayout extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Korisniciiii</h1>
      {this.props.match.params.id !== '10' && <Redirect to='/' />}
      <NavLink to={`${this.props.match.url}/react`}>React</NavLink>
      <NavLink to={`${this.props.match.url}/angular`}>Angular</NavLink>
      <NavLink to={`${this.props.match.path}/vue`}>Vue</NavLink>
      <Route path={`${this.props.match.url}/vue`} component={UsersPage}/>
      </div>
    )
  }
}

export default UserLayout