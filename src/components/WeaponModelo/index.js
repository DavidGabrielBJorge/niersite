import { useEffect } from 'react';
import styles from './WeaponModelo.module.css'

export default function WeaponModelo({children, fotoCapa, titulo}){

    useEffect(() => {
        window.scrollTo(0, 0); // define a posição do scroll para o topo
      }, []);

    return(
        <article className={styles.weaponModeloContainer}>
            <div className={styles.fotoCapa} style={{background:`url(${fotoCapa})`}}>

            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.weaponConteudoContainer}>
                {children}
            </div>

        </article>
    )
}