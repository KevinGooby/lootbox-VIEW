import { GenericError } from '../errors/genericError';

export const validateUuidV4 = (
  source: Record<string, string>,
  name: string
): string => {
  const uuid = source[name];
  const uuidV4Regex =
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  if (uuid?.length === 36 && uuidV4Regex.test(uuid)) {
    return uuid;
  } else {
    throw new GenericError(
      `'${uuid}' is not a valid uuidv4, property name: ${name}`,
      {
        httpStatusCode: 400,
        publicMessage: `Invalid uuidv4`,
      }
    );
  }
};
