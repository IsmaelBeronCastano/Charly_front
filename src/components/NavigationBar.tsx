

interface Props{
    onSelect: any
}

const NavigationBar = ({onSelect}: Props) => {
    return (
        <div className="bg-purple-800 text-white p-4 flex max-w-[100%] justify-between rounded">
          <button onClick={() => onSelect('album/YendoDeLaCamaAlLiving')} className="hover:bg-gray-700 rounded p-2"><span>Álbum</span></button>
          <button onClick={() => onSelect('fecha/1996')} className="hover:bg-gray-700 rounded p-2"><span>Fecha de publicación</span></button>
          <button onClick={() => onSelect('cancion/Cuchillos')} className="hover:bg-gray-700 rounded p-2"><span>Canción</span></button>
        </div>
      );
}

export default NavigationBar