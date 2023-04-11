import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Uma diretiva que lida com erros de carregamento de imagem e substitui a fonte da imagem por um URL de fallback.
 *
 * @example
 * Aplique o atributo `fallback` a um elemento `img` ou `ion-img` para usar a diretiva:
 * ```html
 * // native HTML
 * <img src="image-url.jpg" fallback="fallback-image-url.jpg" [retry]="2" />
 *
 * // ionic
 * <ion-img src="image-url.jpg" fallback="fallback-image-url.jpg" [retry]="2" />
 * ```
 */
@Directive({
  standalone: true,
  selector: 'img[fallback], ion-img[fallback]'
})
export class ImgFallbackDirective {
  /**
   * A URL de fallback a ser usada quando a origem da imagem original falha ao carregar.
   */
  @Input() fallback = '';

  /**
   * O número de vezes para tentar carregar novamente a fonte da imagem original antes de usar o URL de fallback.
   */
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
