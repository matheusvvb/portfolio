import Link from "next/link";

interface WorkProps {
  company: string;
  position: string;
  link: string;
  date: string;
  description: string;
}

const Work = (work: WorkProps) => {
  return (
    <div className='flex flex-col gap-2 mb-6'>
      <div>
        <Link href={work.link} className='font-medium underline underline-offset-4 decoration-1 decoration-zinc-400 hover:text-zinc-400 dark:decoration-zinc-400 dark:hover:text-zinc-400 dark:hover:text-foreground'>{work.company}</Link>
      </div>
      <div className='text-zinc-500 dark:text-zinc-300'>{work.position} | <span className="italic text-muted-foreground">{work.date}</span></div>
      <div className='text-muted-foreground'>{work.description}</div>
    </div>
  )
}

export default Work;