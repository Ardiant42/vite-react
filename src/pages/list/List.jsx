import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Datatable from "../../components/datatable/Datatable";

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          {/* <Widget type="balance"/> */}
        </div>
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default List;