import Card from './Card/Card';
import MaskGroupOne from '../../assets/Mask group-1.png';
import MaskGroupTwo from '../../assets/Mask-group-2.png';
import MaskGroupThree from '../../assets/Mask-group-3.png';
import MaskGroupFour from '../../assets/Mask-group-4.png';
import { useState } from 'react';
const data = [
  {
    title: 'What is an nft collection?',
    text: 'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
    img: MaskGroupOne,
  },
  {
    title: 'How do i purchase nfts from a collection?',
    text: 'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
    img: MaskGroupTwo,
  },
  {
    title: 'Can i sell or trade nfts from a collection?',
    text: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
    img: MaskGroupThree,
  },
  {
    title: 'What rights do i have as an owner of an nft?',
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    img: MaskGroupFour,
  },
];
function FAQ() {
  const [showId, setShowId] = useState(1);

  function handlePickAnswer(id) {
    setShowId(id);
  }
  return (
    <section className="container">
      <h3>faq</h3>
      <ul>
        {data.map((data, id) => (
          <Card
            handlePickAnswer={handlePickAnswer}
            showId={showId}
            key={id}
            data={data}
            id={id + 1}
          />
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
