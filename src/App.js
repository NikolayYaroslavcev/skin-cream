import "./App.css";
import {Header} from "./components/header/Header";
import {Hero} from "./components/Hero/Hero";
import {Slider} from "./components/Slider/Slider";
import {Virtual} from "./components/Virtual/Virtual";
import {Product} from "./components/Product/Product";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Slider/>
            <Virtual/>
            <Product/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default App;
