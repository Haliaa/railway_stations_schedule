import {useState} from "react";
import TextField from "@mui/material/TextField";
import {List} from './List';
import "./SearchStation.css";

export const SearchStation = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = async (e) => {
        let lowerCase =  e.target.value.toLowerCase();
         setInputText(lowerCase);
    };

    return (
        <div className="main">
            <h1>Choose station:</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            <List input={inputText}/>
        </div>
    );
}
