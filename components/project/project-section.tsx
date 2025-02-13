import Project from "@/components/project/project";
import Link from "next/link";

interface ProjectProps {
  name: string;
  date: string;
  link: string;
  description: string;
}

const projects: ProjectProps[] = [
  {
    name: "portfolio",
    link: "https://github.com/matheusvvb/portfolio",
    date: "Feb 2025",
    description:
      "My personal website built with Next.js, Tailwind CSS, and TypeScript.",
  },
];

const ProjectSection = () => {
  return (
    <div className='flex flex-col gap-4 w-full sm:w-1/2 pr-6'>
      <div className='text-xl pb-2'>
        projects
      </div>
      <ProjectList data={projects} renderItem={(project) => (
        <Project key={project.name} {...project} />
      )} />
    </div>
  )
}

const ProjectList = ({ data, renderItem }: { data: ProjectProps[], renderItem: (item: ProjectProps) => React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      {data.map((item) => renderItem(item))}
      <div className='flex flex-col'>
        <Link href={"https://github.com/matheusvvb"} className='font-medium underline underline-offset-4 decoration-1 decoration-zinc-400 hover:text-zinc-400 dark:decoration-zinc-400 dark:hover:text-zinc-400 dark:hover:text-foreground'>all projects →</Link>
      </div>
    </div>
  )
}

export default ProjectSection;