import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // 替换为你的 API 基础 URL
    timeout: 1000, // 设置请求超时时间
    headers: {'X-Custom-Header': 'foobar'} // 自定义请求头
});

// 封装 GET 请求
export const get = async (url: string, params?: any) => {
    const response = await axiosInstance.get(url, { params });
    return response.data;
};

// 封装 POST 请求
export const post = async (url: string, data: any) => {
    const response = await axiosInstance.post(url, data);
    return response.data;
};
