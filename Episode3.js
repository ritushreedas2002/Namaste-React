import React from "react";
import ReactDOM  from "react-dom/client";

//jsx
const jsxheading=<h1>hii everyone</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); 

const number=1000;


//element inside an element
const ele=<span>HII SPAN</span>

//react element and adding in component
const title=<div id="title">
    {ele}
    <h1>HII HELLO BYE</h1>
</div>


//sanitizing the data by jsx
// const data=api.getData();
// const Heading=()=>{
//     return <div id="root">
//         {data}   
        
//         <h1>HII EVERYONE</h1>
//     </div>
// }



//functional component
//adding variable ,element
const Heading=()=>{
    return <div id="root">
        {number}   
        {title}              
        <h2>{number}</h2>
        <h2>{100+2000}</h2>
        <h1>HII EVERYONE</h1>
    </div>
}

//both ways we can call
const Heading1=()=>(
    <div id="root">
        <Heading/>
        {Heading()}
        <h1>HII EVERYONE</h1>
    </div>
);

root.render(
    <Heading1/>
)