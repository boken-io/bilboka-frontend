const corbadoTranslations = {
  en: {
    authentication: {
      signup: {
        start: {
          header: 'Lag ny bruker',
          subheader: '',
          button_login: '',
          button_submit: 'Registrer',
          textField_name: 'Fullt navn',
          textField_email: 'E-postadresse'
        },
        passkeyCreate: {
          header: 'Sett opp Passkeys',
          headerButton_showPasskeyBenefits: '',
          body: 'Kontoen knyttes til ',
          button_start: 'Lag Passkey',
          button_switchToAlternate: {
            emailOtp: 'Send meg kjedelig engangspassord på mail',
            emailLink: 'Send email magic link'
          },
          button_back: 'Tilbake'
        },
        passkeySuccess: {
          header: '',
          subheader: 'Konto opprettet',
          body_text1: 'Husk å bekreft e-postadressen din',
          body_text2: {
            emailOtp: '',
            emailLink: ''
          },
          body_text3: '',
          button: 'Fortsett'
        }
      },
      login: {
        start: {
          header: 'Logg inn',
          subheader: '',
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
