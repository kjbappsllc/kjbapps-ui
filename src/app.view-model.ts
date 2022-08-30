
export interface LinkConfig<T> {
  value: T;
  link: string;
  newTab: boolean;
}

export const createLinkConfig = <T>(value: T, link: string, newTab: boolean = false): LinkConfig<T> => ({
  value,
  link,
  newTab
})

export const newTabProps = {
  target: "_blank",
  rel: "noopener noreferrer"
}