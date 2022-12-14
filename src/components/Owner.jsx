import React from "react";

const Owner = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="owner">
      <div className="owner__name">
        <p className="owner__firstname">{name.trim()}</p>
        <p className="owner__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="owner__picture" />
    </div>
  );
};

export default Owner;
