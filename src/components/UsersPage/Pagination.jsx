import React from "react";

const Pagination = (props) => {
  let numbers = [];
  let numberOfPage = Math.ceil(props.totalUsers / props.usersPerPage);
  for (let i = 1; i <= numberOfPage; i++) {
    numbers.push(i);
  }
  return (
    <div>
      {numbers.map((n) => (
        <button onClick={props.paginate({n})}>{n}</button>
      ))}
    </div>
  );
};
export default Pagination;
