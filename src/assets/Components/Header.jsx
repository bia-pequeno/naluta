import Styles from './header.module.css'
import Logo from './img/icon.png'
import Lupa from './img/lupa.png'

function Header(){
    return (
        <header>
            <nav className={Styles.Nav}>
                <div>
                <img className={Styles.Logo} src={Logo} alt="" />
                </div>
                <div className={Styles.map}>
                   <p>Home</p>
                   <p>Escócia</p>
                   <p>Grand Canyon</p>
                   <p>Muralhas da China</p>
                   <p>Aruda</p>
                   <p>Katmadsu</p>
                </div>
                <div className={Styles.busca} >
                    <input type="text" />
                    <img src={Lupa} alt="" />
                </div>
            </nav>

        </header>
) 
}
export default Header