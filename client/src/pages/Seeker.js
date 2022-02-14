// import React from 'react';

// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// // import SkillsList from '../components/SkillsList';
// // import SkillForm from '../components/SkillForm';

// // import { QUERY_SINGLE_SEEKER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// const Seeker = () => {
//   const { seekerId } = useParams();

//   // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   const { loading, data } = useQuery(
//     seekerId ? QUERY_SINGLE_SEEKER : QUERY_ME,
//     {
//       variables: { seekerId: seekerId },
//     }
//   );

//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const seeker = data?.me || data?.seeker || {};

//   // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getSeeker().data._id === seekerId) {
//     return <Redirect to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!seeker?.name) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>
//       <h2 className="card-header">
//         {seekerId ? `${seeker.name}'s` : 'Your'} friends have endorsed these
//         skills...
//       </h2>

//       {/* {seeker.skills?.length > 0 && (
//         <SkillsList
//           skills={seeker.skills}
//           isLoggedInUser={!seekerId && true}
//         />
//       )} */}

//       {/* <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <SkillForm profileId={profile._id} />
//       </div> */}
//     </div>
//   );
// };

// export default Seeker;
