import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { LocationSelector } from "../components/LocationSelector";
import { Search } from "../components/Search";
import { PostCard } from "../components/cards/PostCard";
import axios from "axios";
import { useEffect } from "react";
import { Phone } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import {Link} from "react-router-dom";



const Posts = () => {

const { user,services } = useContext(AuthContext);
const [posts, setPosts] = useState([]);
const navigate = useNavigate();
 


//  setPosts(services);
   
    
 
//   const handleSubmit = async () => {
//     try {
//         const postResponse = await axios.post(url,{
//           "creator": {
//             "creator": {
//               "user": {
//                 "password": "string",
//                 "last_login": "2024-04-14T16:26:05.056Z",
//                 "is_superuser": true,
//                 "username": "o202btf6o45N0qt.qv7G7cPwEbW+-dth2BI9KhWUHAzmlawXQWVvdvwWwvbVh1-ohrwwZey5Eu9",
//                 "is_staff": true,
//                 "is_active": true,
//                 "date_joined": "2024-04-14T16:26:05.057Z",
//                 "first_name": "string",
//                 "last_name": "string",
//                 "email": "user@example.com",
//                 "groups": [
//                   0
//                 ],
//                 "user_permissions": [
//                   0
//                 ]
//               },
//               "bio": "string",
//               "phone_number": "string"
//             },
//             "fayda_number": "string",
//             "id_verified": true,
//             "bank_account1": "string",
//             "bank_account2": "string",
//             "grand_father_name": "string",
//             "profile": 0
//           },
//           "content": "string",
//           "price": 0,
//           "views": [
//             0
//           ]
//         },{
//             headers: {
//               'Authorization': `Deliver eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNTI1ODI0LCJpYXQiOjE3MTMwOTM4MjQsImp0aSI6ImViNzI4ZTQzZjM0NjQ5ZTY4N2Q5Nzk4ZDZjNDYyZjgyIiwidXNlcl9pZCI6MX0.TGcIRk0XYwWblaqam37Sf74L8OR2OhYpgP7PK4BL3yg`,
//               'Content-Type': 'application/json'

//             }, 
//         })

//         console.log(postResponse.json())
//     } catch (err) {
//       console.error(err)
//     }
//   }

  return (
    <Container className="sm:w-auto">
      <div className="mt-28 text-[#bc2525]">
        <div className="flex space-x-8 space-y-8">
          <Typography variant="h3" sx={{}}>
            Today's Posts
          </Typography>
          <Search />
          <LocationSelector />
        </div>
      </div>
      <div className="w-65% h-0.5 bg-[#08415C]"></div>

      <Grid container sx={{ mt: 2, width: "100%" }}>
        <Grid item sm={12} md={4}>
          <Link to="../pages/Details">
            <PostCard />
          </Link>
        </Grid>
        <Grid item sm={12} md={4}>
          <Link to="../pages/Details">
            <PostCard />
          </Link>
        </Grid>
        <Grid item sm={12} md={4}>
          <Link to="../pages/Details">
            <PostCard />
          </Link>
        </Grid>
        <Grid item sm={12} md={4}>
          <Link to="../pages/Details">
            <PostCard />
          </Link>
        </Grid>
        <Grid item sm={12} md={4}>
          <Link to="../pages/Details">
            <PostCard />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Posts;
