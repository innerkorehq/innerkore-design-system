import React from 'react';
import '../src/scss/tailwind.scss';
import 'antd/dist/antd.less';

const Layout = ({ children }) => {
  return (
    <div className="px-20 py-10">
      {children}
    </div>
  )
}

export default Layout;