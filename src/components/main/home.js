import React, { useState } from "react";
import PrimarySearchAppBar from "../header/index"
import "../css/home.css";
import Name from "../app-name/index"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import FormPage from "../../pages/FormPage"
import ViewsPage from "../../pages/ViewsPage"
// import Test from "./Test"
import Test from "../../test/Test"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function Home() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="home-all">
      <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
      </div>
      <div>
        <Name></Name>
      </div>

      <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs
          sx={{
            // backgroundColor:"white",
            paddingLeft:"24px",          
            
          }}
         value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{
          border: "1px solid #ccc",
          padding:"10px 50px",
          backgroundColor: value === 'one' ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
        }}
         label="Form" {...a11yProps(0)} />
          <Tab sx={{
          border: "1px solid #ccc",
          padding:"10px 50px",
          backgroundColor: value === 'two' ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
        }}
        label="Views" {...a11yProps(1)} />
          <Tab sx={{
          padding:"10px 50px",
          border: "1px solid #ccc",
          backgroundColor: value === 'three' ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
        }}
         label="Graphs" {...a11yProps(2)} />
        
        <Tab sx={{
          padding:"10px 50px",
          border: "1px solid #ccc",
          backgroundColor: value === 'three' ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
        }}
         label="App Settings" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
          <FormPage></FormPage>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
      <div className="home">
      
        <ViewsPage></ViewsPage>
      </div>
      </CustomTabPanel>
      <CustomTabPanel 
      // className="home"
      style={{
        margin:"0 25px",
        backgroundColor: "white",
        boxShadow: "5px 5px 6px rgba(0, 0, 0, 0.4)",
        display:"flex",
      }}
      value={value} index={2}>
        <Test></Test>
      </CustomTabPanel>
      <CustomTabPanel 
      style={{
        margin:"0 25px",
        backgroundColor: "white",
        boxShadow: "5px 5px 6px rgba(0, 0, 0, 0.4)",
        display:"flex",
      }}
      value={value} 
      index={3}>
        Item Four
      </CustomTabPanel>
      </Box>
    {/* </Box> */}

      
    </div>
    
  );
}
