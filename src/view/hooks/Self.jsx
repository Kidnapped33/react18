function Cup({guest}) {
  // Bad: changing a preexisting variable!
  return <div>Tea cup for guest #{guest}</div>;
}

function Self() {

  return (
    <>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  );
}

export default Self;
