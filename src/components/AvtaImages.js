import React from 'react'
import Avatar from 'react-avatar'
import './avtarImage.css'

export default function AvtaImages() {
    return (
        <div>
            <Avatar className="image" src="https://media.istockphoto.com/vectors/vector-cheerful-smiling-girl-in-cartoon-flat-style-vector-id942676954?s=612x612" size={50}/>
            <Avatar className="image" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" size={50}/>
            <Avatar className="image" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" size={50}/>
            <Avatar className="image" name="Foo Bar" size={50}/>
            <Avatar className="image" name="Foo Bar" size={50}/>
            <Avatar className="image" src="https://media.istockphoto.com/vectors/brownhaired-girl-with-red-lips-short-bob-haircut-face-of-young-pretty-vector-id1289192601?s=612x612" size={50}/>
        </div>
    )
}
