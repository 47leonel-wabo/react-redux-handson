import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import {createSelector} from "reselect";
import {makeSelectUser} from "./selectors";
import {setUser} from "./UserPageActions";
import {useDispatch, useSelector} from "react-redux";

const stateSelector = createSelector(makeSelectUser, user => ({user}))
const setUserActionDispatch = dispatch => ({
    setUser: user => dispatch(setUser(user)) // calling setUser from userPageAction
})

export default (props) => {

    const {id} = useParams()
    const {user} = useSelector(stateSelector) // get latest updated user from store
    const {setUser} = setUserActionDispatch(useDispatch())

    const fetchUserByID = async (userID) => {
        const response = await axios.get(`https://reqres.in/api/users/${userID}`).catch(err => console.log(err))
        if (response.data)
            setUser(response.data.data) // store user data (aka dispatch)
        // console.log(response.data.data)
    }

    useEffect(() => {
        if (id && id !== '') {
            fetchUserByID(id)
        }
    }, [])

    console.log(user)

    if (!user){
        return <div>Loading...</div>
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <div style={{
                    width: '7em',
                    height: '7em'
                }}>
                    <img style={{
                        width: '100%',
                        height: '100%'
                    }} src={user.avatar} alt="User"/>
                </div>
                <h3 style={{
                    fontSize: '20px',
                    color: '#282c34', margin: 0
                }}>
                    {user.first_name} {user.last_name}
                </h3>
                <span style={{color: 'tomato'}}>{user.email}</span>
            </div>
        </div>

    )
}
