import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});
export async function read(url) {
  const { data } = await axiosInstance.get(url);
  return data;
}

export async function exclude(url) {
  return await axiosInstance.delete(url);
}

export async function create(url, object) {
  const { data } = await axiosInstance.post(url, object);
  return data;
}

export async function update(url, object) {
  const { data } = await axiosInstance.put(url, object);
  return data;
}
