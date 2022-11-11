import s from "./Header.module.css";

function Header() {
  return (
    <div className={s["button-group-toggle"]}>
      <input
        type="radio"
        id="radio-walk"
        name="travel-mode"
        value="walk"
        checked
      />
      <label for="radio-walk">Текущий месяц</label>
      <input type="radio" id="radio-drive" name="travel-mode" value="drive" />
      <label for="radio-drive">Предыдущие месяцы</label>
    </div>
  );
}

export default Header;
