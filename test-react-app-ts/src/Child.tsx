import { useEffect } from "react";

import { useProfanityFilter } from "profanity-filter";

function Child() {
  const { isProfanityPresent } = useProfanityFilter();

  useEffect(() => {
    (async () => {
      let present = await isProfanityPresent("abuse");
      console.log("abuse", present);
      present = await isProfanityPresent("no-abuse");
      console.log("no-abuse", present);
    })();
  }, [isProfanityPresent]);

  return <div>Child Component</div>;
}

export default Child;
