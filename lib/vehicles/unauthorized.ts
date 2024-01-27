export class Unauthorized extends Error {
  constructor(
    message = 'Ugyldig bil, eller så har du ikke tilgang. Er dette en feil kan du be personen som eier bilen gi deg tilgang.'
  ) {
    super(message);
    this.name = 'AuthRequiredError';
  }
}
