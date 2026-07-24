import nodemailer from 'nodemailer';

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "thegetsetgoholidays@gmail.com",
      pass: "tuclevznrgtghjeu",
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
  });
}

export async function sendBookingConfirmation({ name, email, phone, persons }) {
  const customerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #1a73e8, #0d47a1); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
      </div>
      <div style="background: #fff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <p style="font-size: 16px; color: #333;">Dear ${name},</p>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Thank you for choosing <strong>The Get Set Go Holidays</strong>! We have received your booking request and one of our travel experts will get in touch with you within the next few business hours.
        </p>
        <div style="background: #f0f7ff; border-left: 4px solid #1a73e8; padding: 16px; margin: 20px 0; border-radius: 6px;">
          <p style="margin: 0 0 8px; font-weight: bold; color: #1a73e8;">Your Booking Summary</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 4px 0; color: #555;">Name:</td><td style="padding: 4px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Phone:</td><td style="padding: 4px 0; font-weight: 600;">+91 ${phone}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Email:</td><td style="padding: 4px 0; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Travelers:</td><td style="padding: 4px 0; font-weight: 600;">${persons}</td></tr>
          </table>
        </div>
        <p style="font-size: 14px; color: #777; line-height: 1.6;">
          Our team operates <strong>Monday to Sunday, 10:00 AM — 8:30 PM</strong>. We look forward to helping you plan an unforgettable trip!
        </p>
        <p style="font-size: 14px; color: #777;">Warm regards,<br><strong>The Get Set Go Holidays Team</strong></p>
      </div>
      <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
        <p>The Get Set Go Holidays | 1138, 11th Floor, Gaur City Mall, Greater Noida West, UP 201318</p>
      </div>
    </div>
  `;

  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"The Get Set Go Holidays" <thegetsetgoholidays@gmail.com>`,
    to: email,
    subject: 'Booking Request Received — Thank You!',
    html: customerHTML,
  });
}

export async function sendBookingNotification({ name, email, phone, persons }) {
  const notificationHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: #e74c3c; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
        <h2 style="color: #fff; margin: 0;">New Booking Request</h2>
      </div>
      <div style="background: #fff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">+91 ${phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Travelers</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${persons}</td></tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Received via the website booking form.</p>
      </div>
    </div>
  `;

  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"The Get Set Go Holidays" <thegetsetgoholidays@gmail.com>`,
    to: "thegetsetgoholidays@gmail.com",
    subject: `New Booking Request from ${name}`,
    html: notificationHTML,
  });
}

export async function sendContactConfirmation({ name, email, phone, destination, message }) {
  const customerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #1a73e8, #0d47a1); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
      </div>
      <div style="background: #fff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <p style="font-size: 16px; color: #333;">Dear ${name},</p>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Thank you for reaching out to <strong>The Get Set Go Holidays</strong>! We have received your enquiry and one of our travel experts will get back to you shortly.
        </p>
        <div style="background: #f0f7ff; border-left: 4px solid #1a73e8; padding: 16px; margin: 20px 0; border-radius: 6px;">
          <p style="margin: 0 0 8px; font-weight: bold; color: #1a73e8;">Your Enquiry Summary</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 4px 0; color: #555;">Name:</td><td style="padding: 4px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Phone:</td><td style="padding: 4px 0; font-weight: 600;">${phone}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Email:</td><td style="padding: 4px 0; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Destination:</td><td style="padding: 4px 0; font-weight: 600;">${destination || 'Not specified'}</td></tr>
            <tr><td style="padding: 4px 0; color: #555;">Message:</td><td style="padding: 4px 0; font-weight: 600;">${message}</td></tr>
          </table>
        </div>
        <p style="font-size: 14px; color: #777; line-height: 1.6;">
          Our team operates <strong>Monday to Sunday, 10:00 AM — 8:30 PM</strong>. We look forward to helping you plan an unforgettable trip!
        </p>
        <p style="font-size: 14px; color: #777;">Warm regards,<br><strong>The Get Set Go Holidays Team</strong></p>
      </div>
      <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
        <p>The Get Set Go Holidays | 1138, 11th Floor, Gaur City Mall, Greater Noida West, UP 201318</p>
      </div>
    </div>
  `;

  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"The Get Set Go Holidays" <thegetsetgoholidays@gmail.com>`,
    to: email,
    subject: 'Enquiry Received — Thank You!',
    html: customerHTML,
  });
}

export async function sendContactNotification({ name, email, phone, destination, message }) {
  const notificationHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: #e74c3c; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
        <h2 style="color: #fff; margin: 0;">New Contact Enquiry</h2>
      </div>
      <div style="background: #fff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Destination</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${destination || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">Message</td><td style="padding: 8px 0; font-weight: 600; border-bottom: 1px solid #eee;">${message}</td></tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Received via the website contact form.</p>
      </div>
    </div>
  `;

  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"The Get Set Go Holidays" <thegetsetgoholidays@gmail.com>`,
    to: "thegetsetgoholidays@gmail.com",
    subject: `New Contact Enquiry from ${name}`,
    html: notificationHTML,
  });
}
