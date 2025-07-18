interface TooltipProps {
  coord: { x: number; y: number };
  variety: string;
  ha: string;
  name: string;
}
export default function Tooltip({ coord, name, ha, variety }: TooltipProps) {
  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-full font-alegreya-sans flex flex-col items-center
                 rounded-xs bg-blue px-4 py-1 text-xs text-white
                 whitespace-nowrap hover:z-50 scale-75 origin-bottom transition-all maptooltip cursor-default group"
      style={{
        left: `${coord.x}%`,
        top: `${coord.y}%`,
      }}
    >
      <span className="text-gold-light text-sm font-bold -mb-1">
        {variety.split(":")[0]}
      </span>
      <div className="flex flex-col items-center justify-center scale-0 h-2 group-hover:scale-100 group-hover:h-auto">
        <span className="text-xs italic">{name}</span>
        <span className="text-xs">({ha} ha)</span>
      </div>
      <div className="absolute h-4 w-4 rotate-45 bg-blue-dark -bottom-2 -z-1"></div>
      <div className="absolute h-3 w-5 -bottom-3 bg-black right-8 blur-sm -rotate-45"></div>
    </div>
  );
}
