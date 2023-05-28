import "./App.css";
import {Header} from "./components/header/Header";
import {Hero} from "./components/Hero/Hero";
import {Slider} from "./components/Slider/Slider";
import {Virtual} from "./components/Virtual/Virtual";
import {Product} from "./components/Product/Product";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Slider/>
            <Virtual/>
            <Product/>
        </div>
    );
}

export default App;
