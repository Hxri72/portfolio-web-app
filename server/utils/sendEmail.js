// Sends me an email when someone uses the contact form.
// Uses Resend's HTTP API because Render's free plan blocks SMTP (Gmail/Nodemailer won't work there).
// If RESEND_API_KEY isn't set (e.g. local dev), it just skips.

const sendContactEmail = async ({ name, email, message }) => {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) {
    console.log("Email not sent: RESEND_API_KEY or NOTIFY_EMAIL is missing");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL,
      reply_to: email, // so I can just hit "Reply"
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend error ${res.status}: ${await res.text()}`);
  }
};

module.exports = sendContactEmail;
