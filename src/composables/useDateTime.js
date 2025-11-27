import dayjs from 'dayjs'

export function useDateTime() {
  function formatDate(date, format = 'YYYY-MM-DD') {
    return dayjs(date).format(format)
  }

  return {
    formatDate,
  }
}
