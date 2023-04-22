/*
 * File: PrayerTimes.js
 * Project: watcher
 * File Created: Saturday, 22nd April 2023 7:41:41 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Saturday, 22nd April 2023 7:41:42 pm
 * -----
 * Copyright 2020 - 2023 While Geek, https://umar.tech
 */
import React, { useState, useEffect } from "react";
import useLocation from "../hooks/useLocation";

export const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { latitude, longitude } = useLocation();

  const today = new Date();

  const year = today.getFullYear();

  const month = today.getMonth() + 1;

  const date = today.getDate();

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=1`
        );

        const data = await response.json();

        const todayPrayerData = data.data[date - 1].timings;


        const formattedData = [];

        for (let key in todayPrayerData) {
          formattedData.push({
            key,
            value: todayPrayerData[key],
          });
        }

        setPrayerTimes(formattedData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (isLoading) {
    return <div>Loading prayer times...</div>;
  }

  return (
    <div>
      <h2>
      {prayerTimes[0].key} - {prayerTimes[0].value}</h2>
    </div>
  );
};
