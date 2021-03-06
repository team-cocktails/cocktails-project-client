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
    const response = await request
        .get(`${URL}/api/ingredients?filter=${query}`)
        .set('Authorization', token)
    return response.body;
}

export async function getRandomDrinks(token) {
    const response = await request
        .get(`${URL}/api/random`)
        .set('Authorization', token)
    return response.body;
}

export async function deleteDrink(drinkId, token) {
    const response = await request
        .delete(`${URL}/api/menu/${drinkId}`)
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
    const newDrink = {
        "times_drank": times_drank,
        "owner_id": owner_id,
    }
    const response = await request
        .put(`${URL}/api/menu/${drinkId}`)
        .set('Authorization', token)
        .send(newDrink)
    return response.body;
}

export async function getSQLId(drinkId, token) {
    const response = await request
        .get(`${URL}/api/menu/${drinkId}`)
        .set('Authorization', token)
    return response.body;
}

export function getDetailId(detail) {
    const SQLId = detail.map((drink) => drink.idDrink)
    return SQLId
}
