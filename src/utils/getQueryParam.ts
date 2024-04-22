import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function getQueryParam(param: string) {
  return inject(ActivatedRoute).snapshot.queryParamMap.get(param);
}
