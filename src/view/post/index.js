import { useParams } from "react-router-dom";
import posts from "assets/json/posts.json"
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./post.css"
export default function Post(){
    const parametros = useParams();

    //Procurar o id do post
    const post = posts.find((post)=>{
        return post.id === Number(parametros.id)
    })

    if(!post){
        return <h1>Post não encontrado</h1>
    }

    console.log(post)

    return (
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div className="post-markdown-container">
                <ReactMarkdown>{/* Vai fazer o tratamento do markdown do texto do JSON */}
                    {post.texto}
                </ReactMarkdown>
            </div>

        </PostModelo>
    );

    
}
/*
useParams: Hook usado para retornar uma constante, ele pega o valor na url, por exemplo:

http://localhost:3000/posts/2

nesse caso vai pegar a string 2, deve usar o "Number" para transformar em número

OBS: o texto do JSON está em Markdown logo é necessário tratar, primeiro é necessário instalar
essa biblioteca:

install react-markdown

 */