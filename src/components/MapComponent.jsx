import React, { useState } from 'react';
import { ReactSVG } from 'react-svg'
import Icon from "../assets/Vector (1).svg"

const MapComponent = () => {
  const [activePopup, setActivePopup] = useState(null);

  const locations = [
    { id: 1, name: 'Paradise Cay', customers: 201, x: 180, y: 240 },
    { id: 2, name: 'San Rosa', x: 140, y: 100 },
    { id: 3, name: 'Sacramento', x: 380, y: 100 },
    { id: 4, name: 'Oakland', x: 280, y: 280 },
    { id: 5, name: 'Vallejo', x: 300, y: 200 },
    { id: 6, name: 'Concord', x: 340, y: 240 },
    { id: 7, name: 'San Ramon', x: 380, y: 320 },
    { id: 8, name: 'Antioch', x: 380, y: 180 }
  ];

  const cities = [
    { name: 'San Francisco', x: 160, y: 300 },
    { name: 'Berkeley', x: 260, y: 260 },
    { name: 'Richmond', x: 240, y: 220 },
    { name: 'Petaluma', x: 140, y: 160 },
    { name: 'Davis', x: 340, y: 120 },
    { name: 'Fairfield', x: 320, y: 160 },
    { name: 'Vacaville', x: 300, y: 140 },
    { name: 'Elk Grove', x: 400, y: 120 },
    { name: 'Healdsburg', x: 120, y: 80 },
    { name: 'Port Ross', x: 60, y: 100 },
    { name: 'Clearlake', x: 220, y: 40 },
    { name: 'Lincoln', x: 360, y: 60 },
    { name: 'Auburn', x: 400, y: 80 }
  ];

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {/* Map background with bay area */}
      <div className="absolute inset-0">
        {/* San Pablo Bay */}
        <div className="absolute left-[20%] top-[30%] w-[30%] h-[20%] bg-gray-300 rounded-full transform -rotate-12" />
        
        {/* Pacific Ocean */}
        <div className="absolute left-0 top-0 w-[30%] h-full bg-gray-300" />
        
        {/* Location markers */}
        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute cursor-pointer"
            style={{ left: location.x, top: location.y }}
            // onClick={() => setActivePopup(location.id === activePopup ? null : location.id)}
            onMouseEnter={() => setActivePopup(location.id === activePopup ? null : location.id)}
          >
            <div className=" w-[34px] aspect-square bg-white rounded-full flex justify-center items-center" >
              <ReactSVG src={Icon} />
            </div>
            
            {/* Popup */}
            {activePopup === location.id && (
              <div className="absolute z-10 bg-white rounded-lg shadow-lg p-2 -translate-y-full -translate-x-1/2 mt-[-10px] whitespace-nowrap">
                <p className="font-semibold">{location.name}</p>
                {location.customers && (
                  <p className="text-sm text-gray-600">{location.customers} Customers</p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* City labels */}
        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute text-gray-600 text-sm"
            style={{ left: city.x, top: city.y }}
          >
            {city.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;