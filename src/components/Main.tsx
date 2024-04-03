import Imagen from '../images/charly.png'
import NavigationResult from './NavigationResult'

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row">
        <img className="w-full md:w-1/2 pl-1" src={Imagen} alt="charly portada clics modernos" />
        <section className="w-full md:w-1/2 mb-10 pl-1">
            <p className="text-xl font-bold mt-3 mb-2">Esta es una <span className="text-purple-400">API</span> donde poder consultar parte de la discografía de <span className="text-purple-600">Charly</span> en solitario</p>
            <p className="text-xl font-bold mt-3 mb-2">Desde Yendo de la cama al living hasta Random</p>
            <NavigationResult />
            <div className="mt-6">
            <p className="text-xl font-bold mt-3 mb-2">El uso es sencillo, añadir al endpoint: </p>
            <p><span className="text-xl">https://charly-api2.up.railway.app/api/v2/discos</span></p> 
             <p className="mt-4"><span>Para el álbum: </span>/album/NombreDelAlbumEnPascalCase</p>
             <p><span>Para la fecha: </span>/fecha/1996</p>
             <p><span>Para la canción: </span>/cancion/TituloDeLaCancionEnPascalCase</p>
            </div>
        </section>
        
    </div>
  )
}

export default Main