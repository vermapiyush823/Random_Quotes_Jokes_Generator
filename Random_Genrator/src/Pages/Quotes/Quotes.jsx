import axios from "axios";
import { useEffect, useState } from "react";
import './Quotes.css'

const Quotes = () => {
    const [data, setData] = useState([]);
    const [quoteIndex, setQuoteIndex] = useState(0);

    const generateRandomQuote = () => {
        axios.get('https://type.fit/api/quotes').then((resp) => {
            setData(resp.data);
            setQuoteIndex(Math.floor(Math.random() * resp.data.length));
        });
    };

    useEffect(() => {
        generateRandomQuote();
    }, []);

    return (
        <div className="Quotes">
            <div>
            <h2>{data[quoteIndex]?.text}</h2>
            <h3>{data[quoteIndex]?.author.split(',')}</h3>
            </div>
            <button onClick={generateRandomQuote}>Generate</button>
        </div>
    );
};

export default Quotes;
