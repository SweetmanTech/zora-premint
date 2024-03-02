const LinkButton = ({ text, src, href }: any) => (
  <li
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between gap-3"
    onClick={() => window.open(href)}
  >
    {text}
    <div>
      <img height="20" width="20" src={src} />
    </div>
  </li>
);

export default LinkButton;
