import Link from "next/link";

interface ProjectProps {
  name: string;
  date: string;
  link: string;
  description: string;
}

const Project = (project: ProjectProps) => {
  return (
    <div className='flex flex-col gap-2 mb-6'>
      <div>
        <Link href={project.link} className='font-medium underline underline-offset-4 decoration-1 decoration-muted-foreground hover:text-muted-foreground'>{project.name}</Link>
      </div>
      <div className='text-muted-foreground italic'>{project.date}</div>
      <div className='text-muted-foreground'>{project.description}</div>
    </div>
  )
}

export default Project;