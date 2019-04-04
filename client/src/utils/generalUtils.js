export default (paramsObj) => {
    const params = new URLSearchParams();
    Object.keys(paramsObj).forEach(key => params.append(key, paramsObj[key]));
    return params;
};
