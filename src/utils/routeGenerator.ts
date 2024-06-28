import { TPahts } from "../routes/paths";

type TRoutes = {
    path: string,
    element: JSX.Element,
}
export const routeGenerator = (items: TPahts[]) => {
    return items.reduce((previousValue: TRoutes[], item: TPahts) => {
        previousValue.push({
            path: item.path,
            element: item.element,
        });
        return previousValue
    }, [])
}