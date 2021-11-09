import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatToLongDate(date: string): string {
  const parsedDate = parseISO(date);
  return format(parsedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}
