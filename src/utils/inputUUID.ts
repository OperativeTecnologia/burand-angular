import { v4 as uuidv4 } from 'uuid';

/**
 * Gera um identificador único com um prefixo "id".
 *
 * @returns Uma string contendo um identificador único com o formato "id{UUID}".
 */
export function inputUUID() {
  return `id${uuidv4()}`;
}
