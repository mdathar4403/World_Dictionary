import React from 'react'
import '../css/Search.css'
import { useState } from 'react'
import axios from "axios";
import { BsSearch } from 'react-icons/bs'
import Dictionary from './Dictionary';

export default function Search(props) {

    // function Card(props) {
    //     return(
    //         <div>
    //             <h1>{props.datarr}</h1>
    //             <h1>{props.dataphenotic}</h1>
    //         </div>

    //     )
    // }

    let [keyword, setKeyword] = useState("");
    let [data, setData] = useState(null);
    //let [ready, setReady] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0])
        // athar=true;
        setData(response.data[0])
    }
    function search(event) {

        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios
            .get(apiUrl)
            .then(handleResponse)
            .catch(function (error) {
                alert(
                    "Please check once, Something wrong !!!"
                );
            });
        event.target.reset();
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    // function displayDefault(){

    //     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //     axios.get(apiUrl).then(handleResponse);
    // }
    // if(ready===false){
    //     displayDefault();
    //     setReady(true);
    //     return null;
    // }else{
    return (
        <div className="Search">
            <form onSubmit={search}>
                <div className="search-container">
                    <input
                        type="search"
                        autoFocus={true}
                        className="search-bar"
                        placeholder='Search for a word'
                        onChange={handleKeywordChange}
                    />
                    <button className="search-btn"><BsSearch /></button>
                </div>
            </form>
            <section className="suggested-words">
                <em className='Examples'>Example: hat, noise, spider...</em>
            </section>
            {/* {data !== null && ( */}
            {/* <Card
                    datarr={data.meanings[0].definitions[0].definition}
                    datarr1={data.meanings[0].definitions[1].definition}
                    // datarr1={data.meanings[0].definitions[1].definition}
                    // datarr2={data.meanings[0].definitions[2].definition}
            
                // dataphenotic={data.meanings[0].definitions[0].definition}
                // dataexample={data.meanings[0].definitions[0].definition}
                // datasynonyms={data.meanings[0].definitions[0].definition}

                />)} */}
            <Dictionary data={data} />

        </div>
    )


}