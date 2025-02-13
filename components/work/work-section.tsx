import Work from "@/components/work/work";
import Link from "next/link";

interface WorkProps {
  company: string;
  position: string;
  link: string;
  date: string;
  description: string;
}

const works: WorkProps[] = [
  {
    company: '65a Technology',
    position: 'SWE - Tech Lead',
    link: 'https://65a.com.br',
    date: 'Nov 2022 - Present',
    description: 'Building from scratch a platform helping companies turn complex documents into AI workflows.',
  },
  {
    company: 'Central IT',
    position: 'SWE',
    link: 'https://centralit.com.br',
    date: 'Nov 2021 - Nov 2022',
    description: 'Developed a platform for telework management and monitoring. It was used by federal institutions.',
  },
  {
    company: 'WGL',
    position: 'SWE - CoFounder',
    link: 'https://wgl.com.br',
    date: 'Mar 2014 - Nov 2021',
    description: 'Building products for the Brazilian market.',
  }
];

const WorkSection = () => {
  return (
    <div className='flex flex-col gap-4 w-full sm:w-1/2 pr-6'>
      <div className='text-xl pb-2'>
        work
      </div>
      <WorkList data={works} renderItem={(work) => (
        <Work key={work.company} {...work} />
      )} />
    </div>
  )
}

const WorkList = ({ data, renderItem }: { data: WorkProps[], renderItem: (item: WorkProps) => React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        {data.map((item) => renderItem(item))}
      </div>
      <Link href={"/docs/resume.pdf"} className='font-medium underline underline-offset-4 decoration-1 decoration-muted-foreground hover:text-muted-foreground'>view resume →</Link>
    </div>
  )
}

export default WorkSection;