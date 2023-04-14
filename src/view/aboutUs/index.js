import styles from "./aboutUs.module.css"

import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_capa.png"


export default function AboutUs(){
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="sobre mim"> {/*Enviando a imagem em assets e o objeto titulo do JSON */}
            
            <h3 className={styles.subtitulo}>Sou o David</h3>

            <img src={fotoSobreMim} alt="Foto sobre a pessoa" className={styles.fotoSobreMim}></img>

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ante et risus viverra euismod. Nam purus purus, gravida vitae lacus non, mollis dignissim lorem. Aenean bibendum, erat non rhoncus aliquet, tellus risus aliquet mauris, vel fringilla dolor lacus vitae nisi. Ut mauris ipsum, ullamcorper ut libero id, ornare euismod diam. Praesent eu mi enim. Vestibulum eu tristique arcu. Mauris eleifend lectus aliquam nisi convallis, in faucibus lacus lobortis. Sed consectetur augue quis enim sodales, eget posuere elit egestas. Maecenas ut augue sit amet magna accumsan malesuada. Phasellus facilisis ex risus, at lobortis tortor consectetur at. Ut dictum ullamcorper risus interdum laoreet. Sed sit amet nunc in sapien tempor scelerisque. Fusce at ipsum justo. Nam sed augue non felis venenatis commodo. Suspendisse potenti. Nulla dignissim rhoncus nunc. </p>
            <p className={styles.paragrafo}>Etiam purus ligula, mattis vitae feugiat in, convallis non neque. Nulla non dolor vitae mi sollicitudin consequat in ac ex. Quisque congue tellus dolor, faucibus convallis lacus gravida ut. Nullam eget lacinia dolor. Maecenas et metus sed leo finibus posuere in vitae libero. Nam blandit augue non augue semper, id aliquam sem pulvinar. Suspendisse quis volutpat lectus, ac viverra mi. Fusce mauris sem, gravida eget vulputate non, egestas non neque. Morbi efficitur mi eu leo maximus vehicula. Donec a mi eu libero congue placerat et vitae lorem. </p>
        </PostModelo>
        
    );
}
/*Enviando para o PostModelo a imagem e também alguns conteúdos do JSON */