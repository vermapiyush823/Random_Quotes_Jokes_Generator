import "./Home.css";
import {useState} from 'react'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

const links = [
  {
    h4: "Click to get motivated",
    img: img1,
    onclick: "routeToQuotes()",
  },
  {
    h4: "Click to Laugh",
    img: img2,
    onclick: "RouteToJokes()",
  }
] 

const Home = () => {
    const time = new Date();
    const [sec,setSec] = useState(time.getSeconds());

    setInterval(() => {
        setSec(sec+1);
    }
    )

    const addZero = (num) => {
        if(num<10){
            return "0"+num;
        }
        else{
            return num;
        }
      }
    const routeToQuotes = () => {
        window.location.pathname = "/quotes";

    }
    const RouteToJokes = () => {
        window.location.pathname = "/jokes";
    }

    return (
    <>
      <div className="homepage">
        <div className="container1">
          <span className="headingtext headingtext1">
            Unleash Laughter and Inspiration
          </span>
          <br />
          <span className="headingtext headingtext2">
            Your Daily Dose of Joy with <br /> Random Quotes & Jokes
          </span>
        </div>
        <div className="container2">
            <div className="timeDate">
                <h2 className="Date">{time.toLocaleString('en-us', {weekday: 'long'}) + ","}&#x20;{+time.getDate()+"'th " + time.toLocaleString('en-us', {month:'short'})}</h2>
                <h2 className="Time"><span>{addZero(time.getHours())} : </span><span>{addZero(time.getMinutes())} : </span><span>{addZero(time.getSeconds())}</span></h2>
            </div>
            <div className="links">
              {
                links.map((val,ind)=>{
                  return 
                  (
                    <div key ={ind} onclick={val.onclick}>
                      <h4>{val.h4}</h4>
                      <img>{val.img}</img>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
