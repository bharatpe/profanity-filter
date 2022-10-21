import { useCallback, useState } from "react";
import { fetchFoulWords } from "./utils/Utils";

/**
 * @method: to fetch the foul words data only once
 */
const data = (async () => await fetchFoulWords())();

/**
 * stores the foul words object
 */
let foulWordsObject: Record<string, any> = {};

export const useProfanityFilter = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(
    Object.keys(foulWordsObject).length !== 0
  );

  /**
   * Init method to save foulWords data only once
   */
  const init = useCallback(async (): Promise<void> => {
    if (Object.keys(foulWordsObject).length === 0) {
      foulWordsObject = await data;
      setDataLoaded(true);
    }
  }, []);

  /**
   * @method: validates the profanity of the given text
   * @param: text
   * @returns: boolean
   */

  const isProfanityPresent = useCallback(
    (text: string): boolean => {
      if (!foulWordsObject || !foulWordsObject?.foul_words) return false;
      for (const key in foulWordsObject?.foul_words) {
        const wordList: Array<string> = foulWordsObject?.foul_words[key] || [];
        for (const wordIndex in wordList) {
          const textArray = text.toLocaleLowerCase().split(" ");
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
    [foulWordsObject]
  );

  return { init, isProfanityPresent };
};
