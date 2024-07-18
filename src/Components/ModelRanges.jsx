import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function ModelRanges() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Slider  disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}