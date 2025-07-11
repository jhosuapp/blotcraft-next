const cleanLocalePath = (path: string): string => {
    return path.replace(/^\/(es|en)(\/|$)/, '/');
}

export { cleanLocalePath }
  