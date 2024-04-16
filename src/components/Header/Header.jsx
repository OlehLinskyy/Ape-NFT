import css from './Header.module.css';
import { ReactComponent as Discord } from '../../assets/svg/Discord-menu.svg';
import { ReactComponent as Logomark } from '../../assets/svg/Logomark-Blue.svg';
import { ReactComponent as Twitter } from '../../assets/svg/Twitter.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import useMediaQuery from 'helpers/useMediaQuery';

function Header() {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px)');
  const [showDialog, setShowDialog] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);
  function handleShowDialog() {
    setShowDialog(!showDialog);
  }
  function goToAnchor(id) {
    let top = 0;
    if (id) {
      const mintElem = document.getElementById(id);
      top = mintElem?.offsetTop || 0;
    }
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
    setShowDialog(false);
  }
  const sections = [
    { name: 'About', anchor: 'about' },
    { name: 'M-MAP', anchor: 'mind_map' },
    { name: 'FAQ', anchor: 'faq' },
    { name: 'ARTS', anchor: 'arts' },
    { name: 'MINT', anchor: 'mint' },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollTop(scrollPosition < 150);
    if (window.innerWidth > 767 && scrollPosition > 149) {
      setShowDialog(false);
    }
    if (window.innerWidth > 767 && scrollPosition < 150) {
      setShowDialog(true);
    }
  };

  useEffect(() => {
    setShowDialog(false);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={css.header}>
      {scrollTop || showDialog ? (
        <button
          type="button"
          className={`${css.logo} ${
            showDialog && (!scrollTop || isMobile) ? css.light : ''
          }`}
          onClick={() => {
            goToAnchor();
          }}
        >
          <a href="/" aria-label="link to main page">
            <Logo />
          </a>
        </button>
      ) : (
        <></>
      )}
      <div className={css.nav}>
        <ul
          className={`${css.list} ${
            ((isMobile && showDialog) || !scrollTop ? css.light : '') || ''
          }`}
        >
          <li>
            {isTablet && (
              <ul className={`${css.nav_list} ${showDialog ? css.active : ''}`}>
                {sections.map((data, id) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => {
                        goToAnchor(data.anchor);
                      }}
                    >
                      {data.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              type="button"
              onClick={handleShowDialog}
              className={(isTablet && showDialog && css.special_menu) || ''}
            >
              {showDialog ? 'Close' : 'Menu'}
            </button>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://discord.com/"
              aria-label="link to discord"
            >
              <Discord />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://opensea.io/"
              aria-label="link to opensea"
            >
              <Logomark />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitter.com/"
              aria-label="link to twitter"
            >
              <Twitter />
            </a>
          </li>
        </ul>
        <Modal isOpen={isMobile && showDialog}>
          <div className={css.nav_list}>
            {sections.map((data, id) => (
              <button
                type="button"
                key={id}
                className={css.anchor}
                onClick={() => {
                  goToAnchor(data.anchor);
                }}
              >
                {data.name}
              </button>
            ))}
            <div className={css.footer}>
              <p>© Yacht ape 2024 all rights reserved</p>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default Header;
