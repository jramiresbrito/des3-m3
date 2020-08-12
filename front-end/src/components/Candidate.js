import React from 'react';
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';

export default function Candidate({ candidate, position }) {
  const { id, name, votes, percentage, popularity } = candidate;
  const source = `${id}.jpg`;

  return (
    <div>
      <Position>{position}</Position>
      <Picture source={source} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes>{votes}</Votes>
        <Percentage>{percentage}</Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
