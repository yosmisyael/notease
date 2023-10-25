import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './features/authentication/components/Login'
import Register from './features/authentication/components/Register'
import NotFound from './pages/NotFound'
import Notes from './features/notes/Notes'
import Dashboard from './pages/Dashboard'
import NoteView from './features/notes/components/NoteView'
import NoteEdit from './features/notes/components/NoteEdit'
import NoteCreate from './features/notes/components/NoteCreate'
import Tags from './features/tags/Tags'
import ProtectedRoute from './routes/ProtectedRoute'
import GuestRoute from './routes/GuestRoute'

function App () {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          {/* guest routes */}
          <Route element={ <GuestRoute /> }>
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
          </Route>

          {/* protected routes */}
          <Route element={ <ProtectedRoute /> }>
            <Route path='/:user'> 
              <Route index element={ <Dashboard />} />
              <Route path='notes'>
                <Route index element={ <Notes />} />
                <Route path='create' element={ <NoteCreate />} />
                <Route path=':id' element={ <NoteView />} />
                <Route path=':id/edit' element={ <NoteEdit />} />
              </Route>
              <Route path='tags' element={ <Tags />} />
            </Route>
          </Route>

          <Route path='/404' element={ <NotFound /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>    

  )
  
}

export default App
