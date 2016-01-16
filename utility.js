function buildCalendar() {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var dates = ['1/18', '1/19', '1/20', '1/21', '1/22'];
  var hours = ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  
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
