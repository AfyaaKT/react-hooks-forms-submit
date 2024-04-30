import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData , setSubmittedData]=useState([])
  const [error , setError]=useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function hanleSubmit(event){
    event.preventDefault()
    if(firstName.length > 0){
      const formData ={firstName:firstName,lastName:lastName}
      const DataArray = [...submittedData, formData]
      console.log(DataArray)
      setSubmittedData(DataArray)
      setFirstName('')
      setLastName('')
      setError([])
    }else{
      setError(['first name requiered'])
    }
    

  }

  return (
    <div>
<form onSubmit={hanleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h1>Submission</h1>
    {submittedData.map((data,index)=>{
      return (
<div key={index}>
  {data.firstName} {data.lastName}
</div>
      )
        
      
    })}
    {error.length > 0
    ?  error.map((eror,index)=>(
      <p style={{color:'red'}} key={index}>{eror}</p>
    )) :null}
    </div>
    
  );
}

export default Form;
