import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Style from './Style.module.scss';

const Layout = () => (
  <div className={Style.layout}>
    <Banner />
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
