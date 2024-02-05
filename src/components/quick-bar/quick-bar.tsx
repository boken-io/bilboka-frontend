'use client';
export default function QuickBar() {
  let open = false;
  return (
    <>
      <div
        className={`hover:brightness-75 text-white text-2xl font-bold py-2 px-4 rounded-full inline-flex flex-col fixed bottom-4 right-4 cursor-pointer`}
        onClick={() => {
          open = !open;
          console.log(open);
        }}
        style={{
          backgroundImage:
            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
        }}
      >
        {open && <div>hei</div>}
        <span style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </div>
    </>
  );
}
