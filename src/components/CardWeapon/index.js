import styles from './CardWeapon.module.css';
import posts from 'assets/json/posts.json';
import PostCard from "components/PostCard";

export default function CardWeapon(){
    return(
        <>
            <div className={styles.card_weapon}>
            <h2 className={styles.weapon_title}>Armas</h2>
            </div>

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