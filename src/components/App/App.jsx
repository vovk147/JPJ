import "./App.scss"
import Header from "../Common/Header/Header"
import Footer from "../Common/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import KontaktPage from "../KontaktPage/KontaktPage"



const App = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Kontakt" element={<KontaktPage/>}/>
            <Route path="" element={< asd/>}/>
        </Routes>
        
        <Footer/>
       </BrowserRouter>
    )

}

export default App