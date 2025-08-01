
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { RiMailSendFill } from "react-icons/ri";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACTO
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="items-center w-full max-w-4xl">
        <div className='flex flex-col gap-6 sm:flex-row items-center justify-around w-full'>

          <span className='text-3xl w-8/12 max-w-4xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]'>Estoy listo para integrarme a un equipo y alcanzar <strong className='text-pink-500'>grandes objetivos</strong> juntos.</span>

          <div className="flex items-center gap-3">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              href={`mailto:${personalData.email}`}
            >
              <span>Contactame</span>
              <RiMailSendFill size={16} />
            </Link>
          </div>
        </div>
        <div className=" flex w-full justify-center md:justify-end mx-auto mt-4">
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />

            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;