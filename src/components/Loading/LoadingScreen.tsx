"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import loadingImg from "../../assets/loading.svg";

interface LoadingScreenProps {
  isVisible: boolean;
  minimumDuration?: number;
}

export default function LoadingScreen({
  isVisible,
  minimumDuration = 5000,
}: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const visibleSinceRef = useRef<number | null>(isVisible ? Date.now() : null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isVisible) {
      visibleSinceRef.current = Date.now();
      setShouldRender(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const visibleSince = visibleSinceRef.current ?? Date.now();
    const elapsed = Date.now() - visibleSince;
    const remaining = Math.max(minimumDuration - elapsed, 0);

    if (remaining === 0) {
      setShouldRender(false);
    } else {
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        timeoutRef.current = null;
      }, remaining);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isVisible, minimumDuration]);

  if (!shouldRender) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
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
