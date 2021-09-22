import logo from "./logo.svg";
import "./App.css";
import moment from 'moment'
import { useEffect, useState } from "react";

import { create } from "apisauce";

const baseURL = "";
// define the api
const api = create({
  baseURL,
  headers: { Accept: "application/vnd.github.v3+json" },
});

function App() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  const [datetime, setDatetime] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      _getData();
    }, 1000);

    _getData();

    return () => {
      clearTimeout(interval);
    };
  }, []);
  const _getData = async () => {
    let response = await api.get("http://guac5300.asuscomm.com:3080/summary");
    let response2 = await api.get("http://guac5300.asuscomm.com:3070/summary");

    if (!response.ok && error !== '') {

      setError("Error Since")
    } else {
      setError('')
    }

    setData(response.data);
    setData2(response2.data);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let time = moment()

  return (
    <div className="App">
      <header className="App-header">
      <h3>{time.format("LTS")}</h3>
      <h4>{time.format("LL")}</h4>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {!data ? (
          <p>3080 is Offline</p>
        ) : (
          <h1>
            3080 Hashrate: {formatter.format(data?.hashrate * 0.000001)}Mh/s
          </h1>
        )}
        {!data ? (
          <p>3070 is Offline</p>
        ) : (
          <h1>
            3070 Hashrate: {formatter.format(data2?.hashrate * 0.000001)}Mh/s
          </h1>
        )}
        {/* <a
          className="App-link"
          href={baseURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View 3080 Details
        </a> */}
      </header>
    </div>
  );
}

export default App;
