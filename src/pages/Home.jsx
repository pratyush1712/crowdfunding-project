import { NavBar } from "../components/Navbar";
import { Header } from "../components/Header";
import data from "../projects";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Header />
      <div className="ml-8">
        <p className="font-serif text-lg mt-4 mb-2">Ongoing Projects</p>
        <div className="grid grid-cols-4 grid-rows-2">
          {data.map((project) => (
            <img
              src={project.image}
              alt={project.name}
              className="col-span-1 row-span-1 pr-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
