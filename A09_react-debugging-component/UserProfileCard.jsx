import { useState } from "react";

function UserProfileCard() {
  const userData = {
    name: "Ydrey Ann Ramirez",
    avatarUrl:
      "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-1/525252326_1760934251463362_8743625505607814947_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHu292J6WkPnDrHfaEv0Q9dCPYfq4-KW8sI9h-rj4pby0SV3a3qccbPHQQ00ygCmutCEbZQ3bN8KDLXTotHM9U3&_nc_ohc=P_y6IFd0fkIQ7kNvwHPy38T&_nc_oc=AdptV6ALv_K2jsDwIsK2g12sEqbHB2HxMQAeje2kt8d8_YuTDKuBICMoHAKbE6shZJA&_nc_zt=24&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=vV21yH0xRUeEa7JnayyJiA&_nc_ss=7b2a8&oh=00_AQDD0ZGYla7UgSrtMi7u5y4m8zsAr_j7qPW1r3s_D1r3wQ&oe=6A68F01B", // sample avatar
    bio: "BSIS 3 student",
    skills: ["Canva", "React", "JavaScript", "HTML", "CSS"],
    isOnline: true,
    lastUpdated: "1 minute ago",
  };

  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavoriteToggle() {
    setIsFavorited((prev) => !prev);
  }

  return (
    <>
      <div className="profile-card">
        <img src={userData.avatarUrl} />

        <h2>{userData.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{userData.bio}</p>

        <h3>Skills</h3>
        <ul>
          {userData.skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>

        {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>

        {userData.isOnline && (
          <button onClick={handleFavoriteToggle}>
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        )}
      </div>
      <p className="footer">Card last updated: {userData.lastUpdated}</p>
    </>
  );
}

export default UserProfileCard;