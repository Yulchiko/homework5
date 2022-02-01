import React, {useState} from 'react';

import {Form} from "../Component/Form/Form";
import {Cars} from "../Component/Cars/Cars";


const CarsPage = () => {
    const [carUpdate, setCarUpdate] = useState({});

    return (
        <div>
            <Form carUpdate={carUpdate}/>
            <Cars setCarUpdate={setCarUpdate}/>
        </div>
    );
};

export default CarsPage;