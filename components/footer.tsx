import { ThemeSwitcher } from '@/components/theme-switcher';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      <Separator />
      <footer className="flex justify-between items-center text-sm px-8 py-2">
        <div className="flex items-center text-muted-foreground">
          :D
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  );
};

export default Footer;