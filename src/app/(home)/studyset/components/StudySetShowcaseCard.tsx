import { ProgressBar } from "@/components/ProgressBar";
import { Typography } from "@/components/ui/typography";
import { StudySetModel } from "@/lib/api/studysetAPI";
import { cn } from "@/lib/utils/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export function StudySetShowcaseCard({
  key,
  studyset: { studySetName, studySetId },
  href,
}: {
  href: string;
  key: string;
  studyset: StudySetModel;
}) {
  return (
    <Link href={href}>
      <div
        className="relative w-fit h-fit flex flex-col gap-2 items-center hover:cursor-pointer"
        key={key}
      >
        <Typography
          hStyle={"h5"}
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-shade-1-100%"
        >
          {studySetName}
        </Typography>
        <CardBackground />
        <div className="w-4/5">
          <ProgressBar defaultValue={[50]} max={100} step={1} disabled />
        </div>
      </div>
    </Link>
  );
}

export function StudySetCreateShowcaseCard({
  href,
  className = "fill-neutral-5 hover:fill-primary",
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link href={href}>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-center hover:cursor-pointer">
        <Plus className="w-16 h-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-shade-1-100% fill-shade-1-100% pointer-events-none" />
        <svg
          width="211"
          height="231"
          viewBox="0 0 211 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect
            x="37.8633"
            y="1.15967"
            width="174.222"
            height="199.965"
            rx="12"
            transform="rotate(10.5 37.8633 1.15967)"
            fill-opacity="0.4"
          />
          <rect
            y="34.7344"
            width="174.222"
            height="199.965"
            rx="12"
            transform="rotate(-11.5 0 34.7344)"
          />
        </svg>
      </div>
    </Link>
  );
}

function CardBackground({
  className = "fill-primary",
}: {
  className?: string;
}) {
  return (
    <svg
      width="211"
      height="231"
      viewBox="0 0 211 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="37.8633"
        y="1.15967"
        width="174.222"
        height="199.965"
        rx="12"
        transform="rotate(10.5 37.8633 1.15967)"
        fill-opacity="0.4"
      />
      <rect
        y="34.7344"
        width="174.222"
        height="199.965"
        rx="12"
        transform="rotate(-11.5 0 34.7344)"
      />
    </svg>
  );
}
