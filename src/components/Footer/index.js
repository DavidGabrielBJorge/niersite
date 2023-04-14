import styles from './Footer.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';//Dessa forma MarcaRegistrada funciona como um componente

export default function Footer(){
    return (
    <footer className={styles.footer}>
        <MarcaRegistrada/>
        Desenvolvido por David
    </footer>);
}