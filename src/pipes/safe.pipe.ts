import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

/**
 * Pipe para contornar a segurança e confiar em conteúdo dinâmico (HTML, CSS, JavaScript, URLs, etc.).
 * Utiliza o serviço DomSanitizer para retornar conteúdo seguro e evita ataques de Cross-site Scripting (XSS).
 */
@Pipe({
  standalone: true,
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Transforma o valor fornecido em um conteúdo seguro, de acordo com o tipo especificado.
   *
   * @param value - O valor a ser transformado em conteúdo seguro.
   * @param type - O tipo de conteúdo seguro (html, style, script, url ou resourceUrl).
   * @returns Um objeto `SafeHtml`, `SafeStyle`, `SafeScript`, `SafeUrl` ou `SafeResourceUrl`, conforme o tipo especificado.
   */
  public transform(
    value: string,
    type: 'html' | 'style' | 'script' | 'url' | 'resourceUrl'
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
