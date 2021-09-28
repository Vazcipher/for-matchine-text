import React from 'react'
import './sidebar.css'
import Avatar from 'react-avatar'

export default function SideBar() {
    return (
        <div>
            <div className="sidebar_main">
                <div className="avatars">
                    <Avatar className="avatar" src="https://media.istockphoto.com/vectors/young-indian-business-woman-wearing-traditional-indian-costume-vector-id918643660?s=612x612" size="50" round={true} />
                    <Avatar className="avatar"src="https://media.istockphoto.com/vectors/vector-cheerful-smiling-girl-in-cartoon-flat-style-vector-id942676954?s=612x612" size="50" round={true} />
                    <Avatar className="avatar" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" size="50" round={true} />
                    <Avatar className="avatar" src="https://media.istockphoto.com/vectors/vector-cheerful-smiling-girl-in-cartoon-flat-style-vector-id942676954?s=612x612" size="50" round={true} />
                    <Avatar className="avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" size="50" round={true} />
                    <Avatar className="avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" size="50" round={true} />

                    <Avatar className="avatar" src="https://media.istockphoto.com/vectors/brownhaired-girl-with-red-lips-short-bob-haircut-face-of-young-pretty-vector-id1289192601?s=612x612" size="50" round={true} />

                </div>
            </div>
        </div>
    )
}
