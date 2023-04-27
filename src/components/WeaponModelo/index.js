import styles from './WeaponModelo.module.css'

export default function weaponModelo({children, fotoCapa, titulo}){
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