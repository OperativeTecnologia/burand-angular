import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function getRouterParam(param: string) {
  return inject(ActivatedRoute).snapshot.paramMap.get(param);
}
