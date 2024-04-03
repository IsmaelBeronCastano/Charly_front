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
      <div className="w-[350px]">
      <NavigationBar onSelect={fetchData} />
      <div className="w-full border rounded max-w-full" style={{ maxHeight: '500px'}}>
        <pre className="whitespace-pre-wrap break-words overflow-auto max-h-[500px]" style={{ maxHeight: '300px', overflowY: 'scroll' }}>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
    
      );

}

export default NavigationResult