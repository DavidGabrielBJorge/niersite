import { Link } from 'react-router-dom';
import styles from './WeaponCard.module.css'
import MainButton from 'components/MainButton';

/*
Componente pata os cards, nele possui a imagem, o titulo e o botão,
foi usado o Link em conjunto com o Hook useParams para pegar o id de cada
card
*/

export default function weaponCard({ weapon }){
    return (
        <Link to={`/weapons/${weapon.id}`}>
            <div className={styles.weapon}>
                <img
                    className={styles.capa}
                    src={`/assets/weapons/${weapon.id}/weapon.jpg`}
                    alt="Imagem de capa do weapon"
                />

                <h2 className={styles.titulo}>{weapon.titulo}</h2>

                <MainButton>Saiba mais</MainButton> {/* O botão será o mesmo tanto para os cards quanto para a página 404, para mudar o conteúdo nele deve colocar o children, no caso o "ler"*/}
            </div>
           
        </Link>

    );
}