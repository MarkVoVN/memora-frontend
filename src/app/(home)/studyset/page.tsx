"use client";

import { Typography } from "@/components/ui/typography";
import React, { useEffect, useState } from "react";
import {
  StudySetCreateShowcaseCard,
  StudySetShowcaseCard,
} from "./components/StudySetShowcaseCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudySetList, StudySetModel } from "@/lib/api/studysetAPI";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { useRouter } from "next/navigation";

const mockItemList: StudySetModel[] = [
  {
    studySetId: "1",
    studySetName: "Basic Japanese Vocabulary",
    folderId: "folder1",
    userId: "user1",
  },
  {
    studySetId: "2",
    studySetName: "Kanji Characters N5",
    folderId: "folder1",
    userId: "user2",
  },
  {
    studySetId: "3",
    studySetName: "Japanese Phrases for Travel",
    folderId: "folder2",
    userId: "user3",
  },
  {
    studySetId: "4",
    studySetName: "Hiragana & Katakana",
    folderId: "folder3",
    userId: "user4",
  },
  {
    studySetId: "5",
    studySetName: "JLPT N4 Grammar",
    folderId: "folder4",
    userId: "user1",
  },
  {
    studySetId: "6",
    studySetName: "Everyday Conversations",
    folderId: "folder2",
    userId: "user2",
  },
  {
    studySetId: "7",
    studySetName: "Japanese Food Vocabulary",
    folderId: "folder5",
    userId: "user3",
  },
  {
    studySetId: "8",
    studySetName: "Japanese Idioms & Proverbs",
    folderId: "folder5",
    userId: "user4",
  },
  {
    studySetId: "9",
    studySetName: "Business Japanese",
    folderId: "folder6",
    userId: "user1",
  },
  {
    studySetId: "10",
    studySetName: "Anime & Manga Terms",
    folderId: "folder6",
    userId: "user2",
  },
];

function MyStudySetPage() {
  const [itemList, setItemList] = useState<StudySetModel[]>(mockItemList);

  const router = useRouter();

  const queryClient = useQueryClient();

  // const {
  //   data: {data, pagination},
  //   isLoading,
  //   error,
  //   isError,
  //   isSuccess,
  // } = useQuery({
  //   queryKey: ["studysets"],
  //   queryFn: getStudySetList,
  // });

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     setItemList(data);
  //   }
  // }, [isSuccess, data]);

  // useErrorNotification({
  //   isError: isError,
  //   title: error?.message,
  // });

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Typography hStyle={"h2"}>Continue your study</Typography>
        <div className="flex flex-nowrap gap-8">
          <StudySetCreateShowcaseCard
            handleClick={() => router.push("/studyset/create")}
          />
          {itemList.slice(0, 3).map((item) => (
            <StudySetShowcaseCard key={item.studySetId} studyset={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyStudySetPage;
