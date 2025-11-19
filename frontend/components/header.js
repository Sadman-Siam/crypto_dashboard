import { SlGraph } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { ModeToggle } from "./toggle";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="bg-accent-color-1 rounded-2xl mt-2 mx-4 hover:shadow-blue-300 shadow-md ease-in-out duration-300">
      <nav className="flex justify-between items-center p-4 ">
        <div className="flex items-center space-x-4">
          <SlGraph size={48} />
          <h1 className="text-2xl font-semibold">Crypto Graph</h1>
        </div>
        <div className="flex items-center space-x-2">
          <IoMdSearch size={32} />
          <Input className="bg-white"></Input>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
