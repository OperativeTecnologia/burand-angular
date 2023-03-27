export const errorTailorConfig = {
  errors: {
    useValue: {
      required: 'Este campo é requerido.',
      cnpj: 'O valor informado não é um CNPJ válido.',
      cpf: 'O valor informado não é um CPF válido.',
      email: 'O valor informado não é um email válido.',
      minlength: ({ requiredLength, actualLength }: any): string =>
        `Tamanho mínimo ${requiredLength}, atual ${actualLength}`,
      mask: 'O valor informado não está no formato correto.',
      date: 'O valor informado não é uma data válida.',
      max: 'O valor informado é maior que o permitido.',
      min: 'O valor informado é menor que o permitido.'
    }
  }
};
