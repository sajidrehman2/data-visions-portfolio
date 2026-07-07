const startDownload = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadFromUrl = (url: string, filename: string) => {
  return new Promise<void>((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.responseType = 'blob';
    request.onload = () => {
      if (request.status < 200 || request.status >= 300) {
        reject(new Error(`Failed to load ${url}: ${request.status}`));
        return;
      }

      const objectUrl = URL.createObjectURL(request.response);
      startDownload(objectUrl, filename);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
      resolve();
    };
    request.onerror = () => reject(new Error(`Failed to load ${url}`));
    request.send();
  });
};

export const handleResumeDownload = async () => {
  try {
    await downloadFromUrl('/Sajid_Rehman_Resume.pdf', 'Sajid_Rehman_Resume.pdf');
    return { success: true, message: 'Your resume PDF download has started.' };
  } catch (error) {
    console.error('Resume download failed:', error);
    return { success: false, message: 'Unable to download resume. Please try again later.' };
  }
};

export const handleCvDownload = async () => {
  try {
    await downloadFromUrl('/Sajid_Rehman_CV.pdf', 'Sajid_Rehman_CV.pdf');
    return { success: true, message: 'Your CV PDF download has started.' };
  } catch (error) {
    console.error('CV download failed:', error);
    return { success: false, message: 'Unable to download CV. Please try again later.' };
  }
};
