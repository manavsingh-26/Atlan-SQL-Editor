

//Getting all the data from the array
const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((col) => {
    return (
      <tr>
        {keys.map((row) => {
          return <td>{col[row]}</td>;
        })}
      </tr>
    );
  });
};

//Getting Column Names from the array
const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((val) => {
        return <td>{val}</td>;
      })}
    </tr>
  );
};



export { getTableRowsFromData, getTableHeadFromData };
