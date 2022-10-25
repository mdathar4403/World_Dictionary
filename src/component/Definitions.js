import React from "react";
import "../css/Definitions.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.partOfSpeechData.partOfSpeech}</h3>
      <ol>
        {props.partOfSpeechData.definitions.map(function (definition, index) {
        
            return (
              <li
                className="definitions-text"
                key={index}
              >
                {" "}
                {definition.definition}
                <Examples definition={definition} />
                <Synonyms definition={definition} />
              </li>
            );
          
        })}
      </ol>
    </div>
  );
}


