declare const useProfanicityFilter: () => {
    isProfancityPresent: (text: string, callback?: ((arg: boolean) => void) | undefined) => Promise<boolean>;
};

export { useProfanicityFilter };
