import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="flex items-center gap-10">
        <SideBar></SideBar>
        {isNavigating && <span>'Loading....'</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * ! Data load korar jonno ki ki kori
 *
 * ? 1. use: userPromise > Suspense> promise > use(userPromise)
 *
 * * 2.[less used ]--> useState + useEffect (()=>{},[])
 *
 * !3. Load data before router component is rendered.
 *
 */
