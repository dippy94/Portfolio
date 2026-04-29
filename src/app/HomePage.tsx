'use client';
import Header from'@/components/common/Header';
 import Footer from'@/components/common/Footer';
 import HeroSection from'./HeroSection';
 import StorySection from'./StorySection';
 import WorkSection from'./WorkSection';
 import StudioSection from'./StudioSection';
 import MethodSection from'./MethodSection';
 import ConnectSection from'./ConnectSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[38px] justify-start items-center w-full bg-background-primary">
      <Header className="" />
      
      <main className="flex flex-col gap-[38px] justify-start items-center w-full">
        <HeroSection />
        <StorySection />
        <WorkSection />
        <StudioSection />
        <MethodSection />
        <ConnectSection />
      </main>
      
      <Footer className="" />
    </div>
  )
}