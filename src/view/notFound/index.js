import MainButton from 'components/MainButton'
import styles from './notFound.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'//Hook usado para navegar nas rotas da aplicação

export default function NotFound(){

    const navegar = useNavigate();
    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer } onClick={()=> navegar(-1)}>
                    
                    <MainButton tamanho="lg">
                        Voltar
                    </MainButton>{/* Envia o children "Voltar" para o MainButton e além disso envia o props do "tamanho"*/}

                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}
/*
O useNavigate é um hook usado para navegar entre as rotas do projeto, nesse caso, na página 404
ele é usado para retornar para a página anterior, para isso deve inserir o -1 na função callback

onClick={()=> navegar(-1)}

Para voltar para a raiz deve usar dessa forma:

onClick={()=> navegar("/")}

Portanto a pessoa volta para a página anterior antes de acessar a 404.
*/