type propType = {
  id: number;
  title: string;
  desc: string;
};

export function Todo({ id, title, desc }: propType) {
  return (
    <>
      <h3>Id : {id}</h3>
      <div> Title : {title}</div>
      <div>Desc : {desc}</div>
      <br />
    </>
  );
}
