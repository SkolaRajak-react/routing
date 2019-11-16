import React, {PureComponent} from 'react'

class UsersPage extends PureComponent {
  render() {
    console.log(this.props)
    return(
      <div>
        Pozdrav korisnici {this.props.number}
      </div>
    )
  }
}

export default UsersPage