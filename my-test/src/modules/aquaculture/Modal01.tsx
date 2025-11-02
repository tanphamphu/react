// import React, { useState } from "react";
// import { Form } from "devextreme-react/form";
// import CustomForm from "../../commons/CustomForm"

// const EXAMPLE_DATA = {};

// const FORM_DATA = {
//   "name": "Phạm Phú Tân",
//   "position": "Nhân viên",
//   "gender": "Nam",
//   "birth day": "13/04/1978"
// }

// export default function Modal01({
//   runQuery,
//   model,
//   updateModel,
// }: {
//   runQuery: (query: any) => void;
//   model: Record<string, any>;
//   updateModel?: (payload: { body: Record<string, any> }) => void;
// }) {

const Modal01 = ()=>{
  // console.log(FORM_DATA);
  // const handleSave = () => runQuery(model.query);
  // const RENDER1 = <Form formData={FORM_DATA}/>

  // return (
  //   <div style={{ backgroundColor: "#000", padding: 30 }}>
  //     <h1>WELCOME TO REACT - TYPESSCRIPT WORLD!!!</h1>
  //   </div>
  // );

  return(
    <div style={ {width: "30vw", height: "20vh", background: "#ccc", padding: 20, margin: "10%", border: "1px solid #ccc"} }>
        <h1>WELCOME TO THE WORLD!!!</h1>
    </div>
  ) 

  // return(
  //     <CustomForm
      
  //     />
  // )


}

export default Modal01; 