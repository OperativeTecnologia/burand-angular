import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe para exibir o tempo decorrido em formato amigável.
 * Transforma uma data em uma string representando o tempo decorrido
 */
@Pipe({
  standalone: true,
  name: 'timeAgo'
})
export class TimeAgoPipe extends DatePipe implements PipeTransform {
  /**
   * Transforma a data fornecida em uma string representando o tempo decorrido.
   *
   * @param value - A data a ser transformada.
   * @returns Uma string representando o tempo decorrido desde a data fornecida até o momento atual.
   */
  override transform(value: Date | string | number | null | undefined): any {
    if (!value) {
      return '';
    }

    const d = new Date(value);

    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));

    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));

    if (Number.isNaN(seconds)) {
      return '';
    }

    if (seconds <= 60) {
      return 'agora';
    }

    if (minutes <= 60) {
      return `há ${minutes} min`;
    }

    if (hours <= 24) {
      return `há ${hours} h`;
    }

    if (days <= 7) {
      return `há ${days} d`;
    }

    if (d.getFullYear() === now.getFullYear()) {
      return super.transform(value, "dd 'de' MMM 'às' HH:mm");
    }

    return super.transform(value, "dd 'de' MMMM 'de' yyyy");
  }
}
