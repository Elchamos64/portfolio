import './styles/App.css';
import ImageComponent from './components/ImageComponent';
import RenderHeader from './components/RenderHeader';
import AboutMe from './components/AboutMe';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <RenderHeader />
      <ImageComponent />
      <AboutMe />
      <Links />
    </div>
  );
}

export default App;
