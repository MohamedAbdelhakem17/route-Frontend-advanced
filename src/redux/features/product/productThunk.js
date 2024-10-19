import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = "https://fakestoreapi.com/";

export const getProducts = createAsyncThunk("products/getAll", async () => {
    const apiLink = `${BASE_API_URL}products`;
    const { data } = await axios.get(apiLink);
    return data;
});

export const getProduct = createAsyncThunk("products/getone", async (id) => {
    const apiLink = `${BASE_API_URL}products/${id}`;
    const { data } = await axios.get(apiLink);
    return data;
});

export const getCategories = createAsyncThunk("products/getCategories", async () => {
    const apiLink = `${BASE_API_URL}products/categories`;
    const { data } = await axios.get(apiLink);
    return data;
});

