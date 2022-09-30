import { useState, useRef } from "react";
import { useSortBy, UseSortByProps } from "react-instantsearch-hooks-web";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "../icons";
import { usePopper } from "react-popper";
import Button from "../Button";
interface Option {
  value: string;
  label: string;
}

interface Props {
  config: UseSortByProps;
}

function SortByFilter({ config }: Props) {
  const { options, refine, currentRefinement } = useSortBy(config);
  console.log(options);
  const defaultRefinement: string =
    options.find(({ value }) => value == currentRefinement)?.label ||
    "Ordenar por";
  const [selectedOption, setSelectedOption] =
    useState<string>(defaultRefinement);

  // Popper.js
  const popperRef = useRef(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Listbox
      onChange={(option: Option) => {
        setSelectedOption(option.label);
        refine(option.value);
      }}
    >
      {({ open: isOpen }) => (
        <div>
          <Listbox.Button
            ref={setReferenceElement}
            className="flex w-full justify-center p-1 lg:py-4"
            as="div"
          >
            {isOpen ? (
              <Button
                className="text-primary flex gap-1 w-full justify-center"
                buttonType="filter"
              >
                {selectedOption} <ChevronUp />
              </Button>
            ) : (
              <Button
                className="flex gap-1 w-full justify-center"
                buttonType="filter"
              >
                {selectedOption} <ChevronDown />
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
              <Listbox.Options className="shadow-md border rounded-md divide-y bg-white max-h-96 overflow-auto">
                {options.map((option) => (
                  <Listbox.Option
                    className="hover:bg-gray-300 transition-all duration-300 hover:cursor-pointer p-2"
                    key={option.label}
                    value={option}
                  >
                    {option.label}
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

export default SortByFilter;
