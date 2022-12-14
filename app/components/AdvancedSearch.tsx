import { Listbox, Popover, Transition } from "@headlessui/react";
import { BiSearch, BiSortDown } from "react-icons/bi";
import clsx from "clsx";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { Fragment, useState } from "react";

const list = [
    { id: 1, name: "Most upvote", unavailable: false },
    { id: 2, name: "Most comments", unavailable: false }
];

function Search() {
    return (
        <div className="flex w-full max-w-sm items-center gap-x-2 rounded-xl border border-pieceBorderLight bg-white py-2 px-4 text-sm focus:bg-black dark:border-border dark:bg-secondary sm:max-w-xl">
            <BiSearch size={20} className="text-pieceGray" />
            <input
                placeholder="Search..."
                className="h-5 w-full bg-transparent font-normal text-black outline-none placeholder:text-sm dark:text-white dark:placeholder:text-pieceGray"
            />
        </div>
    );
}

export default function AdvancedSearch() {
    const [selectedPerson, setSelectedPerson] = useState(list[0]);
    return (
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between">
            <Search />
            <div className="mx-auto flex w-full items-center gap-x-5">
                <Popover as="div" className="relative">
                    <Popover.Button className="btn-brand flex w-full items-center gap-x-2 outline-none hover:bg-opacity-75 sm:w-max">
                        <span className="btn-text-brand text-black dark:text-white">Tags</span>
                        <FiChevronDown size={20} />
                    </Popover.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel className="absolute top-0 z-40 mt-1 whitespace-nowrap">
                            <div className="btn-text-brand flex flex-col rounded-xl border border-pieceBorderLight bg-white p-3 shadow-md dark:border-border dark:bg-secondary">
                                <div>
                                    <a
                                        className={clsx({
                                            "flex items-center gap-x-2 rounded-lg px-2 py-1 text-black dark:text-white": true
                                        })}
                                        href="/"
                                    >
                                        <input
                                            id="checkbox"
                                            type="checkbox"
                                            className="h-5 w-5 rounded text-blue-600  accent-pieceBlue checked:text-yellow-400"
                                        />
                                        <label htmlFor="checkbox">Backend</label>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className={clsx({
                                            "flex items-center gap-x-2 rounded-lg px-2 py-1 text-black dark:text-white": true
                                        })}
                                        href="/"
                                    >
                                        <input
                                            id="checkbox2"
                                            type="checkbox"
                                            className="h-5 w-5 rounded text-blue-600  accent-pieceBlue checked:text-yellow-400"
                                        />
                                        <label htmlFor="checkbox2">Frontend</label>
                                    </a>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                    <div className="relative">
                        <Listbox.Button className="btn-brand relative w-full min-w-[200px] text-left hover:bg-opacity-75">
                            <span className="btn-text-brand truncate dark:text-white">{selectedPerson.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                <BiSortDown size={20} className="h-5 w-5 dark:text-white" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-pieceBorderLight bg-white p-2 shadow-md focus:outline-none dark:border-border dark:bg-secondary sm:text-sm">
                                {list.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none rounded-lg py-2 pl-8 pr-3 text-sm hover:bg-gray-100 dark:hover:bg-pieceHover ${
                                                active ? "text-black dark:text-white" : "text-black dark:text-white"
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={clsx({
                                                        "block truncate ": true,
                                                        "font-bold": selected == true,
                                                        "font-normal": selected == false
                                                    })}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-black dark:text-white">
                                                        <FiCheck className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        </div>
    );
}
