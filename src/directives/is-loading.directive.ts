import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[isLoading]'
})
export class IsLoadingDirective {
  @Input()
  public set isLoading(value: boolean) {
    if (!value) {
      const firstChild = this._el.nativeElement.children[0];
      if (!firstChild || firstChild.tagName !== 'BTN-LOADING-CONTENT') {
        return;
      }

      const childrens = firstChild.childNodes;

      while (this._el.nativeElement.firstChild) {
        this._el.nativeElement.removeChild(this._el.nativeElement.firstChild);
      }

      this._el.nativeElement.append(...childrens);
      this._el.nativeElement.removeAttribute('disabled');

      return;
    }

    const customElement: HTMLElement = this._renderer.createElement('btn-loading-content');
    customElement.append(...this._el.nativeElement.childNodes);
    customElement.style.opacity = '0';

    while (this._el.nativeElement.firstChild) {
      this._el.nativeElement.removeChild(this._el.nativeElement.firstChild);
    }

    this._renderer.appendChild(this._el.nativeElement, customElement);

    this.loaderEl = this._renderer.createElement('div');
    this.loaderEl.classList.add('btn-loading');

    const span = this._renderer.createElement('span');
    span.classList.add('spinner-grow', 'spinner-grow-sm');

    const spanChild: HTMLSpanElement = this._renderer.createElement('span');
    spanChild.classList.add('visually-hidden');
    spanChild.appendChild(this._renderer.createText('Carregando'));

    this._renderer.appendChild(span, spanChild);
    this._renderer.appendChild(this.loaderEl, span);
    this._renderer.appendChild(this._el.nativeElement, this.loaderEl);
    this._renderer.setAttribute(this._el.nativeElement, 'disabled', '');
  }

  private loaderEl: HTMLDivElement;

  public constructor(private _el: ElementRef<HTMLButtonElement>, private _renderer: Renderer2) {}
}
