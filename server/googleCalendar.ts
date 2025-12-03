// Google Calendar Integration for MFA booking system
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Calendar not connected');
  }
  return accessToken;
}

async function getCalendarClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

export interface BookingDetails {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  date: string;
  time: string;
  notes?: string;
}

export async function createConsultationBooking(booking: BookingDetails) {
  const calendar = await getCalendarClient();
  
  // Use explicit IST timezone offset (+05:30) to ensure correct time interpretation
  const startDateTime = new Date(`${booking.date}T${booking.time}:00+05:30`);
  const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

  const event = {
    summary: `MFA Consultation: ${booking.name} - ${booking.serviceType}`,
    description: `
Consultation Request from MFA Website

Client: ${booking.name}
Email: ${booking.email}
Company: ${booking.company || 'Not specified'}
Service Interest: ${booking.serviceType}
Notes: ${booking.notes || 'None'}

This is an automated booking from myfavourite.agency
    `.trim(),
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    attendees: [
      { email: booking.email },
      { email: 'avinash@myfavourite.agency' },
      { email: 'Prattyush@myfavourite.agency' },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 30 },
      ],
    },
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    requestBody: event,
    sendUpdates: 'all',
  });

  return response.data;
}

export async function getAvailableSlots(date: string) {
  const calendar = await getCalendarClient();
  
  // Use explicit IST timezone offset (+05:30) to ensure correct time interpretation
  const startOfDay = new Date(`${date}T09:00:00+05:30`);
  const endOfDay = new Date(`${date}T18:00:00+05:30`);

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      timeZone: 'Asia/Kolkata',
      items: [{ id: 'primary' }],
    },
  });

  const busySlots = response.data.calendars?.primary?.busy || [];
  
  const allSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const availableSlots = allSlots.filter(slot => {
    const slotStart = new Date(`${date}T${slot}:00+05:30`);
    const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);
    
    return !busySlots.some(busy => {
      const busyStart = new Date(busy.start!);
      const busyEnd = new Date(busy.end!);
      return slotStart < busyEnd && slotEnd > busyStart;
    });
  });

  return availableSlots;
}
