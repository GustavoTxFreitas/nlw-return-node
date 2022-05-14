import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: "54ba2965c53d25",
        pass: "3c0886ad21b590"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Remente <remetente@email.com',
            to: 'Destinatário <destino@email.com>',
            subject,
            html: body
        })
    }
}