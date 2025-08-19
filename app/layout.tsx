import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {children}
    </div>
  );
};

export default Layout;