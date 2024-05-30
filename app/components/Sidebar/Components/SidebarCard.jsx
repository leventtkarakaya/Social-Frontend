export default function SidebarCard({ title, component }) {
  return (
    <>
      <div className="border rounded">
        <h4 className="py-3 text-xl font-semibold text-center text-gray-600 border-b-2">
          {title}
        </h4>
        <div className="p-3">{component}</div>
      </div>
    </>
  );
}
