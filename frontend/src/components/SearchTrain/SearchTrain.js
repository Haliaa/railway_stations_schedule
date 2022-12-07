import {useState} from "react";
import TextField from "@mui/material/TextField";
import {List} from './List';
import "./SearchTrain.css";

export const SearchTrain = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = async (e) => {
        let lowerCase =  e.target.value.toLowerCase();
         setInputText(lowerCase);
    };

    return (
        <div className="main">
            <h1>Choose train:</h1>
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
