import { useState, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  useRefinementList,
  UseRefinementListProps,
} from "react-instantsearch-hooks-web";
import { usePopper } from "react-popper";
import { ChevronDown, ChevronUp } from "../icons";
import { numberWithDots } from "../../utils";
import Button from "../Button";

interface Props {
  config: UseRefinementListProps;
  title: string;
  searchPlaceHolder?: string;
}

function Filter({ config, title }: Props) {
  const {
    items, // filter options
    refine, // apply filter option
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
    searchForItems, // TODO: implement search option within filter
  } = useRefinementList(config);

  // Popper.js
  const popperRef = useRef(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null); // opens popper
  const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Listbox onChange={(value) => refine(value)}>
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
                {title} <ChevronUp />
              </Button>
            ) : (
              <Button
                className="flex gap-1 w-full justify-center"
                buttonType="filter"
              >
                {title} <ChevronDown />
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
              <Listbox.Options className="shadow-lg rounded-md divide-y bg-white max-w-[15rem]">
                {items.map((item) => (
                  <Listbox.Option
                    key={item.value}
                    value={item.value}
                    className={
                      item.isRefined
                        ? "transition-all duration-300 hover:cursor-pointer p-2 text-primary font-semibold"
                        : "transition-all duration-300 hover:cursor-pointer p-2 hover:bg-gray-300"
                    }
                  >
                    {item.value == "codigodeltrabajo"
                      ? "Código del Trabajo"
                      : item.value}
                    <span className="ml-1 text-xs bg-gray-200 py-0.5 px-1 rounded-md">
                      {numberWithDots(item.count)}
                    </span>
                  </Listbox.Option>
                ))}
                {canToggleShowMore && (
                  <button
                    className="px-2 py-0.5 bg-primary hover:bg-secondary transition-all duration-300 text-white rounded-b-md hover:cursor-pointer w-full"
                    onClick={() => toggleShowMore()}
                  >
                    {isShowingMore ? "Mostrar menos" : "Mostrar más"}
                  </button>
                )}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}

export default Filter;
