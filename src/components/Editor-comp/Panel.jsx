import React from 'react'
import '../../Pages/editor.css'
import { useContext } from "react";
import MainContext from "../../MainContext";
import { BsPlay } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { queryData, queryData2, queryData3 } from "../../assets/data/data";



const Panel = () => {

    const { query, setAllQueries, setQuery } = useContext(MainContext);

    //------------------------------------------------------------------Function for RUN bttn
    const runQuery = () => {

        //if the editor is empty
        if (query.trim() === "") {
            alert(
                "Oops, that was a Null Query. Please type another query, or select from the ones previously saved."
            );
            return;
        }
        //1st query
        if (query.trim() === "SELECT * FROM customers;") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: queryData,
            }));
        }
        //2nd Query
        else if (query.trim() === "SELECT companyName, contactName, city, country FROM customers;") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: queryData2,
            }));
        }

        //3rd Query
        else if (query.trim() === "SELECT * FROM territories") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: queryData3,
            }))
        }
        //Inavlid Query:
        else {
            alert("Please try the test query.");
        }
        setAllQueries((prev) => ({
            ...prev,

        }));
    };

    //------------------------------------------------------------------Function for SAVE bttn
    const saveQuery = () => {


        if (query.trim() === "") {
            alert("Query can't be null");
            return;
        }

        setAllQueries((prev) => ({
            ...prev,
            saved: [...prev.saved, query.trim()],
        }));
    };
    //------------------------------------------------------------------Function for CLEAR bttn
    const clearQuery = () => {
        setQuery("");
    };

    return (
        <div className='panel'>
            <div className='btn primary-btn'>
                <button onClick={() => runQuery()} >
                    {/*---------------------------------- Run button------------------------------------- */}
                    <BsPlay /> Run
                </button>
            </div>
            <div className='btn secondary-btn'>
                <button onClick={() => saveQuery()}>
                    {/*---------------------------------- Save button------------------------------------- */}
                    <FiSave /> Save
                </button>
            </div>
            <div className='btn alert-btn'>
                <button onClick={() => clearQuery()} >
                    {/*---------------------------------- Clear button------------------------------------- */}
                    <AiOutlineDelete /> Clear
                </button>
            </div>
        </div>
    )
}

export default Panel