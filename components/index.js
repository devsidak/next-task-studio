/*

Dashboard Frame With Fixed Leftbar and Rightbar For Using in Pages;
Author - Gursidak Singh


*/


import React from "react";
import Leftbar from "./leftsidebar";
import Rightbar from "./rightbar";
import styles from "../styles/Home.module.css";
import homeStyles from "../styles/dashboard/main.module.css";
import { useRouter } from "next/router";

function Index({ children }) {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };
  return (
    <div className={styles.root + " pt-3 md:p-5 max-h-screen "}>
      <div className={styles.leftsidebar + " hidden md:flex"}>
        <Leftbar />
      </div>
      <div
        className={
          styles.centerbar + " md:py-2 px-2 md:px-6 max-h-full text-center"
        }
      >
        {children}
        <button
          className={
            homeStyles.Button +
            ` mt-9 md:hidden rounded-md py-1 px-3 text-sm ${
              router.pathname === "/" && "hidden"
            }`
          }
          onClick={handleBackToHome}
        >
          {"<-"} Back to Home
        </button>
      </div>
      <div className={styles.rightsidebar + " hidden lg:flex rounded-3xl"}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Index;
