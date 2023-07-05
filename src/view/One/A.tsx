function A() {
  const arrList = [
    { userName: "Amy", id: "001" },
    { userName: "Bmy", id: "002" },
    { userName: "Cmy", id: "003" },
  ];

  const AListData = arrList.map((item) => (
    <div key={item.id}>
      {item.id} - {item.userName}
    </div>
  ));

  return (
    <>
      <h3> AList </h3>
      {AListData}
    </>
  );
}

export default A;
