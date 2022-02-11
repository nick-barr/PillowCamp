import React, { useState } from 'react';
import 'react-dates/initialize';
// import '../../../app/assets/stylesheets/datepicker.scss';

import { DateRangePicker } from 'react-dates';

function DateRange() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
 
  return (
    <div className="DRP">
      <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        endDate={endDate}
        endDateId="e_id"
        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate); }}
        focusedInput={focusedInput}
        onFocusChange={e => setFocusedInput(e)}
        displayFormat="MM/DD/YYYY"
      />
    </div>
  );
}

export default DateRange;