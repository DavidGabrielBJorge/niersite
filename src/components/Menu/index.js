import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css'

export default function Menu(){

    const localizacao = useLocation();

    console.log(localizacao)
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to='/'>Início</Link>
                <Link className={styles.link} to='/aboutus'>Sobre o site</Link>
                

            </nav>
        </header>
    );
}

/*A tag "a" por padrão atualiza a página, para não atualizar toda
página deve usar o Link do react router*/