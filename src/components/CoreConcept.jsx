import "./../data";
export default function CoreConcepts({ img, title, description }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
