import "./Home.css";
import {useState} from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
const Home = () => {
    const time = new Date();
    const [sec,setSec] = useState(time.getSeconds());

    setInterval(() => {
        setSec(time.getSeconds())
    }, 1000);

    const addZero = (num) => {
        if(num<10){
            return "0"+num;
        }
        else{
            return num;
        }
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
                <div>
                    <h4>Click to get motivated</h4>
                    <img src={img1} alt="" srcset="" />
                </div>
                <div>
                    <h4>Click to Laugh</h4>
                    <img src={img2} alt="" srcset="" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
