import axios from "axios";
import { useState, useEffect } from "react";
import "./Jokes.css";

const Jokes = () => {
    const limit = 1;
    const [data, setData] = useState(null);

    const generateRandomJoke= ()=>{    axios({
            method: 'get',
            url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
            headers: { 'X-Api-Key': 'HgTOkquJ2tkPvuMoX6G9NQ==Qf30Z00vc5wlIbya'}
        })
        .then(function (response) {
            console.log(response.data[0]);
            setData(response.data);
        })
        .catch(function (error) {
            console.error('Error: ', error);
        });}

        useEffect(() => {
            generateRandomJoke();
        }, []);

    return (
        <>
        <div className="Jokes">
            <div>
                <h2>{data?data[0].joke:"Not-available"}</h2>
            </div>
            <button onClick={generateRandomJoke}>Generate</button>
        </div>
        </>
    );
    }
export default Jokes;
