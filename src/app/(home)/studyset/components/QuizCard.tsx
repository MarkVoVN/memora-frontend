import { Typography } from "@/components/ui/typography";
import { QuizModel } from "@/lib/api/quizAPI";
import { StudySetModel } from "@/lib/api/studysetAPI";
import { ArrowUpRight, Play, User } from "lucide-react";

export function QuizCard({
  key,
  quiz: { quizName },
}: {
  key: string;
  quiz: QuizModel;
}) {
  return (
    <div
      className="flex flex-col justify-between p-4 min-w-[230px] rounded-lg hover:cursor-pointer bg-secondary-900 text-shade-1-100% hover:bg-secondary"
      key={key}
    >
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex flex-row gap-2 items-center">
          <Play className="w-3 h-3"></Play>
          <Typography hStyle={"span"}>QUIZ KEYWORD</Typography>
        </div>
        <div className="flex flex-row gap-2 items-center w-full justify-between">
          <Typography hStyle={"p"}>{quizName}</Typography>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <div className="rounded-full bg-neutral-5 p-1">
          <User className="w-4 h-4" />
        </div>
        <Typography hStyle={"span"}>USER NAME</Typography>
      </div>
    </div>
  );
}
