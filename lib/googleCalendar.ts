import { google } from "googleapis";

const getCalendarClient = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!clientId || !clientSecret || !refreshToken || !calendarId) {
    throw new Error("Missing Google Calendar OAuth env vars");
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oAuth2Client.setCredentials({
    refresh_token: refreshToken
  });

  return {
    calendar: google.calendar({ version: "v3", auth: oAuth2Client }),
    calendarId
  };
};

export const createCalendarEvent = async ({
  summary,
  description,
  start,
  end,
  attendeeEmail,
  bookingId
}: {
  summary: string;
  description: string;
  start: string;
  end: string;
  attendeeEmail: string;
  bookingId: string;
}) => {
  const { calendar, calendarId } = getCalendarClient();
  const response = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary,
      description,
      start: { dateTime: start },
      end: { dateTime: end },
      attendees: [{ email: attendeeEmail }],
      extendedProperties: {
        private: {
          bookingId
        }
      }
    }
  });

  return response.data;
};

export const getCalendarEvent = async (eventId: string) => {
  const { calendar, calendarId } = getCalendarClient();
  const response = await calendar.events.get({ calendarId, eventId });
  return response.data;
};
