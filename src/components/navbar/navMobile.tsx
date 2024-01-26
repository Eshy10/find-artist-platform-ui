import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { routes } from './navLinks';

export const NavMobile = () => {
   const [isOpen, setOpen] = useState(false);
   const ref = useRef(null);

   useClickAway(ref, () => setOpen(false));

   return (
      <div ref={ref} className="lg:hidden">
         <div className="flex w-screen justify-between items-center px-4">
            <p className="text-[#E1F16B] font-[21px] leading-[2.415px]">LOGO</p>
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#fff" />
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
               >
                  <ul className="grid gap-2">
                     {routes.map((route, idx) => {
                        return (
                           <motion.li
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                 type: 'spring',
                                 stiffness: 260,
                                 damping: 20,
                                 delay: 0.1 + idx / 10,
                              }}
                              key={route.title}
                              className="w-full p-[0.08rem]"
                           >
                              <li>
                                 <a
                                    onClick={() => setOpen((prev) => !prev)}
                                    className={
                                       'flex items-center justify-between w-full pt-4 bg-neutral-950 text-white'
                                    }
                                    href={route.href}
                                 >
                                    <span className="flex gap-1 text-lg">{route.title}</span>
                                 </a>
                              </li>
                           </motion.li>
                        );
                     })}
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};