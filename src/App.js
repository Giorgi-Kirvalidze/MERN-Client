import './App.scss'
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import SignupScreen from './screens/SignupScreen'
import SigninScreen from './screens/SigninScreen'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="homeScreen">
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/signup' component={SignupScreen} />
          <Route path='/signin' component={SigninScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />


        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App
