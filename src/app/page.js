import HeroBanner from "@/components/HeroBanner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import TrustedSlider from "@/components/TrustedSlider";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <PopularCourses></PopularCourses>
      <TrustedSlider></TrustedSlider>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
