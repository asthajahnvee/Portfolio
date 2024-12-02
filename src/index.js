import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

// import {Route, Routes} from "react-router-dom"; 
// import Projects from './components/Projects';
// export const Address = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<App/>} />
//         <Route path='/projects' element={<Projects/>} />
//       </Routes>
//     </>
// );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);