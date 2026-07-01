import { useRef, useState, useEffect } from "react";

export default function SketchBoard() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [drawing, setDrawing] = useState(false);
  const [history, setHistory] = useState([]);

  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#f9a8d4");
  const [brushSize, setBrushSize] = useState(4);
  const [grid, setGrid] = useState(true);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctxRef.current = ctx;
  }, []);

  const saveState = () => {
    const canvas = canvasRef.current;
    setHistory((prev) => [...prev, canvas.toDataURL()]);
  };

  const getPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    const ctx = ctxRef.current;
    const { x, y } = getPosition(e);

    if (tool === "star") {
      drawStar(x, y);
      saveState();
      return;
    }

    if (tool === "heart") {
      drawHeart(x, y);
      saveState();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);

    ctx.lineWidth = brushSize;

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color;
    }

    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;

    const ctx = ctxRef.current;
    const { x, y } = getPosition(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!drawing) return;

    setDrawing(false);
    saveState();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;

    ctxRef.current.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    setHistory([]);
  };

  const undo = () => {
    if (history.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    const newHistory = [...history];
    newHistory.pop();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (newHistory.length > 0) {
      const img = new Image();

      img.src = newHistory[newHistory.length - 1];

      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }

    setHistory(newHistory);
  };

  const saveImage = () => {
    const link = document.createElement("a");
    link.download = "gg-sketch.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const drawStar = (x, y) => {
    const ctx = ctxRef.current;

    ctx.fillStyle = color;
    ctx.font = "40px serif";
    ctx.fillText("⭐", x, y);
  };

  const drawHeart = (x, y) => {
    const ctx = ctxRef.current;

    ctx.fillStyle = color;
    ctx.font = "40px serif";
    ctx.fillText("❤️", x, y);
  };

  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        x: 100,
        y: 100,
        text: "new note",
      },
    ]);
  };

  return (
  <div className="w-full">

    {/* Toolbar */}
    <div className="mb-6 overflow-x-auto">
      <div className="flex min-w-max gap-3 pb-2">

        <button
          onClick={() => setTool("pencil")}
          className={`rounded-xl px-4 py-3 border transition ${
            tool === "pencil"
              ? "bg-pink-300/20 border-pink-300 text-white"
              : "bg-white/5 border-pink-300/20 hover:bg-white/10"
          }`}
        >
          ✏ Pencil
        </button>

        <button
          onClick={() => setTool("eraser")}
          className={`rounded-xl px-4 py-3 border transition ${
            tool === "eraser"
              ? "bg-pink-300/20 border-pink-300 text-white"
              : "bg-white/5 border-pink-300/20 hover:bg-white/10"
          }`}
        >
          🧽 Eraser
        </button>

        <button
          onClick={() => setTool("star")}
          className={`rounded-xl px-4 py-3 border transition ${
            tool === "star"
              ? "bg-pink-300/20 border-pink-300 text-white"
              : "bg-white/5 border-pink-300/20 hover:bg-white/10"
          }`}
        >
          ⭐ Star
        </button>

        <button
          onClick={() => setTool("heart")}
          className={`rounded-xl px-4 py-3 border transition ${
            tool === "heart"
              ? "bg-pink-300/20 border-pink-300 text-white"
              : "bg-white/5 border-pink-300/20 hover:bg-white/10"
          }`}
        >
          ❤️ Heart
        </button>

        <button
          onClick={undo}
          className="rounded-xl border border-pink-300/20 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          ↩ Undo
        </button>

        <button
          onClick={clearCanvas}
          className="rounded-xl border border-pink-300/20 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          🧹 Clear
        </button>

        <button
          onClick={saveImage}
          className="rounded-xl border border-pink-300/20 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          💾 Save
        </button>

        <button
          onClick={addNote}
          className="rounded-xl border border-pink-300/20 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          📝 Note
        </button>

        <button
          onClick={() => setGrid(!grid)}
          className="rounded-xl border border-pink-300/20 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          📐 Grid
        </button>

      </div>
    </div>

    {/* Colors */}
    <div className="mb-6 overflow-x-auto">
      <div className="flex min-w-max gap-3">
        {[
          "#f9a8d4",
          "#c084fc",
          "#ffffff",
          "#60a5fa",
          "#fde047",
        ].map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="h-10 w-10 rounded-full border-2 border-white/20"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>

    {/* Brush Size */}
    <div className="mb-6 overflow-x-auto">
      <div className="flex min-w-max gap-3">
        {[2, 5, 10, 20].map((size) => (
          <button
            key={size}
            onClick={() => setBrushSize(size)}
            className={`rounded-xl px-4 py-2 transition ${
              brushSize === size
                ? "bg-pink-300/20 border border-pink-300"
                : "bg-white/10"
            }`}
          >
            {size}px
          </button>
        ))}
      </div>
    </div>

    {/* Canvas */}
    <div
      className={`
        relative
        h-[700px]
        rounded-3xl
        overflow-hidden
        border border-pink-300/20
        bg-[#18131F]
        ${
          grid
            ? "bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:25px_25px]"
            : ""
        }
      `}
    >
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="absolute inset-0 h-full w-full"
      />

      {notes.map((note) => (
        <textarea
          key={note.id}
          defaultValue={note.text}
          className="
            absolute
            bg-yellow-200
            text-black
            p-3
            rounded-lg
            resize-none
            w-40
            h-32
            shadow-xl
          "
          style={{
            left: note.x,
            top: note.y,
          }}
        />
      ))}

      <div className="absolute bottom-4 right-4 text-sm text-gray-500">
        Draw, doodle, leave notes — refresh to reset.
      </div>
    </div>

  </div>
);
}