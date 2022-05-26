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

    const runQuery = () => {


        if (query.trim() === "") {
            alert(
                "Oops, that was a Null Query. Please type another query, or select from the ones previously saved."
            );
            return;
        }
        if (query.trim() === "SELECT * FROM customers;") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: queryData,
            }));
        }
        else if (query.trim() === "SELECT companyName, contactName, city, country FROM customers;") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: queryData2,
            }));
        }
        else if (query.trim() === "SELECT * FROM territories") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: queryData3,
            }))
        }
        else {
            alert("Please try the test query.");
        }
        setAllQueries((prev) => ({
            ...prev,

        }));
    };

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

    const clearQuery = () => {
        setQuery("");
    };

    return (
        <div className='panel'>
            <div className='btn primary-btn'>
                <button onClick={() => runQuery()} >
                    <BsPlay /> Run
                </button>
            </div>
            <div className='btn secondary-btn'>
                <button onClick={() => saveQuery()}>
                    <FiSave /> Save
                </button>
            </div>
            <div className='btn alert-btn'>
                <button onClick={() => clearQuery()} >
                    <AiOutlineDelete /> Clear
                </button>
            </div>
        </div>
    )
}

export default Panel