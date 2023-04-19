import styles from './mainPage.module.css';
import posts from 'assets/json/posts.json';
import PostCard from "components/PostCard";
import Resume from 'components/Resume';

export default function MainPage(){
    return(
        <>
            <Resume></Resume>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>
            
        </>

    );
}