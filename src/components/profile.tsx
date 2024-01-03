import { LanyardResponse, useLanyard } from 'react-use-lanyard';
import Dropdown from './dropdown';
import { useState, useEffect } from 'react';

const DiscordStatus = () => {
  const [data, setData] = useState<LanyardResponse | null>(null);
  const [, setError] = useState(null);
  const response = useLanyard({ userId: "639720838635061248" });

  useEffect(() => {
    const fetchData = async () => {
      if (response.data !== undefined) {
        setData(response.data);
        setError(response.error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1); // Fetch data every 2 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [response]);

  const status = data?.data.discord_status;
  const username = data?.data.discord_user.username || 'Unknown';
  const activity = data?.data.activities|| 'Unknown';

  const avatarUrl = `https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.webp?size=1024`;

  const statusColors = {
    online: 'green',
    dnd: 'red',
    idle: 'yellow',
    offline: 'grey',
  };
      
  const borderColor = status ? statusColors[status] : 'grey';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh', // This makes sure the div takes the full height of the viewport
      position: 'relative', 
      border: `1px solid ${borderColor}`, 
      borderRadius: '5px', 
      background: 'rgba(46, 46, 46, 0.2)', 
      padding: '10px', 
      margin: '10px', 
      position: 'absolute', 
      top: '0', 
      left: '0', 
      display: 'flex', 
      alignItems: 'center'
    }}>
        <img 
    src={avatarUrl} 
    alt="Discord Avatar" 
    style={{ width: '48px', height: '48px', borderRadius: '50%', marginLeft: '10px', filter: `${borderColor}` }} 
    onError={(e) => {(e.target as HTMLImageElement).src = 'url_of_default_image'}}
  />
  <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
    <h1 style={{fontSize: '20px', textAlign: 'center', color: 'white'}}>{username}</h1>
    <div style={{background: `${borderColor}`, borderRadius: '5px', fontSize: '8px', textAlign: 'center', padding: '1px 4px', width: '20px'}}>
      <p>{status}</p>
    </div>
  </div>
</div>
  )
}

export default DiscordStatus;