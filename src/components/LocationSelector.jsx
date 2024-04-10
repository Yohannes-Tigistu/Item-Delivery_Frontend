import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const LocationSelector = () => {
  const [startLocation, setStartLocation] = React.useState('');
  const [destinationLocation, setDestinationLocation] = React.useState('');


  const fistHandleChange = (event) => {
    setStartLocation(event.target.value);
  };
  const secondHandleChange = (event) => {
    setDestinationLocation(event.target.value);
  };

  return (
    <div>
      <FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Cities</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={startLocation}
          label="Location"
          onChange={fistHandleChange}
        >
          <MenuItem value="">
            <em>Cities</em>
          </MenuItem>
          <MenuItem value={'AA'}>Addis Ababa</MenuItem>
          <MenuItem value={'ADA'}>Adama</MenuItem>
          <MenuItem value={'HWA'}>Hawassa</MenuItem>
          <MenuItem value={'GON'}>Gondar</MenuItem>
        </Select>
        <FormHelperText>From</FormHelperText>
      </FormControl>
      <FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={destinationLocation}
          onChange={secondHandleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Destination</em>
          </MenuItem>
          <MenuItem value={'AA'}>Addis Ababa</MenuItem>
          <MenuItem value={'ADA'}>Adama</MenuItem>
          <MenuItem value={'HWA'}>Hawassa</MenuItem>
          <MenuItem value={'GON'}>Gondar</MenuItem>
        </Select>
        <FormHelperText>To</FormHelperText>
      </FormControl>
    </div>
  );
}