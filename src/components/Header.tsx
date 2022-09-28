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

function Header({ title }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

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
              alt="Logo de la fundacion America Transparente"
            />
          </a>
        </div>
        <div>
          <Button
            buttonType="primary"
            className="md:hidden"
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
            className="z-50 w-full absolute left-0 shadow-md p-4 flex flex-col gap-4 bg-gray-200 my-4 md:bg-transparent md:relative md:p-0 md:shadow-none md:flex-row md:my-0"
          >
            <Button
              buttonType="primary"
              href="https://app.reveniu.com/checkout-custom-link/BYxZp272P6IlcjIDPMaBuuZrGq1CezOh"
              target="_blank"
              className="text-center"
            >
              Donar
            </Button>
            <Button
              buttonType="primary"
              href="https://app.reveniu.com/checkout-custom-link/aSmPLaykZ0lAnrXpMcJUopEccz9F4kRE"
              target="_blank"
              className="text-center"
            >
              Hazte Socio
            </Button>
          </Transition>
        </div>
      </section>
    </header>
  );
}

export default Header;
