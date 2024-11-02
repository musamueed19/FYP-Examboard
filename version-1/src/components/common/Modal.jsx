export default function Modal({ children, isOpen}) {
  // const [modal, setModal] = useState(false);

  return (
    isOpen && (
      <div className="fixed left-0 top-0 bg-black/50 w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-center bg-white w-full sm:w-2/3 lg:w-2/4 rounded-lg shadow-md">
          {children}
        </div>
      </div>
    )
  );
}
