import React, {useState} from 'react';
//install and import papaparse
import Papa, { Parser } from 'papaparse';
import ReactFileReader from 'react-file-reader'



//then read csv file with papaparse?

function CSVParse(){
    //keep track of if upload button has been clicked or not with useState
    //const [selectUpload, setSelectUpload] = useState()

    //similar to how we made a handleclick button for the dropdown menu, we should do a similar one and then have a label that takes you to the local files?
    const uploadFile = (files) => {
        //define config that stuff u want
        const config = {
            download: 'true',
            complete: 'true'
        }
        //use Papa parse
        Papa.parse(files[0], config)
        //create new filereader class
        let read = new FileReader();
        //when readAstext will invoke, onload() method will execute on the read object
        read.onload = function(event){
            //perform some kind of operation with the read data
            alert(read.result);
        };
        //invoking the readastext() method by passing up the uploaded file (array) as a parameter
        read.readAsText(files[0])
    };

 

    //return a div to display button
    return (
//first make button
    <div>
    <ReactFileReader handleFiles={uploadFile} fileTypes={".csv"}>
    <button className="button">Upload File Here</button>
    </ReactFileReader>

    </div>


);



};

export default CSVParse;