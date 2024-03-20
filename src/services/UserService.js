import axios from "axios";

const REST_API_BASE ='http://localhost:8080/users';

export const listUsers = () => axios.get(REST_API_BASE);