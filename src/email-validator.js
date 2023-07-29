export default function validate(email) {
    const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];
  
    for (const e of VALID_EMAIL_ENDINGS) {
      if (email.endsWith(e)) {
        return true;
      }
    }

    return false;
  }
  