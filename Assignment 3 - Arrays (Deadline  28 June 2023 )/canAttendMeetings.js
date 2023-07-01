function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort intervals by start time
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false; // Overlapping meetings found
      }
    }
  
    return true; // No overlapping meetings
  }
  
  // Example usage:
  const intervals = [[0, 30], [5, 10], [15, 20]];
  const canAttend = canAttendMeetings(intervals);
  console.log(canAttend); // Output: false  