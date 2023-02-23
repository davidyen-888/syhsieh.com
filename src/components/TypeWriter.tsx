import { useState, useEffect } from "react";

interface TypeWriterProps {
  sentences: string[];
  delay?: number;
  deleteDelay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
}

const TypeWriter = ({
  sentences,
  delay = 1000,
  deleteDelay = 500,
  typingSpeed = 100,
  deletingSpeed = 50,
}: TypeWriterProps) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const sentence = sentences[currentSentenceIndex];

    if (isTyping) {
      if (currentSentence === sentence) {
        setTimeout(() => {
          setIsTyping(false);
        }, delay);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentSentence(sentence.substring(0, currentSentence.length + 1));
        }, typingSpeed);

        return () => {
          clearTimeout(timeoutId);
        };
      }
    } else {
      if (currentSentence === "") {
        setTimeout(() => {
          setIsTyping(true);
          setCurrentSentenceIndex((index) => (index + 1) % sentences.length);
        }, delay);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentSentence(
            currentSentence.substring(0, currentSentence.length - 1)
          );
        }, deletingSpeed);

        return () => {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [
    currentSentence,
    currentSentenceIndex,
    delay,
    deleteDelay,
    deletingSpeed,
    isTyping,
    sentences,
    typingSpeed,
  ]);

  return <b> {currentSentence}</b>;
};

export default TypeWriter;
