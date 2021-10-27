import logo from './logo.svg';
import './App.css';
import { NavLink, HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About'
import NotesSlides from './pages/Notes-Slides/NotesSlides'
import { notesSlides } from './pages/Notes-Slides/NotesSlidesArchive'
import NotesDisplay from './pages/Notes-Slides/NotesDisplay'
import Nav from './pages/Nav'
import MobileSideNav from './pages/MobileSideNav';
import { useState } from 'react';
import Requests from './pages/Requests/Request';
import { FormspreeProvider } from '@formspree/react';


function generateNotesRouter(a) {
  if (!(a.notes == null)) {
    return <Route path={`/notes-slides/${a.notes.id}`} 
    component={() => <NotesDisplay id={`${a.notes.id}`}/>}></Route>
  } else {
    return <></>
  }
}

const notesRouters = notesSlides.map(generateNotesRouter)


function App() {
  const [wid, setWid] = useState(`0%`)
  const openSidenav = () => setWid(`200px`)
  const closeSidenav = () => setWid('0%')
  return (
    <HashRouter>
    <div className="App">
      <body>
        <div className="mobileHeaderContainer">
          <div className="sideNavButton" onClick={openSidenav}>{'\u2630'}</div>
          <div className="mobileSiteTitle">
            Phys UG Journal Club
          </div>
        </div>
        <div className="sideBar">
          <div className="headerContainer">
            Physics Undergraduate Journal Club
          </div>
            <Nav/>
        </div>
        <MobileSideNav width={wid} closeNav={closeSidenav}/>
        <div className="content">
          <Switch>
            <Route exact path="/notes-slides">
              <NotesSlides/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/request">
              <Requests/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            {notesRouters}
          </Switch>
        </div>
      </body>
    </div>
    </HashRouter>
  );
}

export default App;
