import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'timeAgo',
})
export class TimeAgoPipe extends DatePipe implements PipeTransform {
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
    const months = Math.round(Math.abs(days / 30.416));

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

    if (months <= 12) {
      return super.transform(value, "dd 'de' MMM 'às' HH:mm");
    }

    return super.transform(value, "dd 'de' MMMM 'de' yyyy");
  }
}
