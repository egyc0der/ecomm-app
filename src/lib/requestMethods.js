import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTg0NzBhOGU4NTBkODM5OTA2ZTJlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTUyNTg1NywiZXhwIjoxNjU5Nzg1MDU3fQ.H5wgWtbhglTDtg3GHDVONa2uUStln31-Eo6n78gyizw';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});