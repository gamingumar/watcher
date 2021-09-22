// import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import { useEffect, useState } from "react";

import { create } from "apisauce";

// const baseURL = "http://guac5300.asuscomm.com";
const baseURL = "";
// define the api
const api = create({
  baseURL,
  headers: { Accept: "application/vnd.github.v3+json" },
});

function App() {
  const [gpu1, setGpu1] = useState(null);
  const [gpu2, setGpu2] = useState(null);
  const [gpu3, setGpu3] = useState(null);

  const [datetime, setDatetime] = useState(moment());
  const [error, setError] = useState("");

  useEffect(() => {
    let interval = null;
    let timer = null;

    _getData();

    timer = setInterval(() => {
      let time = moment();
      setDatetime(time);
    }, 1000);

    interval = setInterval(() => {
      _getData();
    }, 5000);

    return () => {
      clearTimeout(interval);
      clearTimeout(timer);
    };
  }, []);

  const _getData = async () => {
    let res1 = await api.get("http://guac5300.asuscomm.com:3080/summary");
    let res2 = await api.get("http://guac5300.asuscomm.com:3070/summary");
    let res3 = await api.get("http://guac5300.asuscomm.com:3071/summary");

    // const [res1, res2, res3] = Promise.all()

    setGpu1(res1.data);
    setGpu2(res2.data);
    setGpu3(res3.data);
  };

  useEffect(() => {
    if (!gpu1 || !gpu2 || !gpu3) {
      if (error === '') {
        let t = moment();
        setError("Error Since: " + t.format("LTS"));
      }
      
    } else {
      setError("");
    }
  }, [datetime]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{datetime.format("LTS")}</h1>
        <h5>{datetime.format("LL")}</h5>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <GpuBlock gpu={gpu1} title="3080 Umar" />
        <GpuBlock gpu={gpu2} title="3070 Umar" />
        <GpuBlock gpu={gpu3} title="3070 Hamza" />

        <code style={{color: 'red'}}>{error}</code>
      </header>
    </div>
  );
}

export default App;

export const GpuBlock = ({ gpu, title }) => {
  const _formatHash = (gpu) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(gpu?.hashrate * 0.000001);
  };

  if (!gpu) {
    return <p>{title} is Offline</p>;
  }

  const {gpus} = gpu;

  const gpuInfo = gpus[0]

  const {memory_temperature, temperature} = gpuInfo;

  return (
    <>
      <h3 style={{marginVertical: -10}}>
        {title}: {_formatHash(gpu)} Mh/s
        {" " + temperature}C 
        {
          memory_temperature ? ` [${memory_temperature}C]` : null
        }
      </h3>
     
      
    </>
  );
};
