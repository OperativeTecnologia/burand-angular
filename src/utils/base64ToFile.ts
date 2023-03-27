import { v4 as uuidv4 } from 'uuid';

/**
 * Converte uma imagem codificada em `base64` em um objeto `File`.
 *
 * @param {string} base64Image - A string de imagem codificada em base64.
 * @returns {File} O objeto `File` convertido.
 */
export function base64ToFile(base64Image: string): File {
  const split = base64Image.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteString = window.atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], {
    type
  });

  const [, filetype] = blob.type.split('/');

  return new File([blob], `${uuidv4()}.${filetype}`, {
    type
  });
}
