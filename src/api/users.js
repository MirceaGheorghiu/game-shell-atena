import axios from "axios";

const baseUrl = 'https://hurricane-caterwauling-cost.glitch.me/';

export const client = axios.create({
  baseURL: baseUrl,
});