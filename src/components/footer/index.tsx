import { GreyDots, ArrowRightUp } from 'images';

const Footer = () => {
   const footerLinks = ['Twitter', 'Discord', 'Cookies', 'License', 'Contact'];
   return (
      <footer className="sm:px-16 sm:py-12 text-white px-6 py-6 text-base font-normal min-h-[686px] sm:min-h-[400px] bg-[#1A1D1F]">
         <div className="flex flex-col md:flex-row justify-between pb-6">
            <div className="w-full">
               <p className="text-white min-[990px]:text-[21px] text-[16px]  font-[Durk-Wide-Bold] mb-4">
                  SHORT LINE ABOUT US <br /> THREE WORDS HER
               </p>
               <small className="text-white text-[13px] mt-4">Short sentence here</small>
            </div>
            <div className="flex w-full justify-between">
               <p className="text-white min-[990px]:text-[21px] text-[16px] font-[Durk-Wide-Bold]">
                  CONNECT <br /> WITH <br /> US
               </p>
               <ul>
                  {footerLinks.slice(0, 3).map((link) => (
                     <li className="flex mb-2 cursor-pointer ml-2">
                        <a className="text-white font-[13px]">{link}</a>
                        <img src={ArrowRightUp} alt={'arrow'} />
                     </li>
                  ))}
               </ul>
               <ul>
                  {footerLinks.slice(3).map((link) => (
                     <li className="flex mb-2 cursor-pointer ml-2">
                        <a className="text-white font-[13px]">{link}</a>
                        <img src={ArrowRightUp} alt={'arrow'} />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="flex mt-4 border-t-2 border-[#33383F] justify-between items-center pt-[4rem]">
            <div className="flex justify-between items-center w-[30%]">
               <div className="flex justify-between items-center w-[50%]">
                  <p className="text-[#6F767E] text-[9px] font-[Integral-Cf]">2022</p>
                  <img src={GreyDots} alt="grey-ellipse" />
                  <p className="text-[#6F767E] text-[9px] font-[Integral-Cf]">PLATFORM</p>
               </div>
               <p className="text-[#6F767E] text-[9px] font-[Integral-Cf]">2022</p>
            </div>
            <div className="flex justify-between items-center w-[50%]">
               <p className="text-[#6F767E] text-[9px] font-[Integral-Cf]">TERMS & CONDITIONS</p>
               <p className="text-[#6F767E] text-[9px] font-[Integral-Cf]">PRIVACY POLICY</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
