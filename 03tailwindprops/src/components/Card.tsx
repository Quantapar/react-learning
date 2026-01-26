type CardProps = {
  shoename: string;
}; // type defined for props
export function Card(props: CardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      {/* use of props */}
      <div className="card-body">
        <h2 className="card-title">{props.shoename || "nike"}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
