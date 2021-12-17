import React from "react";
import '../../App.css';
import {Redirect} from "react-router-dom";

function EditTourPage () {
    alert('Для редактирования тура необходимо пройти авторизацию');
    return (
        <Redirect to='/log-in' />
    )
}

export default EditTourPage;