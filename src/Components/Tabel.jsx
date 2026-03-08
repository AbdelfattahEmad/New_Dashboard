import "../assets/Styles/_tabel.scss";

export default function Table({ children }) {
  return (
    <div className="table-wrapper">
      <table className="custom-table">
        {children}
      </table>
    </div>
  );
}
