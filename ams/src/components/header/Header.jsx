import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Appointment</span>
        <span className="headerTitleLg">Management System</span>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="headerImg"
        />
      </div>
    </div>
  );
}
