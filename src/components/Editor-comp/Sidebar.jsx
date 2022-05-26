import React, { useContext } from 'react'
import '../../Pages/editor.css'
import { BsCloudFog2Fill } from 'react-icons/bs'
import MainContext from '../../MainContext'
import Query from './Query'

const Sidebar = () => {

    const { AllQueries } = useContext(MainContext);

    // console.log(AllQueries)

    return (
        <div className='sidebar'>
            <div className='side-item'>
                <h5>
                    <BsCloudFog2Fill color='white' />
                    <span className='text'> Select your Query!!</span>
                </h5>

                {AllQueries && <Query />}


            </div>

        </div>
    )
}

export default Sidebar