import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import React from 'react'

interface CustomInputProps {
    half?: boolean;
    name: string;
    label: string;
    autoFocus?: boolean;
    handleChange: (e: any) => void;
    handleShowPassword?: () => void;
    type?: string;
}
const Input = (props: CustomInputProps) => {

    return (
        <Grid item xs={12} sm={props.half ? 6 : 12}>
            <TextField
                name={props.name}
                onChange={props.handleChange}
                variant="outlined"
                required
                fullWidth
                label={props.label}
                autoFocus={props.autoFocus}
                type={props.type || 'text'}
                InputProps={props.name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={props.handleShowPassword}>
                                {props.type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : undefined}
            />
        </Grid>
    )
}

export default Input
