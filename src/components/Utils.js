// this probably shouldn't be in the components directory, since it doesn't contain any react code

import request from "superagent";


const URL = `https://cocktails-project-server.herokuapp.com`;

export async function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
    return response.body;
};

export async function logInUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
    return response.body;
};

export async function getSearchDrinks(query, token) {
    const response = await request
        .get(`${URL}/api/search?search=${query}`)
        .set('Authorization', token)
    return response.body;
}

export async function getIngredientDrinks(query, token) {
    return await makeRequest(url, query, token);
}

// a lot of these functions could be made leaner by calling this function, which would reduce duplication
async function makeRequest(url, param, token) {
    const response = await request
        .get(`${URL}${url}${param}`)
        .set('Authorization', token);
    return response.body;
}


export async function deleteDrink(drinkId, token) {
    return await makeRequest('/api/menu/', drinkId, token);
}

export async function getRandomDrinks(token) {
    const response = await request
        .get(`${URL}/api/random`)
        .set('Authorization', token)
    return response.body;
}

export async function getMenu(token) {
    const response = await request
        .get(`${URL}/api/menu`)
        .set('Authorization', token)
    return response.body;
}

export async function getDrinkId(drinkId, token) {
    const response = await request
        .get(`${URL}/api/details/${drinkId}`)
        .set('Authorization', token)
    return response.body;
}

export async function addToMenu(drink, token) {
    const response = await request
        .post(`${URL}/api/menu`)
        .set('Authorization', token)
        .send(drink)
    return response.body;
}

export async function addTimesDrank(drinkId, times_drank, owner_id, token) {
    const response = await request
        .put(`${URL}/api/menu/${drinkId}`)
        .set('Authorization', token)
        .send({
            times_drank,
            owner_id,
        })
    return response.body;
}

export async function getSQLId(drinkId, token) {
    const response = await request
        .get(`${URL}/api/menu/${drinkId}`)
        .set('Authorization', token)
    return response.body;
}

export function getDetailId(detail) {
    // seems like this returns an array rather than an id? might be nice to change the name to convey that
    const SQLId = detail.map((drink) => drink.idDrink)
    return SQLId
}
