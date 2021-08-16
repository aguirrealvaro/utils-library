export type ToastOptions = {
  permanent?: boolean;
};

export type ToastType = {
  id: number;
  content: string;
} & ToastOptions;
