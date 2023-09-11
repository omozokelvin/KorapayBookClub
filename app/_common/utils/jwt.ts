const setSession = (accessToken: string | null) => {
  if (!accessToken) {
    localStorage.removeItem('accessToken');
    return;
  }

  localStorage.setItem('accessToken', accessToken);
};

export { setSession };
