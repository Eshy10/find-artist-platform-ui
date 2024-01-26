import { NavMobile } from './navMobile';
import { NavDesktop } from './navDesktop';

export const Navbar = () => {
   return (
      <nav className="fixed top-0 left-0 right-0 bg-neutral-950 z-[999]">
         <div className="flex items-center justify-between py-1 lg:py-5 lg:px-8">
            <NavDesktop />
            <NavMobile />
         </div>
      </nav>
   );
};
