import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-gray-300 py-4">
      &copy; {new Date().getFullYear()} AgriCareHub
    </footer>
  );
};

export default Footer;
