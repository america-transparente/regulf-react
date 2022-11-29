export default function documentDateLocalFormat(date: string) {
  return date.length > 10 && date !== "No reportado"
    ? new Date(date).toLocaleDateString("es-ES")
    : date;
}
