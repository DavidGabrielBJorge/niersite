import styles from './CardWeapon.module.css';
import posts from 'assets/json/posts.json';
import PostCard from "components/PostCard";

export default function CardWeapon(){
    return(
        <>
            <h2>Teste</h2>
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>
        </>
    )
}