import { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { decode as jwtDecode } from "jwt-decode"; // Add the missing import statement for 'decode' from 'jwt-decode' package
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Profile from "../pages/Profile";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

   const [userData, setUserData] = useState(null);
  const [authTokens, setauthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  // console.log("authTokens", authTokens.access)
   const [isAuthenticated, setIsAuthenticated] = useState(null);
   useEffect(() => {
     setIsAuthenticated(authTokens !== null);
   }, [authTokens]);
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  
  const [myprofile, setProfile] = useState(null);

  const [loadingMyProfile, setLoadingMyProfile] = useState(true);
  useEffect(() => {
    if (authTokens && user) {
      const id = user.user_id;
      const getProfile = async () => {
        try {
          const token = authTokens.access;
          const response = await axios.get(`${backendUrl}api/profiles/${id}/`, {
            headers: {
              Authorization: `Deliver ${token}`,
            },
          });
          console.log( "myprofiee=",response)
          if (response.status === 200) {
            
            const data = await response.data;
            setProfile(data);
            console.log("profile", myprofile);
          } else {
            console.error("Failed to fetch profile data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
        } finally {
          setLoadingMyProfile(false); // Set loading state to false after fetching
        }
      };
      getProfile();
    }
  }, [authTokens, user]);
  const [loading, setLoading] = useState(true);

  // const { addMessage } = useContext(MessageContext);

  const navigate = useNavigate();
 let loginUser = async (username, password) => {
   try {
     let response = await Promise.race([
       fetch(`${backendUrl}auth/jwt/create`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           username: username,
           password: password,
         }),
       }),
       new Promise((_, reject) =>
         setTimeout(() => reject(new Error("Request timed out")), 20000)
       ),
     ]);
     console.log(response);

     let data = await response.json();
    //  console.log(data);
     if (response.status === 200) {
      setauthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      // await profileSetter(() => navigate("/"));
       navigate("/");
      
     } else {
       alert("Something went wrong!");
     }
   } catch (error) {
     alert(error.message);
   }
 };
 
   
     

  let forgotPassword = async (e) => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}auth/users/reset_password/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      if (response.status === 204) {
        // addMessage({
        //   type: "success",
        //   text: `The password reset link has been sent to the email address ${e.target.email.value}`,
        // });
        navigate("/login");
      } else {
        // addMessage({
        //   type: "error",
        //   text: "Trouble Sending Email please try again",
        // });
      }
    } catch (error) {
      // addMessage({ type: "error", text: error.message });
    }
  };

  const [logout, setLogout] = useState(false);

  let loggingout = () => {
    localStorage.removeItem("authTokens");
   
    setauthTokens(null);
    setLogout(true);
    navigate("/pages/Login");
  };

  useEffect(()=>{
  if(authTokens!==null)
  getUserFromToken(authTokens.access);
  },[authTokens])
 

async function getUserFromToken(token) {
    try {
       setLoading(true);
      const userRes = await axios.get(`${backendUrl}auth/users/me/`, {
        headers: {
          Authorization: `Deliver ${token}`,
        },
      });
      // console.log("userres", userRes);
      setUserData(userRes.data);

    } catch (err) {
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  }


  async function serviceProvider (socialnum,account,grandname) {
    try {
     const token = authTokens.access;
      setLoading(true);
      const userRes = await axios.post(
        `${backendUrl}api/service-provider/`,
        {
           service:{
            creator:  myprofile,
            fayda_number: socialnum,
            bank_account: account,
            profile:myprofile.id
          },
        },
        {
          headers: {
            Authorization: `Deliver ${token}`,
          },
        }
      );
      console.log("userres", userRes);
      setUserData(userRes.data);
    
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);

    }
  }
  
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchservices= async () => {
      try {
        const token = authTokens.access;
        const response = await axios.get(`${backendUrl}/api/services/`, {
          headers: {
            Authorization: `Deliver ${token}`,
            "Content-Type": "application/json",
          },
    
        });
          const data = await response.json();
          setServices(data);
        if (data) {
          console.log(data);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchservices(), [];
  });
   
  
  

    // useEffect(() => {
    //   const createService = async () => {
    //     try {
    //       const token = authTokens.access;
    //       const response = await axios.post(`${backendUrl}/api/services/`,{

    //       } ,
    //       {
    //         headers: {
    //           Authorization: `Deliver ${token}`,
    //           "Content-Type": "application/json",
    //         },
    //       });
    //       const data = await response.json();
    //       setServices(data);
    //       if (data) {
    //         console.log(data);
    //       }
    //     } catch (err) {
    //       console.log(err.response);
    //     }
    //   };
    //   createService(), [];
    // });

  



  const value = {
    user: user,
    myprofile: myprofile,
    loginUser: loginUser,
    isAuthenticated: isAuthenticated,
    loading: loading,
    setIsAuthenticated: setIsAuthenticated,
    loggingout: loggingout,
    setLogout: setLogout,
    services: services,
    serviceProvider: serviceProvider,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
