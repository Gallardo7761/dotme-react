import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import "../css/Header.css";

const Header = ({ subtitle }) => {
  const names = useMemo(() => ["Jose", "Gallardo7761"], []);
  const [isJose, setIsJose] = useState(true);
  const [text, setText] = useState("Hola, soy "); // Texto actual
  const [animationState, setAnimationState] = useState("writing"); // Estados: "writing", "deleting", "waiting"

  useEffect(() => {
    let timeout;
    const baseText = "Hola, soy "; // Fijo, no se borra
    const fullText = baseText + (isJose ? names[0] : names[1]); // Texto completo a mostrar

    if (animationState === "writing") {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setAnimationState("deleting"), 3000); // Espera 2s antes de borrar
      }
    } else if (animationState === "deleting") {
      if (text.length > baseText.length) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsJose((prev) => !prev); // Cambia el nombre
          setAnimationState("writing");
        }, 1000); // Espera 15s antes de escribir de nuevo
      }
    }

    return () => clearTimeout(timeout);
  }, [text, animationState, isJose, names]); // -> Funciona !!!

  return (
    <header className="header">
      <div className="container">
        <motion.h1
          className="header-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text}
        </motion.h1>
        <motion.p
          className="header-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </header>
  );
};

Header.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Header;
