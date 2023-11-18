import axios from "axios"
import { useEffect, useState } from "react"

let ind = 0;
const Quotes = () => {

    const generateRandomQuote =()=>{
        axios.get('https://type.fit/api/quotes').then((resp)=>{
            setData(resp.data)
        })
        ind+1;
    }
    const [data,setData] = useState(null);
    useEffect(()=>{
        generateRandomQuote();
    },[" "]);
    const info = data[0];
    return (
            <div>
                {/* <h2>{data[0].text}</h2> */}
                <h2>{info?.text}</h2>
        <h3>{info?.author}</h3>
            <button onClick={generateRandomQuote}>Generate</button>
        </div>
    )
}

export default Quotes
