import axios from 'axios';
//import { toast } from "react-toastify";

const baseUrl = "http://34.213.106.173/api/"

export function addNote(data) {
    console.log("create note call",data);

    return axios(baseUrl+'/notes/addNotes', {
        method: "POST",
        headers: {
            "Authorization": localStorage.getItem("token")
        },
        data:data
    })
}

export function getNotes() {
    return axios(baseUrl+'/notes/getNotesList', {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("token")
        },
    })
}

export function noteArray(notesData){
    console.log("Note Date",notesData)
    let notearray=[];
    for(let i=0;i<notesData.length;i++){
        notearray.push(notesData[i]);
    }
    console.log("Noteaaaaa",notearray);

    
    return notearray;
}

