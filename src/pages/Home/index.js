import React, {PureComponent} from 'react'
import withHOC from '../../HOCs/Basic'
import withProps from '../../HOCs/HasProps' 
import withLogger from '../../HOCs/Logger' 
import withError from '../../HOCs/Error'

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

const MyError = () => <h1>Error Page</h1>

const HomePageWithHOC = withError(MyError)(HomePage)

export default HomePageWithHOC