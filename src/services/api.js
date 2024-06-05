import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Update with your backend URL if different
});

export const submitTransaction = async (transaction) => {
  try {
    const response = await api.post('/submit-transaction', transaction);
    return response.data;
  } catch (error) {
    console.error('Error submitting transaction:', error);
    throw error;
  }
};

export const getTransactions = async () => {
  try {
    const response = await api.get('/transactions');
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

export const searchICDCodes = async (query) => {
  try {
    // Replace this with a real API endpoint or a mock API service
    const response = await axios.get(`https://api.mocki.io/v1/270c64e6?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ICD codes:', error);
    throw error;
  }
};
