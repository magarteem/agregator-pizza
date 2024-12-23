"use client";
import ArrowBottom from "@/icon/ArrowBottom.svg?svgr";
import Add from "@/icon/add.svg?svgr";
import AddUrl from "@/icon/add.svg?url";
import Image from "next/image";
import s from "./header.module.scss";
import { ThemeSwitcher } from "@/app/features/themeSwitcher/ThemeSwitcher";

export const Header = () => {
  return (
    <div>
      <ThemeSwitcher />
      {/*<ArrowBottom width="30" height="30" />
      <Add width="30" height="60" />*/}
      <div className={s.test}>
        <Image alt="hideMenu" src={AddUrl} />
      </div>
    </div>
  );
};
