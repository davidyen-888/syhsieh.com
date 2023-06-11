import React from "react";

const WavingHand = () => {
  return (
    <span className="waving-hand" aria-label="Waving Hand">
      👋
      <style jsx>{`
        .waving-hand {
          animation: wave 2s infinite;
          display: inline-block;
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }
      `}</style>
    </span>
  );
};

export default WavingHand;
