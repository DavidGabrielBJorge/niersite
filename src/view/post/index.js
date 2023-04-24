import { Route, Routes, useParams } from "react-router-dom";
import posts from "assets/json/posts.json"
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./post.css"
import NotFound from "view/notFound";
import BasePage from "components/BasePage";
export default function Post(){
    const parametros = useParams();

    //Procurar o id do post
    const post = posts.find((post)=>{
        return post.id === Number(parametros.id)
    })

    if(!post){
        return <NotFound></NotFound>
    }

    console.log(post)

    return (
        <Routes>
            <Route path="*" element={<BasePage></BasePage>}>{/* Vai colocar o Banner quando existir um Post*/}
                <Route index element={
                          <PostModelo fotoCapa={`/assets/posts/${post.id}/background.png`} titulo={post.titulo}>
                          <div className="post-markdown-container">
                              <ReactMarkdown>{/* Vai fazer o tratamento do markdown do texto do JSON */}
                                  {post.texto}
                              </ReactMarkdown>
                          </div>
                      </PostModelo>
                }/>
            </Route>

        </Routes>
    
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