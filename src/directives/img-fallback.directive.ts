import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'img[fallback], ion-img[fallback]'
})
export class ImgFallbackDirective {
  @Input() fallback = '';
  @Input() retry = 0;
  private currentRetry = 0;

  constructor(private eRef: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  @HostListener('ionError')
  loadFallbackOnError() {
    const { nativeElement } = this.eRef;

    const defaultUrl =
      this.fallback ||
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f1f1f1'/%3E%3C/svg%3E";

    const originalSrc = nativeElement.src;

    if (originalSrc === `${window.location.origin}/`) {
      nativeElement.src = defaultUrl;
      return;
    }

    if (this.currentRetry !== this.retry) {
      this.currentRetry += 1;
      nativeElement.src = defaultUrl;

      setTimeout(() => {
        nativeElement.src = originalSrc;
      }, 1500);
    } else {
      nativeElement.src = defaultUrl;
    }
  }
}
