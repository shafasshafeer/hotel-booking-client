// import React, { createContext, useEffect, useState } from "react";
// import { roomData } from '../assets/assets';
// import { backendUrl } from "../App";
// import axios from 'axios'

// export const RoomContext = createContext();

// const RoomContextProvider = ({ children }) => {  // Note: lowercase 'c' in children
//     const [rooms, setRooms] = useState(roomData);
    
// const fetchHotelRoom = async ()=>{
//     try {
        
//         const response = await axios.get(`${backendUrl}/api/hotel/list`)
//    if(response.data.success){
//     setRooms(response.data.hotels)
//    }
//    else{
//             console.log(response.data.message);

//    }
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// useEffect(()=>{
//     fetchHotelRoom()
// },[])
//     return ( 
//         <RoomContext.Provider value={{ rooms }}>
//             {children}  {/* Lowercase 'c' */}
//         </RoomContext.Provider>
//     );
// };  

// export default RoomContextProvider; 



import React, { createContext, useEffect, useState } from "react";
import { roomData } from '../assets/assets';
import { backendUrl } from "../App";
import axios from 'axios'
import { toast } from 'react-toastify';

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
    // Start with local data
    const [rooms, setRooms] = useState(roomData || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchHotelRoom = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await axios.get(`${backendUrl}/api/hotel/list`);
            console.log('API Response:', response.data);
            
            if (response.data.success) {
                let hotelData = [];
                if (response.data.data && Array.isArray(response.data.data)) {
                    hotelData = response.data.data;
                } else if (response.data.hotels && Array.isArray(response.data.hotels)) {
                    hotelData = response.data.hotels;
                } else if (Array.isArray(response.data)) {
                    hotelData = response.data;
                }
                
                if (hotelData.length > 0) {
                    setRooms(hotelData);
                    toast.success(`${hotelData.length} rooms loaded`);
                } else {
                    // If API returns empty, keep local data
                    toast.info('No rooms found in database. Showing local data.');
                }
            } else {
                console.log(response.data.message);
                setError(response.data.message);
                toast.error(response.data.message || 'Failed to fetch rooms');
                // Keep local data
            }
        } catch (error) {
            console.error('Error fetching rooms:', error);
            setError(error.message);
            toast.error('Failed to connect to server. Showing local data.');
            // Keep local data
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHotelRoom();
    }, []);

    return ( 
        <RoomContext.Provider value={{ 
            rooms, 
            loading, 
            error, 
            refresh: fetchHotelRoom,
            setRooms 
        }}>
            {children}
        </RoomContext.Provider>
    );
};

export default RoomContextProvider;