import Styles from './footer.module.css'
import tik from './img/tiktok.jpeg'
import face from './img/face.jpeg'
import insta from './img/insta.jpeg'


function Footer(){
    return (
        <>
        <footer className={Styles.Fundo}>
            <p>Siga nossas redes socias</p>
            <div className={Styles.media}>
                
                <img src={tik} alt="" />
                <img src={face} alt="" />
                <img src={insta} alt="" />
            </div>
            <div className={Styles.lorm}>
                <p>Telefone de contato : (11) 4002-8922</p>
            </div>
        </footer>
        </>
) 
}
export default Footer