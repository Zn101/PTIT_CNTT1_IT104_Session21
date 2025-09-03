export default function Bai5() {
  return (
    <div className="relative w-[236px] h-[18yoi6px] bg-[#d7f2fe] border-2 border-[#ccebf9] rounded-[8px] text-[#0369a1] p-4">
      <div className="relative w-[200px] h-[150px] bg-[#b7e8fd] border-2 border-[#a7ddf4] text-[#0369a1] p-4">
        <p><b>Relative parent</b></p>
        <div className="absolute bottom-0 left-0 bg-[#0ea5e9] text-white px-4 py-2 rounded-md">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  )
}
