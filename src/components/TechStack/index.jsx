import React, { useState } from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed -bottom-[-30px] font-mont">
      <button onClick={handleClick} className=" border px-4">
        {!open && "Click to show tech stack."}
      </button>
      {open && (
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <ul >
            <li>React</li>
            <li>Context Api</li>
            <li>TailwindCss</li>
            <li>Framer-Motion</li>
            <li>Vite</li>
            <li>Formik</li>
            <li>Yup</li>
            <li>AWS DynamoDB</li>
            <li>AWS Lambda</li>
            <li>AWS SES</li>
            <li>AWS S3</li>
            <button onClick={handleClick} className="border px-4">
              {open && "close."}
            </button>
          </ul>
        </motion.p>
      )}
    </div>
  );
};

export default TechStack;
