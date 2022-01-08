import React from "react";
const addDialog = "ADD-DIALOG";
const updateNewDialogText = "UPDATE-NEW-DIALOG-TEXT";
export const onDialogChangeActionCreator = (dialogText) => ({type: updateNewDialogText, newDialText: dialogText});
export const addDialogActionCreator = () => ({type: addDialog});

let initialState = {
    dialogsData: [
        {id: 1, name: "Dim", avatar: <img src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"} alt={1}/>},
        {id: 2, name: "Andrew", avatar: <img src={"https://cdn.freelance.ru/images/att/1324133_900_600.png"} alt={2}/>},
        {
            id: 3,
            name: "John",
            avatar: <img src={"https://cs14.pikabu.ru/post_img/2021/05/08/12/1620504627134515650.jpg"} alt={3}/>
        },
        {
            id: 4,
            name: "Silver",
            avatar: <img src={"https://cs14.pikabu.ru/post_img/2021/05/08/12/1620504650176973363.webp"} alt={4}/>
        },
        {
            id: 5,
            name: "Pam",
            avatar: <img src={"https://cs13.pikabu.ru/post_img/2020/04/17/11/1587146536174888206.webp"} alt={5}/>
        },
        {
            id: 6,
            name: "Gucci",
            avatar: <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXiLIwZ4MJ4wim5PJAEv-8pjZR6omqL6qFw&usqp=CAU"}
                alt={6}/>
        },
    ],

    messageData: [
        {id: 1, message: "hi"},
        {id: 2, message: "Haw are you?"},
        {id: 3, message: "How do you do?"},
        {id: 4, message: "Yes"},
        {id: 5, message: "hi"},
        {id: 6, message: "hi"},
    ],
    newDialogText: "",
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-DIALOG":
            let newDialog = {
                id: 10,
                message: state.newDialogText
            }
            return {
                ...state,
                messageData: [...state.messageData, newDialog],
                newDialogText: ""
            }
        case "UPDATE-NEW-DIALOG-TEXT":
            return {
                ...state,
                newDialogText: action.newDialText
            }
        default:
            return state;
    }
}
export default messageReducer;
