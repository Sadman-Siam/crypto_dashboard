import { SlGraph } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { Search } from "lucide-react";
import { ModeToggle } from "./toggle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b-2">
      <nav className="flex justify-between items-center px-4 py-2 ">
        <div className="flex items-center space-x-2">
          <SlGraph size={32} />
          <h1 className="text-lg font-semibold">Crypto Graph</h1>
        </div>
        <div className="flex items-center space-x-1">
          <Input className="bg-white"></Input>
          <Button variant={`outline`}>
            <Search size={20} />
          </Button>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}
