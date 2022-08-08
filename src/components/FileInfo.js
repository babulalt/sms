import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export const FileInfo = () => {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Permanent Address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="seemarksheet"
                        name="seemarksheet"
                        label="SEE Marksheet/GradeSheet"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="seecharacter"
                        name="seecharacter"
                        label="SEE Character Certificate"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="marksheet"
                        name="marksheet"
                        label="+2 Marksheet/GradeSheet"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="character"
                        name="character"
                        label="Character Certificate"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="migration"
                        name="migration"
                        label="+2 Migration"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="photo"
                        name="photo"
                        label="Photo"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="photo"
                        name="photo"
                        label="Signature"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*" 
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
