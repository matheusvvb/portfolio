import Bio from '@/components/bio';
import Footer from '@/components/footer';
import Links from '@/components/links';

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <div className='mx-auto max-w-[47rem] w-full font-local flex flex-col flex-grow justify-center'>
        <main className='px-8'>
          <span className='text-xl text-zinc-700 dark:text-white'>
            Matheus Barbosa
          </span>
          <Bio />
          <Links />
        </main>
      </div>
      <div className='mx-auto max-w-[47rem] w-full font-local flex-shrink-0'>
        <Footer />
      </div>
    </div>
  );
}
