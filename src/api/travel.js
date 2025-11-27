import axiosInstance from '@/api/index.js'

export async function getTravelsFromApi() {
  const { data } = await axiosInstance.get('/travels')
  return data
}
