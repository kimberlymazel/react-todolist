import React from 'react'
import Box from '@mui/material/Box'

{/* COMPONENT FOR MY INFORMATION */}

function Footer() {
  return (
    <div>
      
      {/* BOX KEEPS FOOTER AT THE BOTTOM OF THE PAGE */}

        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <h4>Kimberly Mazel</h4>
            <h5>2502022250</h5>
        </Box>
    </div>
  )
}

export default Footer