import { getApiError } from '../resources/apiErrosTranslate';

/**
 * Representa um erro de API com código, mensagem e status HTTP.
 */
export class ApiError {
  /**
   * A mensagem de erro.
   * @type {string}
   */
  public readonly message: string;

  /**
   * O código de erro.
   * @type {string}
   */
  public readonly code: string;

  /**
   * O status HTTP associado ao erro.
   * @type {number}
   */
  public readonly statusCode: number;

  /**
   * Cria uma instância de um erro de API com código, mensagem e status HTTP.
   *
   * @param {string} code - O código de erro.
   * @param {number} statusCode - O status HTTP associado ao erro.
   */
  constructor(code: string, statusCode: number) {
    this.message = getApiError(code);
    this.code = code;
    this.statusCode = statusCode;
  }
}
