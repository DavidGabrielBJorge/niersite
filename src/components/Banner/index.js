import styles from "./Banner.module.css"
import capaNierAutomata from "assets/nierAutomata_capa.jpg"
import forest_nier from "assets/2b_robo.jpeg"

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}> 
                <h1 className={styles.titulo}>Ola mundo</h1>

                <p className={styles.paragrafo}>Boas vindas ao projeto pessoal, sou o David e tentarei fazer um site baseado no jogo Nier</p>

            </div>

            <div className={styles.imagens}>
                <img className={styles.secondImage} src={forest_nier} alt="Personagem principal em uma floresta"></img>
                <img className={styles.mainImage} src={capaNierAutomata} alt="Capa do jogo Nier Automata"></img>
            </div>

           
        </div>

       
    )
}