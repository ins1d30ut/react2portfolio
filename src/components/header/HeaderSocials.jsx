import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BiCoinStack } from 'react-icons/bi';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://bitcoin.com' target='_blank'>
        <BiCoinStack />
      </a>
    </div>
  );
};

export default HeaderSocials;
