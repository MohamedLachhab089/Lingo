import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress 
            activeCourse={{title: "Spanish", imageSrc: "/images_lingo/es.svg"}}
            hearts={5}
            points={100}
            hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
        <div className="h-[700px] bg-blue-400">

        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
