import request from "superagent";

const URL = 'http://localhost:3009';

export async function signUpUser (email, password) {
    const response = await request 
    .post(`${URL}/auth/signup`)
    .send({ email, password})

        return response.body;
};

export async function logInUser (email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({ email, password})

        return response.body;
};