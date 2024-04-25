import Style from './props.module.css'

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <>
        <div className={Style.corpo_texto}>
            <h2>Venha Explorar Esse Lugar Incrivel! Venha Conhecer {lugar}</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="bandeira" />
        </div>
        </>
    )
}
export default ComponenteProps