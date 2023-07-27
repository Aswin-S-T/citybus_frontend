import React from 'react'
import { AVATAR_IMAGE } from '../../constats/images';

function NotificationScreen() {
  return (
    <div className="container-fluid">
      <div>
        <p className="DashboardHeading">Notifications</p>
        <p className="DashboardSubHeading">
          Information about your current plan and usages
        </p>
      </div>
      <div className='notificationScreen'>
        <div className="notificationCard p-2 mt-5">
          <div className="notificationHeader">
            <div className="imageHeader">
              <img src={AVATAR_IMAGE} className="avatar-img" />
              <p className="name mt-2 m-2">Stavia</p>
            </div>
            <p className="time">30 min ago</p>
          </div>
          <div className="notificationContent">
            <div className="container-fluid">
              <h5>New Kudos!</h5>
              <p>John Smith gave you kudos on 5 mile run</p>
            </div>
            <div className="container-fluid">
              <a>Read more....</a>
            </div>
          </div>
        </div>
        <div className="notificationCard p-2 mt-5">
          <div className="notificationHeader">
            <div className="imageHeader">
              <img src={AVATAR_IMAGE} className="avatar-img" />
              <p className="name mt-2 m-2">Stavia</p>
            </div>
            <p className="time">30 min ago</p>
          </div>
          <div className="notificationContent">
            <div className="container-fluid">
              <h5>New Kudos!</h5>
              <p>John Smith gave you kudos on 5 mile run</p>
            </div>
            <div className="container-fluid">
              <a>Read more....</a>
            </div>
          </div>
        </div>
        <div className="notificationCard p-2 mt-5">
          <div className="notificationHeader">
            <div className="imageHeader">
              <img src={AVATAR_IMAGE} className="avatar-img" />
              <p className="name mt-2 m-2">Stavia</p>
            </div>
            <p className="time">30 min ago</p>
          </div>
          <div className="notificationContent">
            <div className="container-fluid">
              <h5>New Kudos!</h5>
              <p>John Smith gave you kudos on 5 mile run</p>
            </div>
            <div className="container-fluid">
              <a>Read more....</a>
            </div>
          </div>
        </div>
        <div className="notificationCard p-2 mt-5">
          <div className="notificationHeader">
            <div className="imageHeader">
              <img src={AVATAR_IMAGE} className="avatar-img" />
              <p className="name mt-2 m-2">Stavia</p>
            </div>
            <p className="time">30 min ago</p>
          </div>
          <div className="notificationContent">
            <div className="container-fluid">
              <h5>New Kudos!</h5>
              <p>John Smith gave you kudos on 5 mile run</p>
            </div>
            <div className="container-fluid">
              <a>Read more....</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationScreen