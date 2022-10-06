import { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon } from "../components/icons";
import Button from "./Button";
import CancelIcon from "./icons/CancelIcon";
import americatransparenteLogo from "../assets/americatransparente_logo.png";

interface Props {
  title: string;
}

/**
 * Builds the page header with a gradient from primary color to secondary color (left to right)
 *
 * Colors primary and secondary must be declare in ```tailwind.config.cjs```
 */

function MenuButtons() {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <Button
        buttonType="primary"
        href="https://app.reveniu.com/checkout-custom-link/BYxZp272P6IlcjIDPMaBuuZrGq1CezOh"
        target="_blank"
        className="text-center flex-auto"
      >
        Donar
      </Button>
      <Button
        buttonType="primary"
        href="https://app.reveniu.com/checkout-custom-link/aSmPLaykZ0lAnrXpMcJUopEccz9F4kRE"
        target="_blank"
        className="text-center flex-auto"
      >
        Hazte Socio
      </Button>
    </div>
  );
}

function Header({ title }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-gradient-to-r from-primary to-secondary">
      <section className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex gap-4">
          <h1 className="text-xl text-white font-extrabold italic font-poppins uppercase">
            {title}
          </h1>
          <a href="https://americatransparente.org/" target="_blank">
            <img
              src={americatransparenteLogo}
              className="h-8"
              alt="Inicio de América Transparente"
            />
          </a>
        </div>
        <div>
          <Button
            aria-label="abrir menu de opciones para ayudar al proyecto"
            buttonType="primary"
            className="md:hidden px-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {!isMenuOpen ? <MenuIcon /> : <CancelIcon />}
          </Button>
          <Transition
            appear={true}
            show={isMenuOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            className="z-50 w-full absolute left-0 shadow-md p-4 flex flex-col gap-4 bg-gray-200 my-4 md:hidden"
          >
            <MenuButtons />
          </Transition>
          <div className="md:flex gap-4 hidden">
            <MenuButtons />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
