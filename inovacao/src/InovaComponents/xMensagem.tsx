import { Box, Modal, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'
import React from 'react'

export default function Mensagem () {
  return (
    <>

      <Modal
        open={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </>
  )
}