import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";

export default function CreateFeedbackModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    return (
        <>
            <Button variant="primary" text="New Feedback" onClick={() => setIsOpen(true)} />
            <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4 ">
                    <Dialog.Panel
                        as="div"
                        className="mx-auto w-full max-w-2xl rounded-xl border border-pieceBorderLight bg-pieceBgLight p-5 dark:border-border dark:bg-pieceCard "
                    >
                        <div className="flex items-center justify-between border-b border-pieceBorderLight pb-3 dark:border-border">
                            <h1 className="text-lg font-medium text-black dark:text-white ">New Feedback</h1>
                            <div className="rounded p-1 hover:bg-gray-200 dark:hover:bg-border">
                                <MdOutlineClose
                                    size={24}
                                    onClick={() => setIsOpen(false)}
                                    className="text-black dark:text-pieceGray dark:hover:text-white"
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="relative mt-2 flex flex-col items-start gap-y-2">
                                <span className="text-base text-black dark:text-white">Title</span>
                                <div className="flex w-full items-center justify-between rounded-xl border border-pieceBorderLight bg-white py-2 px-4 text-sm outline-none dark:border-border dark:bg-secondary dark:focus:bg-black ">
                                    <input
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Title"
                                        className="focus peer w-full bg-transparent outline-none dark:text-white"
                                    />
                                    <span
                                        className={clsx({
                                            "whitespace-nowrap text-sm font-medium text-pieceGray": true,
                                            "text-red-500": title.length >= 300
                                        })}
                                    >
                                        {title.length}/300
                                    </span>
                                </div>
                            </div>
                            <div className="mt-5 flex w-full flex-col gap-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-base text-black dark:text-white">Description</span>
                                    <div className="flex items-center gap-x-2">
                                        <label htmlFor="markdown" className="text-base text-black dark:text-pieceGray">
                                            Markdown mode
                                        </label>
                                        <input id="markdown" type="checkbox" className="h-5 w-5 accent-pieceBlue" />
                                    </div>
                                </div>
                                <textarea
                                    placeholder="Description"
                                    className="min-h-[260px] w-full rounded-xl border border-pieceBorderLight bg-gray-200
                                     px-4 py-2 text-[15px] text-black outline-none focus:bg-pieceBorderLight dark:border-border dark:bg-pieceHover dark:text-white dark:focus:bg-black"
                                />
                            </div>
                            <div className="mt-4 flex w-full items-end justify-end gap-x-4">
                                <Button
                                    variant="danger"
                                    text="Cancel"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setTitle("");
                                    }}
                                />
                                <Button variant="primary" text="Post" onClick={() => {}} />
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
