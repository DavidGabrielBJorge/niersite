import { Route, Routes, useParams } from "react-router-dom";
import weapons from "assets/json/weapons.json";
import WeaponModelo from "components/WeaponModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./weapon.css"
import NotFound from "view/notFound";
import BasePage from "components/BasePage";

export default function Weapon(){
    const parametros = useParams();

    //Procurar o id do weapon
    const weapon = weapons.find((weapon)=>{
        return weapon.id === Number(parametros.id)
    })

    if(!weapon){
        return <NotFound></NotFound>
    }

    return (
        <Routes>
            <Route path="*" element={<BasePage></BasePage>}>{/* Vai colocar o Banner quando existir um weapon*/}
                <Route index element={
                          <WeaponModelo fotoCapa={`/assets/weapons/${weapon.id}/background.png`} titulo={weapon.titulo}>
                          <div className="weapon-markdown-container">
                              <ReactMarkdown>{/* Vai fazer o tratamento do markdown do texto do JSON */}
                                  {weapon.texto}
                              </ReactMarkdown>
                          </div>
                      </WeaponModelo>
                }/>
            </Route>

        </Routes>
    
    );

    
}
/*
useParams: Hook usado para retornar uma constante, ele pega o valor na url, por exemplo:

http://localhost:3000/weapons/2

nesse caso vai pegar a string 2, deve usar o "Number" para transformar em número

OBS: o texto do JSON está em Markdown logo é necessário tratar, primeiro é necessário instalar
essa biblioteca:

install react-markdown


 */