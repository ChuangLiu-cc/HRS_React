import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid"
import './SearchBar.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import records from '../local-json/reservations.json'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ResultList from './ResultList';

const SearchBar = () => {
    const [reservationData, setReservationData] = React.useState([]);
    const [searchResultList, setSearchResultList] = React.useState([]);
    const [searchFinished, setSearchFinished] = React.useState(false);
    const [searchParams, setSearchParams] = React.useState({name:"",email:"",phone:"",note:"",arrivel:null,departure:null,room:null});
    useEffect(()=>{
        setReservationData(records)
    },[])
    //object must set null
    const [arrivalValue, setArrivalValue] = React.useState(null);
    const [departureValue, setDepartureValue] = React.useState(null);
    const [roomSize, setRoomSize] = React.useState(null);
    
    const roomSizes = [
        {value: "business-suite", label: "Business Suite"},
        {value: "presidential-suite", label: "Presidential Suite"}
    ];
    const handleRoomSelect = (event) => {
        setRoomSize(event.target.value);
    }
    const handleSearchParams = (event) => {
        const { name, value } = event.target;
        setSearchParams(searchParams => ({...searchParams, [name]: value}));
    }
    const clearSearchParams = () => {
        setSearchResultList([]);
        setSearchFinished(false);
        setSearchParams({name:"",email:"",phone:"",note:"",arrivel:null,departure:null,room:null});
        setArrivalValue(null);
        setDepartureValue(null);
        setRoomSize(null);
    }
    const searchReservation = () => {
        setSearchFinished(true);
        if(arrivalValue){
            searchParams.arrival = new Date(arrivalValue);
        }
        if(departureValue){
            searchParams.departure = new Date(departureValue);
        }
        if(roomSize){
            searchParams.room = roomSize;
        }

        setSearchResultList(reservationData.filter((r) => {
            return (searchParams.name ? (isStringInclude(r.firstName, searchParams.name) || isStringInclude(r.lastName, searchParams.name)) : true) &&
            (searchParams.email ? isStringInclude(r.email, searchParams.email) : true) &&
            (searchParams.phone ? isStringInclude(r.phone, searchParams.phone) : true) &&
            (searchParams.room ? isStringInclude(r.room.roomSize, searchParams.room) : true) &&
            (searchParams.note ? isStringInclude(r.note, searchParams.note) : true) &&
            (searchParams.arrival ? isDateEqual(r.stay.arrivalDate, searchParams.arrival) : true) &&
            (searchParams.departure ? isDateEqual(r.stay.departureDate, searchParams.departure) : true)
        }));
    }
    const isStringInclude = (originalString, searchString) =>{
        if(!originalString || !searchString) return false;
        if(originalString.toLowerCase().includes(searchString.toLowerCase())){
            return true;
        }
        return false;
    }
    const isDateEqual = (originalDate, searchDate) => {
        if(!originalDate || !searchDate) return false;
        if(new Date(originalDate).getTime() === searchDate.getTime()){
            return true;
        }
        return false;
    }
    return (
        <div>
            <div>
                <h1 data-testid="search-bar-test-1">Reservation Search Page</h1>
                <br />
            </div>
            <div className='search-bar-container'>
                <Grid container direction={"row"} spacing={5} className='search-bar-top'>
                    <Grid item>
                        <TextField id="name" type="text"  label="Name" name="name" data-testid="search-bar-test-2" variant="standard" value={searchParams.name || ""} onChange={handleSearchParams} />
                    </Grid>
                    <Grid item>
                        <TextField id="email" type="email" label="Email" name="email" variant="standard" value={searchParams.email || ""} onChange={handleSearchParams} />
                    </Grid>
                    <Grid item>
                        <TextField id="phone" type="tel" label="Phone" name="phone" variant="standard" value={searchParams.phone || ""} onChange={handleSearchParams} />
                    </Grid>
                    <Grid item>
                        <TextField id="note" type="text" label="Note" name="note" variant="standard" value={searchParams.note || ""} onChange={handleSearchParams} />
                    </Grid>
                </Grid>
                <Grid container direction={"row"} spacing={3} className='search-bar-bottom'>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Arrival"
                                name="arrival"
                                value={arrivalValue}
                                onChange={(newValue) => {
                                    setArrivalValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} variant="standard" />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Departure"
                                value={departureValue}
                                onChange={(newValue) => {
                                    setDepartureValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} variant="standard" />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
                            <InputLabel id="room-size-label">Room Size</InputLabel>
                            <Select
                                onChange={handleRoomSelect}                                
                                value={roomSize || ""}
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
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={searchReservation} >Search</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={clearSearchParams} >Clear</Button>
                    </Grid>
                </Grid>
            </div>
            <br />
            {searchResultList.length > 0 ? (
                    <ResultList  data={searchResultList}/>
                ) : (searchFinished ? (
                        <p style={{marginTop:'2rem', color: 'red'}}>Not Found!</p>
                    ) : null
                )
            }
        </div>
    )
}
export default SearchBar