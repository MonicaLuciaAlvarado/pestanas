import React from 'react';
const Pestanas =(props) =>{
    const handleClick = (e,value) =>{
        props.func(value);
        document.querySelectorAll('button').forEach(element => element.style.backgroundColor='');
        document.querySelectorAll('button').forEach(element => element.style.color='');
        document.querySelectorAll('button').forEach(element => element.style.transition='all 5 ease-in-out');
        e.target.style.backgroundColor = "black";
        e.target.style.color = "yellow";
    };
    return props.array.map((item,index)=>{return <button key={index} className='btn' onClick={(e)=>handleClick(e,item)}>{item}</button>})
}
export default Pestanas