export default function Item({ children, href, title }) {
  return (
    <>
      <div class="box">
        <a href={href}>
          <div className="item-img">{children}</div>

          <div class="info">{title}</div>
        </a>
      </div>
    </>
  );
}
