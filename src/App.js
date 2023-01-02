import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import packageInfo from "../package.json";
import { useEffect, useState } from "react";

import { create } from "apisauce";
import { GpuBlock } from "./Components/GpuBlock";
import { Sunrise } from "./Components/Sunrise";

const card1 = "http://192.168.1.56:4067/summary";
const card3 = "http://192.168.1.56:4069/summary";
const card2 = "http://192.168.1.152:4067/summary";

// const card1 = "http://guac5300.asuscomm.com:3080/summary";
// const card3 = "http://guac5300.asuscomm.com:3070/summary";
// const card2 = "http://guac5300.asuscomm.com:3071/summary";

const baseURL = "";
// define the api
const api = create({
  baseURL,
  headers: { Accept: "application/vnd.github.v3+json" },
});

const REFRESH_INTERVAL = 10000;

function App() {
  const [gpu1, setGpu1] = useState(null);
  const [gpu2, setGpu2] = useState(null);
  const [gpu3, setGpu3] = useState(null);

  const [datetime, setDatetime] = useState(moment());
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let interval = null;
    let timer = null;

    // _getData();

    timer = setInterval(() => {
      let time = moment();
      setDatetime(time);
    }, 1000);

    // refresh after few seconds / REFRESH_INTERVAL
    // interval = setInterval(() => {
    //   _getData();
    // }, REFRESH_INTERVAL);

    return () => {
      // clearTimeout(interval);
      clearTimeout(timer);
    };
  }, []);

  const _getData = async () => {
    try {
      if (loading) {
        // console.log("====================================");
        // console.log("already loading");
        // console.log("====================================");
        return;
      }
      setLoading(true);
      let res1 = await api.get(card1, {}, { timeout: 5000 });
      let res2 = await api.get(card2, {}, { timeout: 5000 });
      // let res3 = await api.get(card3, {}, { timeout: 5000 });

      // const [res1, res2, res3] = Promise.all()

      setGpu1(res1.data);
      setGpu2(res2.data);
      // setGpu3(res3.data);
    } catch (error) {
      // console.log("ERROR ====================================");
      // console.log(error);
      // console.log("====================================");
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   if (!gpu1 || !gpu2 || !gpu3) {
  //     if (error === "") {
  //       let t = moment();
  //       setError("Error Since: " + t.format("LTS"));
  //     }
  //   } else {
  //     setError("");
  //   }
  // }, [datetime]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{datetime.format("LTS")}</h1>
        <h3>
          {datetime.format("LL")}{" "}
          {loading && (
            <img
              style={{ marginTop: 5, position: "absolute" }}
              src={logo}
              className="App-logo"
              alt="logo"
            />
          )}
          <Sunrise />
        </h3>

        {/* <GpuBlock gpu={gpu1} title="RTX 3080-OC" />
        <GpuBlock gpu={gpu3} title="RTX 3070-OC" />
        <GpuBlock gpu={gpu2} title="RTX 3070-EG" /> */}

        <code style={{ color: "red" }}>{error}</code>

        <p style={{ fontSize: 12 }}>
          Powered by{" "}
          <a href="https://gamingumar.com" target="_blank" rel="noreferrer">
            gamingumar.com
          </a>{" "}
          |{" "}
          <a href="https://whilegeek.com" target="_blank" rel="noreferrer">
            whilegeek.com
          </a>{" "}
          |{" "}
          <a href="https://umar.tech" target="_blank" rel="noreferrer">
            umar.tech
          </a>{" "}
          &copy; {datetime.format("Y")} | v{packageInfo.version}
        </p>
      </header>
    </div>
  );
}

export default App;
