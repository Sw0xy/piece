import AdvancedSearch from "~/components/AdvancedSearch";
import CreateFeedbackModal from "~/components/CreateFeedbackModal";
import FeedbackCard from "~/components/FeedbackCard";
import Navbar from "~/components/Navbar";
export default function Index() {
    return (
        <div className="h-screen w-full ">
            <Navbar />
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-y-8 py-5 px-2">
                <AdvancedSearch />
                <CreateFeedbackModal />
                <FeedbackCard />
            </div>
        </div>
    );
}
