import React from 'react'
import HolidayTop from './holidayTop'
import HolidayCalendar from './holidayCalender'
import { Grid } from '@mui/material'
import CalenderRightCard from './calenderRightCard'

const HoliDayDetails = () => {
  return (
 <>
 <HolidayTop/>
 <Grid container spacing={3}>
    <Grid size={8}>
<HolidayCalendar/>
    </Grid>
    <Grid size={4}>
        <CalenderRightCard/>
    </Grid>

</Grid>
 </>
  )
}

export default HoliDayDetails
