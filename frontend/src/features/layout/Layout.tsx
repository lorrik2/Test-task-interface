import React from 'react';
import { Outlet } from 'react-router-dom';
import './scss/layout.scss';
import Navbar from '../menu/navbar/Navbar';
import Sidebar from '../menu/sidebar/Sidebar';

function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="block">
        <div className="block__row">
          <section className="block__element block__element_1">
            <Sidebar />
          </section>
          <section className="block__element block__element_2">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
}

export default Layout;
