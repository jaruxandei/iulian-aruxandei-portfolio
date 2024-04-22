import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';


const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
      <>LinkedIn <FaLinkedin size={30}/> </>
    ), 
    href: 'https://www.linkedin.com/in/iulian-aruxandei-636789158/',
    style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
      <>GitHub <FaGithub size={30}/> </>
    ), 
    href: 'https://github.com/jaruxandei',
    },
    {
      id: 3,
      child: (
      <>E-mail <HiOutlineMail size={30}/> </>
    ), 
    href: 'mailto:aruxandei.iulian@gmail.com',
    },
    {
      id: 4,
      child: (
      <>Instagram <BsInstagram size={30}/> </>
    ), 
    href: 'https://www.instagram.com/julian.aruxandei',
    style: 'rounded-br-md'
    }   
  ]

  return (
    <div className="hidden lg:flex flex-col lg:top-[35%] left-0 fixed">
      <ul>
        {links.map(link => (
          <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 ${link.style}`}>
            <a 
            href={link.href} 
            target="_blank"
            className="flex justify-between items-center w-full text-white"> 
            {link.child} 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks
