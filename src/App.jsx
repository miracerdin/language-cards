import logo from "../src/assets/react.svg";
import "./App.css";
import data from "../src/helper/data";
import Card from "../src/components/card/Card";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <main>
        <h1>Languages</h1>
        <article>
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
          {/* <Card data={data} /> */}
        </article>
      </main>
    </div>
  );
}

export default App;
