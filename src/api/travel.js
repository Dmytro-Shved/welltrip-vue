import { axiosInstance } from '@/api/index.js'

export async function getTravelsFromApi(page = 1) {
  return await axiosInstance('/travels', {
    params: { page }
  })
}
