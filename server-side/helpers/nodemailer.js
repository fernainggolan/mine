const nodemailer = require("nodemailer")

function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        service: "gmail",
        secure: true,
        auth: {
            user: "fernainggolanda@gmail.com",
            pass: "fznubcaaegqfgqwz"
        },
        debug: true,
        logger: true,
    })
    const option = {
        from: "fernainggolanda@gmail.com",
        to: email,
        subject: "Success create Account!",
        text: "Your motorcycle is ready!",
        html: `Congrats, your account has been created!`
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(option, (err, info) => {
            if(err) {
                console.log(err);
                reject(err)
            }
            resolve("success")
            console.log("sent: " + info);
        })
    })
}

module.exports = {sendEmail}