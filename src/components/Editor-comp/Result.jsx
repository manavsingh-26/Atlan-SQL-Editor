import React from 'react'
import { useContext } from "react";
import MainContext from "../../MainContext";

import Table from "./Table";
import '../../Pages/editor.css'

const Result = () => {


    const { AllQueries } = useContext(MainContext);

    return (
        <div className='query-results'>
            {AllQueries.outputData.length > 0 ? (
                <>
                    <div className='tab-bar'>
                        <span
                            className={"tabs active"}

                        >
                            {/*----------------------------------------------------------- Output Heading -----------------------------------------*/}
                            Output
                        </span>

                    </div>
                    <div className='query-details'>
                        <p className='text-2'>
                            <span>
                                {/* Length of the result table */}
                                {AllQueries.outputData.length}
                            </span>{" "}
                            rows in Set
                            <span style={{ fontSize: "0.9rem" }} className='text-1'>
                                {" "}
                                (0.03sec)
                            </span>
                        </p>

                    </div>
                    {/*--------------------------------------- All result-----------------------  */}
                    <Table result={AllQueries.outputData}></Table>

                </>
            ) : (

                <div className='placeholder-text'>
                    <span className='fa fa-play'></span>
                    <p>Your Output......</p>
                </div>
                /*When there is no output to show */
            )}
        </div>
    );
}

export default Result