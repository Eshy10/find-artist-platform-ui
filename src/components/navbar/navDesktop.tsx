import { routes } from './navLinks';
import Button from 'components/button';

export const NavDesktop = () => {
   return (
      <div className="hidden lg:flex w-full items-center justify-between px-4">
         <p className="text-[#E1F16B] font-[21px] leading-[2.415px]">LOGO</p>
         <ul className="flex items-center gap-5 text-sm">
            {routes.map(({ href, title }) => (
               <li>
                  <a
                     href={href}
                     className="flex items-center gap-1 hover:text-neutral-400 transition-all text-white"
                  >
                     {title}
                  </a>
               </li>
            ))}
         </ul>
         <div className="flex items-center">
            <Button variant="primary">Sign Up</Button>
            <Button variant="secondary" className="ml-4">
               Login
            </Button>
         </div>
      </div>
   );
};
