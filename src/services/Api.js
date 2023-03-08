import Http from "./Https";

export const SignIn = (config) => {
    return Http.post('/Login', config);
};