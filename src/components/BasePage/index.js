import Banner from "components/Banner";
import { Outlet } from "react-router-dom";
/*
Foi utilizado o recurso chamado de rotas alinhadas do React Router Dom (Outlet),
em que uma rota se torna pai de outras rotas, então, as rotas “Main Page” e “Abou us” se 
tornaram rotas filhas da rota página padrão. */



export default function BasePage(){
    return(
        <main>
            <Banner></Banner>

            {/* Renderiza o conteúdo das duas rotas */}
            <Outlet>

            </Outlet>
        </main>
    )
}

/*Como tanto a página main quanto about us tem o banner e 
o main, foi criado esse componente para evitar repetições*/