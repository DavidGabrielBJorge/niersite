import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

export default function MenuLink({children, to}){
    //"children" representa o texto do menu, por exemplo Início e o to a rota, no caso "/"
    /*
    No componente Menu

    <MenuLink to="/">Início</MenuLink>
               ^        ^
               |        |
               to    children
    */
    const localizacao = useLocation();

    return (
        <Link className={
            `${styles.link} ${localizacao.pathname === to ? styles.linkDestaque : ""}`} 
            to={to}>
                {children}
        </Link>
    );
}

/*A tag "a" por padrão atualiza a página, para não atualizar toda
página deve usar o Link do react router

<Link className={`${styles.link} ${localizacao.pathname === '/' ? styles.linkDestaque : ""}`} to='/'>Início</Link>
Nesse código diz pra acrescentar dois styles no mesmo elemento,
além disso caso o localizacao.pathname for "/" deve inserir o styles.linkDestaque
no elemento, caso não deve inserir nada



        <Link className={
            `${styles.link} ${localizacao.pathname === to ? styles.linkDestaque : ""}`} 
            to={to}>
                {children}
        </Link>

        Ao passar o início os parametros do children e do to serão dessa forma: 
        <Link className={
            `${styles.link} ${localizacao.pathname === '/' ? styles.linkDestaque : ""}`} 
            to='/'>
                Início
        </Link>

*/