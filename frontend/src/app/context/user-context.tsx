// "use client";

// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// interface IUserCOntext {
//   user: {};
//   fetchUserData: () => void;
// }

// export const UserContext = createContext<IUserCOntext>({
//   user: {},
//   fetchUserData: () => {},
// });

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState({});

//   const fetchUserData = async () => {
//     try {
//       console.log("GET-USER");
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `http://localhost:8000/api/v1/auth/login`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setUser(response.data.user);
//         console.log("USER", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//     }
//     fetchUserData();
//   }, [user?.id]);

//   return (
//     <UserContext.Provider value={{ user, fetchUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
