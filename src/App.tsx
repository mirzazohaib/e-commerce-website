import { useContext, useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Store } from './redux/Store'

function App() {
  const {
    state: { mode },
    dispatch
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  return (
    <div className="flex flex-col h-full">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>E-Commerce Website</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}></i>
            </Button>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">&copy; Copyright</div>
      </footer>
    </div>
  )
}

export default App
