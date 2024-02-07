export function Notecard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore
        alias illo? Iste, distinctio, minima a inventore nostrum aliquid
        sapiente alias sit odio culpa ducimus pariatur autem explicabo? Dolores,
        dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        laboriosam molestiae ab illo dicta. Pariatur ea laboriosam molestiae
        amet iste quas, earum possimus consectetur harum vitae fugit fuga natus
        eligendi.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
