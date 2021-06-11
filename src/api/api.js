import axios from 'axios'

const baseUrlVaccinations = 'http://localhost:5000/api/vaccinations'
const baseUrlVaccineOrders = 'http://localhost:5000/api/vaccineorders'

export const getAllVaccinations = async () => {
  return axios.get(baseUrlVaccinations)
}

export const getAllVaccineOrders = async () => {
  return axios.get(baseUrlVaccineOrders)
}