import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const fetchCountries = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  if (data.length)
    return (
      <div>
        <h2 style={{ padding: "1rem", textAlign: "center" }}>Country Flags</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {data.map((country) => (
            <div
              key={country.name.official}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                height: "10rem",
                width: "10rem",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{ height: "4rem", width: "4rem", overflow: "hidden" }}
              >
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                ></img>
              </div>
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default App;
