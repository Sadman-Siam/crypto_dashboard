"use client";
import { SlGraph } from "react-icons/sl";
import { ModeToggle } from "./toggle";
import { Button } from "./ui/button";
import * as React from "react";
import { useSharedData } from "@/app/providers/DataContext";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "./ui/spinner";

export default function Header() {
  const { sharedData, selectedCrypto, setSelectedCrypto } = useSharedData();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  if (value) {
    setSelectedCrypto(value);
  }
  //flex justify-between items-center px-4 py-2
  return (
    <header className="border-b-2">
      <nav className="flex justify-between items-center px-2 py-2">
        <div className="flex items-center justify-center space-x-1 md:space-x-2">
          <SlGraph size={20} />
          <h1 className="text-sm font-semibold md:text-[18px]">Crypto Graph</h1>
        </div>
        <div className="">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[150px] justify-between text-[12px] md:w-[200px] md:text-[14px]"
              >
                {value
                  ? sharedData.find((currency) => currency.name === value)
                      ?.label
                  : "Select Crypto..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search Crypto..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No Crypto found.</CommandEmpty>
                  <CommandGroup>
                    {sharedData ? (
                      sharedData.map((currency) => (
                        <CommandItem
                          key={currency.id}
                          value={currency.name}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {currency.name}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === currency.name
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}
