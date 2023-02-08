import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: "#0c0c14" }}
    >
       <IconButton  type="button" sx={{ p: '10px',color: "white" }} aria-label="search">
        <SearchIcon  />
      </IconButton> 
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find items, users and activities"
        inputProps={{ 'aria-label': 'find items, users and activities' }}
      />
     
      
    </Paper>
  );
}