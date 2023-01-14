import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '', width: 90 },
  {
    field: 'name',
    headerName: 'NAME',
    width: 150,
    editable: true,
  },
  {
    field: 'score',
    headerName: 'SCORE',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, name: '', score: '' },
  { id: 2, name: '', score: '' },
  { id: 3, name: '', score: '' },
  { id: 4, name: '', score: '' },
  { id: 5, name: '', score: '' },
  { id: 6, name: '', score: '' },
  { id: 7, name: '', score: '' },
  { id: 8, name: '', score: ''  },
  { id: 9, name: '', score: ''  },
  { id: 10, name: '', score: '' },
  { id: 11, name: '', score: '' },
  { id: 12, name: '', score: '' },
  { id: 13, name: '', score: '' },
  { id: 14, name: '', score: '' },
  { id: 15, name: '', score: '' },
  { id: 16, name: '', score: '' },
  { id: 17, name: '', score: '' },
  { id: 18, name: '', score: '' },
  { id: 19, name: '', score: '' },
  { id: 20, name: '', score: '' },
  { id: 21, name: '', score: '' },
  { id: 22, name: '', score: '' },
];

export default function Scoreboard() {
  return (
    <Box sx={{ height: 800, width: '100%' }}>
        <div>
            <h1>SCOREBOARD</h1>
        </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}