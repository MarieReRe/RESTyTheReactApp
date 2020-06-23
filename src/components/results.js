import React from 'react';
import JSONPretty from 'react-json-pretty';



// This is where we are rendering the body which contains the data pulled from the users input of an API url
var JSONPrettyMon = require('react-json-pretty/dist/acai');
//This is a different way to do things. If it only returns we do not need to extend.

export default function Result(props) {
    return (
        //dont forget fragments
        <>
        <h1>Results from your API: </h1>
            <span><JSONPretty   id="json-pretty" data={props.body} theme={JSONPrettyMon} ></JSONPretty></span>
        </>


    )


}











