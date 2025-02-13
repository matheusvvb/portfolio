'use client';

import Footer from '@/components/footer';
import ProjectSection from '@/components/project/project-section';
import BackArrow from '@/components/back-arrow'; 

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <div className='mx-auto max-w-[47rem] w-full font-local flex flex-col flex-grow'>
        <main className='px-8 flex-grow'>
          <BackArrow className="pb-8 pt-14"/>
          <div className='flex flex-col pb-20 leading-6 gap-6'>
            <ProjectSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
