import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 p-4 font-semibold text-white">
      <h1 className="text-3xl">
        Name : {data.name} | Github Followers : {data.followers}
      </h1>
      <p className="text-xl">Bio : {data.bio}</p>
    </div>
  );
}

export default Github;

export const gitHubLoder = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
