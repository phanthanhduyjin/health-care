import axios from 'axios'

import { API_URL } from '@/env-config'

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
