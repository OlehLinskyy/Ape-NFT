import css from './ContactUs.module.css';
import { ReactComponent as NameIcon } from '../../assets/svg/addsharp.svg';
import { ReactComponent as Discord } from '../../assets/svg/discord.svg';
import { ReactComponent as Metamask } from '../../assets/svg/metamask.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function ContactUs() {
  const [success, setSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    setSuccess(true);
    console.log(data);
    reset();
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  return (
    <section id="mint" className="container">
      <h3>are you in?</h3>
      <div className={css.text}>
        <NameIcon />
      </div>
      <p className={`information ${css.text}`}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div className={css.label}>
            <div className={css.icon}>
              <Discord />
            </div>
            <input
              className={
                errors.discord &&
                errors.discord.type === 'required' &&
                css.patern_border
              }
              type="text"
              name="username"
              placeholder="@USERNAME"
              {...register('discord', {
                required: true,
                pattern: /^(<?|@|!|#)[A-Za-z]{1,22}$/,
              })}
            />
          </div>

          {errors.discord && errors.discord.type === 'required' && (
            <p className="errorMsg">Discord is required</p>
          )}
          {errors.discord && errors.discord.type === 'pattern' && (
            <p className="errorMsg">Wrong Discord</p>
          )}
        </label>
        <label>
          <div className={css.label}>
            <div className={css.icon}>
              <Metamask />
            </div>
            <input
              className={
                errors.discord &&
                errors.discord.type === 'required' &&
                css.patern_border
              }
              type="text"
              name="wallet"
              placeholder="WALLET ADDRESS"
              {...register('metamask', {
                required: true,
                pattern: /^(0x|1x)[A-Za-z0-9]{8,20}$/,
              })}
            />
          </div>

          {errors.metamask && errors.metamask.type === 'required' && (
            <p>Address is required</p>
          )}
          {errors.metamask && errors.metamask.type === 'pattern' && (
            <p>Wrong address</p>
          )}
        </label>
        <button type="submit">
          {errors.discord || errors.metamask
            ? 'error'
            : success
            ? 'minted'
            : 'mint'}
        </button>
      </form>
    </section>
  );
}
export default ContactUs;
