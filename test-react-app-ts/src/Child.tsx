import { useEffect } from "react";

import { useProfanityFilter } from "profanity-filter";

function Child() {
  const { isProfanityPresent } = useProfanityFilter();

  useEffect(() => {
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
