/**
 * Função de debounce que limita a frequência de execução de uma função.
 *
 * @param timeout - O tempo de espera em milissegundos antes de executar a função.
 * @returns Função de debounce que pode ser usada como decorador.
 */
export function debounce(timeout: number) {
  let timeoutRef: ReturnType<typeof setTimeout>;

  return function (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    /**
     * Substitui a função original por uma nova função que é acionada somente após o tempo de espera especificado.
     *
     * @param args - Os argumentos passados para a função original.
     */
    descriptor.value = function (...args: any[]) {
      clearTimeout(timeoutRef);

      timeoutRef = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
    };

    return descriptor;
  };
}
