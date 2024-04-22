export const errorTailorConfig = {
  errors: {
    useValue: {
      required: 'Este campo é requerido.',
      cnpjInvalid: 'O valor informado não é um CNPJ válido.',
      cpfInvalid: 'O valor informado não é um CPF válido.',
      email: 'O valor informado não é um email válido.',
      emailInvalid: 'O valor informado não é um email válido.',
      fullNameInvalid: 'O valor informado precisa ter um nome e sobrenome.',
      passwordMatchInvalid: 'As senhas digitadas não coincidem',
      minlength: ({ requiredLength, actualLength }: any): string =>
        `Tamanho mínimo ${requiredLength}, atual ${actualLength}`,
      mask: 'O valor informado não está no formato correto.',
      date: 'O valor informado não é uma data válida.',
      max: 'O valor informado é maior que o permitido.',
      min: 'O valor informado é menor que o permitido.'
    }
  }
};
