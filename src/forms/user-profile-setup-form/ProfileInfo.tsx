
import AccountAvatar from "@/components/AccountAvatar";
import { PencilIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileInfo = () => {
  const { user } = useAuth0()
  const [formData, setFormData] = useState({
    firstname: user?.given_name || "",
    lastname: user?.family_name || "",
    birthdate: user?.birthdate || "",
    phone: user?.phone_number || "",
    avatar: user?.picture });

  return (
    <div className="flex gap-12">
      <div>
        <AccountAvatar className="w-36 h-36"/>
        <Link
          to="#"
          className="flex items-center justify-center gap-2 text-white font-bold hover:text-white"
          onClick={() => alert("Clicked")}
        > 
          Change photo                     
          <PencilIcon className="text-white" width={16} />
        </Link>
      </div>
      <div className="w-full">
        <h2 className="text-2xl text-white font-bold">Profile Info</h2>
        <span className="flex gap-2">     
          <input
            type="text"
            placeholder="First name"
            value={formData.firstname}
            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
            className="w-full p-2 border rounded mt-2 text-white bg-alc-gray/50"
          />
          <input
            type="text"
            placeholder="Last name"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            className="w-full p-2 border rounded mt-2 text-white bg-alc-gray/50"
            required
          />
        </span>
        <span>
          <input
            type="date"
            placeholder="Birth date"
            value={formData.birthdate}
            onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
            className="w-full p-2 border rounded mt-2 text-white bg-alc-gray/50"
          />
        </span> 
        <input
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded mt-2 text-white bg-alc-gray/50"
        />
        
      </div>
    </div>
  );
};

export default ProfileInfo;
