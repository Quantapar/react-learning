// real wrapper , 99% of the time we will not use this
// function App() {
//   return (
//     <>
//       {" "}
//       <CardWrapper innnerComp={<TextComp />} />
//       <CardWrapper innnerComp={<TextComp2 />} />
//     </>
//   );
// }

// function TextComp() {
//   return <div>hi there</div>;
// }

// function TextComp2() {
//   return <div>hi there 2</div>;
// }

// function CardWrapper({ innnerComp }: any) {
//   return <div style={{ border: "2px solid black" }}>{innnerComp}</div>;
// }

function App() {
  return (
    <>
      <CardWrapper> hi there</CardWrapper>
    </>
  );
}

function CardWrapper({ children }: any) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default App;
