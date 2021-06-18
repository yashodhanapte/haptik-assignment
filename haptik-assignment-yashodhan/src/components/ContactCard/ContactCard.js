import React, { useState } from 'react';
import './ContactCard.css';
// import { Modal } from 'antd';
import { StarOutlined, StarFilled, DeleteOutlined, DeleteFilled } from '@ant-design/icons';

export const ContactCard = ({ contactData, toggle, handleDelete }) => {
    const [starValue, setStarValue] = useState(contactData.favorite);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleStar = () => {
        setStarValue(starValue === true ? false : true);
        toggle(!starValue, contactData.id);
    }
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
          setIsModalVisible(false);
          
          handleDelete(contactData.id);
          
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
    };
    const deleteFriend = () => {
        handleDelete(contactData.id);
    }
    return (
        <div className='contactCard-container'>
            <div className='contactCard--container__left'>
                <span style={{ fontSize: 20 }}>{contactData.name}</span>
                <span style={{ fontSize: 12 }}>{contactData.designation}</span>
            </div>
            <div className="contactCard--container__right">
                <div className="contactCard--container__right icon-border" onClick={() => toggleStar()}>
                    {contactData.favorite === true ? <StarFilled /> : <StarOutlined />}
                </div>
                <div className="contactCard--container__right icon-border">
                    <DeleteOutlined onClick={deleteFriend}/>
                </div>
            </div>
        </div>
    )
}