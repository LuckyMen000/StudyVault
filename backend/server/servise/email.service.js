const nodemailer = require('nodemailer')
class EmailService{

    constructor() {
        this.transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure: false,
            auth: {
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationEmail(to,link){
        const htmlContent = `
            <p>Hello!</p>
            <p>Please click the following link to activate your account:</p>
            <a href="${link}">${link}</a>
            <p>Best regards,<br/>Your Application</p>
        `;


        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject:'Activate account in' + process.env.API_URL,
            text:'',
            html:htmlContent


        })
    }
}

module.exports = new EmailService()