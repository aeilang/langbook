"use client";

import { useReducer, useState } from "react";
import { RadioGroupDemo } from "@/components/own/radio";
import { Button } from "@/components/ui/button";
import z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowLeftFromLine, BackpackIcon } from "lucide-react";

type Action =
  | { type: "v1"; value: string }
  | { type: "v2"; value: string }
  | { type: "v3"; value: string }
  | { type: "v4"; value: string }
  | { type: "v5"; value: string }
  | { type: "v6"; value: string }
  | { type: "v7"; value: string }
  | { type: "v8"; value: string }
  | { type: "v9"; value: string };

const answer = z.object({
  v1: z.string().min(1),
  v2: z.string().min(1),
  v3: z.string().min(1),
  v4: z.string().min(1),
  v5: z.string().min(1),
  v6: z.string().min(1),
  v7: z.string().min(1),
  v8: z.string().min(1),
  v9: z.string().min(1),
});

type Answer = z.infer<typeof answer>;

function reducer(state: Answer, action: Action): Answer {
  switch (action.type) {
    case "v1":
      return { ...state, v1: action.value };
    case "v2":
      return { ...state, v2: action.value };
    case "v3":
      return { ...state, v3: action.value };
    case "v4":
      return { ...state, v4: action.value };
    case "v5":
      return { ...state, v5: action.value };
    case "v6":
      return { ...state, v6: action.value };
    case "v7":
      return { ...state, v7: action.value };
    case "v8":
      return { ...state, v8: action.value };
    case "v9":
      return { ...state, v9: action.value };
    default:
      throw new Error("unkown action type");
  }
}

const Depresss = (score: number): string => {
  if (score < 5) {
    return "心理健康";
  } else if (score < 10) {
    return "轻度抑郁";
  } else if (score < 15) {
    return "中度抑郁";
  } else if (score < 20) {
    return "重度抑郁";
  } else {
    return "严重抑郁";
  }
};

function App() {
  const [state, dispath] = useReducer(reducer, {
    v1: "",
    v2: "",
    v3: "",
    v4: "",
    v5: "",
    v6: "",
    v7: "",
    v8: "",
    v9: "",
  });
  const [score, setScore] = useState(-1);

  const handlerClick = () => {
    const { success } = answer.safeParse(state);
    if (!success) {
      return;
    }

    const sum = Object.values(state).reduce((acc, cur) => acc + Number(cur), 0);
    setScore(sum);
  };

  return (
    <div className="">
      <div className="container mx-auto max-w-2xl mt-56">
        <div className="flex-col items-center justify-center w-full">
          <header className="flex items-center space-x-24 pl-10">
            <Button variant={"outline"}>
              <Link href={"/"}>
                <ArrowLeftFromLine />
              </Link>
            </Button>
            <h1 className="text-xl font-bold">PHQ-9 心理健康/抑郁症自测</h1>
          </header>
          <div className="w-full text-center my-2">
            <p className="text-sm">
              在<span className="text-red-600">过去的两周里</span>
              ，大概有多少天符合下列描述的状况呢?
            </p>
          </div>

          <div className="mx-auto flex flex-col">
            <RadioGroupDemo
              title="1.做事情提不起劲，不开心:"
              onValueChange={(value: string) =>
                dispath({ type: "v1", value: value })
              }
            />
            <RadioGroupDemo
              title="2.感到压抑，抑郁，看不到希望："
              onValueChange={(value: string) =>
                dispath({ type: "v2", value: value })
              }
            />
            <RadioGroupDemo
              title="3.入睡困难，睡眠很浅，或睡觉太多:"
              onValueChange={(value: string) =>
                dispath({ type: "v3", value: value })
              }
            />
            <RadioGroupDemo
              title="4.感到疲劳，没有力气:"
              onValueChange={(value: string) =>
                dispath({ type: "v4", value: value })
              }
            />
            <RadioGroupDemo
              title="5.没有食欲，或者暴饮暴食:"
              onValueChange={(value: string) =>
                dispath({ type: "v5", value: value })
              }
            />
            <RadioGroupDemo
              title="6.觉得自己不好，没有用，或者对自己很失望或者感到让家里人失望:"
              onValueChange={(value: string) =>
                dispath({ type: "v6", value: value })
              }
            />
            <RadioGroupDemo
              title="7.无法集中注意力，比如看书或电视:"
              onValueChange={(value: string) =>
                dispath({ type: "v7", value: value })
              }
            />
            <RadioGroupDemo
              title="8.	别人可以明显感觉到你走路或者讲话变慢 ，或者坐立不安，不断的动来动去:"
              onValueChange={(value: string) =>
                dispath({ type: "v8", value: value })
              }
            />
            <RadioGroupDemo
              title="9.觉得生不如死，有自我伤害的想法:"
              onValueChange={(value: string) =>
                dispath({ type: "v9", value: value })
              }
            />
          </div>

          <div className="flex justify-around mt-4">
            <Dialog>
              <DialogTrigger onClick={handlerClick}>
                <Button variant={"default"}>开始评测</Button>
              </DialogTrigger>
              <DialogContent>
                {score !== -1 && (
                  <DialogHeader>
                    <DialogTitle>
                      你的测试分数为
                      <span className="text-red-500">{score}</span>,结果为
                      <span className="text-red-500 ">{Depresss(score)}</span>
                    </DialogTitle>
                    <DialogDescription>
                      {score >= 5 && (
                        <div className="font-semibold">
                          <p>
                            别担心，我们只是生病了，就像感冒了一样，这不是我们的错。
                            科学用药，向心理医生求助，抑郁症可以被治愈。
                          </p>
                        </div>
                      )}
                      <div className="border-t-2 mt-2">
                        <p className="pb-2">国际心理健康标准：</p>
                        <ul className="pl-2">
                          <li>5-9分为轻度抑郁</li>
                          <li>10-14分为中度抑郁</li>
                          <li>15-19分为重度抑郁</li>
                          <li>大于20分为严重抑郁</li>
                        </ul>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                )}
                {score === -1 && (
                  <DialogHeader>
                    <DialogTitle>请填完所有问题</DialogTitle>
                  </DialogHeader>
                )}
              </DialogContent>
            </Dialog>

            <Button
              variant={"destructive"}
              onClick={() => {
                window.location.reload();
              }}
            >
              重置
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
