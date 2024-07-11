import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink';

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Inico
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobre Mim
        </MenuLink>
      </nav>
    </header>
  )
}

export default Menu