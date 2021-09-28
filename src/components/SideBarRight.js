import React from 'react'
import './sideBarRight.css'
import Avatar from 'react-avatar'
import AvtaImages from './AvtaImages'

export default function SideBarRight() {
    return (
        <div className="mainSidebarRight">
           <div className="profile">
                <Avatar src="https://media.istockphoto.com/vectors/young-indian-business-woman-wearing-traditional-indian-costume-vector-id918643660?s=612x612" size={60}/>
                <div style={{display:'flex',flexDirection:'column'}}>
                <p className="profileName">Mongi AYOUNI</p>
                <p>Gmarellile</p>
                </div>
           </div>
           <div className="actions">
                <p>Search in conversation</p>
                <p>Block Discussion</p>
                <p>Mark all post read</p>
                <p>Mark as sparm</p>
                <p>Ignor the message</p>
                <p>Archive discussion</p>
           </div>
           <div>
               <h6 className="invite_head">Invite Friends</h6>
           </div>
           <div>
           <h6 className="shared_photos">Shared Photos</h6>
                <AvtaImages/>
           </div>
        </div>
    )
}
