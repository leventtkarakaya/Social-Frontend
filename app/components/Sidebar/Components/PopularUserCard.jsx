import React from "react";

export default function PopularUserCard() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Levent Karakaya</div>
                    <div className="text-sm opacity-50">Turkey</div>
                  </div>
                </div>
              </td>
              <td>
                <p className="leading-6 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur neque id aspernatur nemo debitis velit error sunt
                  laudantium non repellat, esse mollitia tempore aliquid eum
                  possimus pariatur similique a rerum. itaque.
                </p>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Levent Karakaya</div>
                    <div className="text-sm opacity-50">Turkey</div>
                  </div>
                </div>
              </td>
              <td>
                <p className="leading-6 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur neque id aspernatur nemo debitis velit error sunt
                  laudantium non repellat, esse mollitia tempore aliquid eum
                  possimus pariatur similique a rerum. itaque.
                </p>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Levent Karakaya</div>
                    <div className="text-sm opacity-50">Turkey</div>
                  </div>
                </div>
              </td>
              <td>
                <p className="leading-6 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur neque id aspernatur nemo debitis velit error sunt
                  laudantium non repellat, esse mollitia tempore aliquid eum
                  possimus pariatur similique a rerum. itaque.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
