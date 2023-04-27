import styles from './CharacterInfo.module.css'

export default function CharacterInfo(props){

  const information = [
    { label: 'Classe', value: props.class },
    { label: 'Peso', value: props.weight },
    { label: 'Altura', value: props.height },
    { label: 'Armas', value: props.weapon },
    { label: 'Resistência', value: props.resistance },
    { label: 'Ataque', value: props.attack },
  ];

    return (
        <div className={styles.character_description}>
          
          <ul className={styles.list}>
          <h3 className={styles.character_name}>{props.title}</h3>
            {information.map((info) => (
              <li key={info.label} className={styles.line}>{info.label}: {info.value}</li>
            ))}
          </ul>

          <img className={styles.image_character} src={props.image} alt={props.alt} />
        </div>
      );
}

/*
Lista de características de personagens
          <ul className={styles.list}>
            <li className={styles.line}>Classe: {props.class}</li>
            <li className={styles.line}>Peso: {props.weight}</li>
            <li className={styles.line}>Altura: {props.height}</li>
            <li className={styles.line}>{props.weapon}</li>
            <li className={styles.line}>{props.resistance}</li>
            <li className={styles.line}>{props.attack}</li>
          </ul>

Solução:

{information.map((info) => (
              <li key={info.label} className={styles.line}>{info.label}: {info.value}</li>
            ))}

Este trecho de código está criando uma lista de itens a partir de um array de objetos chamado
information.

O método map() é usado para iterar sobre o array information e gerar
um novo array que contém os elementos <li> que serão exibidos na tela. Cada objeto do array
information possui duas propriedades: label e value, que são usados para criar o texto de
cada item da lista.

Dentro do map(), para cada objeto do array information, é criado um elemento <li> com a
classe styles.line e o texto é comweapono pelo valor de label e value. A propriedade key é 
usada para identificar unicamente cada elemento da lista, garantindo a eficiência no
re-renderização quando o array information for atualizado.
*/