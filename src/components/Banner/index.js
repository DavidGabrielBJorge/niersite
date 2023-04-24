import styles from "./Banner.module.css"
import capaNierAutomata from "assets/nierAutomata_capa.jpg"
import forest_nier from "assets/2b_robo.jpeg"

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}> 
                <h1 className={styles.titulo}>NieR Automata</h1>

                <p className={styles.paragrafo}>Informações sobre RPG NieR Automata, contando sua história, personagens e armas.</p>

            </div>

            <div className={styles.imagens}>
                <img className={styles.secondImage} src={forest_nier} alt="Personagem principal em uma floresta"></img>
                <img className={styles.mainImage} src={capaNierAutomata} alt="Capa do jogo Nier Automata"></img>
            </div>

           
        </div>

       
    )
}