import { useCallback, useState } from 'react';
import { fetchFoulWords } from './utils/Utils';
const data = (async () => await fetchFoulWords())();
export const useProfanityFilter = () => {
  const [foulWordObject, setFoulWordObject] = useState<Record<string,any>>({});

  const init = useCallback(async(): Promise<void> => {
    if(Object.keys(foulWordObject).length === 0){
      setFoulWordObject(await data);
    }
  },[]);

  const isProfanityPresent = useCallback((
      text: string,
    ): boolean => {
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
    [foulWordObject]
  );

  return { init, isProfanityPresent };
};
