import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '',
        pass: ''
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