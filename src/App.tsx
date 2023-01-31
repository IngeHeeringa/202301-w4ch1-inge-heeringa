import "@fontsource/open-sans";
import { useState } from "react";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";

export interface GentlemanStructure {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

const App = () => {
  const [gentlemanList, setGentlemanList] = useState([
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: false,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: false,
    },
  ]);

  const handleSelectAll = (): void => {
    setGentlemanList(
      gentlemanList.map((gentleman) =>
        gentleman.selected === false
          ? { ...gentleman, selected: true }
          : gentleman
      )
    );
  };

  const numberOfSelectedGentlemen = gentlemanList.filter(
    (gentleman) => gentleman.selected === true
  ).length;

  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info number={numberOfSelectedGentlemen} />
        <Button handleSelectAll={handleSelectAll} />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemanList.map((gentleman: GentlemanStructure) => (
            <li className="gentleman" key={gentleman.id}>
              <Gentleman gentleman={gentleman} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
