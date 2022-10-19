declare const useProfanityFilter: () => {
    isProfanityPresent: (text: string) => Promise<boolean>;
};

export { useProfanityFilter };
