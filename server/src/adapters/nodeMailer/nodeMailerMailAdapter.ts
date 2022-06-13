import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4d842ad26fcb16",
      pass: "2f3df2e0ad3343"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Gustavo correia <gustavoxky@gmail.com>',
        subject,
        html: body,
    });

    }
}