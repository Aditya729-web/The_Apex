import { getAccessToken } from './auth';

export const syncFeeRemindersToCalendar = async (students: any[]) => {
  const token = await getAccessToken();
  if (!token) throw new Error("No Google access token");

  // Format attendees if students have emails
  const attendees = students
    .filter(s => s.email)
    .map(s => ({ email: s.email, displayName: s.name }));

  const event = {
    summary: 'Apex Chemistry - Monthly Fee Reminder',
    description: 'Automated monthly fee reminder for all batches. Students, please check your fees panel to pay the tuition fees.',
    start: {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 5).toISOString().split('T')[0],
    },
    end: {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 6).toISOString().split('T')[0],
    },
    recurrence: [
      'RRULE:FREQ=MONTHLY;BYMONTHDAY=5'
    ],
    attendees: attendees.length > 0 ? attendees : undefined,
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };

  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Failed to sync calendar');
  }

  return await response.json();
};
