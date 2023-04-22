/*
 * File: useLocation.js
 * Project: watcher
 * File Created: Saturday, 22nd April 2023 9:29:15 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Saturday, 22nd April 2023 9:29:15 pm
 * -----
 * Copyright <<year>> - 2023 WhileGeek, https://umar.tech
 */
import { useState, useEffect } from 'react';
import { config } from '../config';

const useLocation = () => {
  const [location, setLocation] = useState({
    latitude: config.coordinates.lat,
    longitude: config.coordinates.lng,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return location;
};

export default useLocation;