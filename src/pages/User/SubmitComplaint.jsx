import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/authProvider';
import AllComplaintNew from '../../Components/AllComplaintNew/AllComplaintNew';
const SubmitComplaint = () => {
const {user} = useContext(AuthContext);
console.log(user)
    return (
        <div>
            <></>
            <AllComplaintNew user={user}></AllComplaintNew>
        </div>
    );
};

export default SubmitComplaint;