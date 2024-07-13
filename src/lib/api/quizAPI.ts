export type QuizCreateModel = {
  quizName: string;
  folderId: string;
  userId: string;
};

export type QuizModel = QuizCreateModel & {
  quizId: string;
};

export type QuizQueryModel = {
  quizId: string;
  folderId: string;
  userId: string;
};
