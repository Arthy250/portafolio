interface Props {
    titulo: string,
    img: string
    descripcion: string,
    tipo: string,
    url?: string,
    githubUrl?: string,
    googlePlayURL?: string
    setModal: (modal:boolean) => void ;
}

const DetallesProyecto = ({titulo, img, descripcion, url, githubUrl, googlePlayURL, setModal}:Props) => {

    const cerrarModal = () => {
        setModal(false)
    }
    

    return ( 
        <div className="detallesProyecto">
            <div className="detallesInfo">
                {/* Cerrar modal */}
                <button className='cerrarModal' onClick={cerrarModal}></button>

                <div className="info">
                    <h2>Titulo: <span className="enfasis">{titulo}</span></h2>
                    <p>Descripción: {descripcion}</p>
                    <div className="enlaces">
                        {url && 
                            <a target="_blank" rel="noreferrer" className="link linkSite" href={url}></a>
                        }
                        
                        {githubUrl && 
                            <a target="_blank" rel="noreferrer" className="link linkGithub" href={githubUrl}></a>
                        }
                        {googlePlayURL && 
                            <a target="_blank" rel="noreferrer" className="link linkGooglePlay" href={googlePlayURL}></a>
                        }
                    </div>
                </div>
                <div className="imagen">
                    <img src={require(`../assets/mockups/${img}`)} alt={titulo} />
                </div>
            </div>
        </div>
     );
}
 
export default DetallesProyecto