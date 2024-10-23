import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const greetings = ["Halo!", "Hello!", "你好!", "Bonjour!", "Привет!", "こんにちは!"];

const OpeningAnimation = ({ onComplete }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 300); 

    const timeout = setTimeout(() => {
      onComplete(); 
    }, greetings.length * 300); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-neutral-950 text-neutral-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-9xl font-bold">{greetings[currentGreeting]}</h1>
    </motion.div>
  );
};

export default OpeningAnimation;
