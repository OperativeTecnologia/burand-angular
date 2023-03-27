/**
 * Dicionário de códigos de erro da API com as respectivas mensagens de erro.
 */
export const apiErrosTranslate: Record<string, string> = {
  'application/validations-fail': 'Falha de validação, verifique os dados e tente novamente!',
  'application/token-missing': 'Ops! Houve um erro, renicie a pagina e tente novamente!',
  'application/token-malformatted': 'Ops! Houve um erro, renicie a pagina e tente novamente!',
  'application/invalid-token': 'Ops! Houve um erro, renicie a pagina e tente novamente!',
  'application/without-permission': 'Ops! Parece que você não tem permissões para realizar esta ação!',
  'application/without-permission-level': 'Você não permissões suficientes para realizar esta ação.',
  'application/document-not-found': 'Ops! Houve um erro, renicie a pagina e tente novamente!',
  'application/documen-without-identifier': 'Ops! Houve um erro, renicie a pagina e tente novamente!',
  'application/need-credit': 'Ops! Houve um erro, renicie a pagina e tente novamente!',

  'auth/email-already-in-use': 'Este endereço de e-mail já está sendo utilizado.',
  'auth/weak-password': 'Sua senha não é forte o suficiente. Adicione números, letras maiúsculas e minúsculas.',
  'auth/invalid-email': 'O endereço e-mail é invalido.',
  'auth/account-exists-with-different-credential': 'E-mail já registrado! realize o login com e-mail e senha.',
  'auth/email-already-exists': 'Este endereço de e-mail já está sendo utilizado.',
  'auth/invalid-credential': 'Sua credencial está inválida.',
  'auth/wrong-password': 'O e-mail ou senha está inválido.',
  'auth/user-not-found': 'O e-mail ou senha está inválido.',
  'auth/user-mismatch': 'O e-mail ou senha está inválido.',
  'auth/invalid-verification-code': 'O código da verificação está inválido.',
  'auth/invalid-verification-id': 'Sua credencial está inválida.',
  'auth/requires-recent-login': 'Por favor deslogue do aplicativo e entre novamente.'
};

/**
 * Retorna a mensagem de erro correspondente a um determinado código de erro.
 *
 * @param errorCode O código de erro.
 * @param defaultMessage A mensagem de erro padrão a ser usada se não houver nenhuma mensagem correspondente ao código de erro fornecido.
 * @returns A mensagem de erro correspondente ao código de erro fornecido, ou a mensagem de erro padrão se não houver nenhuma mensagem correspondente.
 */
export function getApiError(
  errorCode: string,
  defaultMessage = 'Não foi possível concluir sua solicitação, por favor tente novamente.'
): string {
  return apiErrosTranslate[errorCode] ?? defaultMessage;
}
