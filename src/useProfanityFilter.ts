import { useCallback } from 'react';
import { fetchFoulWords } from './utils/Utils';
const data = (async () => await fetchFoulWords())();
export const useProfanityFilter = () => {
  const isProfanityPresent = useCallback(
    async (
      text: string,
    ): Promise<boolean> => {
      const foulWordObject: Record<string, any> = await data;
      if (!foulWordObject || !foulWordObject?.foul_words)
        return false;
      for (const key in foulWordObject?.foul_words) {
        const wordList: Array<string> = foulWordObject?.foul_words[key] || [];
        for (const wordIndex in wordList) {
          const textArray = text.toLocaleLowerCase().split(' ');
          for (let idx = 0; idx < textArray.length; idx++) {
            if (
              textArray[idx].trim() == wordList[wordIndex] ||
              textArray[idx] == wordList[wordIndex]
            ) {
              return true;
            }
          }
        }
      }
      return false;
    },
    []
  );

  return { isProfanityPresent };
};
