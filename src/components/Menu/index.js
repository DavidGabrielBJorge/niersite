import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu(){

    
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>{/*O MenuLink vai tratar o link para que ele tenha um underline correspondendo a página que o usuário está usando */}
                <MenuLink to="/aboutus">Sobre o site</MenuLink>
                

            </nav>
        </header>
    );
}

