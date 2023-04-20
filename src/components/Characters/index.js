import styles from "./Characters.module.css"
import twoB from "assets/2b.gif";
import nineS from "assets/9s.gif";
import CharacterInfo from "components/CharacterInfo";


export default function Characters(){
    return(
        <div>
            <section className={styles.characters}>

            <div className={styles.card_character}>
                <h2 className={styles.character_title}>Personagens</h2>
                <figure>
                        <div className={styles.character}>
                            <CharacterInfo title="YoRHa No.2 Type B" class="Batalha" weight="148.8kg" height="1.68m" weapon="Pode carregar 2 armas." resistance="Possui alta resistência à dano físico." attack="Ideal para ataques à longa distância e perto." image={twoB} alt="Personagem 2b olhando para a tela com o seu companheiro atrás aparecendo"></CharacterInfo>
                        </div>

                        <hr className={styles.character_separation}/>

                        <div className={styles.character}>
                        <CharacterInfo title="YoRHa No.9 Type S" class="Scanner" weight="129.9kg" height="1.60m" weapon="Pode carregar apenas uma arma." resistance="Possui baixa resistência à dano físico." attack="Possui habilidade de hackear outros dispositivos." image={nineS} alt="Personagem 9S olhando para uma tela com vários gráficos"></CharacterInfo>
                        </div>
                </figure>
            </div>

    
          </section>

        </div>
    )
}