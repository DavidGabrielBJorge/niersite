import { NavLink } from 'react-router-dom';
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
    

    return (
        <NavLink className={({ isActive})=>
            `${isActive ? styles.linkDestaque : ""}`} 
            to={to}
            end
            >
                <div className={styles.option}>
                 {children}
                </div>
                
        </NavLink>
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

===============================================================================================
A propriedade "isActive"  é true se o link estiver ativo e false se não
estiver. Assim, podemos adicionar mais uma interpolação, com uma verificação semelhante à que
estávamos fazendo antes:

${isActive ? styles.linkDestacado : ""}

Portanto pode ser que aconteça com você dos dois links ficarem ativos ao mesmo tempo quando 
o usuário estiver na rota inicial!
Isso porque o react-router-dom pode interpretar que a rota /aboutus também vai corresponder 
à rota /, pois ela também começa com /.

Para evitar isso, você pode adicionar a propriedade "end" no NavLink para garantir 
que esse comportamento não aconteça.
*/