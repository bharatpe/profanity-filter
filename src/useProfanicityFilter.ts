import { useCallback } from 'react';
import { fetchFoulWords } from './utils/Utils';
const data = (async () => await fetchFoulWords())();
export const useProfanicityFilter = () => {
  const isProfanicityPresent = useCallback(
    async (
      text: string,
      callback?: (arg: boolean) => void
    ): Promise<boolean> => {
      const foulWordObject: Record<string, any> = await data;
      if (!foulWordObject || !foulWordObject?.foul_words)
        callback && callback(false);
      for (const key in foulWordObject?.foul_words) {
        const wordList: Array<string> = foulWordObject?.foul_words[key] || [];
        for (const wordIndex in wordList) {
          const textArray = text.toLocaleLowerCase().split(' ');
          for (let idx = 0; idx < textArray.length; idx++) {
            if (
              textArray[idx].trim() == wordList[wordIndex] ||
              textArray[idx] == wordList[wordIndex]
            ) {
              callback && callback(true);
              return true;
            }
          }
        }
      }
      callback && callback(false);
      return false;
    },
    []
  );

  return { isProfancityPresent: isProfanicityPresent };
};
