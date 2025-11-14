import { SlGraph } from "react-icons/sl";
import { ModeToggle } from "./modetoggle";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <SlGraph size={24} />
        <h1 className="text-xl font-bold">Crypto Graph</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Search size={24} />
        <Input type="search" placeholder="Search any coin..." />
        <ModeToggle />
      </div>
    </header>
  );
}
