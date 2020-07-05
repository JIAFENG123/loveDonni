import Api from "./api";
const getmethods = (url, methods, params) => Api(url, methods, { params });

const postmethods = (url, methods, data) => Api(url, methods, data);

export { getmethods, postmethods };
