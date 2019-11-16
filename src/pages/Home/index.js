import React, {PureComponent} from 'react'

class HomePage extends PureComponent {
  render() {
    return(
      <div>
        Pozdrav iz kuće
        <button onClick={() => this.props.history.push('/users')}>Otiđi do korisnika</button>
      </div>
    )
  }
}

export default HomePage