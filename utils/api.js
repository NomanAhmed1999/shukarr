import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};

// curl --request POST \
//   --url http://127.0.0.1:1337/api/orders \
//   --header 'Authorization: Bearer 9cb0b8951a6b193eccfcb0b522bc2a9a3e55c2bdda1f975471b5447ab0b3ea48a8ac7ea9aad272ad06ddbb8f3a788c7eea45e51f51757c5b3cf9588d6f13b9cc7abe917ae8fd25426be738597bd6b8be54010b02ade2589b51b8472d66b419b061f14695a98a07ad48c5aea449c233acc44bc3c19d8c92e3e5643234ca914148' \
//   --header 'Content-Type: application/json' \
//   --data '{
//   "data": {
//     "customerName": "Hello",
//     "customerAddress": "abc road",
// 		"customerPhone": "20351632.0",
// 		"customerPhone2": "20351632.0",
// 		"streetNo": "20351632.0",
// 		"flatNo": "20351632.0",
//     "products": [{
//       "id": 1,
//       "type": "abc",
// 			"image": "google.com"
//     }]
//   }
// }'
