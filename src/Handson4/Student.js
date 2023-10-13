import React, { useState } from "react";
import { Link } from "react-router-dom";

function Student(){
    const [data , setData] = useState([
        {name : "Joe",age:25, course:"MERN" ,  batch: "May"},
        {name : "Biden",age:26, course:"MERN" , batch: "April"},
        {name : "Trump",age:22, course:"MEAN" , batch: "March"},
        {name : "Gill",age:24, course:"MEVN" , batch: "Feb"},
        {name : "Virat",age:23, course:"MERN" , batch: "Dec"},
        {name : "Surya",age:24, course:"MEAN" , batch: "April"},
        {name : "Dhoni",age:26, course:"MEVN" , batch: "Oct"},
        {name : "Rahul",age:21, course:"MEAN" , batch: "May"},
        {name : "Putin",age:23, course:"MERN" , batch: "Jun"},
        {name : "Modi",age:24, course:"MERN" , batch: "Nov"}
    ])

    return(
        <>
            <div>
                <h1> This is Student page    </h1>
            </div>


            <table border='2px' width="100%">
                <thead>
                    <tr style={{ fontSize:"20px"}}>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody style={{fontFamily:"monospace", fontSize:"20px"}}>
                    {data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><Link className="editOption" to={`/student/${item.name}` } state={{data}}>Edit</Link></td>   
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}
//<td><Link to={`/student/${index}`}>Edit</Link></td>    instead index you can also use item.name, item.batch to render in console.log in params in DynamicCompo etc

export default Student;