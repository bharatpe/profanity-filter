declare const useProfanityFilter: () => {
    isProfanityPresent: (text: string, callback?: ((arg: boolean) => void) | undefined) => Promise<boolean>;
};

export { useProfanityFilter };
