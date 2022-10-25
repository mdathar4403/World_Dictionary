import React, { useState } from "react";
import "../css/Search.css";
import axios from "axios";
import Dictionary from "./Dictionary";
import {BsSearch} from "react-icons/bs"


export default function Search(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [data, setData] = useState(null);
 

  function handleResponse(response) {
    //console.log(response.data[0]);
    setData(response.data[0]);
    
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        alert(
          "Oop's Something Went Wrong !!!. Please check the spelling or try another word !!"
        );
      });
    event.target.reset();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }


    return (
      <div className="Search" id='main'>
        <form onSubmit={search}>
          <div className="search-container">
            <input
              type="search"
              autoFocus={true}
              className="search-bar"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
            <button className="search-bttn">
              <BsSearch/>
            </button>
          </div>
        </form>
        <section>
          <em className="suggested-words">Example: book, sunset, kitten... </em>
        </section>

        <Dictionary data={data} />
      </div>
    );
}
