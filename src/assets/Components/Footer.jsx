import Styles from './footer.module.css'
import tik from './img/tiktok.jpeg'
import face from './img/face.jpeg'
import insta from './img/insta.jpeg'


function Header(){
    return (
        <>
        <footer className={Styles.Fundo}>
            <div className={Styles.media}>
                <img src={tik} alt="" />
                <img src={face} alt="" />
                <img src={insta} alt="" />
            </div>
            <div className={Styles.lorm}>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </footer>
        </>
) 
}
export default Header