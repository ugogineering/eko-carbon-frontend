/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-closing-tag-location */
// import Link from "next/link";
import {
  AlignCenterOutlined,
  DownOutlined,
  DropboxOutlined,
  PercentageOutlined,
  SaveOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { NextPage } from "next";
// import { Avatar, Badge } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { listerLinks } from "../../lib/common/links";
import { ListerLink } from "../../models/link";

// import imageLoader from "../../lib/helperFunctions/loader";
// import headerLinks from "../../lib/common/links";

// value, key, children, type='link'|'popup', icon
const ListerMenu: NextPage<any> = () => {
  const [listerMenu, setListerMenu] = useState<ListerLink[]>(listerLinks);
  const [dropdown, toggleDropdown] = useState<boolean>(false);

  useEffect(() => {
    setListerMenu(listerLinks);
  }, []);

  return (
    <nav className="text-md fixed flex flex-col gap-y-6 w-[220px] bg-secondary-high h-[100vh] top-0 left-0 pt-[15vh] px-[10px]">
      {listerMenu &&
        listerMenu.length &&
        listerMenu.map((menu) => (
          <>
            {menu.type === "link" && (
              <Link href={menu.link}>
                <a
                  className={`flex items-center ${
                    menu.active && "bg-secondary-low"
                  } gap-x-4 px-2 py-2 rounded`}
                >
                  {menu.icon === "AlignCenterOutlined" && (
                    <AlignCenterOutlined className="rotate-90" />
                  )}
                  {menu.icon === "SaveOutlined" && <SaveOutlined />}
                  {menu.icon === "PercentageOutlined" && <PercentageOutlined />}
                  <span>{menu.title}</span>
                </a>
              </Link>
            )}
            {menu.type === "dropdown" && (
              <div>
                <button
                  className="flex items-center gap-x-4 px-2 py-2"
                  type="button"
                  onClick={() => toggleDropdown(!dropdown)}
                >
                  {menu.icon === "DropboxOutlined" && <DropboxOutlined />}
                  <span>{menu.title}</span>
                  {dropdown && <DownOutlined className="text-[12px] ml-5" />}
                  {!dropdown && <UpOutlined className="text-[12px] ml-5" />}
                </button>
                <nav
                  className={`flex flex-col gap-y-3 pt-3 px-2 pl-10  duration-200 transition-all ${
                    dropdown ? "hidden opacity-0" : "opacity-100"
                  }`}
                >
                  {menu.children &&
                    menu.children.length &&
                    menu.children.map((childMenu) => (
                      <Link href={childMenu.link}>
                        <a>{childMenu.title}</a>
                      </Link>
                    ))}
                </nav>
              </div>
            )}
          </>
        ))}
    </nav>
  );
};

export default ListerMenu;
