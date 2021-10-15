import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';



const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(()=>{
        fetch('Experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    }, [])
    return (
        <div className="">
            
            {
                experts.map(expert =><Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
        </div>
    );
};

export default Experts;