import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MessageIcon from '@mui/icons-material/Message'
import { createMessage } from "../../api";

const theme = createTheme()

export default function Message() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    let data = new FormData(event.currentTarget)
    data = {
      message: data.get("message")
    }
    let response = await createMessage(data)
    console.log('response:', response)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
          style={{
            minWidth: '390px',
            backgroundColor: '#F4F4F4',
            padding: '40px',
            borderRadius: '10px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <MessageIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Message
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="message"
              placeholder='Write a message to your Friend'
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Message
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
