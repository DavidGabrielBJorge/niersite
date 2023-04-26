import styles from "./aboutUs.module.css"

import PostModelo from "components/PostModelo";
import backgroundCapa from "assets/background.png"


export default function AboutUs(){


    return(

        
        <PostModelo fotoCapa={backgroundCapa} titulo="Informações sobre o site"> {/*Enviando a imagem em assets e o objeto titulo do JSON */}
            
            <div className={styles.card_text}>
                <h2 className={styles.claim_title}>Créditos</h2>
                <figure>
                    <p className={styles.paragraph}>Esse site foi criado com o objetivo de estudar as tecnologias presentes no React.js, utilizando como base o jogo NieR Automata. Abaixo segue as fontes e autores que auxiliaram na criação desse projeto:</p>
                    <ul className={styles.list}>
                        <li className={styles.line}>Jogo desenvolvido pela PlatinumGames e publicado pela Square Enix.</li>
                        <li className={styles.line}>Imagens e informações das armas: <a className={styles.link} href="https://nier.fandom.com/wiki/NIER_Wiki">NIER Wiki | Fandom</a>.</li>
                        <li className={styles.line}>Imagem do background dos títulos: <a className={styles.link}  href="https://www.deviantart.com/novariko/art/Nier-Automata-Menu-BG-705350454">novariko</a>.</li>
                        <li className={styles.line}>Toda a estilização da página foi feita usando uma biblioteca de estilização chamada YoRHa, feita por metakirby5, pode ser encontrada clicando nesse <a className={styles.link}  href="https://www.npmjs.com/package/yorha">link</a>.</li>
                    </ul>
                </figure>
            </div>

            <div className={styles.repository}>
                <a href="https://github.com/DavidGabrielBJorge/niersite">Link para o repositório</a>
            </div>
        </PostModelo>
        
    );
}
/*Enviando para o PostModelo a imagem e também alguns conteúdos do JSON 

Outro modo de fazer a lista seria desse jeito:

    const listItems = [
        "Jogo desenvolvido pela PlatinumGames e publicado pela Square Enix.",
        "Imagens e informações das armas: <a className={styles.link} href='https://nier.fandom.com/wiki/NIER_Wiki'>NIER Wiki | Fandom</a>.",
        "Imagem do background dos títulos: <a className={styles.link}  href='https://www.deviantart.com/novariko/art/Nier-Automata-Menu-BG-705350454'>novariko</a>.",
        "Toda a estilização da página foi feita usando uma biblioteca de estilização chamada YoRHa, feita por metakirby5, pode ser encontrada clicando nesse <a className={styles.link}  href='https://www.npmjs.com/package/yorha'>link</a>."
      ];
      
    <ul className={styles.list}>
        {listItems.map((item, index) => (
            <li key={index} className={styles.line} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </ul>

    Deve usar a propriedade dangerouslySetInnerHTML para renderizar o HTML dentro dos elementos li. 
    Isso é necessário porque a tag <a> não é considerada texto dentro do JSX e não pode ser incluída dentro do texto de um
    elemento.

    Não foi usado dessa forma pois a estilização feita por módulo css não vai aplicar nas linhas <li>

*/