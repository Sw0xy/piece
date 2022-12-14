import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { BiDotsHorizontalRounded, BiEdit, BiTrash } from "react-icons/bi";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

function UpvoteCard() {
    return (
        <div className="flex flex-col items-center gap-y-2 ">
            <button className="rounded border border-pieceBorderLight hover:bg-gray-100 dark:border-border dark:bg-secondary">
                <BsArrowUpShort size={22} className="text-pieceBlue" />
            </button>
            <span className="text-sm font-bold text-pieceBlue">23</span>
            <button className="rounded border border-pieceBorderLight hover:bg-gray-100 dark:border-border dark:bg-secondary">
                <BsArrowDownShort size={22} className="text-pieceGray hover:text-pieceBlue" />
            </button>
        </div>
    );
}

export default function FeedbackCard() {
    return (
        <div className="flex max-w-4xl flex-row items-center rounded-xl border border-pieceBorderLight bg-white p-4 dark:border-border dark:bg-secondary">
            <UpvoteCard />
            <div className="ml-5 flex w-full flex-col gap-y-1">
                <div className="flex w-full items-center justify-between">
                    <span className="w-max rounded-full border border-pieceBorderLight bg-gray-200 py-1 px-4 text-xs text-black dark:border-border dark:bg-border dark:text-pieceGray">
                        Frontend
                    </span>
                    <Popover as="div" className="relative">
                        <Popover.Button className="outline-none">
                            <BiDotsHorizontalRounded size={24} className="text-pieceGray" />
                        </Popover.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute -inset-[90px] top-0 w-max whitespace-nowrap md:-inset-0">
                                <div className="btn-text-brand flex flex-col gap-y-2 rounded-xl border border-pieceBorderLight bg-white p-3 shadow-md dark:border-border dark:bg-secondary">
                                    <div className="">
                                        <a
                                            className={clsx({
                                                "flex cursor-default items-center gap-x-2 rounded-lg py-1 px-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-pieceHover":
                                                    true
                                            })}
                                            href="/"
                                        >
                                            <BiEdit size={20} className="" />
                                            <span className="text-sm font-medium text-black dark:text-white">Edit</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            className={clsx({
                                                "flex cursor-default items-center gap-x-2 rounded-lg py-1 px-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-pieceHover":
                                                    true
                                            })}
                                            href="/"
                                        >
                                            <BiTrash size={20} className="text-red-500" />
                                            <span className="text-sm font-medium text-red-500">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
                <h1 className="text-base font-medium text-black dark:text-pieceTitle sm:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, corrupti?
                </h1>
                <div className="flex items-center gap-x-3">
                    <button className="rounded-full px-1 py-1 text-sm font-medium text-pieceGray hover:text-black dark:hover:text-white">
                        23 Comments
                    </button>
                </div>
            </div>
        </div>
    );
}
