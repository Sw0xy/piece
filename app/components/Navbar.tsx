import Logo from "../../assets/logo.png";
export default function Navbar() {
    return (
        <div className="w-full bg-white p-5 shadow-md dark:bg-pieceCard">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
                <img src={Logo} alt="logo" className="h-[36px] w-[90px]" />
                <div className="hidden items-center rounded-xl bg-pieceBgLight p-1 dark:bg-pieceBg md:flex">
                    <span className="rounded-xl bg-pieceBlue px-5 py-1 text-sm text-white">Feedback</span>
                    <span className="rounded-xl bg-transparent px-5 py-1 text-sm text-black dark:text-white">Roadmap</span>
                    <span className="rounded-xl bg-transparent px-5 py-1 text-sm text-black dark:text-white">Changelog</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-pieceBlue"></div>
            </div>
        </div>
    );
}
