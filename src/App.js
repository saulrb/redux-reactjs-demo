import { useSelector } from 'react-redux'

import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfle from './components/UserProfile'

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfle />}
      {isAuthenticated && <Counter />}
    </>
  )
}

export default App
