"use client";

import { motion } from "framer-motion";
import loadingImg from "../../assets/loading.svg";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "absolute", // fixed에서 absolute로 변경
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        style={{
          marginBottom: "0.6rem",
        }}
      >
        <img src={loadingImg} alt="loading-img" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "white",
          margin: "1rem 0 0.5rem 0",
          fontFamily: "Montserrat",
        }}
      >
        Kooking..
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          fontSize: "1rem",
          color: "#cccccc",
          margin: 0,
          fontFamily: "Pretendard",
          fontWeight: "500",
        }}
      >
        Making K-FOOD recipes just for you
      </motion.p>
    </motion.div>
  );
}
