import Styles from './home.module.css'
import Mala from './img/mala.jpeg'
function Home(){
    return(
        <>
        <div className={Styles.conteudo}>
            <div className={Styles.Mala}>
                <img src={Mala} alt="" />
            </div>
            <div className={Styles.textos}>
                <h1>Lorem, ipsum dolor</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse voluptatibus laborum. Suscipit dicta dignissimos nobis perspiciatis, alias voluptate delectus fugit, unde maiores quasi, quod eos reiciendis expedita excepturi repudiandae.</p>
                <button>Conhecer</button>
            </div>
        </div>
        </>
    )
}
export default Home