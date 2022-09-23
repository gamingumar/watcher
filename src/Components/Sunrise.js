/*
 * File: Sunrise.js
 * Project: watcher
 * File Created: Thursday, 23rd September 2021 4:05:18 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 23rd September 2021 4:05:18 am
 * -----
 * Copyright 2020 - 2021 WhileGeek, https://umar.tech
 */
import { create } from "apisauce";
import moment from "moment";
import React, { useEffect, useState } from "react";

const api = create({
  baseURL: "",
  headers: { Accept: "application/vnd.github.v3+json" },
});

export const Sunrise = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  const [coords, setCoords] = useState({
    lat: "33.6461432",
    lng: "73.0523224",
  });

  const _onSuccess = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    setCoords({
      lat,
      lng,
    });

    setLoading(false);
  };

  const _onError = () => {
    setLoading(false);
  };

  // fetch sunrise / sunset
  const _fetchData = async () => {
    let res = await api.get(
      `http://api.sunrise-sunset.org/json?lat=${coords.lat}&lng=${coords.lng}&date=today`
    );

    if (res.ok) {
      setData(res.data.results);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      // status.textContent = 'Geolocation is not supported by your browser';
    } else {
      // status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(_onSuccess, _onError);
    }
  }, []);

  useEffect(() => {
    _fetchData();
  }, [coords]);

  if (!data || loading) {
    return null;
  }

  const _formatTime = (t) => {
    let date = moment().format("Y-M-D");

    let timeData = moment.utc(date + " " + t, "Y-M-D HH:mm:ss:A").local();

    return timeData.format("LTS") + ` (${timeData.fromNow()})`;
  };

  return (
    <div>
      <h2 style={styles}>
        Sunrise: <b>{_formatTime(data.sunrise)} </b>
      </h2>
      <hr />
      <h2 style={styles}>
        Sunset: <b>{_formatTime(data.sunset)}</b>
      </h2>
    </div>
  );
};

const styles = {
  fontWeight: "normal",
  fontSize: "calc(22px + 1vmin)",
};
