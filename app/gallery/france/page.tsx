import RegionCard from "../../../components/RegionCard";
import LegendPopover from "../../../components/LegendPopover";
import { gallery } from "../../../content/gallery";

export default function Page(){
  const fr = gallery.countries.find(c => c.code === "fr");
  const regions = fr?.regions ?? [];
  return (
    <section className="gallery-wrap">
      <div style={{display:"flex",gap:12,alignItems:"center",justifyContent:"space-between"}}>
        <h1 style={{margin:0}}>France</h1>
        <LegendPopover />
      </div>

      <div className="cards" style={{marginTop:12}}>
        {regions.map(r => (
          <RegionCard
            key={r.slug}
            href={`/gallery/france/${r.slug}`}
            title={r.name}
            cover={r.cover}
            authority={r.authority}
          />
        ))}
      </div>
    </section>
  );
}
