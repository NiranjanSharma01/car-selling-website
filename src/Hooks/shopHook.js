import axios from "axios"
import {API} from "./backend"

export const getAllCars = async () => {
    const config = {
        method: "get",
        url: `${API}/cars/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("token"))
          }`,
        },
      };
      try {
        const res = await axios(config);
        // console.log(res.data,"res")
        return res.data;
      } catch (error) {
        return error.response.data;
      }
}