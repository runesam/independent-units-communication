export default (state, action) => {
    const { type } = action;
    switch (type) {
        default:
            return [
                { value: 1, current: 10 },
                { value: 0, current: 5 },
                { value: -1, current: 5 },
                { value: -1, current: 5 },
                { value: 1, current: 5 },
                { value: 0, current: 5 },
                { value: 1, current: 5 },
            ];
    }
};
