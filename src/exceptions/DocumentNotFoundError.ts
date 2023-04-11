/**
 * Erro lançado quando um documento específico não é encontrado.
 */
export class DocumentNotFoundError extends Error {
  /**
   * Cria uma instância de um erro `DocumentNotFoundError` com uma mensagem formatada para o Id do documento não encontrado.
   *
   * @param id - O Id do documento não encontrado.
   */
  constructor(id: string) {
    super(`Document '${id}' was not found.`);

    this.name = 'DocumentNotFoundError';
  }
}
