import './styles/styles.css'
import Nav from './Components/Navbar/nav';
import { Outlet } from "react-router";
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Nav />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
