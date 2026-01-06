import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import KontaktPage from "../KontaktPage/KontaktPage";
import MachinePage from "../MachinePage/MachinePage";
import RealizationsPage from "../RealizationsPage/RealizationsPage";
import RealizationDetailPage from "../RealizationsPage/RealizationDetailPage/RealizationDetailPage";
import ServiceDetailPage from "../ServiceDetailPage/ServiceDetailPage";

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Kontakt" element={<KontaktPage />} />
                    <Route path="/Park" element={<MachinePage />} />
                    <Route path="/Realizacje" element={<RealizationsPage />} />
                    <Route path="/Realizacje/:id" element={<RealizationDetailPage />} />
                    <Route path="/oferta/:serviceId" element={<ServiceDetailPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;