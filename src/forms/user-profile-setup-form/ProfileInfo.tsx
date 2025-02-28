import { useState } from "react";

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    avatar: "" });

  return (
    <div>
      <h2 className="text-2xl text-alc-light-gray font-bold">Profile Info</h2>
      <span className="flex gap-2">     
        <input
          type="text"
          placeholder="First name"
          value={formData.firstname}
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          className="w-full p-2 border rounded mt-2 bg-white opacity-50"
        />
        <input
          type="text"
          placeholder="Last name"
          value={formData.lastname}
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          className="w-full p-2 border rounded mt-2 bg-white opacity-50"
        />
      </span>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border rounded mt-2 bg-white opacity-50"
      />

    </div>
  );
};

export default ProfileInfo;
