function buildCalendar(days, dates, hours) {
  var calendarContents = '<tr><th></th>';
  var day;
  for(day in days) {
    calendarContents += '<th>' + days[day] + ' (' + dates[day] + ')</th>';
  }
  calendarContents += '</tr>'

  var hour;
  for(hour in hours) {
    calendarContents += '<tr><td class="firstColumn">' + hours[hour] + '</td>';
    for(day in days) {
      calendarContents += '<td id="' + days[day] + '-' + hours[hour] + '"></td>';
    }
    calendarContents += '</tr>';
  }

  return calendarContents;
}

function escapeSelector( selector ) {
  return selector.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
}