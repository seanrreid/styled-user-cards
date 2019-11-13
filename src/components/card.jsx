import React from "react";
import Styled from "styled-components";

const TheCard = Styled.div`
    border: solid 1px gray;
    border-radius: 8px;
    padding: 8px;
    max-width: 320px;
`;

const Card = ({ user }) => {
  return (
    <TheCard>
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>{user.email}</p>
    </TheCard>
  );
};

export default Card;
