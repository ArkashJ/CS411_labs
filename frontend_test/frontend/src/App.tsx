import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from   '@mui/material/Stack';
import ListIngredients from './ListIngredients';
import News from './News';

function App() {

  return ( 
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button> 
        
      </Stack>
    <ListIngredients />
      <div>
        <News />
      </div>
  </div>
  )
}

export default App
