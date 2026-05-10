type ClassValue = string | number | false | null | undefined

export const cn = (...classes: ClassValue[]) =>
  classes.filter(Boolean).join(' ')
