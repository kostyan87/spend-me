import s from './Header.module.css';

function Header() {
  return (
    <button class={s["current-month__btn"]}>
      <span>Read More</span>
    </button>
  );
}

export default Header;