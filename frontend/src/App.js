import HomePage from "./components/Welcome/welcome";
// import PseudoCodeCompetition  from "./components/Events/pseudoCode";
// import MultiStepForm from "./components/User-Details/details";
function App() {
  return (
    <div className="App">
      {<HomePage/>}
     
    </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from "./components/Welcome/welcome"; // Adjust the import path as necessary
// import MultiStepForm from "./components/User-Details/details1";// Adjust the import path as necessary

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/form" element={<MultiStepForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
