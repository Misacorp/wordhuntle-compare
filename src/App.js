import './App.css';
import './assets/style/global.css';
import Compare from "./components/Compare";
import CenterOnPage from "./components/generic/containers/CenterOnPage";
import Intro from "./components/Intro";

function App() {
  return (
    <CenterOnPage>
        <div>
            <Intro />
            <Compare />
        </div>
    </CenterOnPage>
  );
}

export default App;
