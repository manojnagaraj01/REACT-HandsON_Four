import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function DynamicCompo() {
    const data = useParams().id;   //id is same as given in RouteCompo link in DynamicCompo
    const Navigate = useNavigate()
    const locataionData = useLocation()
    console.log(locataionData.state.data)
  return (
    <>
        <h1>DynamicCompo</h1>
        <h4 style={{textAlign :"center" , fontSize:"25px" , fontFamily:"cursive"}}> Name : {data}</h4>
        <div className='backButtonDiv'>
          <button className='backButton' onClick={()=> Navigate('/student')} >Go back to student</button>
        </div>
        {locataionData.state.data.filter((item)=> item.batch === "May").map((data, index)=>{
          return(
            <div className='displayData' key={index}>
              <h2>{data.name}</h2>
              <h2>{data.age}</h2>
              <h2>{data.course}</h2>
              <h2>{data.batch}</h2>
            </div>
          )
        })}
    </>
  )
}

export default DynamicCompo;