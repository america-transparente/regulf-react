export default function documentDateLocalFormat(date: string) {
  return date.length > 10 && date !== "Sigue trabajando"
    ? new Date(date).toLocaleDateString("es-ES")
    : date;
}
