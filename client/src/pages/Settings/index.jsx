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
import SettingsIcon from '@mui/icons-material/Settings';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { setInterval, start, stop, getConfig } from "../../api";

const theme = createTheme()

export default function Settings() {
    const [type, setType] = React.useState('');
    const [time, setTime] = React.useState('');

    React.useEffect(() => {
        async function fetchData() {
            const config = await getConfig()
            if (config) {
                setType(config.data.data.timeUnit)
                setTime(config.data.data.intervalDuration)

                console.log("new data: ", config.data.data)
            }

        }
        fetchData();
    },[])

    const handleChange = (event) => {
        setType(event.target.value);
    };
    const handleOnTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleStart = async () => {
        let response = await start()
        console.log('response:', response)
    }

    const handleStop = async () => {
        let response = await stop()
        console.log('response:', response)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = {
            "intervalDuration": time,
            "timeUnit": type
        }
        console.log("data: ", data)
        let response = await setInterval(data)
        console.log('response:', response)
    }
    console.log(time,type)
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
                        <SettingsIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Settings
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <div style={{ position: 'relative' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="number"
                                value={time}
                                onChange={handleOnTimeChange}
                                id="interval"
                                label="Time Interval"
                                name="interval"
                                autoComplete="interval"
                                placeholder='Set Time Interval'
                                autoFocus
                            />
                            <Select
                                labelId="time"
                                id="demo-simple-select"
                                value={type}
                                label="Time"
                                onChange={handleChange}
                                style={{ position: 'absolute', top: '15px', right: '0px' }}
                            >
                                <MenuItem value='sec'>sec</MenuItem>
                                <MenuItem value='min'>min</MenuItem>
                                <MenuItem value='hour'>hour</MenuItem>
                            </Select>

                        </div>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, }}
                        >
                            Set Interval
                        </Button>
                        <Button
                            onClick={handleStart}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, }}
                        >
                            Start
                        </Button>
                        <Button
                            onClick={handleStop}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, }}
                        >
                            Stop
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    )
}
