export class Unauthorized extends Error {
  constructor(message = `vehicle #${'hei'}`) {
    super(message);
    this.name = 'AuthRequiredError';
  }
}
