import React from "react";
import ReactDOM  from "react-dom/client";


/**
 <div id="parent">
    <div id="child">
        <h1>Welcome to react</h1>
    </div>
 </div>
 */
//  const parent = React.createElement("div", { id: "parent" },
//  React.createElement("div", { id: "child" },
//      React.createElement("h1", {}, "I am an h1 tag")
//  )
// );

/*
<div id="parent">
     <div id="child1">   //make it within  an array
        <h1>Welcome to react</h1>
        <h1>Welcome to react</h1>
    </div>
    <div id="child2"> //make itwithin  an array
        <h1>Welcome to react</h1> 
        <h1>Welcome to react</h1>
    </div>
 </div> */
 const parent1 = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child" },
     [React.createElement("h1", {}, "I am an h1 tag"),
     React.createElement("h1", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child" },
     [React.createElement("h1", {}, "I am an h1 tag"),
     React.createElement("h1", {}, "I am an h2 tag"),
    ])
 ]
 
);


//const heading=React.createElement("h1",{id:"heading"},"Hii Welcome to React");
//takes 3 pARAMETERS 1.WHAT IS THE ELEMENT 2. ATTRIBUTES 3.WHAT WILL BE THE CONTENT

console.log(parent1);
//prints an object of h1 type which has props 
//props are children and the attributes we pass 

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent1);
    //take the heading object create the h1 tag and put that inside the root and put it up in the DOM
    //when u render anything to root the past data(existing element in the root) gets replaced with new



    //React- is a library which can be applied in small portion  of code (helper methods to develop our application)
    //framework is a full fleged version 
    
