import { useState } from 'react';
import Card from './Card/Card';
import MaskGroupOne from '../../assets/png/Mask-group-1.png';
import MaskGroupOne2x from '../../assets/png/Mask-group-1-2x.png';
import MaskGroupTwo from '../../assets/png/Mask-group-2.png';
import MaskGroupTwo2x from '../../assets/png/Mask-group-2-2x.png';
import MaskGroupThree from '../../assets/png/Mask-group-3.png';
import MaskGroupThree2x from '../../assets/png/Mask-group-3-2x.png';
import MaskGroupFour from '../../assets/png/Mask-group-4.png';
import MaskGroupFour2x from '../../assets/png/Mask-group-4-2x.png';

const data = [
  {
    title: 'What is an nft collection?',
    text: 'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
    img: MaskGroupOne,
    img2x: MaskGroupOne2x,
  },
  {
    title: 'How do i purchase nfts from a collection?',
    text: 'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
    img: MaskGroupTwo,
    img2x: MaskGroupTwo2x,
  },
  {
    title: 'Can i sell or trade nfts from a collection?',
    text: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
    img: MaskGroupThree,
    img2x: MaskGroupThree2x,
  },
  {
    title: 'What rights do i have as an owner of an nft?',
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    img: MaskGroupFour,
    img2x: MaskGroupFour2x,
  },
];
function FAQ() {
  const [showId, setShowId] = useState(1);

  function handlePickAnswer(id) {
    setShowId(id);
  }
  return (
    <section id="faq" className="container">
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
