import axios from "axios"
import { createSearchParams } from "react-router-dom";

export const getList = async (queryObj) => {

  const queryStirng = createSearchParams(queryObj).toString()
  
  const res = await axios.get(`http://localhost:8080/api/products/list?${queryStirng}`);

  return res.data

}


export const postProduct = async (FormData) => {

  const header = {
    headers: {
        "Content-Type": "multipart/form-data",
    }
  }

  const res =  await axios.post('http://localhost:8080/api/products/', FormData, header)

  return res.data

}

export const getProduct = async (pno) => {
  
  const res = await axios.get(`http://localhost:8080/api/products/${pno}`)

  return res.data

}

export const deleteProduct = async (pno) => {
  
  const res = await axios.delete(`http://localhost:8080/api/products/${pno}`)

  return res.data

}


export const putProduct = async (FormData) => {

  const header = {
    headers: {
        "Content-Type": "multipart/form-data",
    }
  }

  const res =  await axios.post('http://localhost:8080/api/products/modify', FormData, header)

  return res.data

}

