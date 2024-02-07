const corbadoTranslations = {
  en: {
    authentication: {
      signup: {
        start: {
          header: '',
          subheader: 'Registrer deg med Passkey og få tilgang raskere',
          button_login: '',
          button_submit: 'Registrer',
          textField_name: 'Fullt navn',
          textField_email: 'E-postadresse'
        }
      },
      login: {
        start: {
          header: '',
          subheader: 'Bruk e-postadressen du registrerte deg med',
          button_signup: '',
          button_submit: 'Logg inn',
          textField_email: 'E-postadresse'
        }
      },
      errors: {
        invalidName: 'Vennligst oppgi en gyldig e-postadresse',
        invalidFullname: 'Vennligst oppgi et gyldig navn',
        userAlreadyExists:
          'Denne e-postadressen er allerede i bruk, vennligst logg inn istedenfor',
        passkeyAlreadyExists: 'Passkey for this device already exists',
        unknownUser: 'Fant ingen bruker med denne e-postadressen',
        invalidOtp: 'Koden er feil',
        unknownError: 'Noe gikk galt, vennligst prøv igjen'
      }
    }
  }
};

export default corbadoTranslations;
