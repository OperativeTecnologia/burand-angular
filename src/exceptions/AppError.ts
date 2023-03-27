/**
 * Representa um erro da aplicação com título e mensagem.
 */
export class AppError {
  /**
   * O título do erro.
   * @type {string}
   */
  public readonly message: string;

  /**
   * A mensagem do erro.
   * @type {string}
   */
  public readonly title: string;

  /**
   * Cria uma instância de um erro da aplicação com título e mensagem.
   *
   * @param {string} title - O título do erro.
   * @param {string} message - A mensagem do erro.
   */
  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
  }
}
