import { NextResponse } from 'next/server';
import { sendContactConfirmation, sendContactNotification } from '../../../lib/mail';

export async function POST(request) {
  try {
    const { name, email, phone, destination, message } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email and phone are required.' },
        { status: 400 },
      );
    }

    try {
      await Promise.all([
        sendContactConfirmation({ name, email, phone, destination, message }),
        sendContactNotification({ name, email, phone, destination, message }),
      ]);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}
