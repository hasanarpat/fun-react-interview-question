"use client";
import { useState } from "react";

type TPoint = {
  x: number;
  y: number;
};

export default function Home() {

  const [points,setPoints] = useState<TPoint[]>([])
  const [poppeds,setPoppeds] = useState<TPoint[]>([])

  function handleCircle(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e);
    const { pageX, pageY } = e;
    setPoints([...points,{
      x:pageX,
      y:pageY
    }])

  }

  function handleUndo(){
    const newPoints = [...points]
    const lastPoint = newPoints.pop()
    if(lastPoint!=undefined)
    setPoppeds([...poppeds,lastPoint])
    setPoints(newPoints)
  }

  function handleRedo(){
    const newPoppeds = [...poppeds]
    const redoPoint = newPoppeds.pop()
    if(redoPoint!=undefined)
    setPoints([...points,redoPoint])
    setPoppeds(newPoppeds)
  }

  return (
    <main className="flex min-h-screen flex-col gap-0">
      <div className="flex gap-4 bg-red-500">
        <button onClick={handleUndo} className="p-4 text-xl bg-slate-300 text-black">Undo</button>
        <button onClick={handleRedo} className="p-4 text-xl bg-slate-300 text-black">Redo</button>
      </div>
      <div className="bg-rose-400 w-full h-[95vh] relative" onClick={handleCircle}>
        {
          points.map((point,i)=>(
            <div key={i} className="w-4 h-4 rounded-full bg-zinc-200 absolute" style={{top:point.y,left:point.x}}/>
          ))
        }
      </div>
    </main>
  );
}
