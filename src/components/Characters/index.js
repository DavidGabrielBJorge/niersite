import styles from "./Characters.module.css"
import twoB from "assets/2b.gif";
import nineS from "assets/9s.gif";


export default function Characters(){
    return(
        <div>
            <section className={styles.characters}>

            <div className={styles.card_character}>
                <h2 className={styles.character_title}>Personagens</h2>
                <figure>
                        <div className={styles.character}>

                            <div className={styles.character_description}>
                                <h3>YoRHa No.2 Type B</h3>
                                <ul className={styles.list}>
                                    <li className={styles.line}>Classe: Battle.</li>
                                    <li className={styles.line}>Peso: 148.8kg.</li>
                                    <li className={styles.line}>Altura: 1.68m.</li>
                                    <li className={styles.line}>Pode carregar 2 armas.</li>
                                    <li className={styles.line}>Possui alta resistência à dano físico.</li>
                                    <li className={styles.line}>Ideal para ataques à longa distância e perto.</li>
                                </ul>

                                <img className={styles.image_character} src={twoB} alt="Apartamento com cores branco e preto, seus quartos são compactos, localizado em Park Avenue" />
                            </div>

                        </div>

                        <hr className={styles.character_separation}/>

                        <div className={styles.character}>

                            <div className={styles.character_description}>
                                <h3>YoRHa No.9 Type S</h3>
                                <ul className={styles.list}>
                                    <li className={styles.line}>Classe: Scanner.</li>
                                    <li className={styles.line}>Peso: 129.9kg.</li>
                                    <li className={styles.line}>Altura: 1.60m.</li>
                                    <li className={styles.line}>Pode apenas uma arma.</li>
                                    <li className={styles.line}>Possui baixa resistência à dano físico.</li>
                                    <li className={styles.line}>Possui habilidade de hackear outros dispositivos.</li>
                                </ul>

                                <img className={styles.image_character} src={nineS} alt="Apartamento com cores branco e preto, seus quartos são compactos, localizado em Park Avenue" />
                            </div>

                        </div>
                </figure>
            </div>



{/* 
            <div className="character">
              <img src={nineS} alt="Apartamento com cores claras de luxo, localizado em Downtown" />
              <div class="description-apartment">
                <h3>Apartamento em Downtown</h3>
                <ul>
                  <li>Apartamento no centro da cidade</li>
                  <li>Garagem para até 3 carros</li>
                  <li>Possui 2 andares</li>
                  <li>Aluga-se por R$8.000,00 por mês</li>
                </ul>
              </div>
            </div> */}

    
          </section>

        </div>
    )
}