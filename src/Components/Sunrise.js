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
import useLocation from "../hooks/useLocation";

const api = create({
  baseURL: "",
  headers: { Accept: "application/vnd.github.v3+json" },
});

export const Sunrise = () => {
  const [data, setData] = useState(null);

  const location = useLocation()

  // fetch sunrise / sunset
  const _fetchData = async () => {
    let res = await api.get(
      `https://api.sunrise-sunset.org/json?lat=${location.latitude}&lng=${location.longitude}&date=today`
    );

    if (res.ok) {
      setData(res.data.results);
    }
  };

  useEffect(() => {
    _fetchData();
  }, [location]);

  if (!data) {
    return null;
  }

  const _formatTime = (t) => {
    let date = moment().format("Y-M-D");

    let timeData = moment.utc(date + " " + t, "Y-M-D HH:mm:ss:A").local();

    return timeData.format("LTS") + ` (${timeData.fromNow()})`;
  };

  return (
    <div>
      <h1 style={styles.title}>
        Sunrise: <b>{_formatTime(data.sunrise)} </b>
      </h1>
      <hr />
      <h4 style={styles.title2}>
        Sunset: <b>{_formatTime(data.sunset)}</b>
      </h4>
    </div>
  );
};

const styles = {
  title: {
    fontWeight: "normal",
    // fontSize: "calc(28px + 1vmin)",
    fontSize: "5vh",
  },
  title2: {
    fontWeight: "normal",
    // fontSize: "calc(22px + 1vmin)",
    fontSize: "4vh",
  }
};
