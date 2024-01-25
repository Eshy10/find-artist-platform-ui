import { useEffect, RefObject } from 'react';

interface UseOutsideClickProps {
   ref: RefObject<HTMLElement>;
   callback: () => void;
}

export function useOutsideClick({ ref, callback }: UseOutsideClickProps): void {
   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
         }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);

      // Unbind the event listener on cleanup
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [ref, callback]);
}
