import { Request, Response } from 'express';
export const routeRegister = (route: any, app: any) => {
  route.forEach((route) => {
    app[route.method](
      `/api${route.route}`,
      ...(route.middleware || []),
      (req: Request, res: Response, next: Function) => {
        const result = new (route.controller as any)()[route.action](
          req,
          res,
          next
        );
        if (result instanceof Promise) {
          result.then((result) =>
            result !== null && result !== undefined
              ? res.send(result.data)
              : undefined
          );
        } else if (result !== null && result !== undefined) {
          console.log(result.data)
          res.json(result.data);
        }
      }
    );
  });
};
