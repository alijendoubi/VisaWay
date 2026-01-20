import { google } from "googleapis";

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

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

export const createCalendarEvent = async ({
  summary,
  description,
  start,
  end,
  attendeeEmail
}: {
  summary: string;
  description: string;
  start: string;
  end: string;
  attendeeEmail: string;
}) => {
  const response = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary,
      description,
      start: { dateTime: start },
      end: { dateTime: end },
      attendees: [{ email: attendeeEmail }]
    }
  });

  return response.data;
};
