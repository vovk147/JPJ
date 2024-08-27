import "./App.scss"
import Header from "../Common/Header/Header"
import Footer from "../Common/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import KontaktPage from "../KontaktPage/KontaktPage"
import MachinePage from "../MachinePage/MachinePage"



const App = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Kontakt" element={<KontaktPage/>}/>
            <Route path="/Park" element={<MachinePage/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
    )

}

export default App