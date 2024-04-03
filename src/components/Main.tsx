import Imagen from '../images/charly.png'
import NavigationResult from './NavigationResult'

const Main = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row w-full">
        <img className="w-full md:w-1/2 md:max-w-[50%] pl-1" src={Imagen} alt="charly portada clics modernos" />
        <section className="flex jusify-center items-center md:w-1/2 mb-10">
            <div className="text-left">
                <p className="text-xl font-bold mt-3 mb-2 pl-1">Esta es una <span className="text-purple-400">API</span> donde poder consultar parte de la discografía de <span className="text-purple-600">Charly</span> en solitario</p>
                <p className="text-xl font-bold mt-3 mb-2 pl-1">Desde Yendo de la cama al living hasta Random</p>
                <p className="text-xl font-bold mt-3 mb-2 pl-1">Está en construcción, la información actual es ficticia</p>
                <p className="text-xl font-bold mt-3 mb-2 pl-1">Poco a poco se irán subiendo más funcionalidades con información verificada y ampliada</p>
                <p className="text-xl font-bold mt-3 mb-2 pl-1">¡Gracias!</p>

                <div className="max-h-[400px] overflow-hidden flex justify-center w-full">
                  <NavigationResult />
                </div>
                <div id="api" className="mt-6 flex flex-col items-center justify-center">
                  <div className="text-left">
                    <p className="text-xl font-bold mt-3 mb-2">El uso es sencillo, añadir al endpoint: </p>
                    <p className="text-xl">https://charly-api2.up.railway.app/api/v2/discos</p> 
                    <p className="mt-4"><span>Para el álbum: </span>/album/NombreDelAlbumEnPascalCase</p>
                    <p><span>Para la fecha: </span>/fecha/1996</p>
                    <p><span>Para la canción: </span>/cancion/TituloDeLaCancionEnPascalCase</p>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Main