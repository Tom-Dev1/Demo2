import axios, { AxiosInstance } from "axios";



export default class ApiClient {
    axiosInstance: AxiosInstance;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}