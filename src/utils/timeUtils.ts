export interface GymOpenStatus {
  isOpen: boolean;
  statusText: string;
  badgeColor: 'emerald' | 'amber' | 'rose';
  currentDayName: string;
  nextOpenText: string;
}

export function getGymOpenStatus(): GymOpenStatus {
  // Use Intl to get current time in Asia/Karachi (Faisalabad timezone)
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Karachi',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === 'weekday')?.value || 'Saturday';
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '10', 10);

    const isFriday = weekday.toLowerCase() === 'friday';
    // Operating hours: 6:00 AM (06:00) to 12:00 AM (24:00/00:00). Closed 00:00 to 06:00.
    const isWithinHours = hour >= 6 && hour < 24;
    const isOpen = !isFriday && isWithinHours;

    if (isOpen) {
      return {
        isOpen: true,
        statusText: 'OPEN NOW',
        badgeColor: 'emerald',
        currentDayName: weekday,
        nextOpenText: 'Closes at 12:00 AM (Midnight)',
      };
    }

    if (isFriday) {
      return {
        isOpen: false,
        statusText: 'CLOSED TODAY (FRIDAY)',
        badgeColor: 'rose',
        currentDayName: 'Friday',
        nextOpenText: 'Reopens Saturday at 6:00 AM',
      };
    }

    return {
      isOpen: false,
      statusText: 'CLOSED NOW',
      badgeColor: 'amber',
      currentDayName: weekday,
      nextOpenText: 'Opens today at 6:00 AM',
    };
  } catch {
    // Fallback
    return {
      isOpen: true,
      statusText: 'OPEN 6 AM – 12 AM',
      badgeColor: 'emerald',
      currentDayName: 'Saturday',
      nextOpenText: 'Saturday to Thursday (Friday Closed)',
    };
  }
}
