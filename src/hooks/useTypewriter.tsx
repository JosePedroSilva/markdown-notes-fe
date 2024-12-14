import {useState, useEffect} from 'react';

const useTypewriter = (sentences: string[], interval: number): string => {
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex % sentences.length];
    const typingSpeed = isDeleting ? interval / 2 : interval;

    const timeout = setTimeout(() => {
      const updateCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      setText(currentSentence.substring(0, updateCharIndex));
      setCharIndex(updateCharIndex);

      if (!isDeleting && currentSentence.length === updateCharIndex) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && updateCharIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex(prev => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);

  }, [text , charIndex, isDeleting, sentenceIndex, sentences, interval]);

  return text;

};

export default useTypewriter;