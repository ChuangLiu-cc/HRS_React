import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import './ReservationForm.css'
import { Grid } from '@mui/material';

const ReservationForm = (props) => {
    
    const [open,setOpen] = React.useState(() => props.openDialog);
    const [arrivalDate, setArrivalDate] = React.useState(() => props.data.stay.arrivalDate);
    const [departureDate, setDepatureDate] = React.useState(() => props.data.stay.departureDate);
    const [roomSize, setRoomSize] = React.useState(() => props.data.room.roomSize);
    const [extra, setExtra] = React.useState(() => props.data.extras);
    const [payment, setPayment] = React.useState(() => props.data.payment)
    const [roomQuantity, setRoomQuantity] = React.useState(() => props.data.room.roomQuantity);
    const [firstName, setFirstName] = React.useState(() => props.data.firstName);
    const [lastName, setLastName] = React.useState(() => props.data.lastName);
    const [email, setEmail] = React.useState(() => props.data.email);
    const [phone, setPhone] = React.useState(() => props.data.phone);
    const [streetName, setStreetName] = React.useState(() => props.data.addressStreet.streetName);
    const [streetNumber, setStreetNumber] = React.useState(() => props.data.addressStreet.streetNumber);
    const [zipCode, setZipCode] = React.useState(() => props.data.addressLocation.zipCode);
    const [state, setState] = React.useState(() => props.data.addressLocation.state);
    const [city, setCity] = React.useState(() => props.data.addressLocation.city);
    const [note, setNote] = React.useState(() => props.data.note);
    const [reminder, setReminder] = React.useState(() => props.data.reminder);
    const [newsletter, setNewsletter] = React.useState(() => props.data.newsletter);
    const [confirm, setConfirm] = React.useState(() => props.data.confirm);

    //const [tags, setTags] = React.useState(() => props.data.tags);
    let tags = props.data.tags;
    const stateList = [
        {
          "name": "Alabama",
          "abbreviation": "AL"
        },
        {
          "name": "Alaska",
          "abbreviation": "AK"
        },
        {
          "name": "American Samoa",
          "abbreviation": "AS"
        },
        {
          "name": "Arizona",
          "abbreviation": "AZ"
        },
        {
          "name": "Arkansas",
          "abbreviation": "AR"
        },
        {
          "name": "California",
          "abbreviation": "CA"
        },
        {
          "name": "Colorado",
          "abbreviation": "CO"
        },
        {
          "name": "Connecticut",
          "abbreviation": "CT"
        },
        {
          "name": "Delaware",
          "abbreviation": "DE"
        },
        {
          "name": "District Of Columbia",
          "abbreviation": "DC"
        },
        {
          "name": "Federated States Of Micronesia",
          "abbreviation": "FM"
        },
        {
          "name": "Florida",
          "abbreviation": "FL"
        },
        {
          "name": "Georgia",
          "abbreviation": "GA"
        },
        {
          "name": "Guam",
          "abbreviation": "GU"
        },
        {
          "name": "Hawaii",
          "abbreviation": "HI"
        },
        {
          "name": "Idaho",
          "abbreviation": "ID"
        },
        {
          "name": "Illinois",
          "abbreviation": "IL"
        },
        {
          "name": "Indiana",
          "abbreviation": "IN"
        },
        {
          "name": "Iowa",
          "abbreviation": "IA"
        },
        {
          "name": "Kansas",
          "abbreviation": "KS"
        },
        {
          "name": "Kentucky",
          "abbreviation": "KY"
        },
        {
          "name": "Louisiana",
          "abbreviation": "LA"
        },
        {
          "name": "Maine",
          "abbreviation": "ME"
        },
        {
          "name": "Marshall Islands",
          "abbreviation": "MH"
        },
        {
          "name": "Maryland",
          "abbreviation": "MD"
        },
        {
          "name": "Massachusetts",
          "abbreviation": "MA"
        },
        {
          "name": "Michigan",
          "abbreviation": "MI"
        },
        {
          "name": "Minnesota",
          "abbreviation": "MN"
        },
        {
          "name": "Mississippi",
          "abbreviation": "MS"
        },
        {
          "name": "Missouri",
          "abbreviation": "MO"
        },
        {
          "name": "Montana",
          "abbreviation": "MT"
        },
        {
          "name": "Nebraska",
          "abbreviation": "NE"
        },
        {
          "name": "Nevada",
          "abbreviation": "NV"
        },
        {
          "name": "New Hampshire",
          "abbreviation": "NH"
        },
        {
          "name": "New Jersey",
          "abbreviation": "NJ"
        },
        {
          "name": "New Mexico",
          "abbreviation": "NM"
        },
        {
          "name": "New York",
          "abbreviation": "NY"
        },
        {
          "name": "North Carolina",
          "abbreviation": "NC"
        },
        {
          "name": "North Dakota",
          "abbreviation": "ND"
        },
        {
          "name": "Northern Mariana Islands",
          "abbreviation": "MP"
        },
        {
          "name": "Ohio",
          "abbreviation": "OH"
        },
        {
          "name": "Oklahoma",
          "abbreviation": "OK"
        },
        {
          "name": "Oregon",
          "abbreviation": "OR"
        },
        {
          "name": "Palau",
          "abbreviation": "PW"
        },
        {
          "name": "Pennsylvania",
          "abbreviation": "PA"
        },
        {
          "name": "Puerto Rico",
          "abbreviation": "PR"
        },
        {
          "name": "Rhode Island",
          "abbreviation": "RI"
        },
        {
          "name": "South Carolina",
          "abbreviation": "SC"
        },
        {
          "name": "South Dakota",
          "abbreviation": "SD"
        },
        {
          "name": "Tennessee",
          "abbreviation": "TN"
        },
        {
          "name": "Texas",
          "abbreviation": "TX"
        },
        {
          "name": "Utah",
          "abbreviation": "UT"
        },
        {
          "name": "Vermont",
          "abbreviation": "VT"
        },
        {
          "name": "Virgin Islands",
          "abbreviation": "VI"
        },
        {
          "name": "Virginia",
          "abbreviation": "VA"
        },
        {
          "name": "Washington",
          "abbreviation": "WA"
        },
        {
          "name": "West Virginia",
          "abbreviation": "WV"
        },
        {
          "name": "Wisconsin",
          "abbreviation": "WI"
        },
        {
          "name": "Wyoming",
          "abbreviation": "WY"
        }
    ];


    const roomSizes = [
        {value: "business-suite", label: "Business Suite"},
        {value: "presidential-suite", label: "Presidential Suite"}
    ];
    const extras = [
        {value:'extraBreakfast', label: 'Breakfast'},
        {value:'extraTV', label: 'TV'},
        {value:'extraWiFi', label: 'WiFi'},
        {value:'extraParking', label: 'Parking'},
        {value:'extraBalcony', label: 'Balcony'}
    ]
    const payments = [
        {value: 'cc', label: 'Credit Card'},
        {value: 'pp', label: 'PayPal'},
        {value: 'cash', label: 'Cash'},
        {value: 'bc', label: 'Bitcoin'}
    ]
    const handleRoomSelect = (event) => {
        setRoomSize(event.target.value);
    }
    const handleExtraSelect = (event) => {
        setExtra(event.target.value);
    }
    const handlePayment = (event) => {
        setPayment(event.target.value);
    }
    const handleRoomQuantity = (event) => {
        setRoomQuantity(event.target.value);
    }
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleStreetName = (event) => {
        setStreetName(event.target.value);
    }
    const handleStreetNumber = (event) => {
        setStreetNumber(event.target.value);
    }
    const handleZipCode = (event) => {
        setZipCode(event.target.value);
    }
    const handleState = (event) => {
        setState(event.target.value);
    }
    const handleCity = (event) => {
        setCity(event.target.value);
    }
    const handleNote = (event) => {
        setNote(event.target.value);
    }
    const handleReminder = (event) => {
        setReminder(event.target.checked);
    }
    const handleNewsletter = (event) => {
        setNewsletter(event.target.checked);
    }
    const handleConfirm = (event) => {
        setConfirm(event.target.checked);
    }
    const handleClose = () => {
        setOpen(false);
        props.resultlistCallback(false);
    };
  return (
    <div className='pop-dialog-container'>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
            <DialogTitle></DialogTitle>
            <DialogContent>
                <br />
                <div>
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Date of Arrival "
                                    name="arrival"
                                    value={arrivalDate}
                                    onChange={(newValue) => {
                                        setArrivalDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params}  variant="standard" />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns} className='departure-date-picker'>
                                <DesktopDatePicker
                                    label="Date of Departure "
                                    name="departure"
                                    value={departureDate}
                                    onChange={(newValue) => {
                                        setDepatureDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} variant="standard"  />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </div>
                <br />
                <div>
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
                                <InputLabel id="room-size-label">Room Size</InputLabel>
                                <Select
                                    onChange={handleRoomSelect}
                                    value={roomSize}
                                    label="Room Size"
                                >
                                    {roomSizes.map((r) => (
                                        <MenuItem
                                        key={r.value}
                                        value={r.value}
                                        >
                                        {r.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>Choose a room type</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item style ={{width: '15%'}}>
                            <TextField className='room-quantity' type="number" label="Room Quantity" variant="standard" inputProps={{ min: 1, max: 5 }} value={roomQuantity} onChange={handleRoomQuantity} />
                            <FormHelperText>Maximum:5</FormHelperText>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <TextField type="text"  label="First Name" variant="standard" value={firstName} onChange={handleFirstName} />
                </div>
                <br />
                <div>
                    <TextField type="text"  label="Last Name" variant="standard" value={lastName} onChange={handleLastName} />
                </div>
                <br />
                <div>
                    <TextField type="email" label="Email" variant="standard" value={email} onChange={handleEmail} />
                </div>
                <br />
                <div>
                    {/* <TextField id="phone" type="tel" label="Phone"  variant="standard" value={phone} onChange={handlePhone}
                    startAdornment={<InputAdornment position="start">+</InputAdornment>} /> */}
                    <FormControl variant="standard" >
                        <InputLabel>Phone</InputLabel>
                        <Input value={phone} onChange={handlePhone}
                        startAdornment={
                            <InputAdornment position="start">+</InputAdornment>
                        }
                        />
                        <FormHelperText>Add your country code first</FormHelperText>
                    </FormControl>
                </div>
                <br/>
                <div>
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item>
                            <TextField type="text"  label="Street Name" variant="standard" value={streetName} onChange={handleStreetName} />
                        </Grid>
                        <Grid item>
                            <TextField type="text"  label="Street Number" variant="standard" value={streetNumber} onChange={handleStreetNumber} />
                        </Grid>
                    </Grid>
                </div>
                <br/>
                <div>
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item>
                            <TextField type="text"  label="ZIP" variant="standard" value={zipCode} onChange={handleZipCode} />
                        </Grid>
                        <Grid item>
                            {/* <TextField type="text"  label="State" variant="standard" value={state} onChange={handleState} /> */}
                            <Autocomplete
                                freeSolo
                                options={stateList.map((option) => option.name)}
                                defaultValue={state}
                                style={{ width: 200 }}
                                renderInput={(params) => <TextField {...params} label="State" variant="standard" value={state} onChange={handleState}/>}
                            />
                            <FormHelperText>Autocomplete</FormHelperText>
                        </Grid>
                        <Grid item>
                            <TextField type="text"  label="City" variant="standard" value={city} onChange={handleCity} />
                        </Grid>
                    </Grid>
                </div>
                <br/>
                <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="room-size-label">Extras</InputLabel>
                        <Select
                            onChange={handleExtraSelect}
                            value={extra}
                            multiple
                            label="Extras"
                        >
                            {extras.map((extra, i) => (
                                <MenuItem
                                key={i}
                                value={extra.value}
                                >
                                {extra.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <br/>
                <div>
                    <FormControl>
                        <RadioGroup row value={payment} onChange={handlePayment}>
                            {
                                payments.map(function(payment, i){
                                    return <FormControlLabel key={i} value={payment.value} control={<Radio />} label={payment.label} />
                                })
                            }
                            {/* <FormControlLabel value="cc" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="pp" control={<Radio />} label="PayPal" />
                            <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                            <FormControlLabel value="bc" control={<Radio />} label="Bitcoin" /> */}
                        </RadioGroup>
                    </FormControl>
                </div>
                <br/>
                <div>
                    <TextField type="text"  label="Personal Note" variant="standard" value={note} onChange={handleNote} />
                </div>
                <br/>
                <div>
                    <Autocomplete
                        style={{ margin: "10px 0" }}
                        multiple
                        options={[]}
                        defaultValue={[...tags]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip variant="standard" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Tags"
                                variant="standard"
                            />
                        )}
                    />
                </div>
                <br/>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={reminder} onChange={handleReminder} />} label="Send me a reminder" />
                        <FormControlLabel control={<Switch checked={newsletter} onChange={handleNewsletter}/>} label="Subscribe to newsletter" />
                    </FormGroup>
                </div>
                <br/>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={confirm} onChange={handleConfirm} />} label="I confirm the information given above" />
                    </FormGroup>
                </div>
            </DialogContent>
        </Dialog>

    </div>
  )
}

export default ReservationForm