import { useEffect } from "react";

import { useProfanityFilter } from "profanity-filter";

function Child() {
  const { init, isProfanityPresent } = useProfanityFilter();

  useEffect(() => {
    (async () => await init())();
    (() => {
      let present = isProfanityPresent("abuse");
      console.log("abuse", present);
      present = isProfanityPresent("no-abuse");
      console.log("no-abuse", present);
    })();
  }, [isProfanityPresent]);

  return <div>Child Component</div>;
}

export default Child;
