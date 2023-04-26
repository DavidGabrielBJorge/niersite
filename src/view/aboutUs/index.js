import styles from "./aboutUs.module.css"

import PostModelo from "components/PostModelo";
import backgroundCapa from "assets/background.png"


export default function AboutUs(){
    return(
        <PostModelo fotoCapa={backgroundCapa} titulo="Informações sobre o site"> {/*Enviando a imagem em assets e o objeto titulo do JSON */}
            
            <div className={styles.card_text}>
                <h2 className={styles.resume_title}>Créditos</h2>
                <figure>
                <p className={styles.paragraph}>Esse site foi criado com o objetivo de estudar as tecnologias presentes no React.js, utilizando como base o jogo NieR Automata. Abaixo segue as fontes e autores que auxiliaram na criação desse projeto:</p>
                </figure>
            </div>
        </PostModelo>
        
    );
}
/*Enviando para o PostModelo a imagem e também alguns conteúdos do JSON */