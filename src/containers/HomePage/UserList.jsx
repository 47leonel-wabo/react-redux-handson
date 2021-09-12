import {createSelector} from "reselect";
import {makeSelectUsers} from "./selectors";
import React from "react";
import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";

// getting access to state
const stateSelector = createSelector(makeSelectUsers, users => ({users}))

const UserList = (props) => {

    // accessing user data
    const {users} = useSelector(stateSelector)

    const history = useHistory()

    const isNoUsers = !users || (users && users.length === 0)

    const handleUserClick = (id) => {
        history.push(`/user/${id}`)
        // console.log('User ID', id)
    }

    if (isNoUsers) {
        return null
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
            {
                users.map((user, index) => (
                    <div
                        onClick={()=>handleUserClick(user.id)}
                        style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }} key={index}>
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
                            color: '#282c34',                            margin: 0
                        }}>
                            {user.first_name} {user.last_name}
                        </h3>
                    </div>
                ))
            }
        </div>
    )

}
export default UserList
// export default withRouter(UserList)
