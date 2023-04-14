import styles from './mainPage.module.css';
import posts from 'assets/json/posts.json';
import Post from "components/Post";

export default function MainPage(){
    return(

            <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>
        

    );
}