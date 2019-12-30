import React from "react";
import profile_image from "../../assets/images/profile_image.png";

const ProfileImage = () => {
  return (
    <div>
      <img src={profile_image} alt="" className="profile-image" />
    </div>
  );
};

export default ProfileImage;
