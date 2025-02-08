import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React.JS demo</h1>
        <p>This app is a demo containing code meant to demonstrate foundational React.JS features and usecases created by developer Aubrey Cook. This demo focuses on traditional JavaScript, in contrast to a parallel demo written in TypeScript.</p>
        <span className="concept-row-container">
          <div>
            <a href><h2>Hooks</h2></a>
            <h3>Description</h3>
            <p>Hooks description.</p>
            <ul>
              <a href><li>Concept 1</li></a>
              <a href><li>Concept 1</li></a>
              <a href><li>Concept 1</li></a>
            </ul>
          </div>
          {/* <div >
            <h2>Concept 1</h2>
          </div> */}
        </span>
      </header>
    </div>
  );
}

export default App;
