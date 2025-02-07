"use client";

import avatar from "@/images/ava.jpg";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import {
  FaAccessibleIcon,
  FaHandshakeSimple,
  FaRegCircle,
  FaRegFileLines,
  FaRegHandshake,
  FaSearchengin,
  FaStar,
} from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import { GoGitPullRequest } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";
import { LuFolderCog } from "react-icons/lu";
import { IoChatboxEllipsesSharp, IoFolderOutline } from "react-icons/io5";
import {
  RiArrowDownSFill,
  RiArrowDropDownLine,
  RiFolderChart2Line,
} from "react-icons/ri";
import {
  MdOutlineManageSearch,
  MdOutlineSendTimeExtension,
  MdScheduleSend,
} from "react-icons/md";
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
import { Bar, BarChart, Label, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "../_components/auth/LoginForm";
import RegisterForm from "../_components/auth/RegisterForm";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
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
        <h1 className="mx-auto text-[34px] font-bold text-black">
          Личный кабинет
        </h1>
        <div className="mt-2 flex w-full items-center justify-center px-2">
          <Tabs defaultValue="login" className="w-full" defaultValue={"info"}>
            <TabsList
              className="w-full text-base font-bold"
              defaultValue={"info"}
            >
              <TabsTrigger value="info" className="w-full text-base font-bold">
                Профиль
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className="w-full text-base font-bold"
              >
                Сотрудники
              </TabsTrigger>
              <TabsTrigger
                value="partnership"
                className="w-full text-base font-bold"
              >
                Безопасность
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="info"
              className="mt-[20px] flex flex-col gap-[20px]"
              defaultChecked
            >
              <h2 className="text-sm font-medium">
                Просим вводить только достоверные данные своей компании,
                корректные номера телефонов по которым наша команда будет
                выходить с Вами на связь. Спасибо!
              </h2>
              <div className="mt-[50px] flex items-center justify-evenly gap-[15px]">
                <div className="flex flex-col items-center gap-[15px]">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="h-[150px] w-[150px] rounded-full"
                  />
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file" />
                  </div>
                </div>
                <div className="flex max-w-[500px] flex-col gap-[15px]">
                  <div className="flex justify-between gap-[10px]">
                    <p>Контактное лицо:</p>
                    <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
                      <input
                        type="text"
                        placeholder="Поиск по названию"
                        className="cursor-text font-normal text-[#000000] focus:border-none focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-[10px]">
                    <p>Мобильный телефон:</p>
                    <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
                      <input
                        type="text"
                        placeholder="Поиск по названию"
                        className="cursor-textfont-normal text-[#000000] focus:border-none focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-[10px]">
                    <p>Email:</p>
                    <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
                      <input
                        type="text"
                        placeholder="Поиск по названию"
                        className="cursor-text font-normal text-[#000000] focus:border-none focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="m-auto mt-[15px] flex h-[60px] w-full max-w-[367px] items-center justify-center rounded-lg bg-main p-[18px_40px] text-white">
                Сохранить изменения
              </button>
              <div className="mt-[15px] flex flex-col gap-[15px]">
                <h2 className="text-[34px] font-bold text-black">
                  Мои компании (1)
                </h2>
                <div className="flex max-w-[300px] flex-col gap-[30px] rounded-[8px] bg-[#f9f9f9] p-[20px]">
                  <h3 className="text-[20px] font-bold text-black">
                    ИП The developer
                  </h3>
                  <div className="flex flex-col gap-[10px] text-sm font-medium">
                    <p>Роль: Владелец</p>
                    <p>Телефон: +7 (999) 999-99-99</p>
                    <p>Статус: Email не подтвержден</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="comments"
              className="mt-[20px] flex flex-col gap-[20px]"
            >
              <div>
                <div className="flex gap-[10px]">
                  <FaRegHandshake />
                  <h3>Оставить заявку на партнерство</h3>
                </div>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>
            <TabsContent value="partnership">
              <div className="flex w-full items-center justify-center overflow-hidden rounded-[20px] shadow-2xl">
                <form className="z-20 flex w-full flex-col rounded-[20px] border border-[#e8e8e8] px-5 py-3 font-sans text-black backdrop-blur-3xl">
                  <div className="mb-5">
                    <h1 className="text-center text-2xl">Смените пароль</h1>
                  </div>

                  <div className="mb-[20px] flex flex-col gap-[10px]">
                    <input
                      type="text"
                      className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                      id="passwordOld"
                      placeholder="Введите страый пароль"
                      required
                    />
                    <input
                      type="text"
                      className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                      id="passwordNew"
                      placeholder="Введите новый пароль"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className={`mb-7 w-full max-w-[150px] rounded-md bg-black py-1 text-white`}
                  >
                    Сменить
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
