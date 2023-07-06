import React,{useState} from 'react'
import "./style.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Name() {

  const [value, setValue] = useState('New app');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="container"
    style={{
      display:"flex",
      
      padding:"20px 0px 20px 30px",
    }}>
      <div
      style={{
        width:"65%",
      }}>
            <div
            style={{
              padding:"10px",
              marginBottom:"20px",
              color:"#696969	"

            }}>
                Kintone Marketplace
                <ArrowForwardIosIcon
                sx={{
                  color:"#ccc",
                  marginBottom:"-8px",
                  padding:"0 5px 0 5px",
                }}></ArrowForwardIosIcon>
                New App
                <ArrowForwardIosIcon
                 sx={{
                  padding:"0 5px 0 5px",
                  color:"#ccc",
                  marginBottom:"-8px",
                }}></ArrowForwardIosIcon>
                Settings
            </div>
            <div 
            style={{
              display:"flex",
            }}>
                <div
                className="menuIcon"
                style={{
                  height:"50px",
                  width:"50px",
                  backgroundColor:"#50c7c7",
                  borderRadius:"10px",
                  border:"3px solid #ccc",
                  
                  display:"flex",
                  justifyContent:"center",
                  alignItems :"center",
                  marginRight: "20px",
                }}>
                     <MenuIcon></MenuIcon>
                </div>
                <div className="new-app">
                    <div>
                    <TextField
                    sx={{
                      width:"300px",
                      
                    }}
                      label="App Name"
                      value={value}
                      onChange={handleChange}
                    />
                    </div>
                    <div style={{
                      display:"flex",
                      paddingTop:"5px",
                    }}>
                    <EditNoteIcon></EditNoteIcon>
                    <p
                    style={{
                      fontSize:"12px",
                      marginTop:"4px",
                      paddingLeft:"8px",
                      color:"#A9A9A9"
                    }}>Notes for app administrators does not exist</p>
                    <button
                    className="create"
                    style={{
                      marginTop:"-5px",
                      fontSize:"12px",
                      border:"none",
                      backgroundColor:"#f0f0f0",
                    
                      color:"blue",
                    }}>
                      (Create)
                    </button>
                    </div>
                </div>
            </div>
      </div>
      <div 
      style={{
        // display:"flex",
        position:"relative",
        paddingTop:"30px",
        width:"30%"
      }}>
        <Stack spacing={2} direction="row" sx={{
           position:"absolute",
           right:"0px",
        }}>
             <Button variant="outlined"
          sx={{
            padding:"10px 15px",
            // width:"200px"
          }}>Discard creation</Button>
          <Button variant="contained"
          sx={{
            padding:"10px 15px",
          }}> Activate app</Button>
       
        </Stack>
      </div>
    </div>
  )
}
