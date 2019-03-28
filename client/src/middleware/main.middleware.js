export default store => next => (action) => {
    console.log(store);
    next(action);
};
