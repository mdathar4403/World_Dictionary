import "./css/App.css";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Search default="words" />
        <footer className="App-footer">
          <section>
            <span>
              <a
                href="https://github.com/mdathar4403/World_Dictionary"
                target="_blank"
              >
                Github Repo
              </a> project coded by  <a
                href="https://6356e9f290d8b414e5106dd0--rad-sprite-19a8f4.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Md Athar - IIT VARANASI
              </a>
            </span>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default App;
