import React from 'react';
import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className='App'>
      <Grid container spacing='md'>
        <Grid item cols={6}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
