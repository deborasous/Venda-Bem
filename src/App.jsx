import React from "react";

// import routes and route
import  AppRoutes  from "./routes/AppRoutes";

//import Components
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
