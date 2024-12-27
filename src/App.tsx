import './App.css';
import {Header} from "./Layout/Header/Header";
import {Main} from "./Layout/Main/Main";
import {Skills} from "./Layout/Skills/Skills";
import {Projects} from "./Layout/Projects/Projects";
import {Contacts} from "./Layout/Contacts/Contacts";
import {Footer} from "./Layout/Footer/Footer";
import {About} from "./Layout/About/About";
import {Particle} from "./Components/particles/Particles";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header />
            <Main/>
            <About/>
            <Skills/>
            <Projects />
            <Contacts/>
            <Footer/>
        </div>
    );
}


export default App;

