// import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.css';

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="header-container">
//       <div className="header-inner-container">
//           <h1 className="header-h1">
//             About Me - Employment Services platform for Technologists
//           </h1>
//         <p className="header-p">
//           Meet your eligible technologists
//         </p>
//         <div className="header-topnav">
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="siteBtn" to="/me">
//                 View My Profile
//               </Link>
//               <button className="siteBtn" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="siteBtn" to="/login">
//                 Login
//               </Link>
//               <Link className="siteBtn" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
