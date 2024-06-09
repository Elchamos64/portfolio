import './styles/App.css';
import ImageComponent from './components/ImageComponent';
import RenderHeader from './components/RenderHeader';
import AboutMe from './components/AboutMe';
import Links from './components/Links';
import BackToTopButton from './components/BackToTopBotton';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <RenderHeader />
      <ImageComponent />
      <AboutMe />
      <Projects />
      <Links />
      <BackToTopButton />
    </div>
  );
}

export default App;
