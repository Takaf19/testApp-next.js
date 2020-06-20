import { parseISO, format } from 'date-fns'

// 日付をフォーマット
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}