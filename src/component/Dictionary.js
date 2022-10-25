import React from "react";
import "../css/Dictionary.css";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  if (props.data) {
    return (
      <div className="Dictionary">
        <section>
          <h2>{props.data.word}</h2>
        </section>

        {props.data.meanings.map(function (definition, index) {
          
            return (
              <div key={index}>
                <section>
                  <Definitions partOfSpeechData={definition} />
                </section>
              </div>
            );
          
        })}
      </div>
    );
  } else {
    return null;
  }
}
