import React from 'react'
import CompanyFilter from './CompanyFilter'
import PoliciesCard from './policiesCard'
import { PolicesData } from './policiesData'
import { Box, Grid } from '@mui/material'
import UploadPolicyCard from './UploadPolicyCard'

const CompanyPoliciesDetails = () => {
  return (
<>
<CompanyFilter/>

<Box sx={{ mt: 4 }}>
  <Grid container spacing={3}>
    {PolicesData.map((policy) => (
      <Grid key={policy.id} size={4}>
        <PoliciesCard {...policy} />
      </Grid>
    ))}

    <Grid size={4}>
      <UploadPolicyCard />
    </Grid>
  </Grid>
</Box>
</>
  )
}

export default CompanyPoliciesDetails
