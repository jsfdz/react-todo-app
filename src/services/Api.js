import axios from 'axios'

const
    BASE = 'https://todos-academlo.herokuapp.com/api'

export const
    get = async () => await axios.get(`${BASE}/todos`),

    create = async data => await axios.post(`${BASE}/todo`, data),

    update = async (id, data) => await axios.put(`${BASE}/todo/${id}`, data),

    remove = async id => await axios.delete(`${BASE}/todo/${id}`)
