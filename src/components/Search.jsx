import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const Search = () => {
    const locations = [{name: 'Addis Ababa', value:'AA'}, {name: 'Adama', value:'ADA'}, {name: 'Hawassa', value:'HWA'}, {name: 'Godndar', value:'GON'}]
    const options = locations.map((option) => {
        const firstLetter = option.name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });
    
      return (
        <Autocomplete
          id="grouped-demo"
          size='small'
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300, my:5, bgcolor:'white', ml:2,borderInlineColor: 'white' }}
          renderInput={(params) => <TextField {...params} label="Search" 
        />}
        />
      );
}
