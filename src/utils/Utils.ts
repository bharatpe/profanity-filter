import { FOUL_WORDS_URL } from '../costant';

export const fetchFoulWords = async () => {
  const data = await (await fetch(FOUL_WORDS_URL)).json();
  return data;
};
