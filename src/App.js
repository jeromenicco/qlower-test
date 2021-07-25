import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPropertyPage from './pages/AddPropertyPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/add-property' component={AddPropertyPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
