import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './task-03/ProductList.jsx'
import Check from './task-04/Mainpage.jsx'
import Counter from './task-04/2.counter.jsx'
import Signup from './task-06/1.form.jsx'
import UserRun from './task-07/useEffect.jsx'
import {BrowserRouter , Links ,  Routes , Route} from 'react-router-dom'
import Home from './task-08/Home.jsx'
import About from './task-08/About.jsx'
import Navigation from './task-08/Navigation.jsx'
import Users from './task-08/Users.jsx'
import Userdetails from './task-08/UserDetail.jsx'
import Card from './task-09/card.jsx'
import Navbar from './task-09/Navbar.jsx'
import ButtonGroup from './task-09/Button.jsx'
import Button from './task-09/ReuseProp.jsx'
import Theme from './task-10/1.ThemeMUI.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './task-10/1.ThemeMUI.jsx'
import LoginForm from './task-10/2.Loginform.jsx'
import ProductCard from './task-10/3.Card.jsx'
import { CssBaseline } from '@mui/material'
import DisplayCounter from './task-11/components/DisplayCounter.jsx'
import CounterButtons from './task-11/components/CounterButton.jsx'
import Todo from './task-12/todo.jsx'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <ProductList /> */}

      {/* <Check  isLoggedIn = {false} /> */}

      {/* <Counter/> */}

      {/* <Signup/> */}

      {/* <UserRun/> */}

      {/* <BrowserRouter>

      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>

          <Route path='/users/:id' element={<Userdetails/>}/>
        </Routes>
      </BrowserRouter> */}

      {/* <Card/> */}

      {/* <Navbar/> */}
      {/* <ButtonGroup/>  */}

      {/* <Button varient='primary'>Primary</Button>
      <Button varient='danger'>Danger</Button>
      <Button varient= 'line'>Outline</Button> */}

      {/* <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div style={{padding: 20 }}>
          
        </div>
      </ThemeProvider> */}
      {/* <LoginForm/>
      <ProductCard/> */}

      {/* <div>
        <h1>Redux Counter</h1>
          <DisplayCounter/>
          <CounterButtons/>
      </div> */}
      <Todo/>
    </>
  )
}

export default App
