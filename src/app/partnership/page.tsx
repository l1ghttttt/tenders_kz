"use client";
import React from "react";
import { LuFolderCog } from "react-icons/lu";
import { IoChatboxEllipsesSharp, IoFolderOutline } from "react-icons/io5";
import { RiFolderChart2Line } from "react-icons/ri";
import { MdOutlineSendTimeExtension, MdScheduleSend } from "react-icons/md";
import { BsFillFileEarmarkPlusFill, BsPinAngleFill } from "react-icons/bs";
import { TbEyeCheck, TbSquareRoundedPercentage } from "react-icons/tb";
import { BiHide } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import {
  FaAccessibleIcon,
  FaRegFileLines,
  FaRegHandshake,
  FaSearchengin,
  FaStar,
} from "react-icons/fa6";
import { GoGitPullRequest } from "react-icons/go";
import { FaCommentAlt, FaSortAmountDown } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GeomapTenderCard from "@/app/_components/home/GeomapTenderCard";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function Home() {
  const [sortMax, setSortMax] = React.useState(true);
  return (
    <main className="mt-[100px] flex w-full gap-[52px] px-[60px]">
      <div className="flex h-full w-full max-w-[365px] flex-col gap-[15px] rounded-[20px] bg-[rgba(217,217,217,0.41)] p-[20px_30px] backdrop-blur-[35px]">
        <h2 className="text-center text-[24px] font-bold leading-[167%] text-black">
          тендеры и закупки
        </h2>
        <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        <h3 className="text-[16px] font-normal text-[#757575]">ПРИКРЕПЛЕНЫЕ</h3>
        <div className="flex gap-[15px]">
          <FaAccessibleIcon />
          <a href="#" className="text-xs text-black">
            Мои тендеры
          </a>
        </div>
        <div className="flex gap-[15px]">
          <FaRegHandshake />
          <a href="#" className="text-xs text-black">
            Партнерство
          </a>
        </div>
        <h3 className="text-[16px] font-normal text-[#757575]">ИНСТРУМЕНТЫ</h3>
        <div className="flex gap-[15px]">
          <FaStar />
          <a href="#" className="text-xs text-black">
            Избранные
          </a>
        </div>
        <div className="flex gap-[15px]">
          <TbEyeCheck />

          <a href="#" className="text-xs text-black">
            На контроле
          </a>
        </div>
        <div className="flex gap-[15px]">
          <BsPinAngleFill />
          <a href="#" className="text-xs text-black">
            Мои заметки
          </a>
        </div>
        <div className="flex gap-[15px]">
          <FaSearchengin />
          <a href="#" className="text-xs text-black">
            Шаблоны поиска
          </a>
        </div>
        <div className="flex gap-[15px]">
          <BiHide />
          <a href="#" className="text-xs text-black">
            Скрытые лоты
          </a>
        </div>
        <div className="flex gap-[15px]">
          <FaCommentAlt />
          <a href="#" className="text-xs text-black">
            Комментарии
          </a>
        </div>
        <h3 className="text-[16px] font-normal text-[#757575]">ПАПКИ</h3>
        <div className="flex gap-[15px]">
          <LuFolderCog />
          <a href="#" className="text-xs text-black">
            Управление папками
          </a>
        </div>
        <div className="flex gap-[15px]">
          <IoFolderOutline />

          <a href="#" className="text-xs text-black">
            Проработать
          </a>
        </div>
        <div className="flex gap-[15px]">
          <RiFolderChart2Line />

          <a href="#" className="text-xs text-black">
            Архивные папки
          </a>
        </div>
        <h3 className="text-[16px] font-normal text-[#757575]">МЕНЮ</h3>
        <div className="flex gap-[15px]">
          <MdOutlineSendTimeExtension />

          <a href="#" className="text-xs text-black">
            Параметры рассылки
          </a>
        </div>
        <div className="flex gap-[15px]">
          <MdScheduleSend />

          <a href="#" className="text-xs text-black">
            История рассылок
          </a>
        </div>
        <div className="flex gap-[15px]">
          <FaRegFileLines />

          <a href="#" className="text-xs text-black">
            Мои файлы
          </a>
        </div>
        <div className="flex gap-[15px]">
          <GoGitPullRequest />
          <a href="#" className="text-xs text-black">
            Мои заявки
          </a>
        </div>
        <div className="flex gap-[15px]">
          <BsFillFileEarmarkPlusFill />

          <a href="#" className="text-xs text-black">
            Объявить тендер
          </a>
        </div>
        <div className="flex gap-[15px]">
          <IoChatboxEllipsesSharp />

          <a href="#" className="text-xs text-black">
            Мои обсуждения
          </a>
        </div>
        <div className="flex gap-[15px]">
          <TbSquareRoundedPercentage />

          <a href="#" className="text-xs text-black">
            Мои рефералы
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">Партнерство</h1>
        <h2 className="w-full text-[18px] font-semibold text-black">
          Вы можете оставить предложение о партнерстве в любом лоте. Для этoго
          откройте нужный лот, перейдите во вкладку партнерство и оставьте свое
          предложение.
        </h2>
        <div className="flex w-full items-center justify-between">
          <p>В каталоге 69 лотов. Показаны 1-20</p>
          <div className="flex items-center gap-[15px]">
            <p>Сортировать по:</p>
            <Select defaultValue="sum">
              <SelectTrigger className="h-[40px] w-[140px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="sum">Сумма</SelectItem>
                  <SelectItem value="up">Опубликован</SelectItem>
                  <SelectItem value="end">Завершение</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FaSortAmountDown
              style={{ transform: `rotate(${sortMax ? 0 : 180}deg)` }}
              onClick={() => setSortMax(!sortMax)}
            />
          </div>
        </div>
        <ul className="flex w-full flex-wrap justify-between gap-[20px]">
          {Array.from({ length: 101 }).map((_, i) => (
            <GeomapTenderCard key={i} className="w-full max-w-[450px]" />
          ))}
        </ul>
      </div>
    </main>
  );
}
