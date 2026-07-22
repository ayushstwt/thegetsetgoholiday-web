import { NextResponse } from 'next/server';
import { sendBookingConfirmation, sendBookingNotification } from '../../../lib/mail';

export async function POST(request) {
  try {
    const { name, email, phone, persons } = await request.json();

    if (!name || !email || !phone || !persons) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 },
      );
    }

    try {
      await Promise.all([
        sendBookingConfirmation({ name, email, phone, persons }),
        sendBookingNotification({ name, email, phone, persons }),
      ]);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}
