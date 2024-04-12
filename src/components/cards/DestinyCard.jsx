import React, { useState } from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material"; // Import icons
import addisAbeba from '../images/places/addisAbeba.jpg'
import adama from '../images/places/adama.jpg'
import bahirDar from '../images/places/bahirDar.jpg'
import hawasa from '../images/places/hawasa.jpg'
import tuluDimtu from '../images/places/tuluDimtu.jpg'

const cities = [
  {
    name: "Addis Abeba",
    image: addisAbeba,
  },
  {
    name: "Bahir dar",
    image: bahirDar,
  },
  {
    name: "Adama",
    image: adama,
  },
  {
    name: "Hawasa",
    image: hawasa,
  },
  {
    name: "TuluDimtu",
    image: tuluDimtu,
  },
  {
    name: "Addis Abeba",
    image: addisAbeba,
  },
  {
    name: "Bahir dar",
    image: bahirDar,
  },
  {
    name: "Hawasa",
    image: hawasa,
  },
];

const Destinycard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfItemsPerPage = 3;

  const groupedItems = [];
  for (let i = 0; i < cities.length; i += numberOfItemsPerPage) {
    groupedItems.push(cities.slice(i, i + numberOfItemsPerPage));
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: 'full'}}>
      <IconButton onClick={handlePrevious} disabled={currentIndex === 0} sx={{ margin: '30px 0 0 25px' }}>
        <NavigateBefore sx={{ fontSize: 100, color: 'black'}} />
      </IconButton>
      <div style={{ flexGrow: 1 }}>
        <Carousel
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={false}
          fullHeightHover={false}
          index={currentIndex}
          sx={{ '& .MuiCarousel-arrowButton': { visibility: 'hidden', width: 0, height: 0, } }}
        >
          {groupedItems.map((group, index) => (
            <ItemGroup key={index} group={group} />
          ))}
        </Carousel>
      </div>
      <IconButton onClick={handleNext} disabled={currentIndex === groupedItems.length - 1} sx={{ margin: '30px 0 0 25px' }}>
        <NavigateNext sx={{ fontSize: 100, color: 'black'}} />
      </IconButton>
    </div>
  );
};

function ItemGroup({ group }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {group.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}

function Item({ item }) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.300",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: "180px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1px",
        p: 0,
        mx: 2,
      }}
      elevation={10}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "80%",
          objectFit: "cover",
          borderRadius: "2px 2px 0 0", 
        }}
      />
      <Typography variant="h5" align="center" style={{ fontWeight: "bold", color:"#08415C", marginTop: "10px", fontSize: 15 }}>
        {item.name}
      </Typography>
    </Paper>
  );
}

export default Destinycard;
