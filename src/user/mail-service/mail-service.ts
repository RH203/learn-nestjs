export class MailService {
  sayMail() {
    console.info('Mailservice');
  }
}

export function mailService(): MailService {
  return new MailService();
}
