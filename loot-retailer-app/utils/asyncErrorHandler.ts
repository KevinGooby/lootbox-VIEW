import * as R from 'ramda';

type Messages = {
  errorMessage: string;
  toastErrorMessage?: string;
  toastSuccessMessage?: string;
};

type AsyncErrorHandler<Type> = {
  asyncFunction: () => Promise<Type | undefined>;
  onError?: (error: Error) => void;
  onSuccess?: (result: Type) => void;
  messages: Messages;
  path?: string[];
};

export const asyncErrorHandler = async <Type>({
  asyncFunction,
  messages,
  onError,
  onSuccess,
  path,
}: AsyncErrorHandler<Type>): Promise<Type> => {
  let response;
  try {
    response = await asyncFunction();

    console.log('response: ', response);
    //fix this to not check for response
    if (!response || (response as any)?.status !== 200) {
      throw new Error('Fetch Failed.');
    }

    if (messages?.toastSuccessMessage) {
      console.log('success: ', messages.toastSuccessMessage);
    }

    onSuccess?.(response);
    return response;
  } catch (error: Error | any) {
    if (onError) {
      onError?.(error);
      return { data: (response as any)?.data, ...error };
    }

    if (path) {
      const message = R.path(path, error);

      console.log('error in path: ', message);
      return { data: (response as any).response?.data, ...error };
    }

    const errorMessage = messages.toastErrorMessage || messages.errorMessage;

    console.log('error: ', errorMessage);

    return { data: undefined, ...error };
  }
};
