import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner.jsx';

const PaginaPadrao = () => {
  return (
    <main>
        <Banner/>

        <Outlet/>
    </main>
  )
}

export default PaginaPadrao