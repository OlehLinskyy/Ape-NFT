import Cards from './Cards/Cards';
import useMediaQuery from 'helpers/useMediaQuery';
const data = [
  {
    title: 'yape drop',
    text: 'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  },
  {
    title: 'new collection',
    text: 'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game',
  },
  {
    title: 'token',
    text: 'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it',
  },
  { title: 'learn more in mind map', link: 'https://www.google.com.ua' },
];

function MindMap() {
  const isTablet = useMediaQuery('(min-width:768px)');
  return (
    <section className={isTablet ? 'container' : 'container_helper'}>
      <h3>mind map</h3>
      <Cards data={data} />
    </section>
  );
}

export default MindMap;
