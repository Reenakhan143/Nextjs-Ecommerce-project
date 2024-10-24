import React from "react";
import Navbar from "../app/components/Navbar";
import Carsouls from "./components/Carsouls";
import Progressor from "./components/Progressor";
import Productlist from "./components/Productlist";
import Banner from "./components/Banner";
import Cream from  "./components/Cream";

import Card from "./components/MenuItems";
import Footer from "../app/components/Footer";


import Testimonal from "./components/Testimonal";

function App() { 
  return (
    <div className="bg-gradient-to-r from from-lime-200 to-slate-400 min-h-screen">
      <Navbar />
      <Carsouls />
      <Progressor />
      <Productlist />
      <Banner />
      <Cream/>
      <Card />
      <Footer />
      <Testimonal />
    </div>
  );
}

export default App;
