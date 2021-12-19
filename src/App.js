import React from 'react'
import Header from './components/Header'
import GlobalStyle from './components/GlobalStyle'
import MajorClub from './pages/MajorClub'
import Ca from './pages/ca'
import ClubInfo from './pages/ClubInfo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/ClubInfo/:clubName" component={ClubInfo} />
          <Route path="/MajorClub" component={MajorClub} />
          <Route path="/About" component={About} />
          <Route exact path="/Ca" component={Ca} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
