import React from "react";
import HomeTitle from "../../components/HomeTitle";
import AppTitle from "../../components/AppTitle";
import HomePageUserOperationButton from "../../components/HomePageUserOperationButton";
import TechStack from "../../components/TechStack";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={"flex flex-col items-center justify-center mt-72"}
    >
      <AppTitle />
      <HomeTitle />
      <div className="flex gap-5">
        <HomePageUserOperationButton text="Sign in" route="signin" />
        <HomePageUserOperationButton text="Sign up" route="signup" />
      </div>
      <TechStack />
    </motion.div>
  );
}

export default Home;
