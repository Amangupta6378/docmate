import logo from "./logo.svg";
import "./App.css";
import Data from "./component/Data";
import Navbar from "./component/Navbar";
import {Router, Switch} from "react-router-dom"
// import Auth from "./component/Auth";
import Cards from "./component/Cards";
import Footer from "./component/Footer";

function App() {
  let data = [
    {
      id:1,
      image:
        "https://i.pinimg.com/564x/2a/6c/1e/2a6c1e83960fbb8ff672363d27d47402.jpg",
      name: "Cheriyal masks",
      intro: "In publishing and graphic design .",
      rating: "5 star",
      price: "Rs. 599",
    },
    {
      id:2,
      image:
        "https://i.pinimg.com/474x/45/73/7f/45737f6b5bc93343e4cf198f3076791f.jpg",
      name: "Maxican Mugs",
      intro: "Set of 6 Handmade Mexico Mugs  .",
      rating: "5 star",
      price: "Rs. 599",
    },
    { 
      id:3,
      image:
        "https://i.pinimg.com/564x/dc/1a/66/dc1a66d59e024033922a0c7046a3659e.jpg",
      name: "Indian Peg dolls",
      intro: "Set of 6 Handmade Mexico Mugs .",
      rating: "5 star",
      price: "Rs. 599",
    },
    { 
      id:4,
      image:
        "https://i.pinimg.com/564x/a1/f0/a2/a1f0a2c839915c17fd3e1f892eebac97.jpg",
      name: "AI art by Tridib Ghosh",
      intro: "Set of 6 Handmade Mexico Mugs.",
      rating: "5 star",
      price: "Rs. 599",
    },
    { 
      id:5,
      image:
        "https://i.pinimg.com/564x/70/de/26/70de265c969dd3668ebc00f9aa06a226.jpg",
      name: "Elephant Mandala ",
      intro: "Set of 6 Handmade Mexico Mugs .",
      rating: "5 star",
      price: "Rs. 599",
    },
    { 
      id:6,
      image:
        "https://i.pinimg.com/564x/5f/b2/d8/5fb2d8cf050f1dcb696219db549f9214.jpg",
      name: "WOODEN CAMEL",
      intro: "In publishing and graphic design .",
      rating: "5 star",
      price: "Rs. 599",
    },
    { id:7,
      image:
        "https://i.pinimg.com/564x/6d/0c/36/6d0c36bb90c1038e0beb63fd13b88008.jpg",
      name: "Hand painted Gachk ",
      intro: "In publishing and graphic design .",
      rating: "5 star",
      price: "Rs. 599",
    },
    { 
      id:8,
      image:
        "https://i.pinimg.com/564x/f0/e9/e3/f0e9e392aa0eefb0b5794e655ec3ffdc.jpg",
      name: "Pin on eNGi jewelry",
      intro: "In publishing and graphic design .",
      rating: "5 star",
      price: "Rs. 599",
    },
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cards key={data.id}></Cards>

      {data.map((row) => {
        return <Data aman={row} key={data.id}></Data>;
      })}
      <Footer></Footer>
      {/* <Auth></Auth> */}
    </div>
  );
}

export default App;
