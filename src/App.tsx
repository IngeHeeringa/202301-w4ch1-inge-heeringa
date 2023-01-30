import "@fontsource/open-sans";
import Button from "./components/Button/Button";
import Info from "./components/Info/Info";

const App = () => {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info number={0} />
        <Button />
      </section>
    </>
  );
};

export default App;
