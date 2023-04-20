import styles from './Resume.module.css'
import city_nier from 'assets/city.jpg'

export default function Resume(){
    return(
        <div>
            <div className={styles.card_text}>
                <h2 className={styles.resume_title}>Introdução</h2>
                <figure>
                <p className={styles.paragraph}>Nier Automata é um jogo de RPG de ação com elementos "hack and slash" desenvolvido pela Platinum Games e publicado pela Square Enix em 2017. É o segundo jogo da série NieR, uma sequência indireta do jogo NieR Replicant. NieR Automata acontece no ano 11.945 durante a 14ª Guerra das Máquinas</p>
                </figure>
            </div>


            <img  className={styles.imageBackground} src={city_nier} alt="Pesonagem 2B e 9S em cima de um prédio olhando para frente de uma cidade destruída"/>

            <div className={styles.card_text}>
                <h2 className={styles.resume_title}>Enredo</h2>
                <figure>
                <p className={styles.paragraph}>O jogo segue a história de dois YoRHa - 2B e 9S  - enquanto eles lutam contra os invasores e descobrem a verdade por trás da guerra. A história explora temas de existência, livre-arbítrio e consciência, com várias reviravoltas e revelações chocantes.</p>
                <p className={styles.paragraph}>O jogo possui múltiplos finais, sendo no total 26, cada um com diferentes requisitos para alcançá-los. Esses finais adicionam camadas adicionais à história e permitem que os jogadores experimentem diferentes conclusões para a trama.</p>
                </figure>
            </div >
            

        </div>
    )
}