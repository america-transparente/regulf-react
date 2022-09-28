import { useState, useRef } from "react";
import {
  useHitsPerPage,
  UseHitsPerPageProps,
} from "react-instantsearch-hooks-web";
import { Listbox, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import { ChevronDown, ChevronUp } from "../icons";
import Button from "../Button";

interface Item {
  value: number;
  label: string;
  default?: boolean;
}

interface Props {
  config: UseHitsPerPageProps;
}

function HitsPerPageFilter({ config }: Props) {
  const { items, refine } = useHitsPerPage(config);
  const defaultItem = config.items.find((item) => item.default == true);
  const [selectedOption, setSelectedOption] = useState(defaultItem);

  // Popper.js
  const popperRef = useRef(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Listbox
      onChange={(item: Item) => {
        setSelectedOption(item);
        refine(item.value);
      }}
    >
      {({ open: isOpen }) => (
        <div>
          <Listbox.Button
            ref={setReferenceElement}
            className="flex w-full justify-center p-1 lg:py-4"
          >
            {isOpen ? (
              <Button
                className="text-primary flex gap-1 w-full justify-center"
                buttonType="filter"
              >
                {selectedOption?.label} <ChevronUp />
              </Button>
            ) : (
              <Button
                className="flex gap-1 w-full justify-center"
                buttonType="filter"
              >
                {selectedOption?.label} <ChevronDown />
              </Button>
            )}
          </Listbox.Button>
          <div ref={popperRef} style={styles.popper} {...attributes.popper}>
            <Transition
              appear={true}
              show={isOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              beforeEnter={() => setPopperElement(popperRef.current)}
              afterLeave={() => setPopperElement(null)}
            >
              <Listbox.Options className="shadow-md border rounded-md divide-y bg-white">
                {items.map((item) => (
                  <Listbox.Option
                    className="hover:bg-gray-300 transition-all duration-300 hover:cursor-pointer p-2"
                    key={item.label}
                    value={item}
                  >
                    {item.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}

export default HitsPerPageFilter;
