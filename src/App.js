import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.scss";
import Header from "./Components/Header/Header";
import Home from "./Home";
import OurClients from "./OurClients";
import Contact from "./Contact";
import Footer from "./Components/Footer/Footer";
import Consultancy from "./WhatWeDo/Consultancy";
import DataAnalytics from "./WhatWeDo/DataAnalytics";
import SoftwareQualityAssurance from "./WhatWeDo/SoftwareQualityAssurance";
import TeamAugmentation from "./WhatWeDo/TeamAugmentation";
import WebApplication from "./WhatWeDo/WebApplication";
import WebDesign from "./WhatWeDo/WebDesign";
import OurStory from "./OurStory";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/OurClients" element={<OurClients />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/OurStory" element={<OurStory />}></Route>
            <Route
              path="/WhatWeDo/Consultancy"
              element={<Consultancy />}
            ></Route>

            <Route
              path="/WhatWeDo/DataAnalytics"
              element={<DataAnalytics />}
            ></Route>

            <Route
              path="/WhatWeDo/SoftwareQualityAssurance"
              element={<SoftwareQualityAssurance />}
            ></Route>

            <Route
              path="/WhatWeDo/TeamAugmentation"
              element={<TeamAugmentation />}
            ></Route>

            <Route
              path="/WhatWeDo/WebApplication"
              element={<WebApplication />}
            ></Route>

            <Route path="/WhatWeDo/WebDesign" element={<WebDesign />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
