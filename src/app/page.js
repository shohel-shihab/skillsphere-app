import HeroBanner from "@/components/HeroBanner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
    </div>
  );
}
