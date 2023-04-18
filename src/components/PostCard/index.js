import { Link } from 'react-router-dom';
import styles from './Post.module.css'
import MainButton from 'components/MainButton';

/*
Componente pata os cards, nele possui a imagem, o titulo e o botão,
foi usado o Link em conjunto com o Hook useParams para pegar o id de cada
card
*/

export default function PostCard({ post }){
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <MainButton>Ler</MainButton> {/* O botão será o mesmo tanto para os cards quanto para a página 404, para mudar o conteúdo nele deve colocar o children, no caso o "ler"*/}
            </div>
           
        </Link>

    );
}