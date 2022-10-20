declare const useProfanityFilter: () => {
    init: () => Promise<void>;
    isProfanityPresent: (text: string) => boolean;
};

export { useProfanityFilter };
