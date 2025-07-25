import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Keep it dynamic for deployment

export async function getMenu() {
  try {
    const res = await axios.get(`${API_URL}/menu`);
    return res.data.data;
  } catch (err) {
    throw Error("Failed getting menu");
  }
}

export async function getOrder(id) {
  try {
    const res = await axios.get(`${API_URL}/order/${id}`);
    return res.data.data;
  } catch (err) {
    throw Error(`Couldn't find order #${id}`);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await axios.post(`${API_URL}/order`, newOrder, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { id: res.data.data.orderId };
  } catch (err) {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    await axios.patch(`${API_URL}/order/${id}`, updateObj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
