import React, {useEffect} from "react";
import {createSelector} from "reselect";
import {makeSelectUsers} from "./selectors";
import {setUsers} from "./homePageActions";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import UserList from "./UserList";

const stateSelector = createSelector(makeSelectUsers, users => ({users}))

const setUsersActionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users)) // calling setUsers from homePageActions
})

const HomePage = (props) => {

    const {users} = useSelector(stateSelector)
    const {setUser} = setUsersActionDispatch(useDispatch())

    const fetchUsers = async () => {
        const response = await axios.get('https://reqres.in/api/users').catch(error => console.log(error))

        // Once data fetched, send it to redux store
        setUser(response.data.data)
    }

    // once component did mounted
    useEffect(()=>{fetchUsers()}, [])

    console.log(users)

    return (
        <UserList/>
    )
}

export default HomePage
