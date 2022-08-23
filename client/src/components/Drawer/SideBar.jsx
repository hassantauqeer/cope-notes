import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div
            style={{
                // paddingTop:'10px',
                minWidth: '250px',
                display: 'flex',
                flexDirection: 'column',
                // rowGap: '10px',
                backgroundColor: '#F4F4F4',
            }}
        >
            <Link to="/register" style={{ textDecoration: 'none', }}>
                <Button
                    // variant="contained"
                    style={{
                        width: '100%',
                        padding: '20px',
                        borderRadius: '0px',
                        fontWeight: 'bold',
                        paddingRight: '130px'
                        // backgroundColor: '#F4F4F2',
                    }}
                >
                    Register
                </Button>
            </Link>
            <Link to="/message" style={{ width: '100%', textDecoration: 'none', }}>
                <Button
                    // variant="contained"
                    style={{
                        width: '100%',
                        padding: '20px',
                        borderRadius: '0px',
                        fontWeight: 'bold',
                        paddingRight: '130px'
                        // backgroundColor: '#F4F4F2',
                    }}
                >
                    Message
                </Button>
            </Link>
            <Link to="/settings" style={{ textDecoration: 'none', }}>
                <Button
                    // variant="contained"
                    style={{
                        width: '100%',
                        padding: '20px',
                        borderRadius: '0px',
                        fontWeight: 'bold',
                        paddingRight: '130px'
                        // backgroundColor: '#F4F4F2',
                    }}
                >
                    Setting
                </Button>
            </Link>
        </div>
    )
}

export default SideBar