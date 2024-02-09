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
        emailOtp: {
          header: 'You got mail!',
          body_text1: 'Du skal ha mottatt en e-post med engangspassord på ',
          body_text2: '.',
          button_verify: 'Fullfør',
          button_sendOtpAgain: 'Send engangspassord på nytt',
          button_back: 'Avbryt'
        },
        passkeyCreate: {
          header: 'Sett opp Passkeys',
          headerButton_showPasskeyBenefits: '',
          body: 'Kontoen knyttes til ',
          button_start: 'Lag Passkey',
          button_switchToAlternate: {
            emailOtp: 'Send engangspassord på mail',
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
        },
        passkeyBenefits: {
          header: 'Passkeys',
          body_introduction:
            'Med Passkeys trenger du ikke huske passord lengre fordi du logger inn med ',
          body_loginMethods: 'Face ID, Touch ID eller telefonkoden din.',
          button_start: 'Aktiver',
          button_skip: 'Kanskje senere'
        },
        passkeyError: {
          header: 'Oops',
          body_errorMessage: 'Opprett av Passkeys feilet. ',
          button_showPasskeyBenefits: '',
          body_tryAgainMessage: {
            emailOtp:
              'Prøv igjen, eller avbryt. Du kan fortsatt logge inn med engangspassord.',
            emailLink:
              'Prøv igjen, eller avbryt. Du kan fortsatt logge inn med innlogginslenke.'
          },
          button_switchToAlternate: {
            emailOtp: 'Send engangspassord på mail',
            emailLink: 'Send innlogginslenke på mail'
          },
          button_retry: 'Prøv igjen',
          button_back: 'Tilbake',
          button_cancel: 'Fullfør registrering uten Passkeys'
        },
        passkeyAppend: {
          header: 'Logg inn raskere med Passkeys',
          button_showPasskeyBenefits: '',
          button_start: 'Aktiver',
          button_skip: 'Kanskje senere'
        }
      },
      login: {
        start: {
          header: 'Logg inn',
          subheader: '',
          button_signup: '',
          button_submit: 'Logg inn',
          textField_email: 'E-postadresse'
        },
        emailOtp: {
          header: 'You got mail!',
          body_text1: 'Du skal ha mottatt en e-post med engangspassord på ',
          body_text2: '',
          button_verify: 'Logg inn',
          button_sendOtpAgain: 'Send engangspassord på nytt',
          button_back: 'Avbryt'
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
        unknownError: 'Noe gikk galt, vennligst prøv igjen',
        conditionalUiUnconfirmedCredential:
          'Du har ikke bekreftet din e-postadresse enda, vennligst skriv inn e-postadressen manuelt og logg inn.'
      }
    }
  }
};

export default corbadoTranslations;
