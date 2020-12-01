import React from 'react'
import './css/ArrayBox.css';

type Props = {
    value: number | any;
    color: string;
}


const ArrayBox:React.FC<Props> = ({value, color}) => {
    return (
        <div className = "arrayBox" style = {{backgroundColor: color}} >
            <h1>{value}</h1>
        </div>
    )
}

export default ArrayBox;
