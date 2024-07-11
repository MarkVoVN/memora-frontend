import { request } from "../utils/axios.config";

export type StudySetCreateModel = {
  studySetName: string;
  folderId: string;
  userId: string;
};

export type StudySetModel = StudySetCreateModel & {
  studySetId: string;
};

export type StudySetQueryModel = {
  studySetId: string;
  folderId: string;
  userId: string;
};

export type CardCreateModel = {
  studySetId: string;
  cardName: string;
  cardAnswer: string;
};

export type CardModel = CardCreateModel & {
  id: string;
};

const BASE_URL = "/studyset";

export const getStudySetList = () => {
  return request({
    method: "GET",
    url: `${BASE_URL}`,
  });
};

export const queryStudySet = (query: StudySetQueryModel) => {
  return request({
    method: "GET",
    url: `${BASE_URL}`,
    params: query,
  });
};

export const createStudySet = (data: StudySetCreateModel) => {
  return request({
    method: "POST",
    url: `${BASE_URL}`,
    data,
  });
};

export const getStudySet = (studySetId: string) => {
  return request({
    method: "GET",
    url: `${BASE_URL}/${studySetId}`,
  });
};

export const updateStudySet = (
  studySetId: string,
  data: StudySetCreateModel
) => {
  return request({
    method: "PUT",
    url: `${BASE_URL}/${studySetId}`,
    data,
  });
};

export const deleteStudySet = (studySetId: string) => {
  return request({
    method: "DELETE",
    url: `${BASE_URL}/${studySetId}`,
  });
};
