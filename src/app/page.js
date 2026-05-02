import HeroBanner from "@/components/HeroBanner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
