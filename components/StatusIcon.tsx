export default function StatusIcon({ kind = "info" }:{ kind?: "attention"|"info"|"stop"|"help" }) {
  const map:any = { attention: "⚠️", info: "ℹ️", stop: "🛑", help: "❓" };
  return <span title={kind} aria-label={kind} style={{fontSize:"1rem"}}>{map[kind] ?? "ℹ️"}</span>;
}
