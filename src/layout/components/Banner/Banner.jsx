import Style from './Style.module.scss';

const Banner = () => (
  <div className={Style.Banner}>
    <div className={Style.leftContent}>
      <h1>Dealerz.</h1>
    </div>
    <div className={Style.rightContent}>
      <div className={Style.callCenter}>
        <h2>Call Center</h2>
      </div>
      <div className={Style.shippingsAndReturns} />
    </div>
  </div>
);
export default Banner;
