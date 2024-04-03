import { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar'

const NavigationResult = () => {
    const [data, setData] = useState({});
  

    const fetchData = async (endpoint: string) => {
      try {
        const response = await axios.get(`https://charly-api2.up.railway.app/api/v2/discos/${endpoint}`);
        setData(response.data);
      } catch (error) {
        console.error('Hubo un error al realizar la petición:', error);
        setData({});
      }
    };

    return (
      <div className="w-[500px]">
      <NavigationBar onSelect={fetchData} />
      <div className="w-full m-4 p-4 border rounded max-w-full" style={{ maxHeight: '500px', overflow: 'hidden' }}>
        <pre className="whitespace-pre-wrap break-words overflow-auto max-h-[400px]" style={{ maxHeight: '400px', overflowY: 'scroll' }}>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
    
      );

}

export default NavigationResult