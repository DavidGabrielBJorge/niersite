import styles from './Resume.module.css'
import teste from '/assets/city.jpg'

export default function Resume(){
    return(
        <div>

        <h2>Introdução</h2>
        <figure>
        <p className={styles.paragraph}>Nier Automata é um jogo de RPG de ação com elementos "hack and slash" desenvolvido pela Platinum Games e publicado pela Square Enix em 2017. É o segundo jogo da série NieR, uma sequência indireta do jogo NieR Replicant. NieR Automata acontece no ano 11.945 durante a 14ª Guerra das Máquinas</p>
        </figure>

        <h2>Enredo</h2>
        <figure>
        <p className={styles.paragraph}>Nier Automata é um jogo de RPG de ação com elementos "hack and slash" desenvolvido pela Platinum Games e publicado pela Square Enix em 2017. É o segundo jogo da série NieR, uma sequência indireta do jogo NieR Replicant. NieR Automata acontece no ano 11.945 durante a 14ª Guerra das Máquinas</p>
        </figure>

        <img src={teste}/>

        </div>
    )
}