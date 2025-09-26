import Link from "next/link";

export default function RegionCard({ href, title, cover, authority }:{
  href: string; title: string; cover?: string; authority?: string;
}) {
  return (
    <Link href={href} className="card">
      <img src={cover ?? "/brand/hero-bg.jpg"} alt="" className="card-cover" />
      <div className="card-body">
        <div className="card-title">{title}</div>
        {authority ? <div className="card-meta">{authority}</div> : null}
      </div>
    </Link>
  );
}
