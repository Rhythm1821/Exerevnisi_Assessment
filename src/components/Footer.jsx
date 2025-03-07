import React from 'react';
import LogoAndCopyright from './footer/LogoAndCopyright';
import NoticeBoard from './footer/NoticeBoard';
import SocialAndBlogs from './footer/SocialAndBlogs';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Copyright */}
          <LogoAndCopyright />
          
          {/* Notice Board */}
          <NoticeBoard />
          
          {/* Social and Blogs */}
          <SocialAndBlogs />
        </div>
      </div>
    </footer>
  );
};

export default Footer;