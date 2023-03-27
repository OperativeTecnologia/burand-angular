/**
 * Lê um `File` e retorna seus dados no formato de URL Data.
 *
 * @param file - O arquivo a ser lido.
 * @returns Uma `Promise` que resolve em uma string contendo a URL Data do arquivo ou `null`.
 */
export function readFileAsDataURL(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (): void => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (): void => {
      reject();
    };
    fileReader.readAsDataURL(file);
  });
}
