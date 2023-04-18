import styles from './MainButton.module.css'

export default function MainButton({children, tamanho}){ {/* Caso o tamanho for lg(largo) deve adicionar o estilo lg*/}
    return (
        <button className={`${styles.buttonMain} ${styles[tamanho]}`}>
            {children}    
        </button>
    )
}