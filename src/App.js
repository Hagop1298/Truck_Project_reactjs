import Footer from './components/Footer';
import Header from './components/Header';
import AppRoutes from './Routes';
import ScrollTop from "./components/ScrollTop";

function App() {
    return (
        <>
            <Header />
            <ScrollTop/>
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
