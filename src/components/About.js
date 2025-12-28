import { useEffect,useState } from "react";

const About =() => {

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
         fetchData();
    }, []);

    const fetchData = async()=> {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        setUserInfo(json);
    }

    return (
        <div>
            <h1>{userInfo.name}</h1>
            <img src={userInfo.avatar_url} alt="User Avatar" width="200px"/>
            <h3>Followers: {userInfo.followers}</h3>
            <h3>Following: {userInfo.following}</h3>
            <h3>Public Repos: {userInfo.public_repos}</h3>
            <h3>Location: {userInfo.location}</h3>
            <h3>Company: {userInfo.company}</h3>
        </div>
    );
}
export default About;
