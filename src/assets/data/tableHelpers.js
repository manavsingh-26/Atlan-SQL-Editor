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

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((col) => {
    return (
      <tr>
        <td>{col}</td>
      </tr>
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
