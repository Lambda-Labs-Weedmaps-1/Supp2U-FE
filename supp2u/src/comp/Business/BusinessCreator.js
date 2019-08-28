import React, { useEffect, useState } from 'react'
import BusinessAdd from './BusinessAdd'

function BusinessCreator() {

    const [BusinessInformation, setBusinessInformation] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          setBusinessInformation([{

          }]);
          
        }, 1000);
      }, []);
    

    return (
        <> 
            <form>

            </form>
            <BusinessAdd />
        </>
    )
}

export default BusinessCreator
