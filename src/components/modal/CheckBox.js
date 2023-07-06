import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function CheckBox(
    {inputValueFromCheckBox, 
    setInputValueFromCheckBox,
    valueSample1,
    setValueSample1,
    valueSample2,
    setValueSample2,
    setHideFieldName, 
    setRequiredName,
    formValue, 
    formValue1,
    onFormChange,
    onFormChange1,
    isPicked,
    handleCheckboxPicked,
    isPicked1,
    handleCheckboxPicked1,
    fieldCheckBox,
    handleFieldCheckBox
     }) {
        const handleSample1 =(event) =>{
          
                setValueSample1(event.target.value); 
            
        }
        const handleSample2 =(event) =>{
          
                setValueSample2(event.target.value); 
            
        }
        const handleInputChange = (event) => {
            setInputValueFromCheckBox(event.target.value); 
          };

        const handleHideFieldNameChange = (event) => {
            setHideFieldName(event.target.checked);
          
          };

          const handleRequiredNameChange =(event) =>{
            setRequiredName(event.target.checked);
          }
    

          const handleFormChange = (event) => {
            onFormChange(event);
            handleHideFieldNameChange(event);
          };

          const handleRequiredName = (event) =>{
            onFormChange1(event);
            handleRequiredNameChange(event);
          }
        
          
  return (
    <div>
       <label style = {
            {
                display: 'block',
                paddingBottom: '3px',
                marginTop: '10px',
                fontSize: '18px',
            }
        }
                name = "name">
                Name *
        </label>
        <input 
           onChange={handleInputChange}
            value={inputValueFromCheckBox}
            type='text'
            style = {
            {
                height: '25px',
                width: '200px',
                border: '1px solid #ccc',
                borderRadius: '5px',
            }     
        }
        for = "name" >
        </input>
        <FormGroup sx = {
            {
                color: '#696969',
            }
        } >
            <FormControlLabel style = {
                { fontSize: '5px' } }
            control = { < Checkbox 
                checked={formValue} 
                onChange={handleFormChange}
            
                /> 
                }
            
            label = "Hide field name" />

            <FormControlLabel control = {
                < Checkbox  
                checked={formValue1} 
                color="primary"
                onChange ={handleRequiredName}
                /> }
            label = "Required field" />
        </FormGroup>


        <div className="options">
            <p
            style={{
                marginBottom:"15px",
                
            }}>Options</p>
            <div>
                <Checkbox
                     checked={isPicked} 
                     onChange={handleCheckboxPicked}
                     ></Checkbox>
                <input
                onChange ={handleSample1}
                value= {valueSample1}
                sx={{
                    // height:"50px",
                    fontSize:"12px",
                    marginTop:"5px",
                }}></input>

                
            </div>
            <div>
                <Checkbox 
                     checked={isPicked1} 
                     onChange={handleCheckboxPicked1}
                     ></Checkbox>
                <input
                onChange ={handleSample2}
                value= {valueSample2}
                
                sx={{
                    // height:"50px",
                    fontSize:"12px",
                    marginTop:"5px",
                }}></input>
            </div>
        </div>

        {/* <div className="layout">
            <p
            style={{
                
            }}>Layout</p>
            <RadioGroup
                sx={{
                    marginTop:"-10px",
                    color:"#696969",
                    
                }}
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel value="end1" 
                control={
                    <Radio 
                     
                    />} label="Horizontal" />
                <FormControlLabel value="end2" control={<Radio />} label="Vertical" />
            </RadioGroup>
        </div>
        */}
        <div >
            <p> Feild Code * </p>
            <div style = {
                {
                    display: 'flex',
                }
            } >
            <OutlinedInput sx = {
                {
                    height: '35px',
                    width: '200px',
                    marginLeft: '5px',
                }
            } 
            onChange={handleFieldCheckBox}
            value={fieldCheckBox}
            >
            </OutlinedInput>
            <Button sx = {
                {
                    marginLeft: '10px',
                    height: '30px',
                    marginTop: '2px',
                }
            }
            variant = "contained"
            disableElevation >
            Save
            </Button> 
        </div>
      </div>
    </div>
  )
}
