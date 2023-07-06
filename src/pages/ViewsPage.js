import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const columns = [
    { field: 'name', headerName: 'Name', width: 500 },
    { field: 'edit', 
      headerName: '', 
      width: "120" ,
      renderCell: (params) => (
        <div>
          <CreateIcon style={{ marginRight: 8, marginBottom: -5, color:"#0099CC"}} />
          <span style={{
            color:"#0099CC"
          }}>Edit</span>
        </div>
      ),
    },
    { field: 'duplicate', 
      headerName: '', 
      width: "120" ,
      renderCell: (params) => (
        <div>
          <ContentCopyIcon style={{ marginRight: 8, marginBottom: -5, color:"#0099CC"}} />
          <span style={{
            color:"#0099CC"
          }}>Duplicate</span>
        </div>
      ),
    },
    { field: 'delete', 
      headerName: '', 
      width: "120",
      renderCell: (params) => (
        <div>
          <HighlightOffIcon style={{ marginRight: 8, marginBottom: -5, color:"red"}} />
          <span style={{
            color:"red"
          }}>Delete</span>
        </div>
      ),
     },
  ];
  
  const rows = [
    { id: 1, name: 'Snow' },
    { id: 2, name: 'Lannister' },
   
  ];

export default function ViewsPage() {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
  
}
